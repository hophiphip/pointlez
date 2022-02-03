import Pointlez from "./pointlez";


// Initalize / start (parse html and look for specific attributes)
if (!document.body) {
    console.error('Unable to initialize.');
} else {

    // Parse string-data elements
    document.querySelectorAll('[data-from-string]').forEach(element => {
        const content = element.dataset.fromString;
        replaceWithString('[data-from-string]', content);
    });

    // Parse file-data elements
    document.querySelectorAll('[data-from-file]').forEach(element => {
        const content = element.dataset.fromFile;
        replaceWithFile('[data-from-file]', content);
    });
}