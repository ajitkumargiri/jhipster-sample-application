import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 24868,
  departmentName: 'bleakly',
};

export const sampleWithPartialData: IDepartment = {
  id: 6695,
  departmentName: 'villainous',
};

export const sampleWithFullData: IDepartment = {
  id: 16097,
  departmentName: 'but indeed brightly',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'prize',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
