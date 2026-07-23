const createInvoice = require('./methods/createInvoice');
const getInvoiceStatus = require('./methods/getInvoiceStatus');
const getCheckoutInfo = require('./methods/getCheckoutInfo');
const startPayment = require('./methods/startPayment');
const simulatePayment = require('./methods/simulatePayment');
const getSandboxStatus = require('./methods/getSandboxStatus');

class PayX {
  constructor(token, options = {}) {
    if (!token) {
      throw new Error("PayX: API token kiritilishi shart!");
    }
    this.token = token;
    this.baseUrl = options.baseUrl || 'https://backend.payx.uz';
  }

  async createInvoice(data) {
    return await createInvoice(this, data);
  }

  async getInvoiceStatus(uuid) {
    return await getInvoiceStatus(this, uuid);
  }

  async getCheckoutInfo(uuid) {
    return await getCheckoutInfo(this, uuid);
  }

  async startPayment(uuid, method) {
    return await startPayment(this, uuid, method);
  }

  async simulatePayment(data) {
    return await simulatePayment(this, data);
  }

  async getSandboxStatus(uuid) {
    return await getSandboxStatus(this, uuid);
  }
}

module.exports = { PayX };
module.exports.PayX = PayX;
module.exports.default = PayX;
