import React from 'react'

interface Props {
  id: string;
  comment: string;
  onClick: (id:string, comment:string) => void;
}

function AddCommentButton({id,comment, onClick}:Props) {
  return (
    <div onClick={() => onClick(id, comment)}>
      <button>ADD COMMENT</button>
    </div>
  )
}

export default AddCommentButton
