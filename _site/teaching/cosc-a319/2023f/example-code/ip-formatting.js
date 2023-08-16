/**
 * Format a binary IP address as a human-readable string
 * @param {Buffer} data - the IP address as a 4-byte buffer
 * @returns {string} - the human-readable string IP address
 */
function formatIPAddress(data) {
  if (data.length === 4) {
    // IPv4 address
    const ary = Uint8Array.prototype.slice.apply(data);
    return ary.map(byte => byte.toString()).join('.')
  } else {
    // IPv6 address
    const chunks = [];
    for (let n = 0; n < data.length; n += 2) {
      chunks.push(Buffer.from(data.slice(n, n + 2)));
    }
    return chunks
      .map(chunk => chunk.toString('hex')).join(':');
  }
}

module.exports = {
  formatIPAddress
};

if (require.main === module) {
  // test IPv4
  const IPv4 = Buffer.from([0xc0, 0xa8, 0x01, 0x89]);
  console.log(IPv4, formatIPAddress(IPv4));
  // test IPv6
  const IPv6 = Buffer.from([
    0x26, 0x00, 0x6c, 0x63, 0x43, 0x80, 0x14, 0xb7,
    0xf4, 0x96, 0x09, 0x01, 0xe3, 0xe4, 0x77, 0x5a
  ]);
  console.log(IPv6, formatIPAddress(IPv6));
}

