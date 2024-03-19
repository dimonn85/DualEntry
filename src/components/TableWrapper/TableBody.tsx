import React, { FC } from 'react';
import { IColumn, IRow } from '@/interfaces';
import DeleteIcon from '@/components/icons/DeleteIcon';
import { Checkbox } from '@radix-ui/themes';
import { Table, Button } from '@radix-ui/themes';
import { DotsVerticalIcon } from '@radix-ui/react-icons';

interface TableBodyProps {
  columns: IColumn[]
  rows: IRow[]
  selectOne: (checked: boolean, id: string) => void
  onDelete: (id?:string | undefined) => void
}

const TableBody: FC<TableBodyProps> = ({ columns, rows, selectOne, onDelete }) => {

  return (
    <Table.Body>
      {rows.map((item, index) => (
        <Table.Row key={`row-${index}`} className={`group relative ${item.selected ? 'bg-lime-100' : ''}`} align="center">
          <Table.Cell className={`${item.selected ? 'group-hover:bg-lime-100' : 'group-hover:bg-gray-200'}`}>
            <Checkbox color="indigo" checked={item.selected} onClick={() => selectOne(!item.selected, item.id)} />
          </Table.Cell>
          {columns.map((col, i) => (
            <Table.Cell key={`col-${i}`} className={`${item.selected ? 'group-hover:bg-lime-100' : 'group-hover:bg-gray-200'}`}>
              {item[col.field]}
            </Table.Cell>
          ))}
          <Table.Cell className={`table-dots-menu text-right ${item.selected ? 'group-hover:bg-lime-100' : 'group-hover:bg-gray-200'}`}>
            <button type="button">
              <DotsVerticalIcon />
            </button>
            <div className="table-delete-btn absolute hidden right-6 top-0.5">
              <Button variant="surface" radius="none" color="crimson" className="btn-danger" onClick={() => onDelete(item.id)}>
                <DeleteIcon/>
                Delete
              </Button>
            </div>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
};

export default TableBody;