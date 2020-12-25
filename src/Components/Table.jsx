import React from 'react';
import TableCol from './TableCol';
//import TableRow from './TableRow';
import {genereteDayCols} from '../js/actions';
import './Table.scss'

export default function Table() {
  return <div className="table">
    <TableCol type='filter' />
    <TableCol type='month'>
      {genereteDayCols()}
    </TableCol>
  </div>
}

