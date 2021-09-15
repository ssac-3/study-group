const obj = { frodo: 2, neo: 2, muzi: 1 };

console.log(Object.values(obj));

console.log(obj['frodo']);

console.log(Object.keys(obj));
console.log(obj['frodo']);


/*
function solution(id_list, report, k) {
    var answer = [];
    let resultObj={};
    const keyArr = [];
    const reportCount = checkReportedPerson(report);
    const whoReportList = whoReport(report);
    console.log(reportCount);
    console.log(whoReportList);
    
    for(let i=0; i<id_list.length; i++){
        resultObj[id_list[i]] = 0;
    }
    for(let key1 of Object.keys(reportCount)){
        if(reportCount[key1] < k) continue;
        for(let [key2,value] of Object.entries(whoReportList)){
            if(whoReportList[key2].includes(key1)) {
                resultObj[key2] += 1;
                
            }
        }
    }
    for(let i = 0; i < id_list.length; i++){
         answer.push(resultObj[id_list[i]]);
    }
    return answer;
}

function checkReportedPerson(report){
    const obj = {};
    const check = [];
    for(let repo of report){
        const reportPerson = repo.split(' ')[0];
        const reportedPerson = repo.split(' ')[1];
        
        if(!check.includes(reportPerson+reportedPerson) ){
            if(obj[reportedPerson]) {
                obj[reportedPerson] +=1;
            }
            else{ 
                obj[reportedPerson] = 1;
                check.push(reportPerson+reportedPerson);
            }
        }
    }
    return obj;
}

function whoReport(report){
    const obj = {};
    const check = [];
    for(let repo of report){
        const reportPerson = repo.split(' ')[0];
        const reportedPerson = repo.split(' ')[1];
            if(obj[reportPerson]) {
                obj[reportPerson].push(reportedPerson);
            }
            else{ 
                obj[reportPerson] = new Array(reportedPerson);
            }
        
    }
    return obj;
}
*/