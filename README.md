# pointlez
Library for templating DOM on a web page.

# Installation
```sh
npm install pointlez
```

# Usage
```html
<!DOCTYPE html>
<html lang="en">

<head>
  ...
</head>

<body>
  <template id="app"></template>
  <template id="footer"></template>
</body>

</html>
```

```js
import { replaceWithString, replaceWithFile } from 'pointlez';

// Create a file `/templates/app.html` and then import it
replaceWithFile('#app', 'templates/app.html');

replaceWithString('#footer', '<p>Footer</p>');
```

# Using the CDN
```html
<script defer src="https://unpkg.com/pointlez@latest/dist/pointlez.umd.js"></script>
```
