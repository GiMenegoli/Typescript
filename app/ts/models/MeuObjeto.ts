import {Imprimivel} from './imprimivel';
import {Igualavel} from './igualavel';


export interface MeuObjeto<T> extends Imprimivel, Igualavel<T>{


}