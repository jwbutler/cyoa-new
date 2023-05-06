import type { ComponentChild, ComponentChildren } from 'preact';
import { checkNotNull } from '../../utils/preconditions';
import { ApiContext } from '../api/ApiContext';
import type { Direction, Location } from '../api/GameApi';
import { useApi } from '../api/useApi';

export type ContainerProps = Readonly<{
  children: ComponentChildren
}>;
export type ContainerComponent = ({ children }: ContainerProps) => ComponentChild;

export type SceneProps = Readonly<{
  direction: Direction
}>;

export type SceneType =
  | (() => ComponentChild)
  | ((props: SceneProps) => ComponentChild);

export type GameDefinition = Readonly<{
  scenes: Record<string, SceneType>,
  startingLocation: Location,
  player: {
    inventory: string[],
    spells: string[],
    quests: string[],
    gold: number,
  },
  variables?: {
    booleans?: Record<string, boolean>
  },
  // this looks redundant
  Container?: ContainerComponent | undefined
}>;

export const Engine = ({
  scenes,
  startingLocation,
  player,
  variables,
  Container
}: GameDefinition) => {
  const api = useApi({
    player,
    variables,
    location: startingLocation
  });

  const { scene, direction } = api.location;
  const Scene = checkNotNull(scenes[scene]);
  const child = <Scene direction={direction} />;

  const content = (Container)
    ? <Container>{child}</Container>
    : child;

  return (
    <ApiContext.Provider value={api}>
      {content}
    </ApiContext.Provider>
  );
};
