import './Link.css';
import { ApiContext } from '../api/ApiContext';
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
      className="link"
      href="#"
      onClick={e => {
        onClick?.();
        if (to) {
          api.setScene(to);
        }
        e.preventDefault();
      }}
    >
      {children}
    </a>
  );
};