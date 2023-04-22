import type { ReactNode } from 'react';
import './Scene.css';
import { useContext } from 'react';
import { ApiContext } from '../../engine/api/ApiContext';

type Props = Readonly<{
  title: string,
  children: ReactNode
}>;

export const Scene = ({ title, children }: Props) => {
  const api = useContext(ApiContext);
  console.log(`message=${api.message}`);
  return (
    <div className="scene">
      <div className="title">
        {title}
      </div>
      {api.message && (<div className="message">{api.message}</div>)}
      {children}
    </div>
  );
};