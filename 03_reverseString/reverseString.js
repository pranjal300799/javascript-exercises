const reverseString = function(string) {
      let stringLength=string.length
      ,i
      ,resultant='';
      for (i=stringLength-1;i>=0;i--)
      {
          resultant+=string.charAt(i);
      }
      return resultant;
};

// Do not edit below this line
module.exports = reverseString;
