import { ReactNode } from 'react';
import './Scene.css';

type Props = Readonly<{
  title: string,
  children: ReactNode
}>;

export const Scene = ({ title, children }: Props) => {
  return (
    <div className="scene">
      <div className="title">
        {title}
      </div>
      {children}
    </div>
  );
};