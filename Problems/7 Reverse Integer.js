/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  x = x.toString()
  if(x.toString()[0]!='-'){
    x= +(x.split("").reverse().join(""))
  }else{
    x=x.split("")
    x.splice(0,1)
    x= +("-"+x.reverse().join(""))
  }
  if(x>=2147483647||x<=-2147483648) return 0
  return x
};
