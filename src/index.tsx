import { Town } from './game/scenes/town/Town';
import { Blacksmith } from './game/scenes/town/Blacksmith';
import './index.css';
import { Engine } from './engine/components/Engine';
import { SpellShop } from './game/scenes/town/SpellShop';
import { Tavern } from './game/scenes/town/Tavern';
import { TavernBartender } from './game/scenes/town/TavernBartender';
import { TavernFarmer } from './game/scenes/town/TavernFarmer';
import { Container } from './ui/components/Container';
import { type ComponentChild, render } from 'preact';
import { RoadToTheSouth } from './game/scenes/RoadToTheSouth';
import { RoadToTheNorth } from './game/scenes/RoadToTheNorth';
import { OutsideTown } from './game/scenes/OutsideTown';
import { OutsideTemple } from './game/scenes/temple/OutsideTemple';
import { InsideTemple } from './game/scenes/temple/InsideTemple';
import { TempleCatacombs } from './game/scenes/temple/TempleCatacombs';
import { InnerSanctum } from './game/scenes/temple/InnerSanctum';

type SceneName =
  | 'blacksmith'
  | 'inside_temple'
  | 'outside_temple'
  | 'outside_town'
  | 'road_to_the_north'
  | 'road_to_the_south'
  | 'spell_shop'
  | 'tavern'
  | 'tavern_bartender'
  | 'tavern_farmer'
  | 'temple_catacombs'
  | 'temple_inner_sanctum'
  | 'town'
  ;

const scenes: Record<SceneName, ComponentChild> = {
  'blacksmith': Blacksmith,
  'inside_temple': InsideTemple,
  'outside_temple': OutsideTemple,
  'outside_town': OutsideTown,
  'road_to_the_north': RoadToTheNorth,
  'road_to_the_south': RoadToTheSouth,
  'spell_shop': SpellShop,
  'tavern': Tavern,
  'tavern_bartender': TavernBartender,
  'tavern_farmer': TavernFarmer,
  'temple_catacombs': TempleCatacombs,
  'temple_inner_sanctum': InnerSanctum,
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
      variables={{
        booleans: {
          'catacombs_kobold': true
        }
      }}
    />
  );
};

const root = document.getElementById('app')!;
render(<App />, root);