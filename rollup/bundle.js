import deepmerge from 'deepmerge';
import path from 'path';
import DEFAULT_BUILD, {components, SRC_COMPONENTS} from './base';


export default deepmerge(DEFAULT_BUILD, {
    input: path.resolve(__dirname, '../origami-zen.ts'),
    output: {
        name: 'zen',
        file: path.resolve(__dirname, '../origami-zen.js')
    }
});
