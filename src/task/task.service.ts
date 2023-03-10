import { Injectable } from '@nestjs/common';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
  constructor(private taskRepository: TaskRepository) {}
  getUserLists() {
    return this.taskRepository.getUserLists();
  }
  addUserList(title: string) {
    return this.taskRepository.addUserList(title);
  }
  updateList(listId: string, title: string) {
    return this.taskRepository.updateList(listId, title);
  }
  deleteAList(id: string) {
    return this.taskRepository.deleteAList(id);
  }
  getListTasks(listId: string) {
    return this.taskRepository.getListTasks(listId);
  }
  addTaskToList(listId: string, title: string) {
    return this.taskRepository.addTaskToList(listId, title);
  }
  updateTask(body: { taskId: string; title: string; completed: boolean }) {
    return this.taskRepository.updateTask(body);
  }
  deleteATask(taskId: string) {
    return this.taskRepository.deleteATask(taskId);
  }
}
