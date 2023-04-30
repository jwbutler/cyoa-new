import { useApi } from '../api/useApi';
import { checkNotNull } from '../../preconditions';
import { ApiContext } from '../api/ApiContext';
import type { ComponentChildren, ComponentChild } from 'preact';

export type ContainerProps = Readonly<{
  children: ComponentChildren
}>;
export type ContainerComponent = ({ children }: ContainerProps) => ComponentChild;

export type GameDefinition = Readonly<{
  scenes: Record<string, ComponentChild>,
  initialScene: string,
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
  initialScene,
  player,
  variables,
  Container
}: GameDefinition) => {
  const api = useApi({
    player,
    variables,
    scene: initialScene
  });

  const Scene = checkNotNull(scenes[api.scene]);
  const scene = <Scene />;
  const content = (Container)
    ? <Container>{scene}</Container>
    : scene;

  return (
    <ApiContext.Provider value={api}>
      {content}
    </ApiContext.Provider>
  );
};
