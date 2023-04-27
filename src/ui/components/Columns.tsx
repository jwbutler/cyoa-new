import { ComponentChildren } from 'preact';
import styles from './Columns.module.css';

type Props = Readonly<{
  children: ComponentChildren
}>;

export const Columns = ({ children }: Props) => (
  <div className={styles.columns}>
    {children}
  </div>
);

type ColumnProps = Readonly<{
  children?: ComponentChildren
}>;

export const Column = ({ children }: ColumnProps) => (
  <div className={styles.column}>
    {children}
  </div>
);