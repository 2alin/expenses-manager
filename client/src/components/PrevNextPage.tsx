import React from 'react'

interface Props {
  text: string;
  disabled:boolean;
  onClick: ()=>void;
}

function PrevNextPage({text, disabled, onClick}:Props) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}

export default PrevNextPage
