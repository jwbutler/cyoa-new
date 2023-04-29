import { Scene } from '../../../ui/components/Scene';
import { Link } from '../../../ui/components/Link';
import { Links } from '../../../ui/components/Links';
import { SceneName } from '../../types';
import { Column } from '../../../ui/components/Column';
import { Columns } from '../../../ui/components/Columns';

export const Tavern = () => {
  return (
    <Scene title="Tavern">
      <Columns>
        <Column />
        <Column>
          <p>
            You're in a dimly lit tavern. It's mostly empty,
            but there are a few patrons in the back of the room.
          </p>

          <Links>
            <Link to={SceneName.TAVERN_BARTENDER}>
              Talk to the bartender
            </Link>
            <Link to={SceneName.TAVERN_FARMER}>
              Talk to the farmer in the corner
            </Link>
            <Link to={SceneName.TOWN}>
              Back to Town
            </Link>
          </Links>
        </Column>
      </Columns>
    </Scene>
  );
};