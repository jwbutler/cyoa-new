import { Scene } from '../components/Scene';
import { Link } from '../../engine/components/Link';
import { ApiContext } from '../../engine/api/ApiContext';
import { useContext } from 'preact/compat';

type Props = Readonly<{}>;

type ItemListing = Readonly<{
  name: string,
  cost: number
}>;

export const Blacksmith = ({}: Props) => {
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
      <p>
        <Link to="town">Back to Town</Link>
      </p>
    </Scene>
  );
};