import { Scene } from '../components/Scene';
import { Link } from '../../engine/components/Link';
import { Links } from '../../engine/components/Links';

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

      <Links>
        <Link to="tavern">
          Back
        </Link>
      </Links>
    </Scene>
  );
};