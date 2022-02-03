/**
 * Wait for element to load and then return it.
 *
 * @param {keyof HTMLElementTagNameMap} selector
 * @returns {Promise<Node>}
 */
export function wait(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}