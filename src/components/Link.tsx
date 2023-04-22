import type { ReactNode } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import './Link.css';

export type Props = Readonly<{
  to?: string,
  onClick?: () => void,
  children: ReactNode
}>;

export const Link = ({ to, onClick, children }: Props) => {
  return (
    <ReactRouterLink
      className="link"
      to={to ? `/${to}` : '#'}
      onClick={e => {
        onClick?.();
        if (!to) {
          e.preventDefault();
        }
      }}
    >
      {children}
    </ReactRouterLink>
  );
};