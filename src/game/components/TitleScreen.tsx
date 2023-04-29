import title_png from  '../images/title.png';
import { Link } from '../../ui/components/Link';

type Props = Readonly<{
  onStartGame: () => void
}>;

export const TitleScreen = ({ onStartGame }: Props) => (
  <div style = {{ width: '1024px' }}>
    <img
      src={title_png}
      alt=""
      style={{
        width: '1024px',
        height: '550px',
        display: 'block'
      }}
    />
    <div style={{ 'text-align': 'center' }}>
      <Link onClick={onStartGame}>
        Start Game
      </Link>
    </div>
  </div>
);