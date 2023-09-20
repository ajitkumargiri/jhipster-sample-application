import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 15312,
};

export const sampleWithPartialData: ILocation = {
  id: 16675,
  postalCode: 'likewise pale after',
  city: 'South Mike',
};

export const sampleWithFullData: ILocation = {
  id: 23446,
  streetAddress: 'decompose likewise oof',
  postalCode: 'truly inglenook',
  city: 'Port Tommiehaven',
  stateProvince: 'sectional although brainstorm',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
