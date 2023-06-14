import { DifficultyTask } from "./difficulty-task.enum";
import { ImportanceTask } from "./importance-task.enum";
import { StatusTask } from "./status-task.enum";

export interface TaskQueue {
    taskTitle : string;
    dueDate?  : Date;
    importance: ImportanceTask;
    difficulty: DifficultyTask;
    category?: string;
    status: StatusTask;
}
