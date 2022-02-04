import { updateSpecificFromFile, updateSpecificFromString } from './utils/update.js';


/** @constant {string} */
const dataFromStringTag = '[data-from-string]';

/** @constant {string} */
const dataFromFileTag = '[data-from-file]'


export function updateFromString() {
    updateSpecificFromString(dataFromStringTag);
}

export function updateFromFile() {
    updateSpecificFromFile(dataFromFileTag);
}

export function start() {
    if (document.body) {
        updateFromString();
        updateFromFile();
    }
}