import BasePage from './BasePage';
import Button from '../elements/button.js';
import Input from '../elements/input.js';
import PersonalData from '../utils/PersonalData';

const personalData = new PersonalData();

export default class LoginPage extends BasePage {

    constructor(){
        super();
        this.elemConfirmLoad = null;
    }

    get inputUsername () {
        return new Input('username input', '//*[@id="loginoauth"]');
    }

    get btnSubmit () {
        return new Button('Button submit', '//*[@id="signoauthin_b"]');
    }

    async inputUsernameSetValue (login) {
        await this.inputUsername.setValue( await personalData.getData(login) );
    }

    async btnSubmitClick(){
        await this.btnSubmit.click();
    }

}


