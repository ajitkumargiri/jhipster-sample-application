import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'job-history',
        data: { pageTitle: 'JobHistories' },
        loadChildren: () => import('./job-history/job-history.routes'),
      },
      {
        path: 'location',
        data: { pageTitle: 'Locations' },
        loadChildren: () => import('./location/location.routes'),
      },
      {
        path: 'job',
        data: { pageTitle: 'Jobs' },
        loadChildren: () => import('./job/job.routes'),
      },
      {
        path: 'employee',
        data: { pageTitle: 'Employees' },
        loadChildren: () => import('./employee/employee.routes'),
      },
      {
        path: 'region',
        data: { pageTitle: 'Regions' },
        loadChildren: () => import('./region/region.routes'),
      },
      {
        path: 'department',
        data: { pageTitle: 'Departments' },
        loadChildren: () => import('./department/department.routes'),
      },
      {
        path: 'country',
        data: { pageTitle: 'Countries' },
        loadChildren: () => import('./country/country.routes'),
      },
      {
        path: 'task',
        data: { pageTitle: 'Tasks' },
        loadChildren: () => import('./task/task.routes'),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
