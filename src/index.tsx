import { render } from 'preact';
import { useState } from 'preact/compat';
import { Engine } from './engine/components/Engine';
import { TitleScreen } from './game/components/TitleScreen';
import { getGameDefinition } from './game/game';
import './index.css';

const App = () => {
  const [showTitle, setShowTitle] = useState(true);
  if (showTitle) {
    return (
      <TitleScreen
        onStartGame={() => setShowTitle(false)}
      />
    );
  }

  const gameDefinition = getGameDefinition();

  // I want to use the spread operator but it's not type safe
  return (
    <Engine
      scenes={gameDefinition.scenes}
      startingLocation={gameDefinition.startingLocation}
      Container={gameDefinition.Container}
      player={gameDefinition.player}
      variables={gameDefinition.variables}
    />
  );
};

const root = document.getElementById('app')!;
render(<App />, root);
