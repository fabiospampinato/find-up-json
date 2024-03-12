
/* IMPORT */

import findUpPath from 'find-up-path';
import {Buffer} from 'node:buffer';
import fs from 'node:fs';
import process from 'node:process';
import {attempt} from './utils';
import type {Result} from './types';

/* MAIN */

const findUp = ( fileName: string, folderPath: string = process.cwd (), maxDepth: number = 25 ): Result | undefined => {

  const path = findUpPath ( fileName, folderPath, maxDepth );

  if ( !path ) return;

  const buffer = attempt ( () => fs.readFileSync ( path ), Buffer.alloc ( 0 ) ); // Attempting, as the file might not exist anymore, or we might not have access to it, etc.
  const content = attempt ( () => JSON.parse ( buffer.toString () ), {} ); // Attempting, as the file might contain comments, in practice

  return { path, buffer, content };

};

/* EXPORT */

export default findUp;
export type {Result};
