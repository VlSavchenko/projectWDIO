import { When, Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';

import AuthMicrosoft from '../pageobjects/AuthorizationMicrosoftPage';

const authMicrosoft = new AuthMicrosoft();

Then('Открыта страница авторизации Microsoft.', async()=>{
    expect(await authMicrosoft.pageIsOpen(), 'Целевой элемент не отображается на странице').to.be.true;
});

When('Вводим пароль {string} от аккаунта Microsoft.', async (password) => {
    await authMicrosoft.setPassword(password);
});

When('Нажимаем кнопку "Войти".', async()=>{
    await authMicrosoft.btnSubmitClick();
});

When('В окне "Не выходить из системы?" нажимаем кнопку "Нет".', async()=>{
    await authMicrosoft.btnSetOptionClick();
});