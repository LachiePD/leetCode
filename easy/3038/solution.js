var maxOperations = function(nums) {
    let sumToMatch = nums[0] + nums[1];
    let i = 0;
    for( i ; nums.length >= 2; i++){
        let currentSum = nums[0] + nums[1];
        if(currentSum !== sumToMatch){
            return i;
        }
        else{
            sumToMatch = currentSum;
            nums.shift();
            nums.shift();
        }
        console.log("currentSum" , currentSum)
    }
    return i;
};
