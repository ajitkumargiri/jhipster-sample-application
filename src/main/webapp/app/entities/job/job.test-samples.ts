import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 9882,
};

export const sampleWithPartialData: IJob = {
  id: 10048,
  maxSalary: 18093,
};

export const sampleWithFullData: IJob = {
  id: 24436,
  jobTitle: 'International Implementation Officer',
  minSalary: 19851,
  maxSalary: 19275,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
