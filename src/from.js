import { parse } from './utils/parse.js';
import { replace } from './utils/replace.js';
import { wait } from './utils/wait.js';


/**
 * Replace an element with html string.
 * 
 * @param {keyof HTMLElementTagNameMap} selector
 * @param {string} text
 */
 export function fromString(selector, text) {
    wait(selector)
        .then(element => {
            const content = parse(text);

            if (content) {
                replace(element, content);
            }
        })
        .catch(err => console.error(err));
}

/**
 * Replace an element with a html file content.
 * 
 * @param {keyof HTMLElementTagNameMap} selector
 * @param {string} fileUrl
 */
export function fromFile(selector, fileUrl) {
    wait(selector)
        .then(element => {
            fetch(fileUrl)
                .then(response => response.text())
                .then(text => {
                    const content = parse(text);

                    if (content) {
                        replace(element, content);
                    }
                })
                .catch(err => console.error(err));
        })
        .catch(err => console.error(err));
}