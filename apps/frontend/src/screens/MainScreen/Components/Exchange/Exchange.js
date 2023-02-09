import { Alert, Button } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { DropDown, TextBox } from "../../../../Common/UI";
import Bitcoin from "../../../../Common/icons/bitcoin";
import socket from "../../../../Common/Socket/socket";
import "./Exchange.css";
import { format } from "date-fns";
import Ethereum from "../../../../Common/icons/ethereum";
import USD from "../../../../Common/icons/USD";

function Exchange(props) {
  const [toCrypto, setToCrypto] = React.useState("BTC");
  const [usdAmount, setUsdAmount] = React.useState();
  const [convertedCryptoAmount, setConvertedCryptoAmount] = React.useState();
  const [rates, setRates] = React.useState(null);
  const id = useRef(0);
  //using this flag to disable all buttons when socket connection is off
  const isSocketDisconnected = rates === null;

  useEffect(() => {
    socket.on("rates", (data) => {
      //set live price for crypto currencies
      const cryptoLookup = ["BTC", "ETH"];
      cryptoLookup.forEach((crypto) => {
        props.updateRates({
          id: id.current++,
          created_at: format(new Date(), "dd/MM/yyyy hh:mm"),
          currencyFrom: crypto,
          amount1: 1,
          currencyTo: "USD",
          amount2: 1 / data.rates[crypto],
          type: "Live Price",
        });
      });
      //set rates for all currencies in state
      setRates(data.rates);

    });

    return () => {
      socket.off("rates");
    };
  }, []);
//whenever usd amount is changed it updates crypto amount
  useEffect(() => {
    console.log(usdAmount,toCrypto)
    if (usdAmount && rates[toCrypto]) convertToCryptoAmount(usdAmount);
  }, [usdAmount, toCrypto]);

  const convertToCryptoAmount = (value) => {
    setConvertedCryptoAmount(parseFloat(value * rates[toCrypto]));
  };

  const onSelectToCrypto = (event) => {
    setToCrypto(event.target.value);
  };

  const onAmountChange = (e) => {
    const value = e.target.value,
      regex = /^[0-9\b]+$/;
    if (value === "" || regex.test(value)) {
      setUsdAmount(value);
    }
  };

  const onSavePress = () => {
    const data = {
      id: id.current++,
      created_at: format(new Date(), "dd/MM/yyyy hh:mm"),
      currencyFrom: "USD",
      amount1: usdAmount,
      currencyTo: toCrypto,
      amount2: convertedCryptoAmount,
      type: "Exchanged",
    };
    props.addRowToTable(data);
  };

  return (
    <div className="exchange-container">
      <h1 className="exchange-text">Exchange</h1>
      <div className="drop-down-container">
        <div className="dropdown">
        <DropDown
          label="Currency From"
          menuItems={[{ name: "USD", value: "USD", Icon: USD }]}
          value={"USD"}
          disabled
        />
        </div>
        <TextBox label="Amount" value={usdAmount} disabled={isSocketDisconnected} onChange={onAmountChange} />
        <div className="equal-sign">=</div>
        <div className="dropdown">
        <DropDown
          disabled={isSocketDisconnected}
          label="Currency To"
          menuItems={[
            { name: "Bitcoin", value: "BTC", Icon: Bitcoin },
            { name: "ethereum", value: "ETH", Icon: Ethereum },
          ]}
          defaultValue="BTC"
          value={toCrypto}
          onSelect={onSelectToCrypto}
        />
        </div>
        <TextBox label="Amount" value={convertedCryptoAmount} disabled />
        <div className="save-button">
          <Button disabled={isSocketDisconnected} style={{height:"55px"}} color="success" variant="contained" onClick={onSavePress}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Exchange;
