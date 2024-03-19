import React, { FC } from 'react';

interface ICheckbox {
  checked: boolean
}

const Checkbox: FC<ICheckbox> = ({ checked, ...props }) => {
  return (
    <div>
      {!checked ? 'check' : 'checked'}
    </div>
  );
};

export default Checkbox;