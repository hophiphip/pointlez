/**
 * Wait for element to load and then return it.
 *
 * @param {keyof HTMLElementTagNameMap} selector
 * @returns {Promise<Node>}
 */
function waitForElement(selector) {
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

/**
 * Replace an element with html string.
 * 
 * @param {keyof HTMLElementTagNameMap} selector
 * @param {string} htmlString
 */
export function replaceWithString(selector, htmlString) {
  console.log(typeof htmlString);

  waitForElement(selector)
    .then(element => {
      const parser = new DOMParser();
      const content = parser.parseFromString(htmlString, 'text/xml').documentElement;
      
      const errorNode = content.querySelector('parsererror');
      
      if (errorNode) 
        console.error(errorNode);
      else 
        element.replaceWith(content);
    })
    .catch(err => console.error(err));
}

/**
 * Replace an element with a html file content.
 * 
 * @param {keyof HTMLElementTagNameMap} selector
 * @param {string} url
 */
export function replaceWithFile(selector, url) {
  waitForElement(selector)
    .then(element => {
      fetch(url)
        .then(response => response.text())
        .then(text => {
          const parser = new DOMParser();
          const htmlContent = parser.parseFromString(text, 'text/html').documentElement;

          const errorNode = htmlContent.querySelector('parsererror');

          if (errorNode) {
            console.error(errorNode);
          }
          else {
            const htmlBody = htmlContent.querySelector('body');
            
            element.replaceWith(...htmlBody.children);
          }
        })
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
}
