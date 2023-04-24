import type { JSX } from 'preact';

type Props = Readonly<{
  src: string,
  style?: Record<string, unknown>
}>;

export const Image = ({ src, style }: Props): JSX.Element => (
  <img
    src={src}
    alt={src}
    width={640}
    height={480}
    style={style}
  />
);