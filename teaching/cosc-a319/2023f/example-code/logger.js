/**
 * Node.js version of web performance API (window.performance in browsers)
 * https://nodejs.org/docs/latest-v12.x/api/perf_hooks.html#perf_hooks_perf_hooks_performance
 */
const { performance } = require('perf_hooks');
/**
 * Node.js crypto module's randomBytes method
 * https://nodejs.org/docs/latest-v12.x/api/crypto.html#crypto_crypto_randombytes_size_callback
 */
const { randomBytes } = require('crypto');

module.exports = {
  /**
   * Log ...args to the console with nanosecond timing
   * @param {any[]} args - the arguments to log
   * @returns {void}
   */
  log: (...args) => console.log(`( ${performance.now().toFixed(6).padStart(12, ' ')} ms )`, ...args),
  /**
   * Generate a random hexadecimal identifier string of the specified length with the given prefix
   * @param {string} prefix - a prefix to be appended to the beginning of the identifier
   * @param {number} length - the length of the random hexadecimal string to be generated
   * @returns {string} - the identifier string
   */
  id: (prefix, length) => `${prefix}_${randomBytes(length).toString('hex')}`
}

/**
 * LICENSE
 * 
 * Copyright 2020 Ryan B. Harvey
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 * LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
 * NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
