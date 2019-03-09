import React from 'react'

interface Props {
  text: string;
  onClick: ()=>void;
}

function PrevNextPage({text, onClick}:Props) {
  return (
    <span onClick={onClick}>
      {text}
    </span>
  )
}

export default PrevNextPage
