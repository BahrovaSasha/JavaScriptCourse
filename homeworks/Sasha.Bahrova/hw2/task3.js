/**
 * @param {number} hours
 * @returns {number} Returns count of seconds in input hours.
 */
function secondsCount(hours) {
 if(typeof hours !=="number"){
   return;
 }else if(hours>0){
   return secondsCount(hours*3600);
 }else{
   return;
 }
}

module.exports = secondsCount;
