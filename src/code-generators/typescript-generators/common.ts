import { Generatable } from 'typescript-parser/src';

/**
 * Generates typescript code for a string import.
 * 
 * @export
 * @param {StringImport} imp 
 * @param {TypescriptGenerationOptions} { stringQuoteStyle, eol } 
 * @returns {string} 
 */
export function generateCommon(declaration: Generatable, sourceFileCode: string = ''): string {
    return sourceFileCode.substr((<any>declaration).start, (<any>declaration).end - (<any>declaration).start);
}
