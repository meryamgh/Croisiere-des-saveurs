import {Country} from "../models/country.model";

export const countryData = [
    {
        "name": "France",
        "coordinates": [46.2276, 2.2137],
        "flagUrl": "france"
    },
    {
        "name": "États-Unis",
        "coordinates": [37.0902, -95.7129],
        "flagUrl": "us"
    },
    {
        "name": "Algérie",
        "coordinates": [28.0339, 1.6596],
        "flagUrl": "dz"
    },
    {
        "name": "Chine",
        "coordinates": [35.8617, 104.1954],
        "flagUrl": "chine"
    },
    {
        "name": "Côte d'Ivoire",
        "coordinates": [7.5400, -5.5471],
        "flagUrl": "cote-d-ivoire"
    }
];

export const countries: Country[] = countryData.map(countryData => {
    return new Country(countryData.name, countryData.coordinates, countryData.flagUrl);
});
