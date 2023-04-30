import { Scene } from '../../../ui/components/Scene';
import { Link } from '../../../ui/components/Link';
import { Links } from '../../../ui/components/Links';
import { BooleanFlag, SceneName } from '../../types';
import { Column } from '../../../ui/components/Column';
import { Columns } from '../../../ui/components/Columns';
import { useContext } from 'preact/compat';
import { ApiContext } from '../../../engine/api/ApiContext';

export const Tavern = () => {
  const api = useContext(ApiContext);
  const townOnFire = api.getBoolean(BooleanFlag.TOWN_ON_FIRE);
  const mainDescription = (townOnFire)
    ? (
      <>
        You're in a dimly lit tavern. It seems to have emptied out considerably
        since the last time you were here.
      </>
    )
    : (
      <>
        You're in a dimly lit tavern. It's mostly empty,
        but there are a few patrons in the back of the room.
      </>
    );

  return (
    <Scene title="Tavern">
      <Columns>
        <Column />
        <Column>
          <p>
            {mainDescription}
          </p>

          <Links>
            <Link to={SceneName.TAVERN_BARTENDER}>
              Talk to the bartender
            </Link>
            {!townOnFire && (
              <Link to={SceneName.TAVERN_FARMER}>
                Talk to the farmer in the corner
              </Link>
            )}
            <Link to={SceneName.TOWN}>
              Back to Town
            </Link>
          </Links>
        </Column>
      </Columns>
    </Scene>
  );
};