import styles from './Scene.module.css';
import { ApiContext } from '../../engine/api/ApiContext';
import { ComponentChildren } from 'preact';
import { useContext } from 'preact/compat';

type Props = Readonly<{
  title: string,
  children?: ComponentChildren
}>;

export const Scene = ({ title, children }: Props) => {
  const api = useContext(ApiContext);

  return (
    <div className={styles.scene}>
      <div className={styles.title}>
        {title}
      </div>
      {api.message && (
        <div className={styles.message}>
          {api.message}
        </div>
      )}
      {children}
    </div>
  );
};