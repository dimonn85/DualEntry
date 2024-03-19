const Invoices = require('./types/Invoices/Invoices.js');

function mocks() {
  return {
    ...Invoices()
  };
}

module.exports = mocks;
