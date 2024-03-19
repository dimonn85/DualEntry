"use client"
import { FC, useEffect, useState } from 'react';
import { IColumn, Invoice, InvoiceListProps, IRow } from '@/interfaces';
import TableWrapper from '@/components/TableWrapper/TableWrapper';

const InvoiceList: FC<InvoiceListProps> = ({
  list,
  totalInvoices,
  fetchMore,
  loading,
  onSearch,
  searchValue,
  sortField,
  sortOrder,
  onChangeSort,
  clearSearch,
}) => {
  const [showDeleteAll, setShowDeleteAll] = useState<boolean>(false);
  const [idsToDelete, setIdsToDelete] = useState<string[]>([]);
  const [items, setItems] = useState<Invoice[]>(list);
  const columns:IColumn[] = [
    {
      field: "issue_date",
      use: "Issue Date",
    },
    {
      field: "due_date",
      use: "Due Date",
    },
    {
      field: "number",
      use: "Transaction No.",
    },
    {
      field: "customer",
      use: "Customer",
    },
    {
      field: "company_name",
      use: "Company",
    },
    {
      field: "total",
      use: "Total",
    },
    {
      field: "currency",
      use: "Currency",
    },
    {
      field: "exchange_rate",
      use: "Exchange Rate",
    },
  ];
  const rows:IRow[] = items.map((item) => ({
    id: item.id,
    issue_date: item.issue_date,
    due_date: item.due_date,
    number: item.number,
    customer: item.customer,
    company_name: item.company_name,
    total: item.total,
    currency: item.currency,
    exchange_rate: item.exchange_rate,
    selected: item.selected,
  }));

  const onCheckAllHandler = (checked: boolean) => {
    const updatedItems = items.map((item) => ({
      ...item,
      selected: checked,
    }))
    setItems(updatedItems);
  };

  const selectOneHandler = (checked: boolean, id: string) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          selected: checked,
        }
      }
      return item;
    })
    setItems(updatedItems);
  };

  useEffect(() => {
    const toDeleteItems = items.filter((item) => item.selected);
    setIdsToDelete(toDeleteItems.map((item) => item.id));
  }, [items]);

  useEffect(() => {
   setShowDeleteAll(idsToDelete.length > 0);
  }, [idsToDelete]);

  const onDeleteHandler = (id:string | undefined) => {
    if (id) {
      // console.log(`Delete ids- [${id}]`)
    } else {
      // console.log(`Delete ids- [${idsToDelete}]`)
    }
  }

  return (
    <>
      <TableWrapper
        columns={columns}
        rows={rows}
        onSearch={onSearch}
        onCheckAll={onCheckAllHandler}
        selectOne={selectOneHandler}
        showDeleteAllButton={showDeleteAll}
        onDelete={onDeleteHandler}
        totalInvoices={totalInvoices}
        fetchMore={fetchMore}
        loading={loading}
        searchValue={searchValue}
        sortField={sortField}
        sortOrder={sortOrder}
        onChangeSort={onChangeSort}
        clearSearch={clearSearch}
      />
    </>
  );
};

export default InvoiceList;