import { Context, createContext } from 'react';
import { GameApi } from './api';

export const ApiContext: Context<GameApi> = createContext(undefined) as Context<GameApi>;