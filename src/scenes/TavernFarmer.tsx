import { Scene } from '../components/Scene';
import { Link } from '../components/Link';
import type { GameApi } from '../api';
import type { ReactElement } from 'react';

type Props = Readonly<{
  api: GameApi
}>;

const questName = 'farmer_kobolds';

export const TavernFarmer = ({ api }: Props) => {
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