import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
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

}
