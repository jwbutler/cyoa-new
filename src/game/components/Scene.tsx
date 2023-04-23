import './Scene.css';
import { ApiContext } from '../../engine/api/ApiContext';
import { ComponentChildren, JSX } from 'preact';
import { useContext } from 'preact/compat';

type Props = Readonly<{
  title: string,
  children: ComponentChildren
}>;

export const Scene = ({ title, children }: Props) => {
  const api = useContext(ApiContext);

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