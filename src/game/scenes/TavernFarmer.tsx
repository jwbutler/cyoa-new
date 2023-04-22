import { Scene } from '../../engine/components/Scene';
import { Link } from '../../engine/components/Link';
import type { GameApi } from '../../engine/api/api';
import type { ReactElement } from 'react';
import { ApiContext } from '../../engine/api/ApiContext';
import { useContext } from 'react';

type Props = Readonly<{}>;

const questName = 'farmer_kobolds';

export const TavernFarmer = ({}: Props) => {
  const api = useContext(ApiContext);
  const hasAcceptedQuest = (): boolean => api.player.quests.includes(questName);

  let content: ReactElement;
  if (hasAcceptedQuest()) {
    content = (
      <p>
        Good luck killing all those kobolds!
      </p>
    );
  } else {
    content = (
      <>
        <p>
          Help, monsters!
        </p>
        <p>
          <Link
            to='tavern_farmer'
            onClick={() => api.acceptQuest(questName)}
          >
            Accept Quest
          </Link>
        </p>
      </>
    );
  }
  return (
    <Scene title="Tavern">
      {content}

      <Link to="tavern">
        Back
      </Link>
    </Scene>
  );
};