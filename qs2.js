
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]
]

let highestCase = covid_data.reduce((p1,p2)=>p1[2]>p2[2]?p1:p2)
console.log(highestCase);

let highest_dose=covid_data.reduce((p1,p2)=>p1[5]>p2[5]?p1:p2);
console.log(highest_dose);


// 3. district having lowest death rate - 
let lowest_death=covid_data.reduce((p1,p2)=>p1[3]<p2[3]?p1:p2);
console.log(lowest_death);

  
// 4. sort data with +ve case in descending order -
let sorted=covid_data.sort((p1,p2)=>p2[2]-p1[2]).forEach(k=>console.log(k[1],k[2]));
console.log(sorted);


// 5. is district with +ve cases > 15000 - 
let cases_greater=covid_data.filter((item)=>item[2]>15000).forEach(element => {console.log(element[1],element[2])
    });;


// 6. sort data with 1st dose vaccine - 
dose_sorted=covid_data.sort((p1,p2)=>p1[5]-p2[5]).forEach(element => console.log(element[1],element[5]
));


//7. Print Thrissur details - 
let thissur=covid_data.filter((item)=>item[1]=='Thrissur').forEach(k=>console.log(k))






// function add(a,b,callback){
//     let c =a+b
//     callback(c)
// }
// function result (c){
//     console.log(c);
// }

// add(1,2,result)
