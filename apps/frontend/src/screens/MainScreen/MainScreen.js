import React from "react";
import Exchange from "./Components/Exchange/Exchange";
import HistoricalData from "./Components/HistoricalData/HistoricalData";
const MainScreen = () => {
  const [dataTable,setDataTable] = React.useState([])
  const addRowData = (data) => {
    setDataTable((prev)=>{
      //replace live price rows in data grid with new rates
      if((data.currencyFrom === "BTC" || data.currencyFrom === "ETH") && prev.length !== 0){
        let existingRow = prev.find(c => c.currencyFrom === data.currencyFrom)
        if(existingRow !== undefined){
          Object.assign(existingRow,data)
          return [...prev]
        } else{
          return [...prev , data]
        }
      }
      return [...prev , data]
    })
  }
  return (<div className="parent">
    <Exchange addRowToTable = {addRowData} updateRates = {addRowData}/>
    <HistoricalData dataTable={dataTable} columns={["Date & Time", "Currency From", "Amount","Currency To","Amount"]} title="Data"/>
  </div>)
};

export default MainScreen;
