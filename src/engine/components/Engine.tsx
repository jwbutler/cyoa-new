import * as React from 'react';
import type { ReactElement, ReactNode } from 'react';
import { useApi } from '../api/api';
import { checkNotNull } from '../../preconditions';
import { ApiContext } from '../api/ApiContext';

export type SceneType = ({
  api: GameApi
}) => ReactElement;

export type ContainerProps = Readonly<{
  children: ReactNode
}>;
export type ContainerComponent = (props: ContainerProps) => ReactElement;

type Props = Readonly<{
  scenes: Record<string, SceneType>,
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