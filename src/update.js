import { parse } from './utils/parse.js';
import { replace } from './utils/replace.js';

/** @constant {string} */
const dataFromStringTag = '[data-from-string]';

/** @constant {string} */
const dataFromFileTag = '[data-from-file]'

/**
 * Replace all elements with tag {dataFromStringTag} with provided dataset attribute string contents.
 */
 export function updateFromString() {
    document.querySelectorAll(dataFromStringTag).forEach(element => {
        const text = element.dataset.fromString;

        if (element.dataset.fromString) {
            const content = parse(text);
            
            if (content) {
                replace(element, content);
            }
        }
    });
}

/**
 * Replace all elements with tag {dataFromFileTag} with file in provided url in attribute.
 */
export function updateFromFile() {
    document.querySelectorAll(dataFromFileTag).forEach(element => {
        const url = element.dataset.fromFile;

        fetch(url)
            .then(response => response.text())
            .then(text => {
                const content = parse(text);
                
                if (content) {
                    replace(element, content);
                }
            })
            .catch(err => console.error(err));
    });
}