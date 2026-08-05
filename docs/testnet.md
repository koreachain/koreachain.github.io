---
title: Korea Chain Testnet
description: Everything you need to build, validate, and experiment on Korea Chain Testnet.
keywords:
  - testnet
  - rollapp
  - dymension
  - cometbft
  - evmos
  - ethermint
  - korea chain
  - rollup
  - l2
  - ethereum
  - evm
  - celestia
  - blockchain
sidebar_position: 20
---

# Korea Chain Testnet

Launched: Korea Chain Testnet — the first step toward a network of AI-managed sovereign economies. It fuses cultural capital with financial autonomy, and enables any community or nation to launch their own adaptive digital economy. Our Testnet proves this today: developers are able to deploy micro-economies in minutes — a multi-billion-dollar opportunity for decentralized finance and beyond — secure, decentralized, and ready for global innovation.

:::info[Testnet]
Our testnet mirrors a production [Eco-AI-Blockchain](./our-products/ai-chains.md), with knobs you can tweak fearlessly. Build now, and arrive on mainnet with battle-tested contracts.
:::

:::tip[Airdrop: NFT]
Why don't you join our **Airdrop**? Our Eco-AI-Blockchains have rewards never seen before in crypto! Buy NFT for Airdrop: [The Royale Society of Iceberg](https://nft-chain.org/collection/iceberg) on the NFT-Chain Marketplace, or [Plushy Lil Penguins](https://www.tensor.trade/trade/plushylilpenguins) on Solana.
:::

:::tip[Airdrop: Pre-Sale]
**Pre-Sale Live Now** with exclusive access and rewards that redefine multi-chain potential. Join the revolution at: https://nft-chain.org
:::

## Network TL;DR

| Item | Value |
| --- | --- |
| **Chain ID** | `72727` |
| **Gas token** | `NFT` |
| **Tested performance** | 20,000 TPS; 200ms Finality |
| **Execution environments** | EVM bytecode + Cosmos SDK ABCI |

## Public Endpoints

> Community RPCs are rate-limited.

| Purpose | URL |
| --- | --- |
| JSON-RPC (EVM) | `https://rpc.testnet.koreachain.com` |
| REST / LCD (Cosmos) | `https://rest.testnet.koreachain.com` |
| gRPC | `grpc.testnet.koreachain.com:443` |
| WebSocket | `wss://rpc.testnet.koreachain.com/ws` |
| Explorer (beta) | `https://explorer.koreachain.com/testnet` |
| Faucet | `https://faucet.koreachain.com` (Discord OAuth required) |

## Add the network to MetaMask (or any EVM wallet)

1. Open **Add Network** → **Custom RPC**.
2. Fill in the fields:
   - **Network Name:** `Korea Chain Testnet`
   - **New RPC URL:** `https://rpc.testnet.koreachain.com`
   - **Chain ID:** `72727`
   - **Currency Symbol:** `NFC`
   - **Block Explorer:** `https://explorer.koreachain.com/testnet`
3. Save → switch to the new network.

Fully compatible with Go Ethereum v1.12—no smart contract rewrites.

## CLI & Cosmos SDK access

Use the `rollappd` CLI (forked from the Dymension RDK) for Cosmos-native flows.

```bash
# Download the latest binary
curl -L https://get.koreachain.com/rollappd | bash

# Initialize a validator key
rollappd keys add dev1 --keyring-backend test

# Query network status
rollappd status --node https://rpc.testnet.koreachain.com:443
```

### Start a light node

```bash
rollappd start \
  --network testnet \
  --p2p.persistent_peers "bc1a...@p2p.testnet.koreachain.com:26656" \
  --rpc.laddr tcp://0.0.0.0:26657 \
  --grpc.address 0.0.0.0:9090 \
  --minimum-gas-prices 0.025tNFC
```

## Bridging & Interop

- **IBC:** The testnet exposes ICS-20 channels to the Dymension Hub testnet and a Celestia bridge. Use `rollappd tx ibc-transfer transfer channel-0` for fungible tokens.
- **IRC (Inter-RollApp Communication):** Each deployment gets an auto-provisioned lane `irc-72727-*`. Messages arrive with deterministic ordering enforced by CometBFT.
- **Ethereum / EVM tooling:** Hardhat, Foundry, and Tenderly targets can point to the JSON-RPC endpoint without plugins.

## Developer workflow checklist

- ✅ Deploy Solidity or CosmWasm modules directly; the execution environment handles both.
- ✅ Profile AI-governed gas pricing by replaying workloads with `rollappd tx evm simulate`.
- ✅ Stream real-time telemetry from the `/metrics` endpoint for Grafana dashboards.
- ✅ Use the snapshot service (`https://snapshots.testnet.koreachain.com`) to join from block height checkpoints.

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| **`account sequence mismatch`** | Wait one block or query `rollappd q account <addr>` to sync the latest nonce; parallel Cosmos+EVM writes can race. |
| **`gas price below minimum`** | AI governors currently enforce `>= 0.025 tNFC`. Adjust your wallet or CLI flags. |
| **Slow finality** | Verify your node peers include at least 4 seed nodes from `seeds.testnet.koreachain.com`; otherwise you may lag the sequencer. |
| **Faucet quota exceeded** | Link a GitHub account with on-chain activity or request via the Discord `#validators` channel for manual top-ups. |

## Next steps

- Track upcoming upgrade heights in `#testnet-upgrades` on Discord.
- Submit feedback or bug reports at [issues.koreachain.com](https://issues.koreachain.com) with the label `testnet`.
- When you're production-ready, follow the [Security Audits](./security-audits.md) playbook to prep for mainnet deployment.

Happy hacking — see you on-chain! 🚀
