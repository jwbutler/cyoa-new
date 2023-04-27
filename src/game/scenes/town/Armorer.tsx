import { Image } from '../../../ui/components/Image';
import { Scene } from '../../../ui/components/Scene';
import { Link } from '../../../ui/components/Link';
import { ApiContext } from '../../../engine/api/ApiContext';
import { useContext, useState } from 'preact/compat';
import { Links } from '../../../ui/components/Links';
import shop_png from '../../images/shop.png';
import shopkeeper_png from '../../images/shopkeeper_shaded.png';
import { Column, Columns } from '../../../ui/components/Columns';
import { SceneName } from '../../types';

type ItemListing = Readonly<{
  name: string,
  cost: number
}>;

type DialogOption =
  | 'none'
  | 'items'
  | 'news'
  | 'quest'
;

export const Armorer = () => {
  const api = useContext(ApiContext);
  const { player } = api;

  const items: ItemListing[] = [
    { name: 'Noob Sword', cost: 150 },
    { name: 'Awesome Sword', cost: 1000 }
  ];

  const playerHasItem = (item: ItemListing) => {
    return player.inventory.includes(item.name);
  };

  const [selectedDialogOption, setSelectedDialogOption] = useState<DialogOption>('none');
  const renderContent = () => {
    switch (selectedDialogOption) {
      case 'none':
        return (
          <>
            <p>
              "What do you want?" the armorer says roughly.
            </p>
            <ul>
              <li>
                <Link onClick={() => setSelectedDialogOption('items')}>
                  Buy items
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
      case 'items':
        return (
          <>
            <ul>
              {items.map(item => (
                !playerHasItem(item) && (
                  <li key={item.name}>
                    <ItemLink item={item} />
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
              "As you can see, I haven't got much in stock. Folks have been buying more than usual.
              Everyone feels they need to protect themselves these days."
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
              "You better be careful around the old temple. It's not safe. Of course, when I was your age,
              the foul things used to fear the old temple. Now it seems that's where they all gather."
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
    <Scene title="Armorer">
      <Columns>
        <Column>
          <div style={{ position: 'relative' }}>
            <Image src={shop_png} />
            <Image src={shopkeeper_png} style={{ position: 'absolute', left: 0, top: 0 }} />
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

type ItemLinkProps = {
  item: ItemListing
};

const ItemLink = ({ item }: ItemLinkProps) => {
  const api = useContext(ApiContext);
  const { player } = api;
  const { name, cost } = item;

  const handleClick = () => {
    if (cost > player.gold) {
      api.setMessage('Not enough gold');
    } else {
      api.buyItem(name, cost);
    }
  };

  return (
    <Link onClick={handleClick}>
      {name} ({cost} gold)
    </Link>
  );
};