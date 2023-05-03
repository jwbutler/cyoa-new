import type { GameDefinition, SceneType } from '../engine/components/Engine';
import { Container } from '../ui/components/Container';
import { EarthTempleInnerSanctum } from './scenes/earth_temple/EarthTempleInnerSanctum';
import { InsideEarthTemple } from './scenes/earth_temple/InsideEarthTemple';
import { EarthTempleCatacombs } from './scenes/earth_temple/EarthTempleCatacombs';
import { Armorer } from './scenes/town/Armorer';
import { Shopkeeper } from './scenes/town/Shopkeeper';
import { Tavern } from './scenes/town/Tavern';
import { TavernBartender } from './scenes/town/TavernBartender';
import { TavernFarmer } from './scenes/town/TavernFarmer';
import { Town } from './scenes/town/Town';
import { OutsideEarthTemple } from './scenes/world/OutsideEarthTemple';
import { RoadToTheNorth } from './scenes/world/RoadToTheNorth';
import { BooleanFlag, SceneName } from './types';
import { RoadToTheEast } from './scenes/world/RoadToTheEast';
import { InsideHeavenTemple } from './scenes/heaven_temple/InsideHeavenTemple';

const scenes: Record<SceneName, SceneType> = {
  [SceneName.ARMORER]: Armorer,
  [SceneName.INSIDE_EARTH_TEMPLE]: InsideEarthTemple,
  [SceneName.INSIDE_HEAVEN_TEMPLE]: InsideHeavenTemple,
  [SceneName.OUTSIDE_EARTH_TEMPLE]: OutsideEarthTemple,
  [SceneName.ROAD_TO_THE_EAST]: RoadToTheEast,
  [SceneName.ROAD_TO_THE_NORTH]: RoadToTheNorth,
  [SceneName.SHOPKEEPER]: Shopkeeper,
  [SceneName.TAVERN]: Tavern,
  [SceneName.TAVERN_BARTENDER]: TavernBartender,
  [SceneName.TAVERN_FARMER]: TavernFarmer,
  [SceneName.EARTH_TEMPLE_CATACOMBS]: EarthTempleCatacombs,
  [SceneName.EARTH_TEMPLE_INNER_SANCTUM]: EarthTempleInnerSanctum,
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
