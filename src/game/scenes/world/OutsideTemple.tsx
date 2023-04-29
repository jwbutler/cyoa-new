import { Image } from '../../../ui/components/Image';
import { Scene } from '../../../ui/components/Scene';
import { Link } from '../../../ui/components/Link';
import { Links } from '../../../ui/components/Links';
import { Columns } from '../../../ui/components/Columns';
import { Column } from '../../../ui/components/Column';
import { BooleanFlag, SceneName } from '../../types';
import { ApiContext } from '../../../engine/api/ApiContext';
import { useContext } from 'preact/compat';
import temple_exterior from '../../images/temple_exterior.png';

export const OutsideTemple = () => {
  const api = useContext(ApiContext);
  const unlockedTemple = api.getBoolean(BooleanFlag.UNLOCKED_TEMPLE);

  const renderContent = () => {
    if (unlockedTemple) {
      return (
        <>
          <p>
            You're standing outside a massive stone temple.
            This was a major Earth Cult temple for the last several centuries,
            but it's been abandoned since the Heaven Cult banished the Earth Cult 40 years ago.
          </p>
          <p>
            The temple is imposing, though slightly overgrown.
          </p>
          <Links>
            <Link to={SceneName.INSIDE_TEMPLE}>
              Go inside
            </Link>
            <Link to={SceneName.OUTSIDE_TOWN}>
              Exit
            </Link>
          </Links>
        </>
      );
    }

    return (
      <>
        <p>
          You're standing outside a huge, mysterious stone building.
          You wonder what it is and what secrets it contains...
        </p>
        <p>
          <i>(Maybe somebody in town can tell you more about the temple.)</i>
        </p>
        <Links>
          <Link to={SceneName.OUTSIDE_TOWN}>
            Exit
          </Link>
        </Links>
      </>
    );
  };
  return (
    <Scene title="Outside Temple">
      <Columns>
        <Column>
          <Image src={temple_exterior}/>
        </Column>
        <Column>
          {renderContent()}
        </Column>
      </Columns>
    </Scene>
  );
};