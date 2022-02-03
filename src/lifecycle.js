export function start() {
    // `body` is undefined 
    //  -> `html` is not yet parsed 
    //      -> `defer` was not added to script tag
    //
    if (document.body) {
        
    }
}