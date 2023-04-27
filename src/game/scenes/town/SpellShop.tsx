import { Scene } from '../../../ui/components/Scene';
import { Link } from '../../../ui/components/Link';
import { ApiContext } from '../../../engine/api/ApiContext';
import { useContext } from 'preact/compat';
import { Links } from '../../../ui/components/Links';
import { Column, Columns } from '../../../ui/components/Columns';
import { Image } from '../../../ui/components/Image';
import shop_png from '../../images/shop.png';
import shopkeeper_png from '../../images/shopkeeper_shaded.png';
import { SceneName } from '../../types';

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
      <Columns>
        <Column>
          <div style={{ position: 'relative' }}>
            <Image src={shop_png} style={{
              filter: 'hue-rotate(180deg)',
              transform: 'scaleX(-1)'
            }} />
            <Image src={shopkeeper_png} style={{
              position: 'absolute',
              filter: 'hue-rotate(180deg)',
              transform: 'scaleX(-1)',
              left: 0,
              top: 0
            }} />
          </div>
        </Column>
        <Column>
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
            <Link to={SceneName.TOWN}>
              Back to Town
            </Link>
          </Links>
        </Column>
      </Columns>
    </Scene>
  );
};