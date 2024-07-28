
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { availableMemory } from 'process';

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
        const availableData = await this.retriveStudentFormData();
        // await this.cacheManager.set('students',studentData,60*1000)
        return availableData;

    }

    async retriveStudentFormData(){
        return new Promise((resolve,reject)=>{

            setTimeout(()=>{
                const availableData = [
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
                resolve(availableData);
            },1000)
        })
    }
}