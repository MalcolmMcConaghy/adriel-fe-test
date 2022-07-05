import { atom } from 'recoil';

export const timeState = atom({
    key: 'time',
    default: new Date(),
});