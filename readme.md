# Find Up JSON

Find, read and parse the first matching file found walking the filesystem upwards.

Compared to alternatives this library is _tiny_, it has no dependencies, and it can be bundled without problems.

## Install

```sh
npm install find-up-json
```

## Usage

```ts
import findUp from 'find-up-json';

// Let's find the nearest `package.json` file

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
