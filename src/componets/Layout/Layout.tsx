import { ILayout } from '../App/App.types';
import css from './Layout.module.css';

export default function Layout({ children }: ILayout) {
  return <div className={css.layout}>{children}</div>;
}
