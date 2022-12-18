const sumAll = function(num1,num2) {
    let invalidTester=(num1<0)||(num2<0)||(typeof num1!=="number")||(typeof num2!=='number');
    if(invalidTester)
    {
        return 'ERROR';
    }
    let swap;
    if(num1>num2)
    {
        swap=num1;
        num1=num2;
        num2=swap;
    }
    let sum=0,
    i;
    for(i=num1;i<=num2;i++)
    {
        sum=sum+i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
