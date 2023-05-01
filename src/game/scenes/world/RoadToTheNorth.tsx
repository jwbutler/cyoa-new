import { useContext } from 'preact/compat';
import { ApiContext } from '../../../engine/api/ApiContext';
import { Direction } from '../../../engine/api/GameApi';
import type { SceneProps } from '../../../engine/components/Engine';
import { Column } from '../../../ui/components/Column';
import { Columns } from '../../../ui/components/Columns';
import { Image } from '../../../ui/components/Image';
import { Link } from '../../../ui/components/Link';
import { Links } from '../../../ui/components/Links';
import { Scene } from '../../../ui/components/Scene';
import road_to_temple_png from '../../images/road_to_temple.png';
import road_to_town_png from '../../images/road_to_town.png';
import { BooleanFlag, SceneName } from '../../types';

export const RoadToTheNorth = (props: SceneProps) => {
  const { direction } = props;
  const api = useContext(ApiContext);
  const isOnFire = api.getBoolean(BooleanFlag.TOWN_ON_FIRE);

  switch (direction) {
    case Direction.NORTH:
      return (
        <Scene title="Road to the North">
          <Columns>
            <Column>
              <Image src={road_to_temple_png} />
            </Column>
            <Column>
              <p>
                You're standing on a dirt road outside the town.
              </p>
              <p>
                To the north, you see the ancient earth temple.
              </p>
              <p>
                To the south, you can see the town.
              </p>
              <Links>
                <Link to={SceneName.OUTSIDE_TEMPLE}>
                  Approach the temple
                </Link>
                <Link to={SceneName.ROAD_TO_THE_NORTH} direction={Direction.SOUTH}>
                  Head back to town
                </Link>
              </Links>
            </Column>
          </Columns>
        </Scene>
      );
    case Direction.SOUTH:
      return (
        <Scene title="Outside Town">
          <Columns>
            <Column>
              <Image src={road_to_town_png} />
            </Column>
            <Column>
              <p>
                You're standing on a dirt road outside the town.
              </p>
              {isOnFire && (
                <p>
                  The town is on fire!
                </p>
              )}
              <Links>
                <Link to={SceneName.TOWN}>
                  Enter Town
                </Link>
                <Link to={SceneName.ROAD_TO_THE_NORTH} direction={Direction.NORTH}>
                  Follow the road to the north
                </Link>
              </Links>
            </Column>
          </Columns>
        </Scene>
      );
    default:
      throw new Error(`Direction must be north or south (got: ${direction}`);
  }
};
