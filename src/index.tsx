import { Town } from './game/scenes/Town';
import { Blacksmith } from './game/scenes/Blacksmith';
import './index.css';
import { Engine } from './engine/components/Engine';
import { SpellShop } from './game/scenes/SpellShop';
import { Tavern } from './game/scenes/Tavern';
import { TavernBartender } from './game/scenes/TavernBartender';
import { TavernFarmer } from './game/scenes/TavernFarmer';
import { Container } from './game/components/Container';
import { Dungeon } from './game/scenes/Dungeon';
import { type ComponentChild, render } from 'preact';
import { RoadToTheSouth } from './game/scenes/RoadToTheSouth';
import { RoadToTheNorth } from './game/scenes/RoadToTheNorth';
import { OutsideTown } from './game/scenes/OutsideTown';
import { OutsideTemple } from './game/scenes/OutsideTemple';
import { InsideTemple } from './game/scenes/InsideTemple';

type SceneName =
  | 'blacksmith'
  | 'dungeon'
  | 'inside_temple'
  | 'outside_temple'
  | 'outside_town'
  | 'road_to_the_north'
  | 'road_to_the_south'
  | 'spell_shop'
  | 'tavern'
  | 'tavern_bartender'
  | 'tavern_farmer'
  | 'town'
  ;

const scenes: Record<SceneName, ComponentChild> = {
  'blacksmith': Blacksmith,
  'dungeon': Dungeon,
  'inside_temple': InsideTemple,
  'outside_temple': OutsideTemple,
  'outside_town': OutsideTown,
  'road_to_the_north': RoadToTheNorth,
  'road_to_the_south': RoadToTheSouth,
  'spell_shop': SpellShop,
  'tavern': Tavern,
  'tavern_bartender': TavernBartender,
  'tavern_farmer': TavernFarmer,
  'town': Town
};

const App = () => {
  return (
    <Engine
      scenes={scenes}
      initialScene="town"
      Container={Container}
      player={{
        inventory: [],
        spells: [],
        quests: [],
        gold: 500
      }}
    />
  );
};

const root = document.getElementById('app')!;
render(<App />, root);