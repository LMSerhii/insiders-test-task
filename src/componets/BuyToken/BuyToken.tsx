import React, { useState } from 'react';
import {
  calculateEthAmount,
  calculateUsdtAmount,
} from '../../helpers/calculateAmount';
import css from './BuyToken.module.css';
import { IToken } from '../App/App.types';

export default function BuyToken({ usdtEthPrice, error, message }: IToken) {
  const [ethAmount, setEthAmount] = useState<string>('');
  const [usdtAmount, setUsdtAmount] = useState<string>('');
  const [currentCoin, setCurrentCoin] = useState<boolean>(true);

  const handleEthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsdtAmount('');
    setEthAmount(e.target.value);
    setCurrentCoin(true);
  };

  const handleUsdtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEthAmount('');
    setUsdtAmount(e.target.value);
    setCurrentCoin(false);
  };

  return (
    <form className={css.form}>
      <label className={css.label}>
        Кількість ETH:
        <input type="text" value={ethAmount} onChange={handleEthChange} />
      </label>
      <label>
        Кількість USDT:
        <input type="text" value={usdtAmount} onChange={handleUsdtChange} />
      </label>
      {error && <p className={css.error}>{message}</p>}
      {!error && (
        <>
          <p>
            Кількість:{'  '}
            {currentCoin
              ? `${calculateUsdtAmount(ethAmount, usdtEthPrice)} USDT`
              : `${calculateEthAmount(usdtAmount, usdtEthPrice)} ETH`}
          </p>
          <button type="button" onClick={() => console.log('buy')}>
            Buy
          </button>
        </>
      )}
    </form>
  );
}
