import React from 'react';

interface Props {
  text: string;
  onClick: () => void;
  className: string
}

function Link({ text, onClick, className='' }: Props) {
  return <button onClick={onClick} className={className}>{text}</button>;
}

export default Link;