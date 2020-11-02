import { LightningElement, api } from 'lwc';

export default class ApiFuncChild extends LightningElement {
    message;
    
    @api 
    handleDate(date){
        this.message = "Next meeting will be on " + date;
    }
}