import { Image } from '../../ui/components/Image';
import { Scene } from '../../ui/components/Scene';
import { Link } from '../../ui/components/Link';
import { Links } from '../../ui/components/Links';
import road_to_temple_png from '../images/road_to_temple.png';
import { Column, Columns } from '../../ui/components/Columns';

export const RoadToTheNorth = () => (
  <Scene title="Road to the North">
    <Columns>
      <Column>
        <Image src={road_to_temple_png} />
      </Column>
      <Column>
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
      </Column>
    </Columns>
  </Scene>
);