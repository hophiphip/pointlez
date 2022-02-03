/**
 * Parse text into html.
 * 
 * @param {string} text
 * @returns {HTMLCollection|undefined}
 */
export function parse(text) {
    const parser = new DOMParser();
    const content = parser.parseFromString(text, 'text/html').documentElement;

    const error = content.querySelector('parsererror');

    return error ? undefined : content.querySelector('body').children;
}