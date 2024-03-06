const a=[];
b=parseInt(prompt('enter the length'))
for(i=0;i<b;i++){
    a[i]=prompt('enter the data in array')  
}
let x=a.toString()
let d=a.reverse();
let y=d.toString();
if(x===y){
    console.log('Palindrome')
}
else{
    console.log('Not palindrome')
}
