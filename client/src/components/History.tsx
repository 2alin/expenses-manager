import React from 'react'
import FilterLink from '../containers/FilterLink';

function History({trans}:any) {
  return (
    <div>
      <div>
        <span>{trans.title}</span>
        <FilterLink text={trans.filter}/>
      </div>
    </div>
  )
}

export default History
