import { ComponentChildren, toChildArray } from 'preact';
import styles from './Links.module.css';

type Props = Readonly<{
  children: ComponentChildren
}>;

export const Links = ({ children }: Props) => (
  <div className={styles.links}>
    {
      toChildArray(children).map((child, i) => (
        <div key={i}>
          {child}
        </div>
      ))
    }
  </div>
);