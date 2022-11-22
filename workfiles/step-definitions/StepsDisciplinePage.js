import { When, Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';

import DisciplinesPage from '../pageobjects/DisciplinesPage';

const disciplinesPage = new DisciplinesPage();

Then('Открыта страница со списком учебных дисциплин.', async()=>{
    expect(await disciplinesPage.pageIsOpen(), 'Целевой элемент не отображается на странице').to.be.true;
});

When('Нажимаем на кнопку "Семестр".', async()=>{
    await disciplinesPage.btnChangeSemesterClick();
});

When('Нажимаем на кнопку "Весна 2022".', async()=>{
    await disciplinesPage.btnTargetSemesterClick();
});

Then('Открыта страница со списком учебных дисциплин за весну 2022 года.', async()=>{
    expect(await disciplinesPage.pageIsOpen(), 'Целевой элемент не отображается на странице').to.be.true;
});

When('Нажимаем на текст "Дисциплины по физической культуре и спорту".', async()=>{
    await disciplinesPage.btnTargetDisciplineNameClick();
});

Then('Открыта страница учебной карты дисциплины.', async()=>{
    expect(await disciplinesPage.pageIsOpen(), 'Целевой элемент не отображается на странице').to.be.true;
});

When('Нажимаем на кнопку "Журнал посещений".', async()=>{
    await disciplinesPage.btnVisitListClick();
});

Then('Открыта страница со списком посещений.', async()=>{
    expect(await disciplinesPage.pageIsOpen(), 'Целевой элемент не отображается на странице').to.be.true;
});

Then('Количество посещений должно быть равно {int}.', async(visitCount)=>{
    expect(await disciplinesPage.checkVisitCount(),).to.equal(visitCount, 'The values are not equal');
});
