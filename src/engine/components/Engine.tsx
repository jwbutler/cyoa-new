import type { ComponentChild, ComponentChildren } from 'preact';
import { checkNotNull } from '../../utils/preconditions';
import { ApiContext } from '../api/ApiContext';
import type { Direction, Location } from '../api/GameApi';
import { useApi } from '../api/useApi';
import { useEffect } from 'preact/compat';

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

  useEffect(() => {
    const focusableElements = [...document.querySelectorAll('[tabindex="0"]')];
    let index = focusableElements.indexOf(document.activeElement);
    console.log(focusableElements);
    if (index < 0) {
      focusableElements[0].focus();
    }
    const keyHandler = (e: KeyboardEvent) => {
      const focusableElements = [...document.querySelectorAll('[tabindex="0"]')];
      let index = focusableElements.indexOf(document.activeElement);
      console.log(focusableElements);
      switch (e.key) {
        case 'ArrowDown':
          index = (index + 1) % focusableElements.length;
          focusableElements[index].focus();
          break;
        case 'ArrowUp':
          index = (index === 0) ? focusableElements.length - 1 : index - 1;
          focusableElements[index].focus();
          break;
      }
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
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
