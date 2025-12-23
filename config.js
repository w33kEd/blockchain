const MINE_RATE = 1000;
const INITIAL_DIFFICULTY = 3;

const GENESIS_DATA = {
    timestamp: 1,
    lastHash: '819c45c748c520f49cff5978df48f8e132f9156d7b86745771fbc07f63e8d3da',
    hash: '88098c55fe454634ae639dff468b00b48eea34e5c415a640dd172435faee787a',
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    data: []
};

const STARTING_BALANCE = 1000;

module .exports = { GENESIS_DATA, MINE_RATE }