export interface Invoice {
  id: string
  issue_date: string
  due_date: string
  number: string
  customer: string
  company_name: string
  total: string
  currency: string
  exchange_rate: string,
  selected: boolean
}

export interface InvoiceHeaderProps {
  title: string;
}


export interface InvoiceListProps {
  list: Invoice[]
  totalInvoices: number
  fetchMore: () => void
  onSearch: (value: string) => void
  loading: boolean,
  searchValue: string
  onChangeSort: (field: string, order: string) => void
  sortField: string
  sortOrder: string
  clearSearch: () => void
}

export interface InvoicesData {
  data: {
    invoice: {
      search: string
      total: number
      sortOrder: string
      sortField: string
      items: Invoice[]
    }
  }
  error: any
  fetchMore: any
  refetch: any
}

export interface IColumn {
  field: string,
  use: string,
}

export interface IRow {
  [key: string]: any
}

export interface TableHeadProps {
  columns: IColumn[]
  rows: IRow[]
}

export interface IIcon {
  className?: string
}
