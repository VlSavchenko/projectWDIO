import data from '../consts/personaldata.json'

export default class PersonalData{
    constructor(){
        this.pData = data;
    }

    async getData(key){
        return this.pData[key];
    }

}
