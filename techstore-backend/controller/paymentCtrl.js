const moment = require("moment/moment");
const uuid = require("uuid");
const qs = require("qs");
require("dotenv").config();

module.exports = {
  async payment(req, res, next) {
    try {
      process.env.TZ = "Asia/Ho_Chi_Minh";
      let date = new Date();
      let createDate = moment(date).format("YYYYMMDDHHmmss");
      let ipAddr =
        req.headers["x-forwarded-for"] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
      let vnp_TmnCode = process.env.vnp_TmnCode;
      let vnp_HashSecret = process.env.vnp_HashSecret;
      let vnp_Url = process.env.vnp_Url;
      let vnp_ReturnUrl = process.env.vnp_ReturnUrl;
      let { locale, amount, info } = req.body;
      console.log(req.body);
      if (!locale) {
        locale = "vn";
      }

      const _id = uuid.v4();

      let currCode = "VND";
      let vnp_Params = {};
      vnp_Params["vnp_Version"] = "2.1.0";
      vnp_Params["vnp_Command"] = "pay";
      vnp_Params["vnp_TmnCode"] = vnp_TmnCode;
      vnp_Params["vnp_Locale"] = locale;
      vnp_Params["vnp_CurrCode"] = currCode;
      vnp_Params["vnp_TxnRef"] = _id;
      vnp_Params["vnp_OrderInfo"] = info;
      vnp_Params["vnp_OrderType"] = "other";
      vnp_Params["vnp_Amount"] = amount;
      vnp_Params["vnp_ReturnUrl"] = vnp_ReturnUrl;
      vnp_Params["vnp_IpAddr"] = ipAddr;
      vnp_Params["vnp_CreateDate"] = createDate;

      vnp_Params = sortObject(vnp_Params);

      let querystring = qs;
      let signData = querystring.stringify(vnp_Params, { encode: false });
      let crypto = require("crypto");
      let hmac = crypto.createHmac("sha512", vnp_HashSecret);
      let signed = hmac.update(Buffer.from(signData, "utf-8")).digest("hex");
      vnp_Params["vnp_SecureHash"] = signed;
      vnp_Url += "?" + querystring.stringify(vnp_Params, { encode: false });

      return res.json(vnp_Url);
    } catch (e) {
      next(e);
    }
  },

  async validatePayment(req, res, next) {
    try {
      let vnp_Params = req.query;
      // const tran = new transactionPaymentModel(vnp_Params);
      // if (
      //   await transactionPaymentModel.findOne({
      //     vnp_SecureHash: vnp_Params.vnp_SecureHash,
      //   })
      // ) {
      //   throw new Error("transation is exist");
      // }

      let secureHash = vnp_Params["vnp_SecureHash"];

      delete vnp_Params["vnp_SecureHash"];
      delete vnp_Params["vnp_SecureHashType"];

      vnp_Params = sortObject(vnp_Params);

      let secretKey = process.env.vnp_HashSecret;

      let querystring = require("qs");

      let signData = querystring.stringify(vnp_Params, { encode: false });

      let crypto = require("crypto");

      let hmac = crypto.createHmac("sha512", secretKey);

      let signed = hmac.update(Buffer.from(signData, "utf-8")).digest("hex");

      if (secureHash !== signed) {
        throw new Error("payment faild");
      }

      //---------------------logic------------------------------
      const [userId, productId] = String(vnp_Params.vnp_OrderInfo).split("---");

      //---------------------logic------------------------------

      // await tran.save();
      return res.redirect("http://localhost:3000/cart/payment/success");
    } catch (e) {
      return res.redirect("http://localhost:3000/cart/payment/failed");
    }
  },
};

function sortObject(obj) {
  let sorted = {};
  let str = [];
  let key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key));
    }
  }
  str.sort();
  for (key = 0; key < str.length; key++) {
    sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
  }
  return sorted;
}
