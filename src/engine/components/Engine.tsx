import { useApi } from '../api/api';
import { checkNotNull } from '../../preconditions';
import { ApiContext } from '../api/ApiContext';
import type { ComponentChildren, ComponentChild } from 'preact';

export type ContainerProps = Readonly<{
  children: ComponentChildren
}>;
export type ContainerComponent = ({ children }: ContainerProps) => ComponentChild;

type Props = Readonly<{
  scenes: Record<string, ComponentChild>,
  initialScene: string,
  player: {
    inventory: string[],
    spells: string[],
    quests: string[],
    gold: number,
  },
  Container?: ContainerComponent
}>;

export const Engine = ({ scenes, initialScene, player, Container }: Props) => {
  const api = useApi({
    player,
    scene: initialScene
  });

  const Scene = checkNotNull(scenes[api.scene]);
  const content = <Scene api={api} />;

  return (
    <ApiContext.Provider value={api}>
      {
        (Container)
          ? <Container>{content}</Container>
          : content
      }
    </ApiContext.Provider>
  );
};