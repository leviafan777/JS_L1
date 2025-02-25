function primeFactors(n){
    let result = '';
      let count = 0;
      while (n % 2 === 0) {
        count++;
        n /= 2;
      }
      if (count > 0) {
        result += `(2${count > 1 ? '**' + count : ''})`;
      }
      for (let i = 3; i <= Math.sqrt(n); i += 2) {
        count = 0;
        while (n % i === 0) {
          count++;
          n /= i;
        }
        if (count > 0) {
          result += `(${i}${count > 1 ? '**' + count : ''})`;
        }
      }
      if (n > 2) {
        result += `(${n})`;
      }
    
      return result;
    }