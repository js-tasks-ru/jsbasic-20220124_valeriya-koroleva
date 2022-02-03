function checkSpam(str) {
   let patterns = ['1xBet', 'XXX'];

   for (const pattern of patterns) {
    if (str.toLowerCase().indexOf(pattern.toLowerCase()) > -1) {
      return true;
    }
   }
   return false;
}
let input = checkSpam('innocent rabbit');