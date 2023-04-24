import { Image } from '../components/Image';
import { Scene } from '../components/Scene';
import { Link } from '../../engine/components/Link';
import { Links } from '../../engine/components/Links';
import road_to_temple_png from '../images/road_to_temple.png';

export const RoadToTheNorth = () => (
  <Scene title="Road to the North">
    <Image src={road_to_temple_png} />
    <p>
      To the north, you see the ancient earth temple.
    </p>
    <p>
      To the south, you can see the town.
    </p>
    <Links>
      <Link to="outside_temple">Approach the temple</Link>
      <Link to="outside_town">Head back to town</Link>
    </Links>
  </Scene>
);