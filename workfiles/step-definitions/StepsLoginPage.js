import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/LoginPage';


const loginPage = new LoginPage();

Given('Страница авторизации открыта.', async () => {
    await loginPage.open();
});

When('Вводим логин {string} в поле.', async (login) => {
    await loginPage.inputUsernameSetValue(login);
});

When('Нажимаем кнопку "Войти через сервис Microsoft".', async()=>{
    await loginPage.btnSubmitClick();
});