function expandedForm(num) {
    let array = [];
    let str = num.toString();
    
    for (let i = 0; i < str.length; i++) {
      
      if (str[i] != '0') {
        let number = '0'.repeat(str.length - i - 1); 
        array.push(str[i] + number); 
     }
    }
    return array.join(' + '); 
  }