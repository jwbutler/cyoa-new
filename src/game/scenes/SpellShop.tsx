import { Scene } from '../components/Scene';
import { Link } from '../../engine/components/Link';
import { ApiContext } from '../../engine/api/ApiContext';
import { useContext } from 'preact/compat';
import { Links } from '../../engine/components/Links';

type SpellListing = Readonly<{
  name: string,
  cost: number
}>;

export const SpellShop = () => {
  const api = useContext(ApiContext);
  const { buySpell, player } = api;

  type SpellLinkProps = {
    spell: SpellListing
  };

  const SpellLink = ({ spell }: SpellLinkProps) => {
    const { name, cost } = spell;
    const handleClick = () => {
      if (cost > player.gold) {
        api.setMessage('Not enough gold');
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
    return player.spells.includes(spell.name);
  };

  return (
    <Scene title="Spell Shop">
      <p>"What do you want?" the spell guy says warmly.</p>
      <ul>
        {spells.map(spell => (
          !playerHasSpell(spell) && (
            <li key={spell.name}>
              <SpellLink spell={spell} />
            </li>
          )
        ))}
      </ul>
      <Links>
        <Link to="town">Back to Town</Link>
      </Links>
    </Scene>
  );
};