import { LightningElement, wire } from 'lwc';
import getAllSpecies from '@salesforce/apex/SpeciesService.getAllSpecies';

export default class SpeciesList extends LightningElement {
    @wire(getAllSpecies)
    species;
    // species.data  --> datos devueltos por apex.
    // species.error --> si hay error se almacena aqui.
    
    /*species = [
        {
            Name: "Jazmin",
            Description__c: "Olorosa y bonita planta",
            Image_URL__c: "https://www.florespedia.com/Minis/flor-del-jazmin.jpg",
            Location__c: "Indoors, Outdoors"
        },
        {
            Name: "Aloe Vera",
            Description__c: "Conocida por sus propiedades medicinales y aplicaiones para la piel",
            Image_URL__c: "https://www.farmaceuticonline.com/wp-content/uploads/2019/03/aloevera.jpg",
            Location__c: "Outdoors"
        },
        {
            Name: "Hierba buena",
            Description__c: "Olorosa y bonita planta",
            Image_URL__c: "https://farmaciaribera.es/blog/wp-content/uploads/2013/12/hierbabuena.jpg",
            Location__c: "Outdoors"
        }
    ]*/
}