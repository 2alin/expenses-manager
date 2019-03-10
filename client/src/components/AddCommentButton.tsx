import React from 'react';

interface Props {
  buttonText: string;
  id: string;
  comment: string;
  onClick: (id: string, comment: string) => void;
}

function AddCommentButton({ buttonText, id, comment, onClick }: Props) {
  return (
    <div onClick={() => onClick(id, comment)}>
      <button>{buttonText}</button>
    </div>
  );
}

export default AddCommentButton;
