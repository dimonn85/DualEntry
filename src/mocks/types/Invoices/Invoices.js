const { getInvoices } = require('../../mocksHelpers');

const Invoices = () => ({
  invoice: getInvoices(),
});

module.exports = Invoices;
