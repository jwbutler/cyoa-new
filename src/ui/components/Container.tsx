import type { ComponentChildren } from 'preact';
import { Footer } from './Footer';

type Props = Readonly<{
  children: ComponentChildren
}>;

export const Container = ({ children }: Props) => {
  return (
    <div>
      {children}
      <hr />
      <Footer />
    </div>
  );
};