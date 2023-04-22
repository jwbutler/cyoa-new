import * as React from 'react';
import { Town } from './scenes/town';
import { Blacksmith } from './scenes/blacksmith';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Engine, SceneType } from './components/Engine';
import { SpellShop } from './scenes/SpellShop';
import { Tavern } from './scenes/Tavern';
import { TavernBartender } from './scenes/TavernBartender';
import { TavernFarmer } from './scenes/TavernFarmer';
import { Container } from './components/Container';

type SceneName =
  | 'town'
  | 'blacksmith'
  | 'spell_shop'
  | 'tavern'
  | 'tavern_bartender'
  | 'tavern_farmer';

const scenes: Record<SceneName, SceneType> = {
  'town': Town,
  'blacksmith': Blacksmith,
  'spell_shop': SpellShop,
  'tavern': Tavern,
  'tavern_bartender': TavernBartender,
  'tavern_farmer': TavernFarmer
};

const App = () => {
  return (
    <React.StrictMode>
      <Engine
        scenes={scenes}
        initialScene="town"
        container={Container}
      />
    </React.StrictMode>
  );
};

const root = document.getElementById('app')!;
createRoot(root).render(<App />);