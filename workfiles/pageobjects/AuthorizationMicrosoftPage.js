import BasePage from './BasePage';
import Button from '../elements/button.js';
import Input from '../elements/input.js';
import Image from '../elements/image.js';
import PersonalData from '../utils/PersonalData';

const personalData = new PersonalData();

export default class authMicrosoft extends BasePage {

    constructor(){
        super();
        this.elemConfirmLoad = this.imgMicrosoft;
    }

    get imgMicrosoft () {
        return new Image('Image microsoft', '//img[@class="logo"]');
    }

    get inputPassword(){
        return new Input('Input password', '//input[@name="passwd"]');
    }

    get btnSubmit(){
        return new Button('Button submit', '//input[@id="idSIButton9"]');
    }

    get btnSetOption(){
        return new Button('Button set option', '//input[@id="idBtn_Back"]');
    }

    async setPassword(password){
        await this.inputPassword.setValue( await personalData.getData(password) );
    }

    async btnSubmitClick(){
        await this.btnSubmit.click();
    }

    async btnSetOptionClick(){
        await this.btnSetOption.click();
    }

}

