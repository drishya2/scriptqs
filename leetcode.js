let a=[]
var twoSum = function(nums, target) {
    for(let i=0;i<=nums.length;i++){
        for(let j=i+1;j<=nums.length;j++){
            if(nums[i]+nums[j]===target){
                a.push(i);
                a.push(j);
                console.log(a)
                
            }
        }

    }
    return null;
};

twoSum([1,2,3,4,5],3)