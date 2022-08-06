import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class SpeciesTile extends NavigationMixin(LightningElement) {
    myProperty = "Esto es una propiedad de un web component";
    @api specie;

    get isOutdoors(){
        return this.specie.Location__c.includes("Outdoors");
    }

    get isIndoors(){
        return this.specie.Location__c.includes("Indoors");
    }

    navigateToRecordViewPage() {
        // View a custom object record.
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.specie.Id,
                objectApiName: 'Species__c', // objectApiName is optional
                actionName: 'view'
            }
        });
    }
}