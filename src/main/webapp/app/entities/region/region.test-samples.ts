import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 1474,
};

export const sampleWithPartialData: IRegion = {
  id: 26524,
  regionName: 'sadly notable whenever',
};

export const sampleWithFullData: IRegion = {
  id: 20659,
  regionName: 'roughly gee scary',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
