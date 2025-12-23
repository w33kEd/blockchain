# Blocky: A Blockchain Implementation in Node.js

> A simple, educational blockchain built from scratch using Node.js, featuring mining, proof-of-work, chain validation, and peer-to-peer synchronization.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [License](#license)

## Overview

Blocky is a minimal blockchain implementation designed for learning and experimentation. It demonstrates the core concepts behind blockchain technology, including block mining, proof-of-work, distributed consensus, and chain validation, all in a readable and hackable Node.js codebase.

## Features

- **Block Mining**: Add new blocks to the chain with proof-of-work.
- **Proof-of-Work**: Adjustable mining difficulty and nonce.
- **Chain Validation**: Ensures the integrity and validity of the blockchain.
- **Peer-to-Peer Sync**: Uses Redis Pub/Sub to broadcast and synchronize chains across nodes.
- **REST API**: Interact with the blockchain via HTTP endpoints.
- **Customizable Data**: Store arbitrary data in each block.
- **Unit Tests**: Jest-based tests for core modules.

## Architecture

- **blockchain/**: Core blockchain logic (block structure, mining, validation).
- **app/pubsub.js**: Pub/Sub system for peer-to-peer communication using Redis.
- **util/crypto-hash.js**: SHA-256 hashing utility for block and chain security.
- **index.js**: Express server exposing blockchain API endpoints.
- **scripts/**: Utility scripts (e.g., mining statistics).

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [Redis](https://redis.io/) (for Pub/Sub)

### Installation

```bash
# Clone the repository
$ git clone <your-repo-url>
$ cd blocky

# Install dependencies
$ npm install
```

### Running the Blockchain Node

```bash
# Start Redis server (if not already running)
$ redis-server --daemonize yes

# Start the blockchain node
$ npm start
```

### Development Mode

```bash
$ npm run dev
```

## API Endpoints

- `GET /api/blocks` — Retrieve the full blockchain.
- `POST /api/mine` — Add a new block with custom data. Example body: `{ "data": "your data here" }`

## Testing

Run all tests using Jest:

```bash
$ npm test
```

## License

This project is licensed under the ISC License.
A blockchain from scratch - nodeJS
