import { Moment } from 'moment';

export interface ITask {
    id?: string;
    name?: string;
    dueDate?: Moment;
    completed?: boolean;
}

export class Task implements ITask {
    constructor(public id?: string, public name?: string, public dueDate?: Moment, public completed?: boolean) {
        this.completed = this.completed || false;
    }
}
