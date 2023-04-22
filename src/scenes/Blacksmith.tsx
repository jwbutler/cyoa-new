import { Scene } from '../components/Scene';
import { GameApi } from '../api';
import { Link } from '../components/Link';

type Props = Readonly<{
  api: GameApi
}>;

type ItemListing = Readonly<{
  name: string,
  cost: number
}>;

type ItemLinkProps = {
  item: ItemListing
};

export const Blacksmith = ({ api }: Props) => {
  const { player, buyItem } = api;

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
        {name}
      </Link>
    );
  };

  const noobSword = { name: 'Noob Sword', cost: 150 };
  const awesomeSword = { name: 'Awesome Sword', cost: 1000 };
  const playerHasItem = (item: ItemListing) => {
    return player.inventory.includes(item.name);
  };

  return (
    <Scene title="Blacksmith">
      <p>"What do you want?" the blacksmith says roughly.</p>
      <ul>
        {[noobSword, awesomeSword].map(item => (
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