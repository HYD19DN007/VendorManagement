import { Pipe, PipeTransform } from "@angular/core";
import { Person } from "../Person";
@Pipe
({
    name:'filterperson'
})
export class FilterPerson implements PipeTransform
{
    

    transform(person:Person[],searchText:string) {
        var i=0;
        console.log(searchText);
//         for(i=0;i<person.length;i++)
//    {
//      console.log(person[i].name.toLowerCase().indexOf(searchText.toLowerCase()));
//         }
   // return null;
        return person.filter((res)=>res.name.toLowerCase().indexOf(searchText.toLowerCase())!==-1);    
    
    }

}
