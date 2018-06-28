class Block {

  constructor(timestamp, lasthash, hash, data) {
    this.timestamp = timestamp
    this.lasthash = lasthash
    this.hash = hash
    this.data = data
  }

  toString() {
    return `Block - 
    Timestamp: ${this.timestamp.substring(0, 10)}
    Last Hash: ${this.lasthash.substring(0, 10)}
    Hash     : ${this.hash.substring(0, 10)}
    Data     : ${this.data.substring(0, 10)}`
  }

}

module.exports = Block