const removeFromArray = function() {
       let numberOfArgs=arguments.length;
       let i
       ,j;
       for(i=1;i<numberOfArgs;i++)
       { 
          let currentTarget=arguments[i];
          for(j=0;j<arguments[0].length;j++)
          {
            if(currentTarget===arguments[0][j])
            {   if(j==0)
                {
                   arguments[0].shift();
                }
                else
                {
                arguments[0].splice(j,1);
                }           
            }
          }
       }
       return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
