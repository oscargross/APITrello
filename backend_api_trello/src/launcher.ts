import { Routes } from './routes';
import { InitApp } from './app';

export const Launcher = () => {
    InitApp(Routes());
}