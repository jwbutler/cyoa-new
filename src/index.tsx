import { Town } from './game/scenes/town/Town';
import { Armorer } from './game/scenes/town/Armorer';
import './index.css';
import { Engine } from './engine/components/Engine';
import { SpellShop } from './game/scenes/town/SpellShop';
import { Tavern } from './game/scenes/town/Tavern';
import { TavernBartender } from './game/scenes/town/TavernBartender';
import { TavernFarmer } from './game/scenes/town/TavernFarmer';
import { Container } from './ui/components/Container';
import { type ComponentChild, render } from 'preact';
import { RoadToTheSouth } from './game/scenes/world/RoadToTheSouth';
import { RoadToTheNorth } from './game/scenes/world/RoadToTheNorth';
import { OutsideTown } from './game/scenes/world/OutsideTown';
import { OutsideTemple } from './game/scenes/world/OutsideTemple';
import { InsideTemple } from './game/scenes/temple/InsideTemple';
import { TempleCatacombs } from './game/scenes/temple/TempleCatacombs';
import { InnerSanctum } from './game/scenes/temple/InnerSanctum';
import { SceneName } from './game/types';
import { TitleScreen } from './game/components/TitleScreen';

const scenes: Record<SceneName, ComponentChild> = {
  [SceneName.ARMORER]: Armorer,
  [SceneName.INSIDE_TEMPLE]: InsideTemple,
  [SceneName.OUTSIDE_TEMPLE]: OutsideTemple,
  [SceneName.OUTSIDE_TOWN]: OutsideTown,
  [SceneName.ROAD_TO_THE_NORTH]: RoadToTheNorth,
  [SceneName.ROAD_TO_THE_SOUTH]: RoadToTheSouth,
  [SceneName.SPELL_SHOP]: SpellShop,
  [SceneName.TITLE]: TitleScreen,
  [SceneName.TAVERN]: Tavern,
  [SceneName.TAVERN_BARTENDER]: TavernBartender,
  [SceneName.TAVERN_FARMER]: TavernFarmer,
  [SceneName.TEMPLE_CATACOMBS]: TempleCatacombs,
  [SceneName.TEMPLE_INNER_SANCTUM]: InnerSanctum,
  [SceneName.TOWN]: Town
};

const App = () => {
  return (
    <Engine
      scenes={scenes}
      initialScene={SceneName.TITLE}
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