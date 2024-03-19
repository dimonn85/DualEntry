import React, { FC, useEffect, useState } from 'react';
import { Button, TextField } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import useDebounce from '@/hooks/useDebounce';

interface ISearchProps {
  onSearch: (value: string) => void
  clearSearch: () => void
  searchValue: string,
}

const Search:FC<ISearchProps> = ({ onSearch, searchValue, clearSearch }) => {
  const [value, setValue] = useDebounce(500, '');
  const [inputValue, setInputValue] = useState(searchValue);
  useEffect(() => {
    onSearch(value);
  }, [ value, onSearch ]);

  const onChangeSearch = (val: string) => {
    setInputValue(val);
    setValue(val);
  }

  return (
    <div className="relative w-full">
      <TextField.Root>
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input className="search-bar" placeholder="Search & filter" value={inputValue} onChange={(e) => onChangeSearch(e.target.value)} />
        {searchValue && <Button variant="surface" onClick={clearSearch}>Clear</Button>}
      </TextField.Root>
    </div>
  );
};

export default Search;