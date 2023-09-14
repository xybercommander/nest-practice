import { Controller, Get, NotImplementedException, Param, Query } from '@nestjs/common';
import { TaskService } from './task.service';
import { query } from 'express';

@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService) {}

    @Get()
    getTasks() {
        return this.taskService.findAllTasks();
    }

    @Get(':taskId')
    getTaskById(@Param('taskId') id: number) {
        let task = this.taskService.findTaskById(id);

        if(!task) {
            throw new NotImplementedException(`Task with ${id} mot found`);
        }

        return task;
    }
}
