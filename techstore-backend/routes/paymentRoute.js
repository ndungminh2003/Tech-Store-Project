const express = require("express");
const { payment, validatePayment } = require("../controller/paymentCtrl");
const router = express.Router();

router.post("/urlpayment", payment);
router.get("/validate", validatePayment);

const ZaloPay = require("../zalopay");

const OrderRepository = require("../repository/OrderRepository");

router.post("/createorder", async (req, res) => {
  return res.send(await ZaloPay.CreateOrder(req.body));
});

router.post("/refund", async (req, res) => {
  res.send(await ZaloPay.Refund(req.body));
});

router.get("/getrefundstatus", async (req, res) => {
  const { mrefundid } = req.query;
  res.send(await ZaloPay.GetRefundStatus(mrefundid));
});

router.get("/getbanklist", async (req, res) => {
  res.send(await ZaloPay.GetBankList());
});

router.get("/gethistory", async (req, res) => {
  let { page } = req.query;
  page = Number(page);
  page = isNaN(page) ? 1 : page;

  const orders = await OrderRepository.Paginate(page);
  res.send(orders);
});

module.exports = router;
