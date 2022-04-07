
/* IMPORT */

import fs from 'node:fs';
import path from 'node:path';
import type {Result} from './types';

/* MAIN */

const findUp = ( fileName: string, folderPath: string = process.cwd (), maxDepth: number = 25 ): Result | undefined => {

  let filePath = path.normalize ( path.join ( folderPath, fileName ) );
  let depth = 1;

  while ( true ) {

    if ( depth > maxDepth ) return;

    let buffer: Buffer | undefined = undefined;

    try {

      buffer = fs.readFileSync ( filePath );

    } catch {}

    if ( buffer ) {

      const content = JSON.parse ( buffer.toString () );

      return { path: filePath, buffer, content };

    } else {

      const filePathNext = path.normalize ( path.join ( path.resolve ( folderPath, '..' ), fileName ) );

      if ( filePathNext === filePath ) return;

      filePath = filePathNext;
      depth += 1;

    }

  }

};

/* EXPORT */

export default findUp;
