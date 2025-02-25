function domainName(url) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'http://' + url;
    }
  
    const urlObj = new URL(url);
    
    const domain = urlObj.hostname.replace(/^www\./, '').split('.')[0];
  
    return domain;
  }