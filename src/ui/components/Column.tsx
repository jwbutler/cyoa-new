import { ComponentChildren } from 'preact';
import styles from './Column.module.css';

type Props = Readonly<{
  children?: ComponentChildren
}>;

export const Column = ({ children }: Props) => (
  <div className={styles.column}>
    {children}
  </div>
);