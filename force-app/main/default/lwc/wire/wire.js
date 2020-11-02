import { LightningElement, wire, track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountUtils.getAccountList';

export default class Wire extends LightningElement {
    @wire(getAccountList) 
    accounts;

    @track accountsList;
    showAccounts;
    
    onShowClick(){
        getAccountList()
        .then(result => {
                this.accountsList = result;
                this.showAccounts = true;
        })
        .catch(error => {
            console.log('Error Occured:- '+error.body.message);
        });
    }

    onHideClick(){
        this.showAccounts = false;
    }
}