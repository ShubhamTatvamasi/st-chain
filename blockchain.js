const Block = require('./block')

class Blockchain {

  constructor() {
    this.chain = [Block.genesis()]
  }

  addBlock() {
    const block = Block.mineBlock(this.chain[this.chain-length-1], date)
    this.chain.push(block)

    return block
  }

}

module.exports = Blockchain