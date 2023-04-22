import * as React from 'react';
import type { ReactElement, ReactNode } from 'react';
import { type GameApi, useApi } from '../api';
import { checkNotNull } from '../preconditions';
import { Route, Routes, useParams } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

export type SceneType = ({
  api: GameApi
}) => ReactElement;

export type ContainerProps = Readonly<{
  api: GameApi,
  children: ReactNode
}>;
export type ContainerComponent = (props: ContainerProps) => ReactElement;

type Props = {
  scenes: Record<string, SceneType>,
  initialScene: string,
  container?: ContainerComponent
};

export const Engine = ({ scenes, initialScene, container }: Props) => {
  const api = useApi();

  const sceneRoute = () => {
    const { sceneName } = useParams<{ sceneName: string }>();
    const scene = checkNotNull(scenes[sceneName]);
    return scene({ api });
  };

  const defaultRoute = () => {
    const scene = checkNotNull(scenes[initialScene]);
    return scene({ api });
  };

  const content = (
    <BrowserRouter>
      <Routes>
        <Route
          path="/:sceneName"
          Component={sceneRoute}
        />
        <Route
          path="/"
          Component={defaultRoute}
        />
      </Routes>
    </BrowserRouter>
  );

  if (container) {
    return container({ api, children: content });
  }
  return content;
};