<h1 align="center">lettersanitizer</h1>

<p align="center">
DOM-based HTML email sanitizer for in-browser email rendering.
</p>

<p align="center">
<img alt="workflow" src="https://img.shields.io/github/workflow/status/mat-sz/lettersanitizer/Node.js%20CI%20(yarn)">
<a href="https://npmjs.com/package/lettersanitizer">
<img alt="npm" src="https://img.shields.io/npm/v/lettersanitizer">
<img alt="npm" src="https://img.shields.io/npm/dw/lettersanitizer">
<img alt="NPM" src="https://img.shields.io/npm/l/lettersanitizer">
</a>
</p>

Used in [react-letter](https://github.com/mat-sz/react-letter) and [vue-letter](https://github.com/mat-sz/vue-letter).

## Installation

**lettersanitizer** is available on [npm](https://www.npmjs.com/package/lettersanitizer), you can install it with either npm or yarn:

```sh
npm install lettersanitizer
# or:
yarn install lettersanitizer
```

## Example usage

```ts
import { sanitize } from 'lettersanitizer';

sanitize('<b>test</b><script>test</script>', '', { id: 'test' });
// <div id="test"><b>test</b></div>
```
