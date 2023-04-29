import { Scene } from '../../../ui/components/Scene';
import { Link } from '../../../ui/components/Link';
import { Links } from '../../../ui/components/Links';
import { SceneName } from '../../types';

export const TavernBartender = () => (
  <Scene title="Tavern">
    <p>
      "What do you want?" the bartender says roughly.
    </p>
    <p>
      <i>(Nothing to do here.  Maybe they'll sell you items or give you quests/gossip later.)</i>
    </p>

    <Links>
      <Link to={SceneName.TAVERN}>
        Back
      </Link>
    </Links>
  </Scene>
);