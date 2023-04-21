import { Scene } from '../components/Scene';
import { GameAPI } from '../api';
import { Link } from '../components/Link';

type Props = Readonly<{
  api: GameAPI
}>;

export const SpellShop = ({ api }: Props) => {
  const { buyItem } = api;
  return (
    <Scene title="Spell Shop">
      <p>"What do you want?" the spell guy says roughly.</p>
      <p>
        <ul>
          <li>
            <Link onClick={() => api.buyItem("fireball", 100)}>
              Fireball (100g)
            </Link>
          </li>
          <li>
            <Link onClick={() => api.buyItem("minor_heal", 200)}>
              Minor Heal (200g)
            </Link>
          </li>
        </ul>
      </p>
      <p>
        <Link to="town">Back to Town</Link>
      </p>
    </Scene>
  );
};