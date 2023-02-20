
/* IMPORT */

import {describe} from 'fava';
import path from 'node:path';
import findUp from '../dist/index.js';

/* MAIN */

describe ( 'findUp', it => {

  it ( 'can find a file from the cwd', t => {

    const {content} = findUp ( 'package.json' );

    t.is ( content.name, 'find-up-json' );

  });

  it ( 'can find a file from a custom folder', t => {

    const {content} = findUp ( 'package.json', path.resolve ( './test' ) );

    t.is ( content.name, 'find-up-json' );

  });

  it ( 'can find a file from a custom folder, recursing up', t => {

    const {content} = findUp ( 'package.json', path.resolve ( './test/fixtures' ) );

    t.is ( content.name, 'find-up-json' );

  });

  it ( 'does not throw if the file cannot be parsed', t => {

    const {content} = findUp ( 'comments.jsonc', path.resolve ( './test/fixtures' ) );

    t.deepEqual ( content, {} );

  });

});
