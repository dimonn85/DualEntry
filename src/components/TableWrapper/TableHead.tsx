import React, { FC, useEffect, useState } from 'react';
import { IColumn } from '@/interfaces';
import { Checkbox } from '@radix-ui/themes';
import { Table } from '@radix-ui/themes';
import { TriangleDownIcon, TriangleUpIcon } from '@radix-ui/react-icons'

interface TableHeadProps {
  columns: IColumn[],
  onCheckAll: (checked: boolean) => void
  onChangeSort: (field: string, order: string) => void
  sortField: string
  sortOrder: string
}

const TableHead: FC<TableHeadProps> = ({ columns, onCheckAll, onChangeSort, sortField, sortOrder }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const [sort, setSortField] = useState<string>(sortField);
  const [order, setOrder] = useState<string>(sortOrder);
  const [sortAccessor, setSortAccessor] = useState<string>("");

  const onCheckAllHandler = () => {
    setChecked(!checked);
    onCheckAll(!checked);
  }

  const onSortHandler = (accessor: string) => {
    const sortOrder = accessor === sort && order === 'asc' ? 'desc' : 'asc';
    setSortField(accessor);
    setOrder(sortOrder);
    setSortAccessor(accessor);
  }

  useEffect(() => {
    onChangeSort(sortAccessor, order);
  }, [order, sortAccessor, onChangeSort]);

  return (
    <Table.Header>
      <Table.Row align="center">
        <Table.ColumnHeaderCell>
          <Checkbox color="indigo" checked={checked} onClick={onCheckAllHandler} />
        </Table.ColumnHeaderCell>
        {columns.map((item, i) => (
          <Table.ColumnHeaderCell key={i}>
            <button type="button" className="btn-filter" onClick={() => onSortHandler(item.field)}>
              {item.use}
              {sortField === item.field && sortOrder === 'asc' && <TriangleUpIcon color="#000" />}
              {sortField === item.field && sortOrder === 'desc' && <TriangleDownIcon color="#000" />}
              {sortField !== item.field && <TriangleDownIcon /> }
            </button>
          </Table.ColumnHeaderCell>
        ))}
        <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
      </Table.Row>
    </Table.Header>
  );
};

export default TableHead;