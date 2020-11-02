import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub' ; 
export default class Publisher extends LightningElement {

    handleClick(){
        let message = {
            "message" : 'Hello PubSub'
        }
        pubsub.fire('myEvent', message );
    }
}