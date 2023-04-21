import * as React from 'react';
import { Town } from './scenes/town';
import { Blacksmith } from './scenes/blacksmith';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ContainerType, Engine, SceneType } from './components/Engine';

type SceneName = 'town' | 'blacksmith';

const scenes: Record<SceneName, SceneType> = {
  'town': Town,
  'blacksmith': Blacksmith
};

const Container: ContainerType = ({ api, children }) => {
  return (
    <div>
      {children}
      <div>Gold: {api.state.gold}</div>
      <div>Items: {JSON.stringify(api.state.inventory)}</div>
    </div>
  );
};

const App = () => {
  return (
    <React.StrictMode>
      <Engine
        scenes={scenes}
        initialScene="town"
        container={Container}
      />
    </React.StrictMode>
  );
};

const root = document.getElementById('app')!;
createRoot(root).render(<App />);