import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 25453,
};

export const sampleWithPartialData: ITask = {
  id: 13601,
  title: 'sequence funny',
  description: 'whether album',
};

export const sampleWithFullData: ITask = {
  id: 24123,
  title: 'er snooze',
  description: 'till anenst blissfully',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
