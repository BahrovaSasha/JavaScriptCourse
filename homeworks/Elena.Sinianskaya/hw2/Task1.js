/**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */

//  task_1
// сделала не от 1, а от 0:
function stringBuilder(n) {
    if (typeof n === "number"){
      var i;
      var strPositive = 0; //- если ничего не присвоить переменной сейчас, то в возвращаемой строке будет в начале слово undefined.
      var strNegative = 0;
      // возвращает строку, если n>=0 от 0 до n (включительно, т.к. указали, что i<=n ).
      if (n>=1){
         for (i=1; i<=n; i++){
           strPositive += ',' + i 
         }
         return strPositive; //ставим тут, а не в середине, т.к. return прекращает функцию.
      }
      // возвращает строку от 0 до -n.
      else if (n<=1){
                for (i=-1; i>=n; i--){//i=-1 - чтоб строка формировалась последовательно. А i>=n - чтоб и n возвращало включительно.
           strNegative += ',' + i 
         }
         return strNegative; 
      }
    }
      else{
       return ('Unfortunately it\'s not a number! Please, wright a number.' );
     }
 };
 console.log(stringBuilder(1));
// ______finish tack_1_______

module.exports = stringBuilder;

