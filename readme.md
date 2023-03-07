# Find Up JSON

Find, read and parse the first matching file found walking the filesystem upwards.

Compared to alternatives this library is *tiny*, it has no dependencies, and it can be bundled without problems.

## Install

```sh
npm install --save find-up-json
```

## Usage

```ts
import findUp from 'find-up-json';

const pkg = findUp ( 'package.json' );

// =>
// {
//   path: '/path/to/found/package.json',
//   buffer: BufferContentOfFile,
//   content: {
//     // Result of JSON-parsing the content of the file
//     "name": "something..."
//     // ...
//   }
// }
```

## License

MIT © Fabio Spampinato
