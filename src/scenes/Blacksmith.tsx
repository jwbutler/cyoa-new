import { Scene } from '../components/Scene';
import type { GameApi } from '../api';
import { Link } from '../components/Link';

type Props = Readonly<{
  api: GameApi
}>;

type ItemListing = Readonly<{
  name: string,
  cost: number
}>;

export const Blacksmith = ({ api }: Props) => {
  const { player, buyItem } = api;

  type ItemLinkProps = {
    item: ItemListing
  };

  const ItemLink = ({ item }: ItemLinkProps) => {
    const { name, cost } = item;
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

  const items = [
    { name: 'Noob Sword', cost: 150 },
    { name: 'Awesome Sword', cost: 1000 }
  ];

  const playerHasItem = (item: ItemListing) => {
    return player.inventory.includes(item.name);
  };

  return (
    <Scene title="Blacksmith">
      <p>"What do you want?" the blacksmith says roughly.</p>
      <ul>
        {items.map(item => (
          !playerHasItem(item) && (
            <li>
              <ItemLink item={item} />
            </li>
          )
        ))}
      </ul>
      <p>
        <Link to="town">Back to Town</Link>
      </p>
    </Scene>
  );
};