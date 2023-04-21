import * as React from 'react';
import { ReactElement, useState } from 'react';
import { useApi } from '../api';
import { checkNotNull } from '../preconditions';
import { Route, Routes, useNavigate, useParams } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

export type SceneType = ({
  api: GameAPI
}) => ReactElement;

export type ContainerType = ({
  api: GameAPI,
  children: ReactNode
}) => ReactElement;

type Props = {
  scenes: Record<string, SceneType>,
  initialScene: string,
  container?: ContainerType
};

export const Engine = ({ scenes, initialScene, container }: Props) => {
  const api = useApi();

  const sceneRoute = () => {
    const { sceneName } = useParams<{ sceneName: string }>();
    const scene = checkNotNull(scenes[sceneName]);
    return scene({ api });
  };

  const defaultRoute = () => {
    console.log('default');
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