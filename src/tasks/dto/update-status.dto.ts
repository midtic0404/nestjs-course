import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.model';

export class UpdateStatusDTO {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
