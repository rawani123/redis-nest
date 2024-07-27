import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { studentService } from './student.service';


@Module({
  controllers: [StudentController],
  providers: [studentService],
})
export class studentModule {}
