function whatCentury(year)
{
  let numYear = parseInt(year);
  let cent = Math.ceil(numYear / 100);
  let lastDigit = cent % 10;
  let lastTwoDigits = cent % 100;
  let suffix = 'th';
  if (lastDigit === 1 && lastTwoDigits !== 11) {
    
    suffix = 'st';
    
  } 
  else if (lastDigit === 2 && lastTwoDigits !== 12) {
    
    suffix = 'nd';
    
  } 
  else if (lastDigit === 3 && lastTwoDigits !== 13) {
    
    suffix = 'rd';
    
  }
  
  return cent + suffix;
}