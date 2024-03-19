import React, { FC } from 'react';
import TableHeader from '@/components/TableWrapper/TableHeader';
import TableHead from '@/components/TableWrapper/TableHead';
import { IColumn, IRow } from '@/interfaces';
import TableBody from '@/components/TableWrapper/TableBody';
import TableFooter from '@/components/TableWrapper/TableFooter';
import { Table } from '@radix-ui/themes';

interface TableWrapperProps {
  columns: IColumn[]
  rows: IRow[]
  showDeleteAllButton: boolean
  onCheckAll: (checked: boolean) => void
  selectOne: (checked: boolean, id: string) => void
  onSearch: (value: string) => void
  onDelete: (id?:string | undefined) => void
  totalInvoices: number
  fetchMore: any
  loading: boolean,
  searchValue: string
  sortField: string
  sortOrder: string
  onChangeSort: (field: string, order: string) => void
  clearSearch: () => void
}

const TableWrapper:FC<TableWrapperProps> = ({
  columns,
  rows,
  onCheckAll,
  selectOne,
  onSearch,
  showDeleteAllButton,
  onDelete,
  totalInvoices,
  fetchMore,
  loading,
  onChangeSort,
  searchValue,
  clearSearch,
  sortField,
  sortOrder,
}) => {
  return (
    <div className="p-4 table-wrapper">
      <TableHeader
        onSearch={onSearch}
        searchValue={searchValue}
        showDeleteAllButton={showDeleteAllButton}
        onDelete={onDelete}
        clearSearch={clearSearch}
      />
      <Table.Root size="1" className="border-t-2">
        <TableHead columns={columns} onCheckAll={onCheckAll} onChangeSort={onChangeSort} sortField={sortField} sortOrder={sortOrder} />
        <TableBody columns={columns} rows={rows} selectOne={selectOne} onDelete={onDelete} />
      </Table.Root>
      <TableFooter totalInvoices={totalInvoices} fetchMore={fetchMore} itemLength={rows.length} loading={loading} />
    </div>
  );
};

export default TableWrapper;