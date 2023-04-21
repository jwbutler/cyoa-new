import { Scene } from '../components/Scene';
import { GameAPI } from '../api';
import { Link } from '../components/Link';

type Props = Readonly<{
  api: GameAPI
}>;

export const Blacksmith = ({ api }: Props) => {
  const { buyItem } = api;
  return (
    <Scene title="Blacksmith">
      <p>"What do you want?" the blacksmith says roughly.</p>
      <ul>
        <li>
          <Link onClick={() => buyItem("noob_sword", 100)}>
            Noob Sword
          </Link>
        </li>
        <li>
          <Link onClick={() => buyItem("awesome_sword", 1000)}>
            Awesome Sword
          </Link>
        </li>
      </ul>
      <p>
        <Link to="town">Back to Town</Link>
      </p>
    </Scene>
  );
};