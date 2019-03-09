import React from 'react'

interface Props {
  text: string;
  onClick: ()=>void;
}

function PrevNextPage({text, onClick}:Props) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

export default PrevNextPage
