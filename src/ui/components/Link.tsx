import styles from './Link.module.css';
import { ApiContext } from '../../engine/api/ApiContext';
import type { ComponentChildren } from 'preact';
import { useContext } from 'preact/compat';

export type Props = Readonly<{
  to?: string,
  onClick?: () => void,
  children: ComponentChildren
}>;

export const Link = ({ to, onClick, children }: Props) => {
  const api = useContext(ApiContext);
  return (
    <a
      className={styles.link}
      href="#"
      onClick={e => {
        onClick?.();
        if (to) {
          api.moveTo(to);
        }
        e.preventDefault();
      }}
    >
      {children}
    </a>
  );
};