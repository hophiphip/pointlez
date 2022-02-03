import { updateFromFile, updateFromString } from './update.js';

export function start() {
    if (document.body) {
        updateFromString();
        updateFromFile();
    }
}