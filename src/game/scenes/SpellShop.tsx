import { Scene } from '../../engine/components/Scene';
import { Link } from '../../engine/components/Link';
import { ApiContext } from '../../engine/api/ApiContext';
import { useContext } from 'react';

type Props = Readonly<{}>;

type SpellListing = Readonly<{
  name: string,
  cost: number
}>;


export const SpellShop = ({}: Props) => {
  const api = useContext(ApiContext);
  const { buySpell, player } = api;

  type SpellLinkProps = {
    spell: SpellListing
  };

  const SpellLink = ({ spell }: SpellLinkProps) => {
    const { name, cost } = spell;
    const handleClick = () => {
      if (cost > player.gold) {
        api.alert('Not enough gold');
      } else {
        buySpell(name, cost);
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
              <li key={spell.name}>
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