import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 3450,
};

export const sampleWithPartialData: IEmployee = {
  id: 6802,
  firstName: 'Krystal',
  email: 'Santino97@yahoo.com',
};

export const sampleWithFullData: IEmployee = {
  id: 3214,
  firstName: 'Abdiel',
  lastName: 'Medhurst',
  email: 'Jacinthe.Wiza@yahoo.com',
  phoneNumber: 'cricketer',
  hireDate: dayjs('2023-09-20T01:35'),
  salary: 649,
  commissionPct: 3452,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
