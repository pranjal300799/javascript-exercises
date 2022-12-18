const repeatString = function(string,num) {
     let i=0,
     result='';
    if(num>=0){
        for (i=0;i<num;i++)
        {
          result+=string;
        }
        return result;
    }
    else
    {
      return 'ERROR'
    } 
};

// Do not edit below this line
module.exports = repeatString;
