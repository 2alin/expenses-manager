import React from 'react'

interface Props {
  currency: string 
}

function CurrencySelector({currency}:Props) {
  return (
    <div>
      {currency}
    </div>
  )
}

export default CurrencySelector
