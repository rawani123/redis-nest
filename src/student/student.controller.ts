import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { studentService } from "./student.service";
import { CacheInterceptor, CacheTTL } from "@nestjs/cache-manager";


@UseInterceptors(CacheInterceptor)
@CacheTTL(60)
@Controller('student')
export class StudentController {    
    constructor(private readonly studentService: studentService) {}

    @Get()
    async getStudents() {
        console.log("Inside controller")    
        return this.studentService.getStudents()
    }
}