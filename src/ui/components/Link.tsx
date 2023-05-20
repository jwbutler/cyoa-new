import type { Direction } from '../../engine/api/GameApi';
import styles from './Link.module.css';
import { ApiContext } from '../../engine/api/ApiContext';
import type { ComponentChildren } from 'preact';
import { useContext } from 'preact/compat';

export type Props = Readonly<{
  to?: string,
  direction?: Direction,
  onClick?: () => void,
  children: ComponentChildren
}>;

export const Link = ({ to, direction, onClick, children }: Props) => {
  const api = useContext(ApiContext);
  return (
    <a
      className={styles.link}
      href="#"
      onClick={e => {
        onClick?.();
        if (to) {
          api.moveTo({
            scene: to,
            direction: direction ?? null
          });
        }
        e.preventDefault();
      }}
      tabindex="0"
      autofocus
    >
      {children}
    </a>
  );
};
