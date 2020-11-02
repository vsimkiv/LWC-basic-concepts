import { LightningElement, track } from 'lwc';

export default class Track extends LightningElement {
    dog = {
        name: 'Rex',
        age: '3'
    };

    cat = {
        name: 'Simba',
        age: '4'
    };

    @track 
    pig = {
        name: 'Ham',
        age: '5'
    };

    updateDog(){
        this.dog = {
            name : 'Old Rex',
            age : '10'
        }
    }

    updateCat(){
        this.cat.name = 'Old Simba',
        this.cat.age = '11'
    }

    updatePig(){
        this.pig.name = 'Old Ham',
        this.pig.age = '12'
    }
}