'use strict';

const IPV4 = '172.0.13.251';
const IPV6 = '2020:0bc3:0000:0000:853e:0777:1234';

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
