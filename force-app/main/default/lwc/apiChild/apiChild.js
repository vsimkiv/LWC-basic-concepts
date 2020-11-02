import { LightningElement, api } from 'lwc';

export default class ApiChild extends LightningElement {
    @api publicMessage = "DEFAULT";
    privateMessage = "DEFAULT";
}