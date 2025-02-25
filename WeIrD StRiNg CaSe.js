function toWeirdCase(string){
    let words = string.split(' ');
    let result = words.map(word => {
      return word.split('').map((char, index) => {
      
        return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      }).join('');
    });
    return result.join(' ');
  }