import React from 'react';

interface Props {
  buttonText: string;
  id: string;
  onClick: (id: string) => void;
}

function AddReceiptButton({ buttonText, id, onClick }: Props) {
  return (
    <div onClick={() => onClick(id)}>
      <button>{buttonText}</button>
    </div>
  );
}

export default AddReceiptButton;
