function wave(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') { 
        let result = '';
        for (let j = 0; j < str.length; j++) {
          if (i === j) {
            result += str[j].toUpperCase(); 
          } else {
            result += str[j].toLowerCase(); 
          }
        }
        arr.push(result);
      }
    }
    return arr;
  }