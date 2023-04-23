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

type SceneName =
  | 'blacksmith'
  | 'dungeon'
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