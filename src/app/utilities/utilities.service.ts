export class UtilitiesService{
    
    jsonToArray(_lst:any){

        const lstResult: Array<any> = [];
        const keys=Object.keys(_lst);
        for(let key in keys){
            _lst[keys[key]].id=keys[key];
            lstResult.push(_lst[keys[key]]);
        }
    
        return lstResult;
    }
    
}