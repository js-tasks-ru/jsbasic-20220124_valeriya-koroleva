function sumSalary(salaries) {
  let sum = 0;
   for (let salary in salaries) {
     let value = salaries[salary];

          if(typeof value === 'number' &&
          !(isNaN(value)) && (isFinite(value))) {
           sum+= value;
      }
  }
  return sum;
}