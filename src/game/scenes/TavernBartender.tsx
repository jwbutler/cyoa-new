import { Scene } from '../components/Scene';
import { Link } from '../../engine/components/Link';

type Props = Readonly<{}>;

export const TavernBartender = ({}: Props) => {
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