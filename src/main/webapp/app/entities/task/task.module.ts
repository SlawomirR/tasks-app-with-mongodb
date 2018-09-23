import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TasksAppMongoSharedModule } from 'app/shared';
import {
    TaskComponent,
    TaskDeleteDialogComponent,
    TaskDeletePopupComponent,
    TaskDetailComponent,
    taskPopupRoute,
    taskRoute,
    TaskUpdateComponent
} from './';

const ENTITY_STATES = [...taskRoute, ...taskPopupRoute];

@NgModule({
    imports: [TasksAppMongoSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [TaskComponent, TaskDetailComponent, TaskUpdateComponent, TaskDeleteDialogComponent, TaskDeletePopupComponent],
    entryComponents: [TaskComponent, TaskUpdateComponent, TaskDeleteDialogComponent, TaskDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TasksAppMongoTaskModule {}
