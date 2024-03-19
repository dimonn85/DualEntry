import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Button, Text } from '@radix-ui/themes';

interface TableFooterProps {
  totalInvoices: number
  fetchMore: any
  itemLength: number
  loading: boolean
}

const TableFooter: FC<TableFooterProps> = ({ totalInvoices, fetchMore, itemLength, loading }) => {

   return (
    <div className="pt-5 pb-5">
      <div className="text-right mb-2 sm:-mb-4">
        <Text size="1">Showing {itemLength} of {totalInvoices} records</Text>
      </div>
      <div className="flex justify-center">
        {itemLength < totalInvoices && (
          <Button size="3" variant="surface" radius="none" onClick={fetchMore}>
            {loading ? 'Loading... ' : 'Show more'}
            <ChevronDownIcon />
          </Button>
        )}
      </div>
    </div>
   );
};

import React, {FC} from 'react';

export default TableFooter;