import { Image } from '../../../ui/components/Image';
import { Scene } from '../../../ui/components/Scene';
import { Link } from '../../../ui/components/Link';
import { ApiContext } from '../../../engine/api/ApiContext';
import { useContext, useState } from 'preact/compat';
import { Links } from '../../../ui/components/Links';
import shop_png from '../../images/shop.png';
import shopkeeper_png from '../../images/shopkeeper_shaded.png';
import { Columns } from '../../../ui/components/Columns';
import { BooleanFlag, SceneName } from '../../types';
import { Column } from '../../../ui/components/Column';

type ItemListing = Readonly<{
  name: string,
  cost: number
}>;

type DialogOption =
  | 'none'
  | 'items'
  | 'news'
  | 'quest_farmer_kobolds'
  | 'quest_earth_cult'
  | 'quest_earth_cult_2'
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
  const townIsOnFire = api.getBoolean(BooleanFlag.TOWN_ON_FIRE);

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
              {api.player.quests.includes('farmer_kobolds') > 0 && (
                <li>
                  <Link onClick={() => setSelectedDialogOption('quest_farmer_kobolds')}>
                    Ask about quest
                  </Link>
                </li>
              )}
              {api.getBoolean(BooleanFlag.JOINED_EARTH_CULT) && (
                <li>
                  <Link onClick={() => setSelectedDialogOption('quest_earth_cult')}>
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
        if (townIsOnFire) {
          return (
            <>
              <p>
                "Those bastards from the new temple were just here!
                Said they were doubling our taxes.
                They cleaned me out, but I'm one of the lucky ones.
              </p>
              <p>
                Farmer Jajika and Keks the Chemist couldn't pay up and they got dragged off.
                If only I were a young man again... with both my arms, that is..."
              </p>
              <Link onClick={() => setSelectedDialogOption('none')}>
                Ask about something else
              </Link>
            </>
          )
        }
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
      case 'quest_farmer_kobolds':
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
      case 'quest_earth_cult':
        return (
          <>
            <p>
              "Fight the heaven cult? You'll need all the help you can get.
              I remember when the messenger came to our village.
              I was 10 years old. There were some of us who wanted to fight."
            </p>
            <Link onClick={() => setSelectedDialogOption('quest_earth_cult_2')}>
              "What happened?"
            </Link>
          </>
        );
      case 'quest_earth_cult_2':
        return (
          <>
            <p>
              "They came over the horizon on their golden chariots.
            </p>
            <p>
              There was a flash of light and when I looked down my arm was gone.
              Never saw a drop of blood.
            </p>
            <p>
              My father, my brother, and half the men in the town were turned to dust in an instant.
              After that, nobody talked about fighting back.
              We just paid our taxes and counted ourselves lucky to be alive."
            </p>
            <Link onClick={() => setSelectedDialogOption('none')}>
              "Sounds rough, dude"
            </Link>
          </>
        );
      default:
        // unreachable
        throw new Error();
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
