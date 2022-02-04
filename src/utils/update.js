import { parse } from './parse.js';
import { replace } from './replace.js';

// TODO: updaters must receive a second param -- a callback for each element

/**
 * Update all elements with provided selectors with string dataset.
 * 
 * @param {keyof HTMLElementTagNameMap} selectors 
 */
export function updateSpecificFromString(selectors) {
    document.querySelectorAll(selectors).forEach(element => {
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
 * Update all elements with provided selectors with file url dataset.
 * 
 * @param {keyof HTMLElementTagNameMap} selectors 
 */
export function updateSpecificFromFile(selectors) {
    document.querySelectorAll(selectors).forEach(element => {
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