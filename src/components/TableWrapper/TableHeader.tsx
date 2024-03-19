import React, { FC } from 'react';
import Search from '@/components/formElements/Search/Search';
import DeleteIcon from '@/components/icons/DeleteIcon';
import { Text } from '@radix-ui/themes';
import { CalendarIcon } from '@radix-ui/react-icons'

interface ITableHeaderProps {
  onSearch: (value: string) => void
  onDelete: (id?:string | undefined) => void
  showDeleteAllButton: boolean
  searchValue: string
  clearSearch: () => void
}

const TableHeader: FC<ITableHeaderProps> = ({ onSearch, showDeleteAllButton, onDelete, searchValue, clearSearch }) => {
  return (
    <div className="md:flex justify-between items-center py-3">
      <div className="md:w-1/3 md:mb-0 mb-2">
        <Search onSearch={onSearch} searchValue={searchValue} clearSearch={clearSearch} />
      </div>
      <div className="md:w-1/3 md:mb-0 mb-2 px-4 flex items-center">
        <CalendarIcon className="mr-1.5" height="16" width="16" />
        <Text size="2">Date range</Text>
      </div>
      <div className="md:w-1/3 md:flex justify-end md:mb-0 mb-2 px-4">
        {showDeleteAllButton && (
          <button type="button" className="btn btn-danger bg-transparent border-none" onClick={() => onDelete()}>
            <DeleteIcon />
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default TableHeader;