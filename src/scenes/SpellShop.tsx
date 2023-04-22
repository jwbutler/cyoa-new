import { Scene } from '../components/Scene';
import { GameApi } from '../api';
import { Link } from '../components/Link';

type Props = Readonly<{
  api: GameApi
}>;

type SpellListing = Readonly<{
  name: string,
  cost: number
}>;


export const SpellShop = ({ api }: Props) => {
  const { buyItem, player } = api;

  type SpellLinkProps = {
    spell: SpellListing
  };

  const SpellLink = ({ spell }: SpellLinkProps) => {
    const { name, cost } = spell;
    const handleClick = () => {
      if (cost > player.gold) {
        api.alert('Not enough gold');
      } else {
        buyItem(name, cost);
      }
    };

    return (
      <Link onClick={handleClick}>
        {name} ({cost} gold)
      </Link>
    );
  };

  const spells: SpellListing[] = [
    { name: 'Fireball', cost: 100 },
    { name: 'Minor Heal', cost: 200 }
  ];

  const playerHasSpell = (spell: SpellListing) => {
    return player.inventory.includes(spell.name);
  };

  return (
    <Scene title="Spell Shop">
      <p>"What do you want?" the spell guy says warmly.</p>
      <p>
        <ul>
          {spells.map(spell => (
            !playerHasSpell(spell) && (
              <li>
                <SpellLink spell={spell} />
              </li>
            )
          ))}
        </ul>
      </p>
      <p>
        <Link to="town">Back to Town</Link>
      </p>
    </Scene>
  );
};