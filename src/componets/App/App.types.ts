import { ReactNode } from 'react';

export interface IToken {
  usdtEthPrice: number;
  error: boolean;
  message: string;
}

export interface ILayout {
  children: ReactNode;
}

export interface ICustomTextField {
  value: string | number;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ICustomSwitch {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}
