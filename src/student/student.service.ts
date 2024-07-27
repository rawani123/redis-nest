
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class studentService{
    constructor(@Inject('CACHE_MANAGER') private cacheManager:Cache) {}

    async getStudents(){
        // const cacheData = await this.cacheManager.get('students');
        // if(cacheData){
        //     console.log("Got data from cache")
        //     return cacheData;
        // }
        console.log("Inside service")
        const studentData = await this.retriveStudentFormData();
        // await this.cacheManager.set('students',studentData,60*1000)
        return studentData;

    }

    async retriveStudentFormData(){
        return new Promise((resolve,reject)=>{

            setTimeout(()=>{
                const studentData = [
                    {
                        name: 'John Doe',
                        age: 25
                    },
                    {
                        name: 'Jane Dye',
                        age: 24
                    },
                    {
                        name: 'John Smith',
                        age: 26
                    }
                ]
                resolve(studentData);
            },1000)
        })
    }
}