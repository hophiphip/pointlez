# pointlez
Library for templating DOM on a web page.

# Installation
```sh
npm install pointlez
```

# Using the CDN
```html
<script defer src="https://unpkg.com/pointlez@latest/dist/pointlez.umd.js"></script>
```

# Usage
## Replace with string
```html
<template data-from-string="<p>Some text</p>"></template>
```
will be replaced with
```html
<p>Some text</p>
```

## Replace with file
```html
<template data-from-file="footer.html"></template>
```
Will be replaced with contents of a file that is accessed from `/footer.html` url.
