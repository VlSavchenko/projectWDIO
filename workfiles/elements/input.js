import BaseElement from './BaseElement';

export default class Input extends BaseElement{

    async setValue(value){
        await $(this.locator).setValue(value);
    }
    
}