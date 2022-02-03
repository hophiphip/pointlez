/**
 * Replace node with html element contents.
 * 
 * @param {Node} element 
 * @param {HTMLCollection} content 
 */
export function replace(element, content) {
    element.replaceWith(...content); 
}