const Block = require('./block');

const fooBlock = Block.mineBlock(Block.genesis(), 'foo');
console.log(fooBlock.toString());
const secondBlock = Block.mineBlock(fooBlock, 'first');
console.log(secondBlock.toString());