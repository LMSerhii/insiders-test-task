import React, { useState } from 'react';
import {
  calculateEthAmount,
  calculateUsdtAmount,
} from '../../helpers/calculateAmount';
import css from './BuyToken.module.css';
import { IToken } from '../App/App.types';
import { Box, Typography } from '@mui/material';
import BuyButton from '../BuyButton/BuyButton';
import CustomTextField from '../CustomTextField/CustomTextField';
import CustomSwitch from '../CustomSwitch/CustomSwitch';
import SellButton from '../SellButton/SellButton';
import { Button, Modal, ModalClose, ModalDialog } from '@mui/joy';

export default function BuyToken({ usdtEthPrice, error, message }: IToken) {
  const [ethAmount, setEthAmount] = useState<string>('');
  const [usdtAmount, setUsdtAmount] = useState<string>('');
  const [currentCoin, setCurrentCoin] = useState<boolean>(true);
  const [checked, setChecked] = useState<boolean>(true);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

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

  const finallyAmountUSDT = calculateUsdtAmount(ethAmount, usdtEthPrice);
  const finallyAmountETH = calculateEthAmount(usdtAmount, usdtEthPrice);

  return (
    <Box
      component="form"
      className={css.box}
      noValidate
      autoComplete="off"
      minWidth={375}
    >
      <CustomSwitch checked={checked} setChecked={setChecked} />

      <CustomTextField
        value={ethAmount}
        onChange={handleEthChange}
        label={'ETH'}
      />
      <CustomTextField
        value={usdtAmount}
        onChange={handleUsdtChange}
        label={'USDT'}
      />
      {error && <p className={css.error}>{message}</p>}
      {!error && (
        <>
          <Typography fontWeight={600}>
            <span
              style={{ fontWeight: 400, color: 'GrayText', marginRight: 10 }}
            >
              {checked ? 'Max Buy:' : 'Max Sell:'}
            </span>
            {currentCoin
              ? `${finallyAmountUSDT} USDT`
              : `${finallyAmountETH} ETH`}
          </Typography>
          {checked ? (
            <BuyButton variant="contained" onClick={() => setIsShowModal(true)}>
              Buy
            </BuyButton>
          ) : (
            <SellButton
              variant="contained"
              onClick={() => setIsShowModal(true)}
            >
              Sell
            </SellButton>
          )}
        </>
      )}
      {isShowModal && (
        <Modal open={isShowModal} onClose={() => setIsShowModal(false)}>
          <ModalDialog
            color="primary"
            layout="center"
            variant="soft"
            size="lg"
            sx={{ padding: 15, backgroundColor: '#0F1924' }}
          >
            <ModalClose />
            <Typography fontWeight={600}>
              You want{' '}
              {checked
                ? `buy ${
                    currentCoin
                      ? `${ethAmount} ETH for ${finallyAmountUSDT} USDT`
                      : `${finallyAmountETH} ETH for ${usdtAmount} USDT`
                  }`
                : `sell ${
                    currentCoin
                      ? `${ethAmount} ETH for ${finallyAmountUSDT} USDT`
                      : `${finallyAmountETH} ETH for ${usdtAmount} USDT`
                  }`}
            </Typography>
            <Button>Agree</Button>
          </ModalDialog>
        </Modal>
      )}
    </Box>
  );
}
