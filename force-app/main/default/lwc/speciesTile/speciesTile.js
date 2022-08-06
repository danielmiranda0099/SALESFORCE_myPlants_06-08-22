import { LightningElement, api } from 'lwc';

export default class SpeciesTile extends LightningElement {
    myProperty = "Esto es una propiedad de un web component";
    @api specie;
}