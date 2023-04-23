import { ComponentChildren, toChildArray } from 'preact';

type Props = Readonly<{
  children: ComponentChildren
}>;

export const Links = ({ children }: Props) => {
  return (
    <ul className="links">
      {toChildArray(children).map((child, i) => (
        <li key={i}>{child}</li>
      ))}
    </ul>
  );
};