import { URL, TIMEOUT } from '../consts/consts.json';

export default class BasePage{

    constructor(){
        this.url = URL;
    }

    open(){
        return browser.url(this.url);
    }

    async findElement(element, timeout=TIMEOUT){
        try{
            await ($(element.locator).waitForExist({
                timeout: timeout,
                timeoutMsg: `Элемент ${element.name} не найден после ${timeout} мс!!!`
            }))
        }catch(err){
            return false;
        }
        return true;     
    }

    async pageIsOpen(timeout = TIMEOUT){
        if(await this.findElement(this.elemConfirmLoad)){
            try{
                await ($(this.elemConfirmLoad.locator).waitForDisplayed({timeout: timeout}));
            }catch(err){
                return false;
            }   
            return true;
        }
        return false;
    }
}