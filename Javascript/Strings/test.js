var balancedStringSplit = function(s) {
    let balanced= 0;
    let count = 0;
    for(var i = 0; i < s.length; i++){
        if(s[i] ==='R'){
            count++
        }
        if(s[i] ==="L"){
            count--
        }
        if(count === 0){
            balanced++
        }
    } return balanced
};

const test = balancedStringSplit("RLRRRLLRLL")
console.log(test)