import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 3107,
};

export const sampleWithPartialData: IJobHistory = {
  id: 30486,
  startDate: dayjs('2023-09-20T10:28'),
};

export const sampleWithFullData: IJobHistory = {
  id: 20851,
  startDate: dayjs('2023-09-20T08:00'),
  endDate: dayjs('2023-09-20T04:42'),
  language: 'SPANISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
