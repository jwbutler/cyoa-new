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

type SceneName =
  | 'blacksmith'
  | 'dungeon'
  | 'spell_shop'
  | 'tavern'
  | 'tavern_bartender'
  | 'tavern_farmer'
  | 'town'
  ;

const scenes: Record<SceneName, ComponentChild> = {
  'blacksmith': Blacksmith,
  'dungeon': Dungeon,
  'spell_shop': SpellShop,
  'tavern': Tavern,
  'tavern_bartender': TavernBartender,
  'tavern_farmer': TavernFarmer,
  'town': Town
};

const App = () => {
  return (
    <React.StrictMode>
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
    </React.StrictMode>
  );
};

const root = document.getElementById('app')!;
render(<App />, root);