import { NgModule } from '@angular/core';

import { JhiAlertComponent, JhiAlertErrorComponent, TasksAppMongoSharedLibsModule } from './';

@NgModule({
    imports: [TasksAppMongoSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TasksAppMongoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TasksAppMongoSharedCommonModule {}
