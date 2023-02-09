import React, { useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';

import './HistoricalData.css'
const columns = [
  { field: 'created_at', headerName: 'Date & Time', width: 200, flex:1 },
  { field: 'currencyFrom', headerName: 'Currency From', width: 130, flex:1},
  {
    field: 'amount1',
    headerName: 'Amount 1',
    width: 160,
    flex:1
  },  {
    field: 'currencyTo',
    headerName: 'Currency To',
    width: 90,
    flex:1
  },
  {
    field: 'amount2',
    headerName: 'Amount 2',
    width: 160,
    flex:1
  },
  {
    field: 'type',
    headerName: 'type',
    width: 160,
    flex:1
  },
];


export default function HistoricalData({dataTable}) {  
  return (
    <div className="history-container">
      <h2>History</h2>
      <DataGrid
        rows={dataTable}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}