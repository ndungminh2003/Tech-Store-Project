const fs = require("fs");
const axios = require("axios").default;
const CryptoJS = require("crypto-js");
const moment = require("moment");

const config = require("../config.json");
const Crypto = require("./Crypto");

let uid = Date.now();

class ZaloPay {
  VerifyCallback(data, requestMac) {
    const result = {};
    const mac = CryptoJS.HmacSHA256(data, config.key2).toString();

    if (mac !== requestMac) {
      result.returncode = -1;
      result.returnmessage = "mac not equal";
    } else {
      result.returncode = 1;
      result.returnmessage = "success";
    }

    return result;
  }

  GenTransID() {
    return `${moment().format("YYMMDD")}_${config.appid}_${++uid}`;
  }

  NewOrder({ amount, description }) {
    const self = this;
    return {
      amount: amount,
      description: "description",
      appid: config.appid,
      appuser: "Demo",
      embeddata: JSON.stringify({
        forward_callback: self.publicURL + "/callback",
        description,
      }),
      item: JSON.stringify([{ name: "demo item", amount }]),
      apptime: Date.now(),
      apptransid: this.GenTransID(),
    };
  }

  async CreateOrder(params = {}) {
    const order = this.NewOrder(params);
    order.mac = Crypto.Mac.CreateOrder(order);

    const { data: result } = await axios.post(config.api.createorder, null, {
      params: order,
      header: "Content-type: application/x-www-form-urlencoded",
    });

    result.apptransid = order.apptransid;
    return result;
  }

  async GetOrderStatus(apptransid = "") {
    const params = {
      appid: config.appid,
      apptransid,
    };
    params.mac = Crypto.Mac.GetOrderStatus(params);

    const { data: result } = await axios.post(config.api.getorderstatus, null, {
      params,
    });

    return result;
  }

  async Refund({ zptransid, amount, description }) {
    const refundReq = {
      appid: config.appid,
      zptransid,
      amount,
      description,
      timestamp: Date.now(),
      mrefundid: this.GenTransID(),
    };

    refundReq.mac = Crypto.Mac.Refund(refundReq);

    const { data: result } = await axios.post(config.api.refund, null, {
      params: refundReq,
    });

    result.mrefundid = refundReq.mrefundid;
    return result;
  }

  async GetRefundStatus(mrefundid) {
    const params = {
      appid: config.appid,
      mrefundid,
      timestamp: Date.now(),
    };

    params.mac = Crypto.Mac.GetRefundStatus(params);

    const { data: result } = await axios.post(
      config.api.getrefundstatus,
      null,
      {
        params,
      }
    );

    return result;
  }

  async GetBankList() {
    const params = {
      appid: config.appid,
      reqtime: Date.now(),
    };

    params.mac = Crypto.Mac.GetBankList(params);

    const { data: result } = await axios.post(config.api.getbanklist, null, {
      params,
    });

    return result;
  }
}

module.exports = new ZaloPay();
