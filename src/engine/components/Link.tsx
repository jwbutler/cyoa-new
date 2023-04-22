import type { ReactNode } from 'react';
import './Link.css';
import { ApiContext } from '../api/ApiContext';
import { useContext } from 'react';

export type Props = Readonly<{
  to?: string,
  onClick?: () => void,
  children: ReactNode
}>;

export const Link = ({ to, onClick, children }: Props) => {
  const api = useContext(ApiContext);
  return (
    <a
      className="link"
      onClick={e => {
        onClick?.();
        if (to) {
          api.setScene(to);
        }
      }}
    >
      {children}
    </a>
  );
};