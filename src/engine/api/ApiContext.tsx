import { Context, createContext } from 'preact';
import { GameApi } from './GameApi';

export const ApiContext: Context<GameApi> = createContext(undefined) as Context<GameApi>;
