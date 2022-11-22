import BaseElement from './BaseElement';

export default class Button extends BaseElement{

    async click(){
        await $(this.locator).click();
    }

}