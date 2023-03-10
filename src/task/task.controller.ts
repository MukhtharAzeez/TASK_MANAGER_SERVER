import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('lists')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get('')
  getUserLists() {
    return this.taskService.getUserLists();
  }

  @Post('')
  addUserList(@Body() object: { title: string }) {
    return this.taskService.addUserList(object.title);
  }

  @Patch('')
  updateList(@Body() object: { listId: string; title: string }) {
    return this.taskService.updateList(object.listId, object.title);
  }

  @Delete('/:id')
  deleteAList(@Param() object: { id: string }) {
    return this.taskService.deleteAList(object.id);
  }

  @Get('/:listId/tasks')
  getListTasks(@Param() object: { listId: string }) {
    return this.taskService.getListTasks(object.listId);
  }

  @Post('/:listId/tasks')
  addTaskToList(@Body() object: { listId: string; title: string }) {
    return this.taskService.addTaskToList(object.listId, object.title);
  }

  @Patch('/tasks/update')
  updateTask(
    @Body() body: { taskId: string; title: string; completed: boolean },
  ) {
    return this.taskService.updateTask(body);
  }

  @Delete('/task/delete/:taskId')
  deleteATask(@Param() object: { taskId: string }) {
    return this.taskService.deleteATask(object.taskId);
  }
}
