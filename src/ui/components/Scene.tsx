import styles from './Scene.module.css';
import { ApiContext } from '../../engine/api/ApiContext';
import type { ComponentChildren } from 'preact';
import { useContext } from 'preact/compat';

type Props = Readonly<{
  title: string,
  children?: ComponentChildren
}>;

export const Scene = ({ title, children }: Props) => {
  const api = useContext(ApiContext);
  const messages = api.getActiveMessages();

  return (
    <div className={styles.scene}>
      <div className={styles.title}>
        {title}
      </div>
      {messages.length > 0 && (
        <div className={styles.messages}>
          {messages.map(message =>
            <p>{message}</p>
          )}
        </div>
      )}
      {children}
    </div>
  );
};