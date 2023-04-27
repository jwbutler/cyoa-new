import title_png from  '../images/title.png';
import { SceneName } from '../types';
import { Link } from '../../ui/components/Link';

export const TitleScreen = () => (
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
      <Link to={SceneName.TOWN}>
        Start Game
      </Link>
    </div>
  </div>
);