import { Context, createContext } from 'preact';
import { GameApi } from './api';

export const ApiContext: Context<GameApi> = createContext(undefined) as Context<GameApi>;