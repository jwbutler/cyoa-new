import { Scene } from '../components/Scene';
import { Link } from '../components/Link';
import type { GameApi } from '../api';

type Props = Readonly<{
  api: GameApi
}>;

export const TavernBartender = ({ api }: Props) => {
  return (
    <Scene title="Tavern">
      <p>
        "What do you want?" the bartender says roughly.
      </p>
      <p>
        <i>(Nothing to do here.  Maybe they'll sell you items or give you quests/gossip later.)</i>
      </p>

      <Link to="tavern">
        Back
      </Link>
    </Scene>
  );
};