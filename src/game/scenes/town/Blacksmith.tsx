import { Image } from '../../../ui/components/Image';
import { Scene } from '../../../ui/components/Scene';
import { Link } from '../../../ui/components/Link';
import { ApiContext } from '../../../engine/api/ApiContext';
import { useContext } from 'preact/compat';
import { Links } from '../../../ui/components/Links';
import shop_png from '../../images/shop.png';
import shopkeeper_png from '../../images/shopkeeper_shaded.png';
import { Column, Columns } from '../../../ui/components/Columns';

type ItemListing = Readonly<{
  name: string,
  cost: number
}>;

export const Blacksmith = () => {
  const api = useContext(ApiContext);
  const { player, buyItem } = api;

  type ItemLinkProps = {
    item: ItemListing
  };

  const ItemLink = ({ item }: ItemLinkProps) => {
    const { name, cost } = item;
    const handleClick = () => {
      if (cost > player.gold) {
        api.setMessage('Not enough gold');
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

  const items = [
    { name: 'Noob Sword', cost: 150 },
    { name: 'Awesome Sword', cost: 1000 }
  ];

  const playerHasItem = (item: ItemListing) => {
    return player.inventory.includes(item.name);
  };

  return (
    <Scene title="Blacksmith">
      <Columns>
        <Column>
          <div style={{ position: 'relative' }}>
            <Image src={shop_png} />
            <Image src={shopkeeper_png} style={{ position: 'absolute', left: 0, top: 0 }} />
          </div>
        </Column>
        <Column>
          <p>"What do you want?" the blacksmith says roughly.</p>
          <ul>
            {items.map(item => (
              !playerHasItem(item) && (
                <li key={item.name}>
                  <ItemLink item={item} />
                </li>
              )
            ))}
          </ul>
          <Links>
            <Link to="town">Back to Town</Link>
          </Links>
        </Column>
      </Columns>
    </Scene>
  );
};