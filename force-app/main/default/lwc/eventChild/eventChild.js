import { LightningElement} from 'lwc';

export default class EventChild extends LightningElement {
    progressValue;
    
    handleChange(event) {
      this.progressValue = event.target.value;

      const selectedEvent = new CustomEvent("progressvaluechange", {
        detail: this.progressValue
      });
  
      this.dispatchEvent(selectedEvent);
    }
  }