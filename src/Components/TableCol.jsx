import React from 'react';
import './TableCol.scss';
import PropTypes from 'prop-types';
import time from '../js/store';

export default function TableCol(props) {
  return(
    <div className={(props.type === 'month') ? 'table-col -month' : (props.type === 'filter') ? 'table-col -filter' : 'table-col'}>
      <div className="table-col-header">{(props.type === 'filter') ? 'Filter' : (props.type === 'month') ? time.month + ', ' + time.year : ''}</div>
      {props.children}
    </div>
  )
}

TableCol.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.element,
}