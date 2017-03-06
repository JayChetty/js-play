var _ = require('lodash');

atm = {
  distanceFrom:function(target, numberValue, quantity){
    var max = numberValue * quantity;
    var shortage = Math.max(target - max, 0);
    var gap = target%numberValue;
    var something = 1;
    return Math.max(shortage, gap)
},
  // composes:function(target, numbers){
  //   if( _.length(numbers) === 1){
  //     return distanceFrom(target, Integer.parse())
  //   }
  // }
// }

module.exports = atm;
