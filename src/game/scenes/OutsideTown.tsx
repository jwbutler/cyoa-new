import { Image } from '../components/Image';
import { Scene } from '../components/Scene';
import { Link } from '../../engine/components/Link';
import { Links } from '../../engine/components/Links';
import road_to_town_png from '../images/road_to_town.png';

export const OutsideTown = () => (
  <Scene title="Outside Town">
    <Image src={road_to_town_png} />
    <Links>
      <Link to="town">
        Enter Town
      </Link>
      <Link to="road_to_the_north">
        Take the Road to the North
      </Link>
      <Link to="road_to_the_south">
        Take the Road to the South
      </Link>
    </Links>
  </Scene>
);