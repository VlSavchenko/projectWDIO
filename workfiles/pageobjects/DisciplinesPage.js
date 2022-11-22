import BasePage from './BasePage';
import Button from '../elements/button.js';
import TextField from '../elements/textField.js';

export default class DisciplinesPage extends BasePage{

    constructor(){
        super();
        this.elemConfirmLoad = this.pageLable;
    }

    get pageLable(){
        return new TextField('Page lable', '//div[@class="main_top"]/child::h3')
    }

    get btnTargetDisciplineName(){
        return new Button('Link target discipline name', '//a[contains(text(), "Дисциплины по физической культуре")]');
    }

    get btnVisitList(){
        return new Button('Button visit list', '//a[contains(text(),"Журнал ")]');
    }

    get visitCountList(){
        return new TextField('Visit count list item', '//div[contains(@class, "submoduleBlock")]');
    }

    get btnChangeSemester(){
        return new Button('Button change semester', '//a[@id="changeSemester"]');
    }

    get btnTargetSemester(){
        return new Button('Button target semester', '//a[contains(text(), "Весна 2022")]')
    }

    async btnTargetDisciplineNameClick(){
        await this.btnTargetDisciplineName.click();
    }

    async btnVisitListClick(){
        await this.btnVisitList.click();
    }

    async btnChangeSemesterClick(){
        await this.btnChangeSemester.click();
    }

    async btnTargetSemesterClick(){
        await this.btnTargetSemester.click();
    }

    async checkVisitCount(){
        return (await $$(this.visitCountList.locator)).length
    }
}
