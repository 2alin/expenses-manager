import React from 'react'
import FilterLinkContainer from '../containers/FilterLinkContainer';

function History({trans}:any) {
  return (
    <div>
      <div>
        <span>{trans.title}</span>
        <FilterLinkContainer text={trans.filter}/>
      </div>
    </div>
  )
}

export default History
