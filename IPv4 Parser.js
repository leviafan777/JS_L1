function ipv4Parser(ip, mask) {
    const ipParts = ip.split('.').map(Number);
    const subnetParts = mask.split('.').map(Number);
    const networkParts = ipParts.map((ipPart, index) => ipPart & subnetParts[index]);
    const network = networkParts.join('.');
    const hostParts = ipParts.map((ipPart, index) => ipPart & (~subnetParts[index] & 255));
    const host = hostParts.join('.');
    return [network, host];
  }
  