import { Scene } from '../../../ui/components/Scene';
import { Link } from '../../../ui/components/Link';
import { ApiContext } from '../../../engine/api/ApiContext';
import { useContext, useState } from 'preact/compat';
import { Links } from '../../../ui/components/Links';
import { Columns } from '../../../ui/components/Columns';
import { Image } from '../../../ui/components/Image';
import shop_png from '../../images/shop.png';
import shopkeeper_png from '../../images/shopkeeper_shaded.png';
import { SceneName } from '../../types';
import { Column } from '../../../ui/components/Column';

type SpellListing = Readonly<{
  name: string,
  cost: number
}>;

type DialogOption =
  | 'none'
  | 'spells'
  | 'news'
  | 'quest'
  ;

export const SpellShop = () => {
  const api = useContext(ApiContext);
  const { player } = api;

  const spells: SpellListing[] = [
    { name: 'Fireball', cost: 100 },
    { name: 'Minor Heal', cost: 200 }
  ];

  const playerHasSpell = (spell: SpellListing) => {
    return player.spells.includes(spell.name);
  };

  const [selectedDialogOption, setSelectedDialogOption] = useState<DialogOption>('none');
  const renderContent = () => {
    switch (selectedDialogOption) {
      case 'none':
        return (
          <>
            <p>
              "What do you want?" the shopkeeper says warmly.
            </p>
            <ul>
              <li>
                <Link onClick={() => setSelectedDialogOption('spells')}>
                  Buy spells
                </Link>
              </li>
              <li>
                <Link onClick={() => setSelectedDialogOption('news')}>
                  Ask about news
                </Link>
              </li>
              {api.player.quests.length > 0 && (
                <li>
                  <Link onClick={() => setSelectedDialogOption('quest')}>
                    Ask about quest
                  </Link>
                </li>
              )}
            </ul>
          </>
        );
      case 'spells':
        return (
          <>
            <ul>
              {spells.map(spell => (
                !playerHasSpell(spell) && (
                  <li key={spell.name}>
                    <SpellLink spell={spell} />
                  </li>
                )
              ))}
            </ul>

            <Link onClick={() => setSelectedDialogOption('none')}>
              Ask about something else
            </Link>
          </>
        );
      case 'news':
        return (
          <>
            <p>
              "Business? To be honest it's a rough year. Folks around here don't have much to spend.
              But the new Temple still takes the same in taxes. They'll be coming around soon."
            </p>

            <Link onClick={() => setSelectedDialogOption('none')}>
              Ask about something else
            </Link>
          </>
        );
      case 'quest':
        return (
          <>
            <p>
              "My mother told me that when she was young, they used to go to the old temple for medicine.
              The priests could cure most anything, but they never shared their secrets."
            </p>

            <Link onClick={() => setSelectedDialogOption('none')}>
              Ask about something else
            </Link>
          </>
        );
      default:
        return <div />;
    }
  };

  return (
    <Scene title="Shopkeeper">
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
          {renderContent()}
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

type SpellLinkProps = {
  spell: SpellListing
};

const SpellLink = ({ spell }: SpellLinkProps) => {
  const api = useContext(ApiContext);
  const { buySpell, player } = api;
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