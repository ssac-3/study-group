'use strict';

const IPV4 = '172.00.13.251';

const checkIPv4 = (ipv4) => {
  const ARRAY = ipv4.split('.');
  for (let arr of ARRAY) {
    if (arr < 0 || arr > 255 || (arr[0] === '0' && arr.length > 1)) {
      return 'Neither';
    }
  }
  return 'IPv4';
};

const checkIPv6 = (ipv6) => {};

console.log(checkIPv4(IPV4));
