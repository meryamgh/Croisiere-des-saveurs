export class Country {
    public name: string;
    public coordinates: number[];
    public accronyme: string;

    constructor(countryName: string, countryCoordinates: number[], countryAccronyme: string) {
        this.name = countryName;
        this.coordinates = countryCoordinates;
        this.accronyme = countryAccronyme;
    }

}
