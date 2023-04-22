import { Scene } from '../components/Scene';
import { Link } from '../../engine/components/Link';

type Props = Readonly<{}>;

export const Tavern = ({}: Props) => {
  return (
    <Scene title="Tavern">
      <p>
        You're in a dimly lit tavern.  It's mostly empty,
        but there are a few patrons in the back of the room.
      </p>

      <ul>
        <li>
          <Link to="tavern_bartender">
            Talk to the bartender
          </Link>
        </li>
        <li>
          <Link to="tavern_farmer">
            Talk to the farmer in the corner
          </Link>
        </li>
        <li>
          <Link to="town">
            Back to Town
          </Link>
        </li>
      </ul>
    </Scene>
  );
};