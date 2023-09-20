import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 14191,
};

export const sampleWithPartialData: ICountry = {
  id: 8945,
  countryName: 'at chick judicious',
};

export const sampleWithFullData: ICountry = {
  id: 20954,
  countryName: 'psst',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
