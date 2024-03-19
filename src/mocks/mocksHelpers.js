const getInvoices = () => {
  const total = 50;
  return (parent, { offset = 0, limit = 14, search = '', sortField = '', sortOrder = 'asc' }) => ({
  search,
  sortField,
  sortOrder,
  total: search.length > 0 ? 3 : total,
  items: new Array(search.length > 0 ? 3 : total)
    .fill(true)
    .map((_, i) => ({
          id: () => String(i + 1),
          issue_date: () => '12/28/23',
          due_date: () => '12/28/23',
          number: () => search.length > 0 ? `${i + 1} search result by - ${search}` : `${i + 1}`,
          customer: () => 'Really good vendor',
          company_name: () => 'Best company, inc',
          total: () => '23,000.00',
          currency: () => 'USD',
          exchange_rate: () => '0.912837',
    }))
    .slice(offset, offset + limit)
    .map((item) => ({ ...item, __typename: 'Invoices' }))
  })

};

module.exports = { getInvoices };
