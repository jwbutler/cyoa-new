import { Image } from '../../ui/components/Image';
import { Scene } from '../../ui/components/Scene';
import { Link } from '../../ui/components/Link';
import { Links } from '../../ui/components/Links';
import road_to_town_png from '../images/road_to_town.png';
import { Column, Columns } from '../../ui/components/Columns';

export const OutsideTown = () => (
  <Scene title="Outside Town">
    <Columns>
      <Column>
        <Image src={road_to_town_png} />
      </Column>
      <Column>
        You're standing on a dirt road  outside the town.
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
      </Column>
    </Columns>
  </Scene>
);