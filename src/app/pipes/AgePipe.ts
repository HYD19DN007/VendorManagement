import { Pipe, PipeTransform } from "@angular/core";
import { Person } from "../Person";
@Pipe
({
    name:'age'
})
export class AgePipe implements PipeTransform
{
    transform(person:Person[],age:string) {
        
        return person.filter((res)=>res.age>parseInt(age));   
    
    }

}
