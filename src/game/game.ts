import type { GameDefinition, SceneType } from '../engine/components/Engine';
import { Container } from '../ui/components/Container';
import { InnerSanctum } from './scenes/temple/InnerSanctum';
import { InsideTemple } from './scenes/temple/InsideTemple';
import { TempleCatacombs } from './scenes/temple/TempleCatacombs';
import { Armorer } from './scenes/town/Armorer';
import { Shopkeeper } from './scenes/town/Shopkeeper';
import { Tavern } from './scenes/town/Tavern';
import { TavernBartender } from './scenes/town/TavernBartender';
import { TavernFarmer } from './scenes/town/TavernFarmer';
import { Town } from './scenes/town/Town';
import { OutsideTemple } from './scenes/world/OutsideTemple';
import { RoadToTheNorth } from './scenes/world/RoadToTheNorth';
import { BooleanFlag, SceneName } from './types';

const scenes: Record<SceneName, SceneType> = {
  [SceneName.ARMORER]: Armorer,
  [SceneName.INSIDE_TEMPLE]: InsideTemple,
  [SceneName.OUTSIDE_TEMPLE]: OutsideTemple,
  [SceneName.ROAD_TO_THE_NORTH]: RoadToTheNorth,
  [SceneName.SHOPKEEPER]: Shopkeeper,
  [SceneName.TAVERN]: Tavern,
  [SceneName.TAVERN_BARTENDER]: TavernBartender,
  [SceneName.TAVERN_FARMER]: TavernFarmer,
  [SceneName.TEMPLE_CATACOMBS]: TempleCatacombs,
  [SceneName.TEMPLE_INNER_SANCTUM]: InnerSanctum,
  [SceneName.TOWN]: Town
};

const player = {
  inventory: [],
  spells: [],
  quests: [],
  gold: 0
};

const variables = {
  booleans: {
    [BooleanFlag.CATACOMBS_KOBOLD]: true,
    [BooleanFlag.UNLOCKED_TEMPLE]: false,
    [BooleanFlag.JOINED_EARTH_CULT]: false,
    [BooleanFlag.TOWN_ON_FIRE]: false
  }
};

export const getGameDefinition = (): GameDefinition => ({
  scenes,
  startingLocation: {
    scene: SceneName.TOWN,
    direction: null
  },
  Container,
  player,
  variables
});