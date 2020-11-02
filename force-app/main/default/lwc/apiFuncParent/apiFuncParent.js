import { LightningElement, api } from 'lwc';

export default class ApiFuncParent extends LightningElement {
    passDate(event){
        this.template.querySelector('c-api-func-child').handleDate(event.target.value);
    }
}