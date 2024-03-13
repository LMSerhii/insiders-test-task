import { useState } from 'react';
import css from './SellToken.module.css';
import {
  calculateEthAmount,
  calculateUsdtAmount,
} from '../../helpers/calculateAmount';
import { IToken } from '../App/App.types';

import { Box } from '@mui/material';
import SellButton from '../SellButton/SellButton';

export default function SellToken({ usdtEthPrice, error, message }: IToken) {
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
    <Box component="section" className={css.box}>
      <form className={css.form}>
        <label>
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
            <SellButton variant="contained" onClick={() => console.log('Sell')}>
              Sell
            </SellButton>
          </>
        )}
      </form>
    </Box>
  );
}
