import { Injectable } from '@nestjs/common';
import { TaskModel } from './task.model';

@Injectable()
export class TaskService {
    _tasks: TaskModel[] = [
        {id: 1, description: 'buy food'},
        {id: 2, description: 'fix bugs'},
    ]

    findAllTasks(): TaskModel[] {
        return this._tasks;
    }

    findTaskById(id: number): TaskModel {
        return this._tasks.find(t => t.id == id);
    }
}
