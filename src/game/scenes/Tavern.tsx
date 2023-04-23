import { Scene } from '../components/Scene';
import { Link } from '../../engine/components/Link';
import { Links } from '../../engine/components/Links';

export const Tavern = () => {
  return (
    <Scene title="Tavern">
      <p>
        You're in a dimly lit tavern.  It's mostly empty,
        but there are a few patrons in the back of the room.
      </p>

      <Links>
        <Link to="tavern_bartender">
          Talk to the bartender
        </Link>
        <Link to="tavern_farmer">
          Talk to the farmer in the corner
        </Link>
        <Link to="town">
          Back to Town
        </Link>
      </Links>
    </Scene>
  );
};