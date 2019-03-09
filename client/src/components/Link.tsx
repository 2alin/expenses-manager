import React from 'react';

interface Props {
  text: string;
  onClick: () => void;
  className: string
}

function Link({ text, onClick, className='' }: Props) {
  return <div onClick={onClick} className={className}>{text}</div>;
}

export default Link;