import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub' ; 
export default class PubsubSubscriber extends LightningElement {

    message;
    connectedCallback(){
        this.register();
    }
    register(){
        pubsub.register('myEvent', this.handleEvent.bind(this));
    }
    
    handleEvent(messageFromEvt){
        this.message = messageFromEvt 
                    ? JSON.stringify(messageFromEvt, null, '\t') 
                    : 'no message payload';
    }
}