/*
 * The token is Jupiter strict API
 * All credit goes to Jupiter Team
 */

import fs from 'fs';

import { Token } from '@cubik/common-types/src/token';

export const newTokenList = JSON.parse(
  fs.readFileSync('../../../packages/helper-scripts/tokenList.json', 'utf-8'),
) as Token[];

export const tokenList: Token[] = [
  {
    address: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    chainId: 101,
    decimals: 6,
    name: 'USD Coin',
    symbol: 'USDC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'usd-coin',
    },
  },
  {
    address: 'So11111111111111111111111111111111111111112',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped SOL',
    symbol: 'SOL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'wrapped-solana',
    },
  },
  {
    address: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
    chainId: 101,
    decimals: 6,
    name: 'USDT',
    symbol: 'USDT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'tether',
    },
  },
  {
    address: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
    chainId: 101,
    decimals: 5,
    name: 'BonkCoin',
    symbol: 'Bonk',
    logoURI:
      'https://arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cSY7I?ext=png',
    tags: ['community'],
    extensions: {
      coingeckoId: 'bonk',
    },
  },
  {
    address: 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So',
    chainId: 101,
    decimals: 9,
    name: 'Marinade staked SOL (mSOL)',
    symbol: 'mSOL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'msol',
    },
  },
  {
    address: 'J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn',
    chainId: 101,
    decimals: 9,
    name: 'Jito Staked SOL',
    symbol: 'JitoSOL',
    logoURI: 'https://storage.googleapis.com/token-metadata/JitoSOL-256.png',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'jito-staked-sol',
    },
  },
  {
    address: '7kbnvuGBxxj8AG9qp8Scn56muWGaRaFqxg1FsRp3PaFT',
    chainId: 101,
    decimals: 6,
    name: 'UXD Stablecoin',
    symbol: 'UXD',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7kbnvuGBxxj8AG9qp8Scn56muWGaRaFqxg1FsRp3PaFT/uxd-icon-black.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'uxd-stablecoin',
    },
  },
  {
    address: '7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs',
    chainId: 101,
    decimals: 8,
    name: 'Ether (Portal)',
    symbol: 'ETH',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/ETH_wh.png',
    tags: ['wormhole', 'old-registry'],
    extensions: {
      coingeckoId: 'ethereum-wormhole',
    },
  },
  {
    address: '7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj',
    chainId: 101,
    decimals: 9,
    name: 'Lido Staked SOL',
    symbol: 'stSOL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj/logo.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'lido-staked-sol',
    },
  },
  {
    address: 'A9mUU4qviSctJVPJdBJWkb28deg915LYJKrzQ19ji3FM',
    chainId: 101,
    decimals: 6,
    name: 'USD Coin (Portal from Ethereum)',
    symbol: 'USDCet',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDCet_wh.png',
    tags: ['wormhole', 'old-registry'],
    extensions: {
      coingeckoId: 'usd-coin-wormhole-from-ethereum',
    },
  },
  {
    address: 'bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1',
    chainId: 101,
    decimals: 9,
    name: 'BlazeStake Staked SOL (bSOL)',
    symbol: 'bSOL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'blazestake-staked-sol',
    },
  },
  {
    address: 'orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE',
    chainId: 101,
    decimals: 6,
    name: 'Orca',
    symbol: 'ORCA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'orca',
    },
  },
  {
    address: 'nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7',
    chainId: 101,
    decimals: 6,
    name: 'Nosana',
    symbol: 'NOS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'nosana',
    },
  },
  {
    address: 'FLUXBmPhT3Fd1EDVFdg46YREqHBeNypn1h4EbnTzWERX',
    chainId: 101,
    decimals: 5,
    name: 'FluxBot',
    symbol: 'FLUXB',
    logoURI:
      'https://bafybeiakyhwwesdvxpikjn4kyqddira3hjpjfcn26ycrrezt65bfa7r3gm.ipfs.nftstorage.link',
    tags: ['community', 'token-2022'],
    extensions: {
      coingeckoId: 'fluxbot',
    },
  },
  {
    address: '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R',
    chainId: 101,
    decimals: 6,
    name: 'Raydium',
    symbol: 'RAY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'raydium',
    },
  },
  {
    address: 'RLBxxFkseAZ4RgJH3Sqn8jXxhmGoz9jWxDNJMh8pL7a',
    chainId: 101,
    decimals: 2,
    name: 'Rollbit Coin',
    symbol: 'RLB',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/RLBxxFkseAZ4RgJH3Sqn8jXxhmGoz9jWxDNJMh8pL7a/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'rollbit-coin',
    },
  },
  {
    address: 'SHDWyBxihqiCj6YekG2GUr7wqKLeLAMK1gHZck9pL6y',
    chainId: 101,
    decimals: 9,
    name: 'Shadow Token',
    symbol: 'SHDW',
    logoURI:
      'https://shdw-drive.genesysgo.net/FDcC9gn12fFkSU2KuQYH4TUjihrZxiTodFRWNF4ns9Kt/250x250_with_padding.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'genesysgo-shadow',
    },
  },
  {
    address: 'rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof',
    chainId: 101,
    decimals: 8,
    name: 'Render Token',
    symbol: 'RENDER',
    logoURI:
      'https://shdw-drive.genesysgo.net/5zseP54TGrcz9C8HdjZwJJsZ6f3VbP11p1abwKWGykZH/rndr.png',
    tags: ['community'],
    extensions: {
      coingeckoId: 'render-token',
    },
  },
  {
    address: 'hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux',
    chainId: 101,
    decimals: 8,
    name: 'Helium Network Token',
    symbol: 'HNT',
    logoURI:
      'https://shdw-drive.genesysgo.net/CsDkETHRRR1EcueeN346MJoqzymkkr7RFjMqGpZMzAib/hnt.png',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'helium',
    },
  },
  {
    address: '3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR',
    chainId: 101,
    decimals: 9,
    name: 'Only1 (LIKE)',
    symbol: 'LIKE',
    logoURI: 'https://only1.io/like-token.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'only1',
    },
  },
  {
    address: '3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh',
    chainId: 101,
    decimals: 8,
    name: 'Wrapped BTC (Portal)',
    symbol: 'WBTC',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/WBTC_wh.png',
    tags: ['wormhole', 'community', 'solana-fm'],
    extensions: {
      coingeckoId: 'wrapped-btc-wormhole',
    },
  },
  {
    address: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
    chainId: 101,
    decimals: 9,
    name: 'Samoyed Coin',
    symbol: 'SAMO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'samoyedcoin',
    },
  },
  {
    address: 'mb1eu7TzEc71KxDpsmsKoucSSuuoGLv1drys1oP2jh6',
    chainId: 101,
    decimals: 6,
    name: 'Helium Mobile',
    symbol: 'MOBILE',
    logoURI:
      'https://shdw-drive.genesysgo.net/CsDkETHRRR1EcueeN346MJoqzymkkr7RFjMqGpZMzAib/mobile.png',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'helium-mobile',
    },
  },
  {
    address: 'ETAtLmCmsoiEEKfNrHKJ2kYy3MoABhU6NQvpSfij5tDs',
    chainId: 101,
    decimals: 6,
    name: 'Media Network',
    symbol: 'MEDIA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ETAtLmCmsoiEEKfNrHKJ2kYy3MoABhU6NQvpSfij5tDs/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'media-network',
    },
  },
  {
    address: 'GDfnEsia2WLAW5t8yx2X5j2mkfA74i5kwGdDuZHt7XmG',
    chainId: 101,
    decimals: 9,
    name: 'CROWN Token',
    symbol: 'CROWN',
    logoURI:
      'https://shdw-drive.genesysgo.net/AwJ6W2rRaYCGXimceFuLm5td14fhN1VFEfSYg566RxMD/image.png',
    tags: ['community'],
    extensions: {
      coingeckoId: 'crown-by-third-time-games',
    },
  },
  {
    address: 'MELLd8PyFoeNW3D5VaUe7L96eZeihtrzgLWrbKz5DR2',
    chainId: 101,
    decimals: 6,
    name: 'Mellivora',
    symbol: 'MELL',
    logoURI: 'https://arweave.net/YIrpNAQuLbOMvI8hSRCzJakzm5qiT_wv1Av5mpcYxrY',
    tags: ['community'],
    extensions: {
      coingeckoId: 'mellivora',
    },
  },
  {
    address: 'AURYydfxJib1ZkTir1Jn1J9ECYUtjb6rKQVmtYaixWPP',
    chainId: 101,
    decimals: 9,
    name: 'Aurory',
    symbol: 'AURY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AURYydfxJib1ZkTir1Jn1J9ECYUtjb6rKQVmtYaixWPP/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'aurory',
    },
  },
  {
    address: 'SCSuPPNUSypLBsV4darsrYNg4ANPgaGhKhsA3GmMyjz',
    chainId: 101,
    decimals: 5,
    name: 'Solcasino Token',
    symbol: 'SCS',
    logoURI: 'https://files.solcasino.io/logo.png',
    tags: ['community'],
    extensions: {
      coingeckoId: 'solcasino-token',
    },
  },
  {
    address: 'GFX1ZjR2P15tmrSwow6FjyDYcEkoFb4p4gJCpLBjaxHD',
    chainId: 101,
    decimals: 9,
    name: 'GooseFX',
    symbol: 'GOFX',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GFX1ZjR2P15tmrSwow6FjyDYcEkoFb4p4gJCpLBjaxHD/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'goosefx',
    },
  },
  {
    address: 'MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey',
    chainId: 101,
    decimals: 9,
    name: 'Marinade',
    symbol: 'MNDE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey/logo.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'marinade',
    },
  },
  {
    address: 'xxxxa1sKNGwFtw2kFn8XauW9xq8hBZ5kVtcSesTT9fW',
    chainId: 101,
    decimals: 6,
    name: 'Solanium',
    symbol: 'SLIM',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/xxxxa1sKNGwFtw2kFn8XauW9xq8hBZ5kVtcSesTT9fW/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solanium',
    },
  },
  {
    address: 'ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx',
    chainId: 101,
    decimals: 8,
    name: 'Star Atlas',
    symbol: 'ATLAS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'star-atlas',
    },
  },
  {
    address: 'poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk',
    chainId: 101,
    decimals: 8,
    name: 'Star Atlas DAO',
    symbol: 'POLIS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'star-atlas-dao',
    },
  },
  {
    address: 'Dn4noZ5jgGfkntzcQSUZ8czkreiZ1ForXYoV2H8Dm7S1',
    chainId: 101,
    decimals: 6,
    name: 'Tether USD (Portal from Ethereum)',
    symbol: 'USDTet',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDTet_wh.png',
    tags: ['wormhole', 'old-registry'],
    extensions: {
      coingeckoId: 'tether-usd-wormhole-from-ethereum',
    },
  },
  {
    address: 'LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp',
    chainId: 101,
    decimals: 9,
    name: 'Liquid Staking Token',
    symbol: 'LST',
    logoURI: 'https://storage.googleapis.com/static-marginfi/lst.png',
    tags: ['community'],
    extensions: {
      coingeckoId: 'liquid-staking-token',
    },
  },
  {
    address: 'n54ZwXEcLnc3o7zK48nhrLV4KTU5wWD4iq7Gvdt5tik',
    chainId: 101,
    decimals: 6,
    name: 'Peepo',
    symbol: 'PEEP',
    logoURI:
      'https://zk3y35n3ess4i2a4ya5a6hcllkelztul6a5vm2hk7wfjlq7fgypa.arweave.net/yreN9bskpcRoHMA6DxxLWoi8zovwO1Zo6v2KlcPlNh4',
    tags: ['community'],
    extensions: {
      coingeckoId: 'peepo-sol',
    },
  },
  {
    address: 'AFbX8oGjGpmVFywbVouvhQSRmiW2aR1mohfahi4Y2AdB',
    chainId: 101,
    decimals: 9,
    name: 'GST',
    symbol: 'GST',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AFbX8oGjGpmVFywbVouvhQSRmiW2aR1mohfahi4Y2AdB/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'green-satoshi-token',
    },
  },
  {
    address: 'BqVHWpwUDgMik5gbTciFfozadpE2oZth5bxCDrgbDt52',
    chainId: 101,
    decimals: 9,
    name: 'Only Possible On Solana',
    symbol: 'OPOS',
    logoURI: 'https://arweave.net/k8uU2yLoYwL4zTBZ-TO-7bs6hgtLNaHhzP4FLUMuaS0',
    tags: ['community'],
    extensions: {
      coingeckoId: 'only-possible-on-solana',
    },
  },
  {
    address: '7i5KKsX2weiTkry7jA4ZwSuXGhs5eJBEjY8vVxR4pfRx',
    chainId: 101,
    decimals: 9,
    name: 'GMT',
    symbol: 'GMT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7i5KKsX2weiTkry7jA4ZwSuXGhs5eJBEjY8vVxR4pfRx/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'stepn',
    },
  },
  {
    address: '74DSHnK1qqr4z1pXjLjPAVi8XFngZ635jEVpdkJtnizQ',
    chainId: 101,
    decimals: 5,
    name: 'COCO Token',
    symbol: 'COCO',
    logoURI:
      'https://shdw-drive.genesysgo.net/EV1ARo89dwRzR1kv7JMr7V97qrcXjffkcwEuNHMJfJmz/COCO_icon.png',
    tags: ['community'],
    extensions: {
      coingeckoId: 'coco-theheist',
    },
  },
  {
    address: 'DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ',
    chainId: 101,
    decimals: 9,
    name: 'DUST Protocol',
    symbol: 'DUST',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ/logo.jpg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'dust-protocol',
    },
  },
  {
    address: '9LzCMqDgTKYz9Drzqnpgee3SGa89up3a247ypMj2xrqM',
    chainId: 101,
    decimals: 8,
    name: 'Audius (Portal)',
    symbol: 'AUDIO',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/AUDIO_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'audius-wormhole',
    },
  },
  {
    address: 'ChVzxWRmrTeSgwd3Ui3UumcN8KX7VK3WaD4KGeSKpypj',
    chainId: 101,
    decimals: 8,
    name: 'SushiToken (Portal)',
    symbol: 'SUSHI',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/SUSHI_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'sushi',
    },
  },
  {
    address: 'BaoawH9p2J8yUK9r5YXQs3hQwmUJgscACjmTkh8rMwYL',
    chainId: 101,
    decimals: 6,
    name: 'AllDomains',
    symbol: 'ALL',
    logoURI: 'https://arweave.net/FY7yQGrLCAvKAup_SYEsHDoTRZXsttuYyQjvHTnOrYk',
    tags: ['community'],
    extensions: {
      coingeckoId: 'alldomains',
    },
  },
  {
    address: 'HxRELUQfvvjToVbacjr9YECdfQMUqGgPYB68jVDYxkbr',
    chainId: 101,
    decimals: 9,
    name: 'NANA Token',
    symbol: 'NANA',
    logoURI:
      'https://shdw-drive.genesysgo.net/EV1ARo89dwRzR1kv7JMr7V97qrcXjffkcwEuNHMJfJmz/Banan.png',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'nana-token',
    },
  },
  {
    address: 'AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR',
    chainId: 101,
    decimals: 5,
    name: 'Guacamole',
    symbol: 'GUAC',
    logoURI:
      'https://shdw-drive.genesysgo.net/36JhGq9Aa1hBK6aDYM4NyFjR5Waiu9oHrb44j1j8edUt/image.png',
    tags: ['community'],
    extensions: {
      coingeckoId: 'guacamole',
    },
  },
  {
    address: 'FmQ7v2QUqXVVtAXkngBh3Mwx7s3mKT55nQ5Z673dURYS',
    chainId: 101,
    decimals: 9,
    name: 'Dark Protocol',
    symbol: 'DARK',
    logoURI:
      'https://www.arweave.net/3VPYgJz-wlRAm1H5_4zrsAckyz55qa5ILyk3Uq6l4Ms?ext=png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'dark-protocol',
    },
  },
  {
    address: 'iotEVVZLEywoTn1QdwNPddxPWszn3zFhEot3MfL9fns',
    chainId: 101,
    decimals: 6,
    name: 'Helium IOT',
    symbol: 'IOT',
    logoURI:
      'https://shdw-drive.genesysgo.net/CsDkETHRRR1EcueeN346MJoqzymkkr7RFjMqGpZMzAib/iot.png',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'helium-iot',
    },
  },
  {
    address: 'BWXrrYFhT7bMHmNBFoQFWdsSgA3yXoAnMhDK6Fn1eSEn',
    chainId: 101,
    decimals: 9,
    name: 'Hades',
    symbol: 'HADES',
    logoURI: 'https://arweave.net/dvKu5BgpSo6j-iGzQOyVXYZ8OU7iyfhHNpkkJ_8qkkQ',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'hades',
    },
  },
  {
    address: 'HHjoYwUp5aU6pnrvN4s2pwEErwXNZKhxKGYjRJMoBjLw',
    chainId: 101,
    decimals: 9,
    name: 'PIP',
    symbol: 'PIP',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HHjoYwUp5aU6pnrvN4s2pwEErwXNZKhxKGYjRJMoBjLw/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'pip',
    },
  },
  {
    address: '4vMsoUT2BWatFweudnQM1xedRLfJgJ7hswhcpz4xgBTy',
    chainId: 101,
    decimals: 9,
    name: 'HONEY',
    symbol: 'HONEY',
    logoURI:
      'https://hivemapper-marketing-public.s3.us-west-2.amazonaws.com/Hivemapper_HONEY_token.png',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'hivemapper',
    },
  },
  {
    address: 'SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt',
    chainId: 101,
    decimals: 6,
    name: 'Serum',
    symbol: 'SRM',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt/logo.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'serum',
    },
  },
  {
    address: 'Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1',
    chainId: 101,
    decimals: 6,
    name: 'Saber Protocol Token',
    symbol: 'SBR',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1/logo.svg',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'saber',
    },
  },
  {
    address: '27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4',
    chainId: 101,
    decimals: 6,
    name: 'Jupiter Perps',
    symbol: 'JLP',
    logoURI: 'https://static.jup.ag/jlp/icon.png',
    tags: ['community'],
  },
  {
    address: 'DdFPRnccQqLD4zCHrBqdY95D6hvw6PLWp9DEXj1fLCL9',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped USDC (Allbridge from Ethereum)',
    symbol: 'aeUSDC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
    tags: ['old-registry'],
  },
  {
    address: '9noXzpXnkyEcKF3AeXqUHTdR59V5uvrRBUZ9bwfQwxeq',
    chainId: 101,
    decimals: 9,
    name: 'KING',
    symbol: 'KING',
    logoURI: 'https://i.imgur.com/IQ4rEmD.png',
    tags: ['community'],
    extensions: {
      coingeckoId: 'king-2',
    },
  },
  {
    address: 'CKfatsPMUf8SkiURsDXs7eK6GWb4Jsd6UDbs7twMCWxo',
    chainId: 101,
    decimals: 5,
    name: 'BonkEarn',
    symbol: 'BERN',
    logoURI: 'https://i.imgur.com/nd9AVZ4.jpeg',
    tags: ['community', 'token-2022'],
    extensions: {
      coingeckoId: 'bonkearn',
    },
  },
  {
    address: 'CRWNYkqdgvhGGae9CKfNka58j6QQkaD5bLhKXvUYqnc1',
    chainId: 101,
    decimals: 6,
    name: 'Crowny token',
    symbol: 'CRWNY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CRWNYkqdgvhGGae9CKfNka58j6QQkaD5bLhKXvUYqnc1/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'crowny-token',
    },
  },
  {
    address: '6DNSN2BJsaPFdFFc1zP37kkeNe4Usc1Sqkzr9C9vPWcU',
    chainId: 101,
    decimals: 8,
    name: 'Threshold Bitcoin',
    symbol: 'TBTC',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/TBTC_wh.png',
    tags: ['wormhole', 'community'],
    extensions: {
      coingeckoId: 'tbtc',
    },
  },
  {
    address: 'USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX',
    chainId: 101,
    decimals: 6,
    name: 'USDH Hubble Stablecoin',
    symbol: 'USDH',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX/usdh.svg',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'usdh',
    },
  },
  {
    address: 'BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA',
    chainId: 101,
    decimals: 9,
    name: 'Blaze',
    symbol: 'BLZE',
    logoURI: 'https://solblaze.org/assets/blze.png',
    tags: ['community'],
    extensions: {
      coingeckoId: 'solblaze',
    },
  },
  {
    address: 'Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS',
    chainId: 101,
    decimals: 6,
    name: 'PAI (Parrot USD)',
    symbol: 'PAI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS/logo.svg',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'parrot-usd',
    },
  },
  {
    address: 'BKipkearSqAUdNKa1WDstvcMjoPsSKBuNyvKDQDDu9WE',
    chainId: 101,
    decimals: 6,
    name: 'Hawksight',
    symbol: 'HAWK',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BKipkearSqAUdNKa1WDstvcMjoPsSKBuNyvKDQDDu9WE/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'hawksight',
    },
  },
  {
    address: 'Eh1fXbAipe4k7CYR9UMb2bbWmBcpU3HcyX3LWuRVFBLz',
    chainId: 101,
    decimals: 4,
    name: 'Flowmatic',
    symbol: 'FM',
    logoURI:
      'https://nftstorage.link/ipfs/bafybeighw6z7wdbk73tezruawliwt622xic6r43wmzgpk22rsnmqvjvkrm/Brando_logo_of_F_on_a_black_background_in_the_style_of_light_te_42b8cbea-cc40-4c9f-a098-62c381d624df.png',
    tags: ['community'],
    extensions: {
      coingeckoId: 'flowmatic',
    },
  },
  {
    address: 'kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6',
    chainId: 101,
    decimals: 5,
    name: 'KIN',
    symbol: 'KIN',
    logoURI: 'https://i.imgur.com/do6LTig.jpeg',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'kin',
    },
  },
  {
    address: 'zebeczgi5fSEtbpfQKVZKCJ3WgYXxjkMUkNNx7fLKAF',
    chainId: 101,
    decimals: 9,
    name: 'ZEBEC',
    symbol: 'ZBC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/zebeczgi5fSEtbpfQKVZKCJ3WgYXxjkMUkNNx7fLKAF/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'zebec-protocol',
    },
  },
  {
    address: 'GENEtH5amGSi8kHAtQoezp1XEXwZJ8vcuePYnXdKrMYz',
    chainId: 101,
    decimals: 9,
    name: 'Genopets',
    symbol: 'GENE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GENEtH5amGSi8kHAtQoezp1XEXwZJ8vcuePYnXdKrMYz/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'genopets',
    },
  },
  {
    address: '9nEqaUcb16sQ3Tn1psbkWqyhPdLmfHWjKGymREjsAgTE',
    chainId: 101,
    decimals: 6,
    name: 'WOOF',
    symbol: 'WOOF',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9nEqaUcb16sQ3Tn1psbkWqyhPdLmfHWjKGymREjsAgTE/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'woof-token',
    },
  },
  {
    address: 'C98A4nkJXhpVZNAZdHUA95RpTF3T4whtQubL3YobiUX9',
    chainId: 101,
    decimals: 6,
    name: 'Coin98',
    symbol: 'C98',
    logoURI: 'https://coin98.s3.ap-southeast-1.amazonaws.com/Coin/c98-512.svg',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'coin98',
    },
  },
  {
    address: 'HCgybxq5Upy8Mccihrp7EsmwwFqYZtrHrsmsKwtGXLgW',
    chainId: 101,
    decimals: 6,
    name: 'StarLaunch',
    symbol: 'STARS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HCgybxq5Upy8Mccihrp7EsmwwFqYZtrHrsmsKwtGXLgW/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'starlaunch',
    },
  },
  {
    address: 'EjmyN6qEC1Tf1JxiG1ae7UTJhUxSwk1TCWNWqxWV4J6o',
    chainId: 101,
    decimals: 8,
    name: 'DAI (Portal)',
    symbol: 'DAI',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/DAI_wh.png',
    tags: ['wormhole', 'old-registry'],
  },
  {
    address: 'Fm9rHUTF5v3hwMLbStjZXqNBBoZyGriQaFM6sTFz3K8A',
    chainId: 101,
    decimals: 6,
    name: 'MonkeyBucks',
    symbol: 'MBS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Fm9rHUTF5v3hwMLbStjZXqNBBoZyGriQaFM6sTFz3K8A/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'monkeyball',
    },
  },
  {
    address: 'xLfNTYy76B8Tiix3hA51Jyvc1kMSFV4sPdR7szTZsRu',
    chainId: 101,
    decimals: 6,
    name: 'xLifinity',
    symbol: 'xLFNTY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/xLfNTYy76B8Tiix3hA51Jyvc1kMSFV4sPdR7szTZsRu/logo.svg',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '31k88G5Mq7ptbRDf3AM13HAq6wRQHXHikR8hik7wPygk',
    chainId: 101,
    decimals: 9,
    name: 'Graphite',
    symbol: 'GP',
    logoURI: 'https://arweave.net/ALLzymnuIihFPhoNUJpPxQzbGI8LodXKhNzXzbRMPbA',
    tags: ['community'],
    extensions: {
      coingeckoId: 'graphite-protocol',
    },
  },
  {
    address: 'BiDB55p4G3n1fGhwKFpxsokBMqgctL4qnZpDH1bVQxMD',
    chainId: 101,
    decimals: 9,
    name: 'Decimated',
    symbol: 'DIO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BiDB55p4G3n1fGhwKFpxsokBMqgctL4qnZpDH1bVQxMD/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'decimated',
    },
  },
  {
    address: '9DZ58i5vAfk3JaFVYezYzhrVht7j8McZsUbuTcDiSbrP',
    chainId: 101,
    decimals: 5,
    name: 'Ethrix',
    symbol: 'ETX',
    logoURI: 'https://arweave.net/iOND5JLSsq_0dka0SnzTsDCl83hu0_-sOQ2fDbQDuTQ',
    tags: ['community'],
    extensions: {
      coingeckoId: 'ethrix',
    },
  },
  {
    address: '9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa',
    chainId: 101,
    decimals: 8,
    name: 'Binance Coin (Portal)',
    symbol: 'BNB',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/BNB_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'binance-coin-wormhole',
    },
  },
  {
    address: '3J5QaP1zJN9yXE7jr5XJa3Lq2TyGHSHu2wssK7N1Aw4p',
    chainId: 101,
    decimals: 6,
    name: 'WEN',
    symbol: '$WEN',
    logoURI: 'https://arweave.net/sfrKTJisIlWsNJfw6GWnsitsbUbN6WIjoVJZWMe2Mdk',
    tags: ['community'],
    extensions: {
      coingeckoId: 'wen-2',
    },
  },
  {
    address: 'METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m',
    chainId: 101,
    decimals: 6,
    name: 'Metaplex Token',
    symbol: 'MPLX',
    logoURI: 'https://arweave.net/VRKOcXIvCxqp35RZ9I0-bDGk5qNfT46OTho-2oP9iGc',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'metaplex',
    },
  },
  {
    address: '8Yv9Jz4z7BUHP68dz8E8m3tMe6NKgpMUKn8KVqrPA6Fr',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped USDC (Allbridge from Avalanche)',
    symbol: 'aaUSDC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
    tags: ['old-registry'],
  },
  {
    address: 'HZRCwxP2Vq9PCpPXooayhJ2bxTpo5xfpQrwB1svh332p',
    chainId: 101,
    decimals: 8,
    name: 'Lido DAO (Portal)',
    symbol: 'LDO',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/LDO_wh.png',
    tags: ['wormhole', 'old-registry'],
    extensions: {
      coingeckoId: 'lido-dao-wormhole',
    },
  },
  {
    address: 'HBB111SCo9jkCejsZfz8Ec8nH7T6THF8KEKSnvwT6XK6',
    chainId: 101,
    decimals: 6,
    name: 'Hubble Protocol Token',
    symbol: 'HBB',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HBB111SCo9jkCejsZfz8Ec8nH7T6THF8KEKSnvwT6XK6/logo.svg',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'hubble',
    },
  },
  {
    address: 'GPyzPHuFFGvN4yWWixt6TYUtDG49gfMdFFi2iniTmCkh',
    chainId: 101,
    decimals: 2,
    name: 'CHILI',
    symbol: 'CHILI',
    logoURI: 'https://iili.io/H5O87JS.png',
    tags: ['community'],
    extensions: {
      coingeckoId: 'chili',
    },
  },
  {
    address: 'CKaKtYvz6dKPyMvYq9Rh3UBrnNqYZAyd7iF4hJtjUvks',
    chainId: 101,
    decimals: 9,
    name: 'Gari',
    symbol: 'GARI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CKaKtYvz6dKPyMvYq9Rh3UBrnNqYZAyd7iF4hJtjUvks/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'gari-network',
    },
  },
  {
    address: '9WMwGcY6TcbSfy9XPpQymY3qNEsvEaYL3wivdwPG2fpp',
    chainId: 101,
    decimals: 6,
    name: 'Jelly',
    symbol: 'JELLY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9WMwGcY6TcbSfy9XPpQymY3qNEsvEaYL3wivdwPG2fpp/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'jelly-esports',
    },
  },
  {
    address: 'SLNDpmoWTVADgEdndyvWzroNL7zSi1dF9PC3xHGtPwp',
    chainId: 101,
    decimals: 6,
    name: 'Solend',
    symbol: 'SLND',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SLNDpmoWTVADgEdndyvWzroNL7zSi1dF9PC3xHGtPwp/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solend',
    },
  },
  {
    address: 'AaAEw2VCw1XzgvKB8Rj2DyK2ZVau9fbt2bE8hZFWsMyE',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped ETH (Allbridge from Ethereum)',
    symbol: 'aeWETH',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FeGn77dhg1KXRRFeSwwMiykZnZPw5JXW6naf2aQgZDQf/logo.png',
    tags: ['old-registry'],
  },
  {
    address: 'NFTUkR4u7wKxy9QLaX2TGvd9oZSWoMo4jqSJqdMb7Nk',
    chainId: 101,
    decimals: 6,
    name: 'Blockasset',
    symbol: 'BLOCK',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/NFTUkR4u7wKxy9QLaX2TGvd9oZSWoMo4jqSJqdMb7Nk/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'blockasset',
    },
  },
  {
    address: 'HfYFjMKNZygfMC8LsQ8LtpPsPxEJoXJx4M6tqi75Hajo',
    chainId: 101,
    decimals: 9,
    name: 'Cryowar Token',
    symbol: 'CWAR',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HfYFjMKNZygfMC8LsQ8LtpPsPxEJoXJx4M6tqi75Hajo/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'cryowar-token',
    },
  },
  {
    address: 'LFNTYraetVioAPnGJht4yNg2aUZFXR776cMeN9VMjXp',
    chainId: 101,
    decimals: 6,
    name: 'Lifinity',
    symbol: 'LFNTY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/LFNTYraetVioAPnGJht4yNg2aUZFXR776cMeN9VMjXp/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'lifinity',
    },
  },
  {
    address: 'HxhWkVpk5NS4Ltg5nij2G671CKXFRKPK8vy271Ub4uEK',
    chainId: 101,
    decimals: 8,
    name: 'Hxro (Portal)',
    symbol: 'HXRO',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/HXRO_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'hxro',
    },
  },
  {
    address: 'J9BcrQfX4p9D1bvLzRNCbMDv8f44a9LFdeqNE4Yk2WMD',
    chainId: 101,
    decimals: 6,
    name: 'International Stable Currency',
    symbol: 'ISC',
    logoURI:
      'https://raw.githubusercontent.com/theISCTeam/isc_meta/master/logo.png',
    tags: ['community'],
    extensions: {
      coingeckoId: 'international-stable-currency',
    },
  },
  {
    address: '4Hx6Bj56eGyw8EJrrheM6LBQAvVYRikYCWsALeTrwyRU',
    chainId: 101,
    decimals: 8,
    name: 'dYdX (Portal)',
    symbol: 'DYDX',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/DYDX_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'dydx-wormhole',
    },
  },
  {
    address: '9TVjnzpF3X8DHsfVqYWoCGphJxtGYh1PDCFN5QmsHW5t',
    chainId: 101,
    decimals: 9,
    name: 'Midas',
    symbol: 'MDS',
    logoURI: 'https://arweave.net/DcmraYTxxarO5sZ1fIKdPIo1f76lRMZB_-q7y1d3Qqw',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'midas-token',
    },
  },
  {
    address: '8HGyAAB1yoM1ttS7pXjHMa3dukTFGQggnFFH3hJZgzQh',
    chainId: 101,
    decimals: 6,
    name: 'COPE',
    symbol: 'COPE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8HGyAAB1yoM1ttS7pXjHMa3dukTFGQggnFFH3hJZgzQh/logo.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'cope',
    },
  },
  {
    address: 'Basis9oJw9j8cw53oMV7iqsgo6ihi9ALw4QR31rcjUJa',
    chainId: 101,
    decimals: 6,
    name: 'basis',
    symbol: 'BASIS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Basis9oJw9j8cw53oMV7iqsgo6ihi9ALw4QR31rcjUJa/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'basis-markets',
    },
  },
  {
    address: 'bootyAfCh1eSQeKhFaDjN9Pu6zwPmAoQPoJWVuPasjJ',
    chainId: 101,
    decimals: 9,
    name: 'BOOTY',
    symbol: 'BOOTY',
    logoURI: 'https://arweave.net/N-9sTPFfUhoFzJ6prtY2hItNkVaHVAktRDiuQrHwWhQ',
    tags: ['community'],
    extensions: {
      coingeckoId: 'booty',
    },
  },
  {
    address: 'Bn113WT6rbdgwrm12UJtnmNqGqZjY4it2WoUQuQopFVn',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped USDT (Allbridge from Ethereum)',
    symbol: 'aeUSDT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg',
    tags: ['old-registry'],
  },
  {
    address: 'HovGjrBGTfna4dvg6exkMxXuexB3tUfEZKcut8AWowXj',
    chainId: 101,
    decimals: 4,
    name: 'Space Falcon',
    symbol: 'FCON',
    logoURI:
      'https://raw.githubusercontent.com/spacefalcon-io/crypto/main/logo.svg',
    tags: ['old-registry'],
  },
  {
    address: 'DFL1zNkaGPWm1BqAVqRjCZvHmwTFrEaJtbzJWgseoNJh',
    chainId: 101,
    decimals: 9,
    name: 'DeFi Land',
    symbol: 'DFL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DFL1zNkaGPWm1BqAVqRjCZvHmwTFrEaJtbzJWgseoNJh/logo.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'defi-land',
    },
  },
  {
    address: '6cVgJUqo4nmvQpbgrDZwyfd6RwWw5bfnCamS3M9N1fd',
    chainId: 101,
    decimals: 6,
    name: 'Project SEED Token',
    symbol: 'SHILL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6cVgJUqo4nmvQpbgrDZwyfd6RwWw5bfnCamS3M9N1fd/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'shill-token',
    },
  },
  {
    address: 'F9CpWoyeBJfoRB8f2pBe2ZNPbPsEE76mWZWme3StsvHK',
    chainId: 101,
    decimals: 6,
    name: 'Pepe',
    symbol: 'PEPE',
    logoURI:
      'https://shdw-drive.genesysgo.net/8XiSN28HJqb9czfsBYXsTkLtf4wgAupLpozEaUyA419K/pepecoin.png',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'pepesol',
    },
  },
  {
    address: 'So111DzVTTNpDq81EbeyKZMi4SkhU9yekqB8xmMpqzA',
    chainId: 101,
    decimals: 9,
    name: 'zSOL',
    symbol: 'zSOL',
    logoURI:
      'https://raw.githubusercontent.com/LP-Finance-Inc/token-image/main/zSOL.png',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'zsol',
    },
  },
  {
    address: '3acxNNmfdKKZj9i35P4VDBFm74Ufdt8ojKWceVGynwC5',
    chainId: 101,
    decimals: 4,
    name: 'GM',
    symbol: 'GM',
    logoURI: 'https://arweave.net/jhNqKLDDC2ZtanzmFt-OZZJLFEYRpzus3rzhl7MGiOU',
    tags: ['community'],
  },
  {
    address: '5goWRao6a3yNC4d6UjMdQxonkCMvKBwdpubU3qhfcdf1',
    chainId: 101,
    decimals: 6,
    name: 'Tether USD (PoS) (Portal from Polygon)',
    symbol: 'USDTpo',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDTpo_wh.png',
    tags: ['wormhole', 'old-registry'],
    extensions: {
      coingeckoId: 'tether-usd-pos-wormhole',
    },
  },
  {
    address: 'eqKJTf1Do4MDPyKisMYqVaUFpkEFAs3riGF3ceDH2Ca',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped USDC (Allbridge from Polygon)',
    symbol: 'apUSDC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BXXkv6z8ykpG1yuvUDPgh732wzVHB69RnB9YgSYh3itW/logo.png',
    tags: ['old-registry'],
  },
  {
    address: 'TuLipcqtGVXP9XR62wM8WWCm6a9vhLs7T1uoWBk6FDs',
    chainId: 101,
    decimals: 6,
    name: 'Tulip',
    symbol: 'TULIP',
    logoURI:
      'https://raw.githubusercontent.com/sol-farm/token-logos/main/tulip.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solfarm',
    },
  },
  {
    address: 'StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT',
    chainId: 101,
    decimals: 9,
    name: 'Step',
    symbol: 'STEP',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT/logo.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'step-finance',
    },
  },
  {
    address: 'MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac',
    chainId: 101,
    decimals: 6,
    name: 'Mango',
    symbol: 'MNGO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac/token.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'mango-markets',
    },
  },
  {
    address: 'LMDAmLNduiDmSiMxgae1gW7ubArfEGdAfTpKohqE5gn',
    chainId: 101,
    decimals: 6,
    name: 'lambda.markets',
    symbol: 'LMDA',
    logoURI: 'https://arweave.net/6y2eY-KEaBu4KbZLJwLCTQQUXhWVPKxjgdyW69DwI0o',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'lambda-markets',
    },
  },
  {
    address: '8qJSyQprMC57TWKaYEmetUR3UUiTP2M3hXdcvFhkZdmv',
    chainId: 101,
    decimals: 8,
    name: 'Tether USD (Portal from BSC)',
    symbol: 'USDTbs',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDTbs_wh.png',
    tags: ['wormhole', 'old-registry'],
  },
  {
    address: 'GHvFFSZ9BctWsEc5nujR1MTmmJWY7tgQz2AXE6WVFtGN',
    chainId: 101,
    decimals: 9,
    name: 'SolAPE Token',
    symbol: 'SOLAPE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GHvFFSZ9BctWsEc5nujR1MTmmJWY7tgQz2AXE6WVFtGN/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solape-token',
    },
  },
  {
    address: 'AUrMpCDYYcPuHhyNX8gEEqbmDPFUpBpHrNW3vPeCFn5Z',
    chainId: 101,
    decimals: 9,
    name: 'AVAX (Allbridge from Avalanche)',
    symbol: 'AVAX',
    logoURI:
      'https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'EcQCUYv57C4V6RoPxkVUiDwtX1SP8y8FP5AEToYL8Az',
    chainId: 101,
    decimals: 9,
    name: 'Walken',
    symbol: 'WLKN',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EcQCUYv57C4V6RoPxkVUiDwtX1SP8y8FP5AEToYL8Az/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'walken',
    },
  },
  {
    address: '5yxNbU8DgYJZNi3mPD9rs4XLh9ckXrhPjJ5VCujUWg5H',
    chainId: 101,
    decimals: 5,
    name: 'Fronk',
    symbol: 'FRONK',
    logoURI:
      'https://shdw-drive.genesysgo.net/8tfWzweVe7MAfi8qwiKFnzLq6wuLT7WAPMoQC7DH47Fq/fronk.gif',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'fronk',
    },
  },
  {
    address: '3FoUAsGDbvTD6YZ4wVKJgTB76onJUKz7GPEBNiR5b8wc',
    chainId: 101,
    decimals: 4,
    name: 'Cheems',
    symbol: 'CHEEMS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3FoUAsGDbvTD6YZ4wVKJgTB76onJUKz7GPEBNiR5b8wc/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'cheems',
    },
  },
  {
    address: '8ymi88q5DtmdNTn2sPRNFkvMkszMHuLJ1e3RVdWjPa3s',
    chainId: 101,
    decimals: 0,
    name: 'SolDoge',
    symbol: 'SDOGE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8ymi88q5DtmdNTn2sPRNFkvMkszMHuLJ1e3RVdWjPa3s/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'soldoge',
    },
  },
  {
    address: 'isktkk27QaTpoRUhwwS5n9YUoYf8ydCuoTz5R2tFEKu',
    chainId: 101,
    decimals: 2,
    name: 'Rafkróna',
    symbol: 'ISKT',
    logoURI:
      'https://raw.githubusercontent.com/rafmyntasjodur/iskt-metadata/main/logo.png',
    tags: ['community'],
    extensions: {
      coingeckoId: 'rafkrona',
    },
  },
  {
    address: 'AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped FTT (Sollet)',
    symbol: 'soFTT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'ftx-token',
    },
  },
  {
    address: 'DubwWZNWiNGMMeeQHPnMATNj77YZPZSAz2WVR5WjLJqz',
    chainId: 101,
    decimals: 9,
    name: 'CropperFinance',
    symbol: 'CRP',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DubwWZNWiNGMMeeQHPnMATNj77YZPZSAz2WVR5WjLJqz/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'cropperfinance',
    },
  },
  {
    address: 'ErGB9xa24Szxbk1M28u2Tx8rKPqzL6BroNkkzk5rG4zj',
    chainId: 101,
    decimals: 8,
    name: 'FRAKT Token',
    symbol: 'FRKT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ErGB9xa24Szxbk1M28u2Tx8rKPqzL6BroNkkzk5rG4zj/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'frakt-token',
    },
  },
  {
    address: 'UXPhBoR3qG4UCiGNJfV7MqhHyFqKN68g45GoYvAeL2M',
    chainId: 101,
    decimals: 9,
    name: 'UXP Governance Token',
    symbol: 'UXP',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/UXPhBoR3qG4UCiGNJfV7MqhHyFqKN68g45GoYvAeL2M/uxp-icon-black.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'uxd-protocol-token',
    },
  },
  {
    address: 'Taki7fi3Zicv7Du1xNAWLaf6mRK7ikdn77HeGzgwvo4',
    chainId: 101,
    decimals: 9,
    name: 'Taki',
    symbol: 'TAKI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Taki7fi3Zicv7Du1xNAWLaf6mRK7ikdn77HeGzgwvo4/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'taki',
    },
  },
  {
    address: 'G7rwEgk8KgQ4RUTnMy2W2i7dRDq4hXHD4CSp9PSmSbRW',
    chainId: 101,
    decimals: 9,
    name: 'CHAD',
    symbol: 'CHAD',
    logoURI:
      'https://bafybeicl7hj53czkh3vqclya2tltuuj3f4r7acwbchwjjajfv3jvff62iu.ipfs.nftstorage.link/',
    tags: ['community', 'token-2022'],
    extensions: {
      coingeckoId: 'chad-on-solana',
    },
  },
  {
    address: 'o1Mw5Y3n68o8TakZFuGKLZMGjm72qv4JeoZvGiCLEvK',
    chainId: 101,
    decimals: 2,
    name: 'Cope',
    symbol: 'Cope',
    logoURI:
      'https://shdw-drive.genesysgo.net/HNTiV9QS4UDrcxpucyKRGTKQTqKGLif61GwM6tpd5R5V/image.png',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'cope-token',
    },
  },
  {
    address: 'htoHLBJV1err8xP5oxyQdV2PLQhtVjxLXpKB7FsgJQD',
    chainId: 101,
    decimals: 9,
    name: 'HTO',
    symbol: 'HTO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/htoHLBJV1err8xP5oxyQdV2PLQhtVjxLXpKB7FsgJQD/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'heavenland-hto',
    },
  },
  {
    address: 'PRSMNsEPqhGVCH1TtWiJqPjJyh2cKrLostPZTNy1o5x',
    chainId: 101,
    decimals: 6,
    name: 'PRISM',
    symbol: 'PRISM',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/PRSMNsEPqhGVCH1TtWiJqPjJyh2cKrLostPZTNy1o5x/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'prism',
    },
  },
  {
    address: '4TUNzcgp2fPD48fcW4seRjyqyDZMrPj4ZubnXFEsKeYk',
    chainId: 101,
    decimals: 7,
    name: 'PRNT',
    symbol: 'PRNT',
    logoURI:
      'https://shdw-drive.genesysgo.net/EYH4kEfffWwRnF63G6Sx68sHdhkue4trzuSeUji9UJSe/prnt.jpg',
    tags: ['community'],
    extensions: {
      coingeckoId: 'prnt',
    },
  },
  {
    address: 'FoRGERiW7odcCBGU1bztZi16osPBHjxharvDathL5eds',
    chainId: 101,
    decimals: 9,
    name: 'FORGE',
    symbol: 'FORGE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FoRGERiW7odcCBGU1bztZi16osPBHjxharvDathL5eds/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'blocksmith-labs-forge',
    },
  },
  {
    address: 'GsNzxJfFn6zQdJGeYsupJWzUAm57Ba7335mfhWvFiE9Z',
    chainId: 101,
    decimals: 6,
    name: 'Dexlab',
    symbol: 'DXL',
    logoURI:
      'https://raw.githubusercontent.com/dexlab-project/assets/master/dexlab/dexlab_symbol_logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'dexlab',
    },
  },
  {
    address: 'HALLAeXM6sz7vrqp6Zyaqi8RphQ1LtE69fyeMbzk42Mk',
    chainId: 101,
    decimals: 9,
    name: 'HALLAIN Token',
    symbol: 'HALLAIN',
    logoURI:
      'https://bafybeiastsqhe3a62ezhnefecwgvv43x3rc2jjgl2hs2ew5txfoz4zrcye.ipfs.w3s.link/hallain.png?ext=PNG',
    tags: ['community'],
  },
  {
    address: '2VhjJ9WxaGC3EZFwJG9BDUs9KxKCAjQY4vgd1qxgYWVg',
    chainId: 101,
    decimals: 6,
    name: 'EUROe Stablecoin',
    symbol: 'EUROe',
    logoURI: 'https://dev.euroe.com/persistent/token-icon/png/256x256.png',
    tags: ['community'],
    extensions: {
      coingeckoId: 'euroe-stablecoin',
    },
  },
  {
    address: '94XduSfSnyas7jAEFSJSXiCi1xQ4mENWcii1aCvjVuqu',
    chainId: 101,
    decimals: 9,
    name: 'JIMMY',
    symbol: 'JIMMY',
    logoURI: 'https://arweave.net/5NmSALkMrjr5p33OrjuQlA5a3LRPLv0Ta07SnEWt1fk',
    tags: ['community'],
  },
  {
    address: 'Gz7VkD4MacbEB6yC5XD3HcumEiYx2EtDYYrfikGsvopG',
    chainId: 101,
    decimals: 8,
    name: 'MATIC (Portal from Polygon)',
    symbol: 'MATICpo',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/MATICpo_wh.png',
    tags: ['wormhole', 'solana-fm'],
    extensions: {
      coingeckoId: 'matic-wormhole',
    },
  },
  {
    address: 'Lrxqnh6ZHKbGy3dcrCED43nsoLkM1LTzU2jRfWe8qUC',
    chainId: 101,
    decimals: 6,
    name: 'Larix',
    symbol: 'LARIX',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Lrxqnh6ZHKbGy3dcrCED43nsoLkM1LTzU2jRfWe8qUC/logo.jpg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'larix',
    },
  },
  {
    address: 'E2VmbootbVCBkMNNxKQgCLMS1X3NoGMaYAsufaAsf7M',
    chainId: 101,
    decimals: 6,
    name: 'USD Coin (PoS) (Portal from Polygon)',
    symbol: 'USDCpo',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDCpo_wh.png',
    tags: ['wormhole', 'old-registry'],
    extensions: {
      coingeckoId: 'usd-coin-pos-wormhole',
    },
  },
  {
    address: 'EPeUFDgHRxs9xxEPVaL6kfGQvCon7jmAWKVUHuux1Tpz',
    chainId: 101,
    decimals: 8,
    name: 'Basic Attention Token (Portal)',
    symbol: 'BAT',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/BAT_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
  },
  {
    address: 'PugAiDuaQ5hzicBHAW9qrQQ8qi4B6sh3n7PknKhyjeX',
    chainId: 101,
    decimals: 5,
    name: 'PUGAI',
    symbol: 'PUGAI',
    logoURI:
      'https://shdw-drive.genesysgo.net/CS412vMTyfY1J4u1Ve7UjAdhGu7V9jCJibkVussMnaKr/pug1%20(2).png',
    tags: ['community'],
    extensions: {
      coingeckoId: 'pug-ai',
    },
  },
  {
    address: '8XSsNvaKU9FDhYWAv7Yc7qSNwuJSzVrXBNEk7AFiWF69',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped USDC (Allbridge from BSC)',
    symbol: 'abUSDC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BXXkv6z8ykpG1yuvUDPgh732wzVHB69RnB9YgSYh3itW/logo.png',
    tags: ['old-registry'],
  },
  {
    address: 'EchesyfXePKdLtoiZSL8pBe8Myagyy8ZRqsACNCFGnvp',
    chainId: 101,
    decimals: 6,
    name: 'Bonfida',
    symbol: 'FIDA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EchesyfXePKdLtoiZSL8pBe8Myagyy8ZRqsACNCFGnvp/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'bonfida',
    },
  },
  {
    address: 'FoXyMu5xwXre7zEoSvzViRk3nGawHUp9kUh97y2NDhcq',
    chainId: 101,
    decimals: 0,
    name: 'Famous Fox Federation',
    symbol: 'FOXY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FoXyMu5xwXre7zEoSvzViRk3nGawHUp9kUh97y2NDhcq/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'famous-fox-federation',
    },
  },
  {
    address: 'Fishy64jCaa3ooqXw7BHtKvYD8BTkSyAPh6RNE3xZpcN',
    chainId: 101,
    decimals: 6,
    name: 'FISHY by sharky.fi',
    symbol: 'FISHY',
    logoURI:
      'https://shdw-drive.genesysgo.net/CpRahRvMZad2VNTJDN24m4Bk6PsWRBm14w684RatY1bd/The%20winning%20logo.png',
    tags: ['community'],
  },
  {
    address: 'MEANeD3XDdUmNMsRGjASkSWdC8prLYsoRJ61pPeHctD',
    chainId: 101,
    decimals: 6,
    name: 'MEAN',
    symbol: 'MEAN',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MEANeD3XDdUmNMsRGjASkSWdC8prLYsoRJ61pPeHctD/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'meanfi',
    },
  },
  {
    address: '5HsZR8eG7QpQcN8Mnp8oFdENRkJMP9ZkcKhPSCKTJSWh',
    chainId: 101,
    decimals: 9,
    name: 'Moon Roll Coin',
    symbol: 'MRC',
    logoURI: 'https://moonroll-bucket.s3.amazonaws.com/token-image/Frame.png',
    tags: ['community'],
  },
  {
    address: '5MAYDfq5yxtudAhtfyuMBuHZjgAbaS9tbEyEQYAhDS5y',
    chainId: 101,
    decimals: 6,
    name: 'Access Protocol',
    symbol: 'ACS',
    logoURI: 'https://ap-staging.fra1.digitaloceanspaces.com/1663691449945',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'access-protocol',
    },
  },
  {
    address: 'BdZPG9xWrG3uFrx2KrUW1jT4tZ9VKPDWknYihzoPRJS3',
    chainId: 101,
    decimals: 9,
    name: 'prtSOL (Parrot Staked SOL)',
    symbol: 'prtSOL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BdZPG9xWrG3uFrx2KrUW1jT4tZ9VKPDWknYihzoPRJS3/logo.svg',
    tags: ['old-registry'],
  },
  {
    address: 'DMqv9nGbEVAkQoz13ncKh5XJrFg2BQ5YTwd1XrGEKkaz',
    chainId: 101,
    decimals: 6,
    name: 'Flying Spaghetti Monster',
    symbol: 'FSM',
    logoURI:
      'https://bafybeibxoen5asgzdf7kz6jlac6656s3a2xpfc2m3t77m73pfwy6keh6gu.ipfs.nftstorage.link',
    tags: ['community'],
  },
  {
    address: 'SNSNkV9zfG5ZKWQs6x4hxvBRV6s8SqMfSGCtECDvdMd',
    chainId: 101,
    decimals: 9,
    name: 'SynesisOne',
    symbol: 'SNS',
    logoURI:
      'https://raw.githubusercontent.com/Synesis-One/spl-token/main/icon.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'synesis-one',
    },
  },
  {
    address: 'HZNpqL7RT9gxf9eWoWsWzC5DfjzQ41XTQgEA7p3VzaaD',
    chainId: 101,
    decimals: 8,
    name: 'Trust Wallet (Portal)',
    symbol: 'TWT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HZNpqL7RT9gxf9eWoWsWzC5DfjzQ41XTQgEA7p3VzaaD/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'ZScHuTtqZukUrtZS43teTKGs2VqkKL8k4QCouR2n6Uo',
    chainId: 101,
    decimals: 8,
    name: 'Lido Wrapped Staked ETH',
    symbol: 'wstETH',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ZScHuTtqZukUrtZS43teTKGs2VqkKL8k4QCouR2n6Uo/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'E77cpQ4VncGmcAXX16LHFFzNBEBb2U7Ar7LBmZNfCgwL',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped USDT (Allbridge from BSC)',
    symbol: 'abUSDT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BQcdHdAQW1hczDbBi9hiegXAR7A98Q9jx3X3iBBBDiq4/logo.png',
    tags: ['old-registry'],
  },
  {
    address: '9iLH8T7zoWhY7sBmj1WK9ENbWdS1nL8n9wAxaeRitTa6',
    chainId: 101,
    decimals: 9,
    name: 'Hedge USD',
    symbol: 'USH',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9iLH8T7zoWhY7sBmj1WK9ENbWdS1nL8n9wAxaeRitTa6/logo.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'hedge-usd',
    },
  },
  {
    address: 'CiKu4eHsVrc1eueVQeHn7qhXTcVu95gSQmBpX4utjL9z',
    chainId: 101,
    decimals: 8,
    name: 'Shiba Inu (Portal)',
    symbol: 'SHIB',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/SHIB_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'shiba-inu-wormhole',
    },
  },
  {
    address: 'a11bdAAuV8iB2fu7X6AxAvDTo1QZ8FXB3kk5eecdasp',
    chainId: 101,
    decimals: 9,
    name: 'Allbridge',
    symbol: 'ABR',
    logoURI:
      'https://raw.githubusercontent.com/allbridge-io/media/main/token.svg',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'allbridge',
    },
  },
  {
    address: '3UCMiSnkcnkPE1pgQ5ggPCBv6dXgVUy16TmMUe1WpG9x',
    chainId: 101,
    decimals: 8,
    name: 'Aleph.im (Portal)',
    symbol: 'ALEPH',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/ALEPH_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
  },
  {
    address: '2KE2UNJKB6RGgb78DxJbi2HXSfCs1EocHj4FDMZPr4HA',
    chainId: 101,
    decimals: 5,
    name: 'Slow Protocol',
    symbol: 'SLOW',
    logoURI:
      'https://t3wsqd23o7n5d2pjgvspqafxi3jcznjfrdgwkh6acmgf3zjpnsgq.arweave.net/nu0oD1t329Hp6TVk-AC3RtIstSWIzWUfwBMMXeUvbI0',
    tags: ['community'],
  },
  {
    address: 'METAmTMXwdb8gYzyCPfXXFmZZw4rUsXX58PNsDg7zjL',
    chainId: 101,
    decimals: 6,
    name: 'Solice',
    symbol: 'SLC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/METAmTMXwdb8gYzyCPfXXFmZZw4rUsXX58PNsDg7zjL/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solice',
    },
  },
  {
    address: '3FHpkMTQ3QyAJoLoXVdBpH4TfHiehnL2kXmv9UXBpYuF',
    chainId: 101,
    decimals: 9,
    name: 'STYLE',
    symbol: 'STYLE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3FHpkMTQ3QyAJoLoXVdBpH4TfHiehnL2kXmv9UXBpYuF/style.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'style',
    },
  },
  {
    address: '2kMpEJCZL8vEDZe7YPLMCS9Y3WKSAMedXBn7xHPvsWvi',
    chainId: 101,
    decimals: 5,
    name: 'SolarMoon',
    symbol: 'MOON',
    logoURI:
      'https://gateway.ipfscdn.io/ipfs/bafkreifwdwgcv6fnh5icz3wkefokatsemsojck4hftsnuf4xcfjcvagsva',
    tags: ['community', 'token-2022'],
  },
  {
    address: '5qKDWkBejLtRh1UGFV7e58QEkdn2fRyH5ehVXqUYujNW',
    chainId: 101,
    decimals: 9,
    name: 'Sdrive Coin',
    symbol: 'SCOIN',
    logoURI: 'https://arweave.net/O5kTUpi6mNl-FWY2zq01MqK0qkwRKy3O5cyaoosyJwM',
    tags: ['community'],
    extensions: {
      coingeckoId: 'sdrive-app',
    },
  },
  {
    address: 'kNkT1RDnexWqYP3EYGyWv5ZtazB8CfgGAfJtv9AQ3kz',
    chainId: 101,
    decimals: 9,
    name: 'Kineko',
    symbol: 'KNK',
    logoURI:
      'https://www.arweave.net/u7prAs3T9UHwykErAXDfX306yAxFU08PpgvN819K_so?ext=png',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'kineko-knk',
    },
  },
  {
    address: 'FHfba3ov5P3RjaiLVgh8FTv4oirxQDoVXuoUUDvHuXax',
    chainId: 101,
    decimals: 6,
    name: 'USD Coin (Portal from Avalanche)',
    symbol: 'USDCav',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDCav_wh.png',
    tags: ['wormhole'],
  },
  {
    address: 'FCqfQSujuPxy6V42UvafBhsysWtEq1vhjfMN1PUbgaxA',
    chainId: 101,
    decimals: 8,
    name: 'USD Coin (Portal from BSC)',
    symbol: 'USDCbs',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDCbs_wh.png',
    tags: ['wormhole', 'old-registry'],
  },
  {
    address: 'H1G6sZ1WDoMmMCFqBKAbg9gkQPCo1sKQtaJWz9dHmqZr',
    chainId: 101,
    decimals: 9,
    name: 'SHIBONK',
    symbol: 'SBONK',
    logoURI:
      'https://raw.githubusercontent.com/Sperlo64/SHIBONK/main/bonklogo2.png',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'shibonk-311f81df-a4ea-4f31-9e61-df0af8211bd7',
    },
  },
  {
    address: '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped Bitcoin (Sollet)',
    symbol: 'soBTC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'wrapped-bitcoin-sollet',
    },
  },
  {
    address: 'PsyFiqqjiv41G7o5SMRzDJCu4psptThNR2GtfeGHfSq',
    chainId: 101,
    decimals: 6,
    name: 'PsyOptions',
    symbol: 'PSY',
    logoURI:
      'https://user-images.githubusercontent.com/32071703/149460918-3694084f-2a37-4c95-93d3-b5aaf078d444.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'psyoptions',
    },
  },
  {
    address: '5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm',
    chainId: 101,
    decimals: 9,
    name: 'Socean staked SOL',
    symbol: 'scnSOL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm/logo.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'socean-staked-sol',
    },
  },
  {
    address: 'SUNNYWgPQmFxe9wTZzNK7iPnJ3vYDrkgnxJRJm1s3ag',
    chainId: 101,
    decimals: 6,
    name: 'Sunny Governance Token',
    symbol: 'SUNNY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SUNNYWgPQmFxe9wTZzNK7iPnJ3vYDrkgnxJRJm1s3ag/logo.svg',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'sunny-aggregator',
    },
  },
  {
    address: '5RpUwQ8wtdPCZHhu6MERp2RGrpobsbZ6MH5dDHkUjs2',
    chainId: 101,
    decimals: 8,
    name: 'Binance USD (Portal from BSC)',
    symbol: 'BUSDbs',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/BUSDbs_wh.png',
    tags: ['wormhole', 'old-registry'],
  },
  {
    address: 'z3dn17yLaGMKffVogeFHQ9zWVcXgqgf3PQnDsNs2g6M',
    chainId: 101,
    decimals: 6,
    name: 'Oxygen Protocol',
    symbol: 'OXY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/z3dn17yLaGMKffVogeFHQ9zWVcXgqgf3PQnDsNs2g6M/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'oxygen',
    },
  },
  {
    address: '9m9fmqJ2s7iUXZhFMsrdes1UcAtu3JyZXK3ZXfW3KPEw',
    chainId: 101,
    decimals: 5,
    name: 'BIRDIES',
    symbol: 'BIRDS',
    logoURI:
      'https://raw.githubusercontent.com/ArashiSol/Birdies/main/photo1695208363.jpeg',
    tags: ['community'],
    extensions: {
      coingeckoId: 'birdies',
    },
  },
  {
    address: '8upjSpvjcdpuzhfR1zriwg5NXkwDruejqNE9WNbPRtyA',
    chainId: 101,
    decimals: 6,
    name: 'Grape',
    symbol: 'GRAPE',
    logoURI:
      'https://lh3.googleusercontent.com/y7Wsemw9UVBc9dtjtRfVilnS1cgpDt356PPAjne5NvMXIwWz9_x7WKMPH99teyv8vXDmpZinsJdgiFQ16_OAda1dNcsUxlpw9DyMkUk=s0',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'grape-2',
    },
  },
  {
    address: 'AD27ov5fVU2XzwsbvnFvb1JpCBaCB5dRXrczV9CqSVGb',
    chainId: 101,
    decimals: 9,
    name: 'Realy Token',
    symbol: 'REAL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AD27ov5fVU2XzwsbvnFvb1JpCBaCB5dRXrczV9CqSVGb/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'realy-metaverse',
    },
  },
  {
    address: '2Kc38rfQ49DFaKHQaWbijkE7fcymUMLY5guUiUsDmFfn',
    chainId: 101,
    decimals: 6,
    name: 'Kurobi',
    symbol: 'KURO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2Kc38rfQ49DFaKHQaWbijkE7fcymUMLY5guUiUsDmFfn/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'kurobi',
    },
  },
  {
    address: 'PoRTjZMPXb9T7dyU7tpLEZRQj7e6ssfAE62j2oQuc6y',
    chainId: 101,
    decimals: 6,
    name: 'Port Finance Token',
    symbol: 'PORT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/PoRTjZMPXb9T7dyU7tpLEZRQj7e6ssfAE62j2oQuc6y/PORT.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'port-finance',
    },
  },
  {
    address: '2HeykdKjzHKGm2LKHw8pDYwjKPiFEoXAz74dirhUgQvq',
    chainId: 101,
    decimals: 9,
    name: 'Sator',
    symbol: 'SAO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2HeykdKjzHKGm2LKHw8pDYwjKPiFEoXAz74dirhUgQvq/Sator_Logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'sator',
    },
  },
  {
    address: '4dmKkXNHdgYsXqBHCuMikNQWwVomZURhYvkkX5c4pQ7y',
    chainId: 101,
    decimals: 6,
    name: 'Synthetify',
    symbol: 'SNY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4dmKkXNHdgYsXqBHCuMikNQWwVomZURhYvkkX5c4pQ7y/logo.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'synthetify-token',
    },
  },
  {
    address: '5nrAynqdsEyBc3GRc7hvM5QnDwjQVePNg9kn6bCvi4G3',
    chainId: 101,
    decimals: 5,
    name: 'SUPER TOKEN',
    symbol: 'SUPER',
    logoURI:
      'https://nftstorage.link/ipfs/bafkreibxcsqfuls3yiitufaid3wnjzrgx2gdswtteo33g6fojoxctob5na',
    tags: ['community'],
  },
  {
    address: 'kiGenopAScF8VF31Zbtx2Hg8qA5ArGqvnVtXb83sotc',
    chainId: 101,
    decimals: 9,
    name: 'Genopets Ki',
    symbol: 'KI',
    logoURI:
      'https://arweave.net/WfPR8w5dEoerG_bI3S2o2_nuSfWY3p8M4YbQ6ijd1cQ?ext=png',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'genopet-ki',
    },
  },
  {
    address: '5gs8nf4wojB5EXgDUWNLwXpknzgV2YWDhveAeBZpVLbp',
    chainId: 101,
    decimals: 6,
    name: 'xHashtag Token',
    symbol: 'XTAG',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5gs8nf4wojB5EXgDUWNLwXpknzgV2YWDhveAeBZpVLbp/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'xhashtag',
    },
  },
  {
    address: '6XWfkyg5mzGtKNftSDgYjyoPyUsLRf2rafj95XSFSFrr',
    chainId: 101,
    decimals: 9,
    name: 'Kitty Coin',
    symbol: 'KITTY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6XWfkyg5mzGtKNftSDgYjyoPyUsLRf2rafj95XSFSFrr/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'kitty-coin-solana',
    },
  },
  {
    address: 'FLTHudk5B5zag7JmGXqrYrFfey6otevLQA6jm1UHHLEE',
    chainId: 101,
    decimals: 9,
    name: 'FLTH',
    symbol: 'FLTH',
    logoURI:
      'https://www.arweave.net/6cZ-d9BnAsCqxkpzazYmKjLpUN2kE-jYnU3WDV4_lo0?ext=png',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'liberty-square-filth',
    },
  },
  {
    address: '4h41QKUkQPd2pCAFXNNgZUyGUxQ6E7fMexaZZHziCvhh',
    chainId: 101,
    decimals: 6,
    name: 'The Suites Token',
    symbol: 'SUITE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4h41QKUkQPd2pCAFXNNgZUyGUxQ6E7fMexaZZHziCvhh/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'AAmGoPDFLG6bE82BgZWjVi8k95tj9Tf3vUN7WvtUm2BU',
    chainId: 101,
    decimals: 6,
    name: 'RaceFi Token',
    symbol: 'RACEFI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AAmGoPDFLG6bE82BgZWjVi8k95tj9Tf3vUN7WvtUm2BU/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'racefi',
    },
  },
  {
    address: 'SLRSSpSLUTP7okbCUBYStWCo1vUgyt775faPqz8HUMr',
    chainId: 101,
    decimals: 6,
    name: 'Solrise Finance',
    symbol: 'SLRS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SLRSSpSLUTP7okbCUBYStWCo1vUgyt775faPqz8HUMr/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solrise-finance',
    },
  },
  {
    address: '88881Hu2jGMfCs9tMu5Rr7Ah7WBNBuXqde4nR5ZmKYYy',
    chainId: 101,
    decimals: 8,
    name: 'Saber Wrapped USD Coin (8 decimals)',
    symbol: 'sUSDC-8',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/88881Hu2jGMfCs9tMu5Rr7Ah7WBNBuXqde4nR5ZmKYYy/icon.png',
    tags: ['old-registry'],
  },
  {
    address: 'HJbNXx2YMRxgfUJ6K4qeWtjatMK5KYQT1QnsCdDWywNv',
    chainId: 101,
    decimals: 9,
    name: 'Atlas Dex',
    symbol: 'ATS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HJbNXx2YMRxgfUJ6K4qeWtjatMK5KYQT1QnsCdDWywNv/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'atlas-dex',
    },
  },
  {
    address: 'Dwri1iuy5pDFf2u2GwwsH2MxjR6dATyDv9En9Jk8Fkof',
    chainId: 101,
    decimals: 9,
    name: '2080',
    symbol: '2080',
    logoURI:
      'https://raw.githubusercontent.com/resources-pub/token-info/main/fidelion_logo.png',
    tags: ['community'],
    extensions: {
      coingeckoId: '2080',
    },
  },
  {
    address: '5p2zjqCd1WJzAVgcEnjhb9zWDU7b9XVhFhx4usiyN7jB',
    chainId: 101,
    decimals: 9,
    name: 'CATO',
    symbol: 'CATO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5p2zjqCd1WJzAVgcEnjhb9zWDU7b9XVhFhx4usiyN7jB/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'cato',
    },
  },
  {
    address: 'SLCLww7nc1PD2gQPQdGayHviVVcpMthnqUz2iWKhNQV',
    chainId: 101,
    decimals: 9,
    name: 'Solcial token',
    symbol: 'SLCL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SLCLww7nc1PD2gQPQdGayHviVVcpMthnqUz2iWKhNQV/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solcial',
    },
  },
  {
    address: '5JnZ667P3VcjDinkJFysWh2K2KtViy63FZ3oL5YghEhW',
    chainId: 101,
    decimals: 9,
    name: 'APYSwap',
    symbol: 'APYS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5JnZ667P3VcjDinkJFysWh2K2KtViy63FZ3oL5YghEhW/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'apyswap',
    },
  },
  {
    address: '4tJZhSdGePuMEfZQ3h5LaHjTPsw1iWTRFTojnZcwsAU6',
    chainId: 101,
    decimals: 9,
    name: 'Elumia Crowns',
    symbol: 'ELU',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4tJZhSdGePuMEfZQ3h5LaHjTPsw1iWTRFTojnZcwsAU6/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'elumia',
    },
  },
  {
    address: 'G9tt98aYSznRk7jWsfuz9FnTdokxS6Brohdo9hSmjTRB',
    chainId: 101,
    decimals: 9,
    name: 'PUFF',
    symbol: 'PUFF',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/G9tt98aYSznRk7jWsfuz9FnTdokxS6Brohdo9hSmjTRB/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'puff',
    },
  },
  {
    address: 'AMdnw9H5DFtQwZowVFr4kUgSXJzLokKSinvgGiUoLSps',
    chainId: 101,
    decimals: 9,
    name: 'MOONLANA',
    symbol: 'MOLA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AMdnw9H5DFtQwZowVFr4kUgSXJzLokKSinvgGiUoLSps/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'moonlana',
    },
  },
  {
    address: '2cJgFtnqjaoiu9fKVX3fny4Z4pRzuaqfJ3PBTMk2D9ur',
    chainId: 101,
    decimals: 6,
    name: 'Plutonian DAO',
    symbol: 'PLD',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2cJgFtnqjaoiu9fKVX3fny4Z4pRzuaqfJ3PBTMk2D9ur/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'plutonian-dao',
    },
  },
  {
    address: 'EswgBj2hZKdgovX2ihWSUDnuBg9VNbGmSGoH5yjNsPRa',
    chainId: 101,
    decimals: 9,
    name: 'Physis',
    symbol: 'PHY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EswgBj2hZKdgovX2ihWSUDnuBg9VNbGmSGoH5yjNsPRa/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'physis',
    },
  },
  {
    address: 'ratioMVg27rSZbSvBopUvsdrGUzeALUfFma61mpxc8J',
    chainId: 101,
    decimals: 6,
    name: 'Ratio Governance Token',
    symbol: 'RATIO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ratioMVg27rSZbSvBopUvsdrGUzeALUfFma61mpxc8J/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'ratio-finance',
    },
  },
  {
    address: 'DuSyBCGuhPvyGu6cSvbZonvQvh8JLyGvXJn1TmkJh6Zn',
    chainId: 101,
    decimals: 0,
    name: 'NeonGame Credits',
    symbol: '$NEON',
    logoURI: 'https://arweave.net/VPS4BrOgXT4rg-mwGfCLqXL8vtbII0ianMBsw_L2CeE',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'kiraZUmSnzgfVfhrdvNj6hxHFaPFTTUk8ioY98cbh6G',
    chainId: 101,
    decimals: 9,
    name: 'KIRA',
    symbol: 'KIRA',
    logoURI:
      'https://www.arweave.net/71SbFojNuoFeQ_n4cfMYKzX87xPvsQvNr59R_ZM7ucQ?ext=png',
    tags: ['community'],
  },
  {
    address: 'JAzesW3tU2VLDx99pwgkDMca2DTNsEhSWG8sj21B1niz',
    chainId: 101,
    decimals: 6,
    name: 'Phoenix',
    symbol: 'PHNX',
    logoURI:
      'https://bafybeicmwtzskjhcsnoymhsv5fmlruwoxgounmcweiei2qnxh6ayesupiq.ipfs.nftstorage.link',
    tags: ['community', 'token-2022'],
  },
  {
    address: 'PRT88RkA4Kg5z7pKnezeNH4mafTvtQdfFgpQTGRjz44',
    chainId: 101,
    decimals: 6,
    name: 'PRT (Parrot Protocol)',
    symbol: 'PRT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/PRT88RkA4Kg5z7pKnezeNH4mafTvtQdfFgpQTGRjz44/logo.svg',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'parrot-protocol',
    },
  },
  {
    address: 'KgV1GvrHQmRBY8sHQQeUKwTm2r2h8t4C8qt12Cw1HVE',
    chainId: 101,
    decimals: 8,
    name: 'AVAX (Portal)',
    symbol: 'AVAX',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/AVAX_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'avalanche-wormhole',
    },
  },
  {
    address: '8PMHT4swUMtBzgHnh5U564N5sjPSiUz2cjEQzFnnP1Fo',
    chainId: 101,
    decimals: 9,
    name: 'Rope Token',
    symbol: 'ROPE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8PMHT4swUMtBzgHnh5U564N5sjPSiUz2cjEQzFnnP1Fo/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'rope-token',
    },
  },
  {
    address: '49c7WuCZkQgc3M4qH8WuEUNXfgwupZf1xqWkDQ7gjRGt',
    chainId: 101,
    decimals: 8,
    name: 'The Sandbox (Portal)',
    symbol: 'SAND',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/SAND_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'the-sandbox-wormhole',
    },
  },
  {
    address: '9mWRABuz2x6koTPCWiCPM49WUbcrNqGTHBV9T9k7y1o7',
    chainId: 101,
    decimals: 9,
    name: 'MAI Stablecoin',
    symbol: 'MAI',
    logoURI:
      'https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'mimatic',
    },
  },
  {
    address: '4SZjjNABoqhbd4hnapbvoEPEqT8mnNkfbEoAwALf1V8t',
    chainId: 101,
    decimals: 6,
    name: 'Crypto Cavemen',
    symbol: 'CAVE',
    logoURI:
      'https://ftoblquxiunjey7bu4eevlz2u7kwg5s3yvou7adgge2jbihcu7qq.arweave.net/LNwVwpdFGpJj4acISq86p9VjdlvFXU-AZjE0kKDip-E/?ext=png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'cave',
    },
  },
  {
    address: '6VNKqgz9hk7zRShTFdg5AnkfKwZUcojzwAkzxSH3bnUm',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped HAPI',
    symbol: 'wHAPI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6VNKqgz9hk7zRShTFdg5AnkfKwZUcojzwAkzxSH3bnUm/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'hapi',
    },
  },
  {
    address: 'APTtJyaRX5yGTsJU522N4VYWg3vCvSb65eam5GrPT5Rt',
    chainId: 101,
    decimals: 6,
    name: 'Apricot',
    symbol: 'APT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/APTtJyaRX5yGTsJU522N4VYWg3vCvSb65eam5GrPT5Rt/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'apricot',
    },
  },
  {
    address: 'Uuc6hiKT9Y6ASoqs2phonGGw2LAtecfJu9yEohppzWH',
    chainId: 101,
    decimals: 9,
    name: 'Baby Samo Coin',
    symbol: 'BABY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Uuc6hiKT9Y6ASoqs2phonGGw2LAtecfJu9yEohppzWH/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'baby-samo-coin',
    },
  },
  {
    address: '4ThReWAbAVZjNVgs5Ui9Pk3cZ5TYaD9u6Y89fp6EFzoF',
    chainId: 101,
    decimals: 8,
    name: '1sol.io (Portal)',
    symbol: '1SOL',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/1SOL_wh.png',
    tags: ['wormhole', 'old-registry'],
    extensions: {
      coingeckoId: '1sol-io-wormhole',
    },
  },
  {
    address: 'EsPKhGTMf3bGoy4Qm7pCv3UCcWqAmbC1UGHBTDxRjjD4',
    chainId: 101,
    decimals: 9,
    name: 'FTM (Allbridge from Fantom)',
    symbol: 'FTM',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EsPKhGTMf3bGoy4Qm7pCv3UCcWqAmbC1UGHBTDxRjjD4/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '4Njvi3928U3figEF5tf8xvjLC5GqUN33oe4XTJNe7xXC',
    chainId: 101,
    decimals: 8,
    name: 'Threshold Network Token',
    symbol: 'T',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/T_wh.png',
    tags: ['wormhole'],
  },
  {
    address: '4q5UBXJxE91BZKX548qhU8i5QBWvZdXzS3RZwfTgLQda',
    chainId: 101,
    decimals: 6,
    name: 'Hydrazine',
    symbol: 'N2H4',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4q5UBXJxE91BZKX548qhU8i5QBWvZdXzS3RZwfTgLQda/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'FnKE9n6aGjQoNWRBZXy4RW6LZVao7qwBonUbiD7edUmZ',
    chainId: 101,
    decimals: 9,
    name: 'Sypool',
    symbol: 'SYP',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/b0e47e39f84cffb655f406eb569c57a88b5211cc/assets/mainnet/FnKE9n6aGjQoNWRBZXy4RW6LZVao7qwBonUbiD7edUmZ/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'sypool',
    },
  },
  {
    address: '3XwZtyP5g2ku5cNzLXYcBYygvToXKdjw73GSRq73QYLQ',
    chainId: 101,
    decimals: 2,
    name: 'Kreechures Floor Index',
    symbol: 'KREECHURE',
    logoURI:
      'https://dl.airtable.com/.attachmentThumbnails/1204ecf0b475bf46a0e65391c3b5e947/fefec436',
    tags: ['old-registry'],
  },
  {
    address: '4wjPQJ6PrkC4dHhYghwJzGBVP78DkBzA2U3kHoFNBuhj',
    chainId: 101,
    decimals: 6,
    name: 'LIQ Protocol',
    symbol: 'LIQ',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4wjPQJ6PrkC4dHhYghwJzGBVP78DkBzA2U3kHoFNBuhj/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'liq-protocol',
    },
  },
  {
    address: 'F3nefJBcejYbtdREjui1T9DPh5dBgpkKq7u2GAAMXs5B',
    chainId: 101,
    decimals: 6,
    name: 'ALL ART',
    symbol: 'AART',
    logoURI:
      'https://raw.githubusercontent.com/allartprotocol/token-list/main/assets/mainnet/F3nefJBcejYbtdREjui1T9DPh5dBgpkKq7u2GAAMXs5B/logo.jpg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'all-art',
    },
  },
  {
    address: 'DFrJxDoLMYt6bNYeNe8Wrjzj2UPUSLZLEMMYBLuTKcTk',
    chainId: 101,
    decimals: 8,
    name: 'NINJA TURTLES',
    symbol: 'NINJA',
    logoURI: 'https://arweave.net/2J8mJ6N6GCg7BWTHtcPZMEZsF2iuTYBRI9jdtnHS77o',
    tags: ['community'],
    extensions: {
      coingeckoId: 'ninja-turtles',
    },
  },
  {
    address: 'YAWtS7vWCSRPckx1agB6sKidVXiXiDUfehXdEUSRGKE',
    chainId: 101,
    decimals: 6,
    name: 'Yawww',
    symbol: 'YAW',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/YAWtS7vWCSRPckx1agB6sKidVXiXiDUfehXdEUSRGKE/yaw.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'yawww',
    },
  },
  {
    address: 'cxxShYRVcepDudXhe7U62QHvw8uBJoKFifmzggGKVC2',
    chainId: 101,
    decimals: 9,
    name: 'SolChicks',
    symbol: 'CHICKS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/cxxShYRVcepDudXhe7U62QHvw8uBJoKFifmzggGKVC2/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solchicks-token',
    },
  },
  {
    address: '5SwxhEunuUUcWe4ojybdDwky6dpLxAehNmF4AA71STNh',
    chainId: 101,
    decimals: 5,
    name: 'SWEETS',
    symbol: '$SWTS',
    logoURI: 'https://arweave.net/TIiNLtJtWuC0yxXPXXQpXalXyGaUFp4rT7h8WG5EwH4',
    tags: ['community'],
    extensions: {
      coingeckoId: 'sweets',
    },
  },
  {
    address: 'BYPsjxa3YuZESQz1dKuBw1QSFCSpecsm8nCQhY5xbU1Z',
    chainId: 101,
    decimals: 9,
    name: 'NEAR (Allbridge from Near)',
    symbol: 'NEAR',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BYPsjxa3YuZESQz1dKuBw1QSFCSpecsm8nCQhY5xbU1Z/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'BLwTnYKqf7u4qjgZrrsKeNs2EzWkMLqVCu6j8iHyrNA3',
    chainId: 101,
    decimals: 8,
    name: 'Boring Protocol',
    symbol: 'BOP',
    logoURI:
      'https://raw.githubusercontent.com/boringprotocol/brand-assets/main/boplogo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'boring-protocol',
    },
  },
  {
    address: 'HYoGYzMcbYq3tAvpg15d8VFYVHw6jWEVuGgpNTrG8hps',
    chainId: 101,
    decimals: 4,
    name: 'DOGELON SOLANA',
    symbol: 'DOGELON',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HYoGYzMcbYq3tAvpg15d8VFYVHw6jWEVuGgpNTrG8hps/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'boooCKXQn9YTK2aqN5pWftQeb9TH7cj7iUKuVCShWQx',
    chainId: 101,
    decimals: 9,
    name: 'Boo Network',
    symbol: 'BOO',
    logoURI: 'https://arweave.net/Reo2_w4k9PGdtYX3p8BllNZpSbbIJ-zype0qdbQgsoE',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'ghostkids',
    },
  },
  {
    address: 'xStpgUCss9piqeFUk2iLVcvJEGhAdJxJQuwLkXP555G',
    chainId: 101,
    decimals: 9,
    name: 'Staked Step',
    symbol: 'xSTEP',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/xStpgUCss9piqeFUk2iLVcvJEGhAdJxJQuwLkXP555G/logo.svg',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'HmKqChBkZEvqFnH8sxja694n77ziYMBWaucZRKfJDRr2',
    chainId: 101,
    decimals: 5,
    name: 'WOLF SOLANA',
    symbol: 'WOLF',
    logoURI: 'https://arweave.net/vqdJ1M-3GLpOKuMKZLXNbd-odMLzGrXdgVis8wSEt-M',
    tags: ['community'],
    extensions: {
      coingeckoId: 'wolf-solana',
    },
  },
  {
    address: '9tzZzEHsKnwFL1A3DyFJwj36KnZj3gZ7g4srWp9YTEoh',
    chainId: 101,
    decimals: 6,
    name: 'ARB Protocol',
    symbol: 'ARB',
    logoURI:
      'https://raw.githubusercontent.com/ARBProtocol/arbprotocol/main/IMG_3600.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'arb-protocol',
    },
  },
  {
    address: 'Doggoyb1uHFJGFdHhJf8FKEBUMv58qo98CisWgeD7Ftk',
    chainId: 101,
    decimals: 5,
    name: 'DOGGO',
    symbol: 'DOGGO',
    logoURI:
      'https://shdw-drive.genesysgo.net/BBwXjBB6LtWGjKW5GveUSau5z9KZv2CK5AWmb7FCDF6K/doggies_coin.png',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'doggo',
    },
  },
  {
    address: '4uRn7vxRPWYP4HuAa4UNXwEPLRL8oQ71YByMhr6yBnL4',
    chainId: 101,
    decimals: 2,
    name: 'Playground Waves Floor Index',
    symbol: 'WAVES',
    logoURI: 'https://i.imgur.com/TMyD8MN.jpg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'playground-waves-floor-index',
    },
  },
  {
    address: 'FbUy1NubUtCfoif7TAr6wAtJVJFapYUVWxRGmUwvKNyS',
    chainId: 101,
    decimals: 2,
    name: "𝝠ndre's Fleet Share",
    symbol: 'AFSeX',
    logoURI: 'https://arweave.net/l5d0WrtUcpUEqwknqjvxlo2QyGryLL3SDsRbigT9HA0',
    tags: ['community'],
  },
  {
    address: '7j7H7sgsnNDeCngAPjpaCN4aaaru4HS7NAFYSEUyzJ3k',
    chainId: 101,
    decimals: 6,
    name: 'SolRazr',
    symbol: 'SOLR',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7j7H7sgsnNDeCngAPjpaCN4aaaru4HS7NAFYSEUyzJ3k/SOLR.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solrazr',
    },
  },
  {
    address: 'AebrVZPfSH7KPAxPwnuqTZB9QNepdktk7HSSY4SNj7BM',
    chainId: 101,
    decimals: 9,
    name: 'Venture Coin',
    symbol: 'VC',
    logoURI: 'https://arweave.net/6HvW8RLbLhBbw09QDRpPd6HX-N3Sk9kF2vvdaZGHExU',
    tags: ['community'],
    extensions: {
      coingeckoId: 'venture-coin-2',
    },
  },
  {
    address: 'MAPS41MDahZ9QdKXhVa4dWB9RuyfV4XqhyAZ8XcYepb',
    chainId: 101,
    decimals: 6,
    name: 'MAPS',
    symbol: 'MAPS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MAPS41MDahZ9QdKXhVa4dWB9RuyfV4XqhyAZ8XcYepb/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'maps',
    },
  },
  {
    address: '3jzdrXXKxwkBk82u2eCWASZLCKoZs1LQTg87HBEAmBJw',
    chainId: 101,
    decimals: 1,
    name: 'FLOOF',
    symbol: 'FLOOF',
    logoURI:
      'https://raw.githubusercontent.com/GreenFailure/Floof/main/OkyT9kpz_400x400.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'floof',
    },
  },
  {
    address: 'SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M',
    chainId: 101,
    decimals: 9,
    name: 'Sentre',
    symbol: 'SNTR',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M/logo.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'sentre',
    },
  },
  {
    address: '8c71AvjQeKKeWRe8jtTGG1bJ2WiYXQdbjqFbUfhHgSVk',
    chainId: 101,
    decimals: 9,
    name: 'GARY',
    symbol: '$GARY',
    logoURI:
      'https://raw.githubusercontent.com/puresec-ng/gary/main/GARY_coin.jpg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'gary',
    },
  },
  {
    address: '87rSGrpYdmTxfNBf8o2cpyiNcxCmNhUPBXjT8aoyfob5',
    chainId: 101,
    decimals: 9,
    name: 'Equinox',
    symbol: 'ENX',
    logoURI:
      'https://ixrjpmbgkspkjaueqzmyhb3fbca5atffgsrqyt527d2x3ycdlgqq.arweave.net/ReKXsCZUnqSChIZZg4dlCIHQTKU0owxPuvj1feBDWaE',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'equinox',
    },
  },
  {
    address: 'ALQ9KMWjFmxVbew3vMkJj3ypbAKuorSgGst6svCHEe2z',
    chainId: 101,
    decimals: 6,
    name: 'MatrixETF DAO Finance',
    symbol: 'MDF',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ALQ9KMWjFmxVbew3vMkJj3ypbAKuorSgGst6svCHEe2z/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'matrixetf',
    },
  },
  {
    address: 'GoLDYyyiVeXnVf9qgoK712N5esm1cCbHEK9aNJFx47Sx',
    chainId: 101,
    decimals: 9,
    name: 'DeFi Land Gold',
    symbol: 'GOLDY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GoLDYyyiVeXnVf9qgoK712N5esm1cCbHEK9aNJFx47Sx/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'defi-land-gold',
    },
  },
  {
    address: 'GEYrotdkRitGUK5UMv3aMttEhVAZLhRJMcG82zKYsaWB',
    chainId: 101,
    decimals: 3,
    name: 'POTATO',
    symbol: 'POTATO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GEYrotdkRitGUK5UMv3aMttEhVAZLhRJMcG82zKYsaWB/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'AASdD9rAefJ4PP7iM89MYUsQEyCQwvBofhceZUGDh5HZ',
    chainId: 101,
    decimals: 9,
    name: 'Solex Finance',
    symbol: 'SLX',
    logoURI:
      'https://raw.githubusercontent.com/solexfin/token-list/main/assets/mainnet/AASdD9rAefJ4PP7iM89MYUsQEyCQwvBofhceZUGDh5HZ/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solex-finance',
    },
  },
  {
    address: 'MERt85fc5boKw3BW1eYdxonEuJNvXbiMbs6hvheau5K',
    chainId: 101,
    decimals: 6,
    name: 'Mercurial(Deprecated)',
    symbol: 'MER',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MERt85fc5boKw3BW1eYdxonEuJNvXbiMbs6hvheau5K/logo.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'mercurial',
    },
  },
  {
    address: 'GDzfemoYR5GkbK4YupYpyq3E8Du9fSfKXxKDpkdrqGjs',
    chainId: 101,
    decimals: 6,
    name: 'Klausen Art',
    symbol: 'KART',
    logoURI: 'https://arweave.net/X9ohmd49MmOEYi4dfMyOv_M24NnnyzQXZEoALTuQ0ao',
    tags: ['community'],
  },
  {
    address: '2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped Ethereum (Sollet)',
    symbol: 'soETH',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'wrapped-ethereum-sollet',
    },
  },
  {
    address: 'yPRTUpLDftNej7p6QofNYgRArRXsm6Mvkzohj4bh4WM',
    chainId: 101,
    decimals: 6,
    name: 'yPRT (Parrot Yield Token)',
    symbol: 'yPRT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/yPRTUpLDftNej7p6QofNYgRArRXsm6Mvkzohj4bh4WM/logo.svg',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '7TQTpG1qBvE9ui7J9yQWKFAYpQahkaKPKqGTsqSm1wUv',
    chainId: 101,
    decimals: 9,
    name: 'Good Vibes',
    symbol: 'GV',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7TQTpG1qBvE9ui7J9yQWKFAYpQahkaKPKqGTsqSm1wUv/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'FYUkUybywqUUyrUwiAezbvhTp2DUgx1eg8tQNiKkXqJ9',
    chainId: 101,
    decimals: 9,
    name: 'Magic Crystal Coin',
    symbol: 'MC',
    logoURI: 'https://arweave.net/Nwami1xs2ciMI7mUcawKMkUTKf_UUrLjYvIqUSL1ShI',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'tap-fantasy-mc',
    },
  },
  {
    address: 'sonarX4VtVkQemriJeLm6CKeW3GDMyiBnnAEMw1MRAE',
    chainId: 101,
    decimals: 9,
    name: 'Sonar Watch',
    symbol: 'SONAR',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/sonarX4VtVkQemriJeLm6CKeW3GDMyiBnnAEMw1MRAE/logo.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'sonarwatch',
    },
  },
  {
    address: '5KV2W2XPdSo97wQWcuAVi6G4PaCoieg4Lhhi61PAMaMJ',
    chainId: 101,
    decimals: 9,
    name: 'Kugle GU',
    symbol: 'GU',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5KV2W2XPdSo97wQWcuAVi6G4PaCoieg4Lhhi61PAMaMJ/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'gu',
    },
  },
  {
    address: 'BDrL8huis6S5tpmozaAaT5zhE5A7ZBAB2jMMvpKEeF8A',
    chainId: 101,
    decimals: 9,
    name: 'NOVA FINANCE',
    symbol: 'NOVA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BDrL8huis6S5tpmozaAaT5zhE5A7ZBAB2jMMvpKEeF8A/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'nova-finance',
    },
  },
  {
    address: '8s9FCz99Wcr3dHpiauFRi6bLXzshXfcGTfgQE7UEopVx',
    chainId: 101,
    decimals: 6,
    name: 'ChikinCoin',
    symbol: 'CKC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8s9FCz99Wcr3dHpiauFRi6bLXzshXfcGTfgQE7UEopVx/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'chikincoin',
    },
  },
  {
    address: 'EsirN3orp85uyvZyDrZnbe9cyo7N1114ynLFdwMPCQce',
    chainId: 101,
    decimals: 9,
    name: 'Aevum',
    symbol: 'AEVUM',
    logoURI: 'https://arweave.net/mqtxUgbHYOu4lEUzMZy5YFZtItQQZtjZWbFUIbcM6cU',
    tags: ['community'],
    extensions: {
      coingeckoId: 'aevum-ore',
    },
  },
  {
    address: 'E6UU5M1z4CvSAAF99d9wRoXsasWMEXsvHrz3JQRXtm2X',
    chainId: 101,
    decimals: 9,
    name: 'Dogelana',
    symbol: 'DGLN',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/E6UU5M1z4CvSAAF99d9wRoXsasWMEXsvHrz3JQRXtm2X/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'dogelana',
    },
  },
  {
    address: '5tN42n9vMi6ubp67Uy4NnmM5DMZYN8aS8GeB3bEDHr6E',
    chainId: 101,
    decimals: 9,
    name: 'Waggle Network',
    symbol: 'WAG',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5tN42n9vMi6ubp67Uy4NnmM5DMZYN8aS8GeB3bEDHr6E/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'waggle-network',
    },
  },
  {
    address: '9vMJfxuKxXBoEa7rM12mYLMwTacLMLDJqHozw96WQL8i',
    chainId: 101,
    decimals: 6,
    name: 'UST (Portal)',
    symbol: 'UST',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/UST_wh.png',
    tags: ['wormhole', 'old-registry'],
    extensions: {
      coingeckoId: 'terrausd-wormhole',
    },
  },
  {
    address: 'UNQtEecZ5Zb4gSSVHCAWUQEoNnSVEbWiKCi1v9kdUJJ',
    chainId: 101,
    decimals: 6,
    name: 'Unique Venture Clubs',
    symbol: 'UNQ',
    logoURI:
      'https://www.arweave.net/X58AnJYdgZRbTNyf5HzavUD7daqAtuPnz0JcUACU70Y?ext=jpg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'unq',
    },
  },
  {
    address: 'A98UDy7z8MfmWnTQt6cKjje7UfqV3pTLf4yEbuwL2HrH',
    chainId: 101,
    decimals: 9,
    name: 'Modul',
    symbol: 'MODUL',
    logoURI:
      'https://raw.githubusercontent.com/parametrise/ParametriseLogo/main/Modul_Logomark_White_Pinky_Background.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CAPYD6Lrm7bTZ6C7t7JvSxvpEcfKQ9YNB7kUjh6p6XBN',
    chainId: 101,
    decimals: 9,
    name: 'Capybara',
    symbol: 'CAPY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CAPYD6Lrm7bTZ6C7t7JvSxvpEcfKQ9YNB7kUjh6p6XBN/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'capybara',
    },
  },
  {
    address: 'EdAhkbj5nF9sRM7XN7ewuW8C9XEUMs8P7cnoQ57SYE96',
    chainId: 101,
    decimals: 9,
    name: 'FABRIC',
    symbol: 'FAB',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EdAhkbj5nF9sRM7XN7ewuW8C9XEUMs8P7cnoQ57SYE96/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'fabric',
    },
  },
  {
    address: 'E5ndSkaB17Dm7CsD22dvcjfrYSDLCxFcMd6z8ddCk5wp',
    chainId: 101,
    decimals: 9,
    name: 'Aldrin',
    symbol: 'RIN',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/E5ndSkaB17Dm7CsD22dvcjfrYSDLCxFcMd6z8ddCk5wp/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'aldrin',
    },
  },
  {
    address: 'JET6zMJWkCN9tpRT2v2jfAmm5VnQFDpUBCyaKojmGtz',
    chainId: 101,
    decimals: 9,
    name: 'Jet Protocol',
    symbol: 'JET',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/JET6zMJWkCN9tpRT2v2jfAmm5VnQFDpUBCyaKojmGtz/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'jet',
    },
  },
  {
    address: 'CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5',
    chainId: 101,
    decimals: 8,
    name: 'renBTC',
    symbol: 'renBTC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5/logo.png',
    tags: ['old-registry'],
  },
  {
    address: 'HxPoEHMt1vKeqjKCePcqTj6yYgn6Xqq1fKTY3Pjx4YrX',
    chainId: 101,
    decimals: 8,
    name: 'ZAP Token',
    symbol: 'ZAP',
    logoURI: 'https://www.zap.org/static/zapSplash.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'zap',
    },
  },
  {
    address: '6VYF5jXq6rfq4QRgGMG6co7b1Ev1Lj7KSbHBxfQ9e1L3',
    chainId: 101,
    decimals: 8,
    name: 'Wrapped Dingocoin',
    symbol: 'wDingocoin',
    logoURI: 'https://wrap.dingocoin.org/wDingocoin.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'dingocoin',
    },
  },
  {
    address: 'GTgMjfKTBF9jVBogMnaiAVnHmvnF2wyGAv3zvtk5CBHq',
    chainId: 101,
    decimals: 9,
    name: 'CLUB',
    symbol: 'CLUB',
    logoURI: 'https://arweave.net/XSWZOeipKasgKjDKm54O2R0S3Rrld1B6gQV_rtIjfF4',
    tags: ['community'],
  },
  {
    address: '6y8W5YwAuzostqrS4YDJufBvksosfSi47Pd8U4A5vrBC',
    chainId: 101,
    decimals: 9,
    name: 'Whole Earth Coin',
    symbol: 'WEC',
    logoURI:
      'https://ipfs.moralis.io:2053/ipfs/QmStqd3JLmEA9bfcUzt2CWF2iPzt7tgPmnkgou7JxauUkz',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'whole-earth-coin',
    },
  },
  {
    address: '2YJH1Y5NbdwJGEUAMY6hoTycKWrRCP6kLKs62xiSKWHM',
    chainId: 101,
    decimals: 9,
    name: 'SolGems',
    symbol: 'GEMS',
    logoURI:
      'https://public.djib.io/QmdLDat9CvntvFPG98CcXJJ3tE1mQZkf5DEfPNhK8F3guq',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'DMCUFm2ZAnSU7UgsdVq23gRogMU3MEBjPgQF1gK53rEn',
    chainId: 101,
    decimals: 6,
    name: 'UncleMine',
    symbol: 'UM',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DMCUFm2ZAnSU7UgsdVq23gRogMU3MEBjPgQF1gK53rEn/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'unclemine',
    },
  },
  {
    address: 'GEJpt3Wjmr628FqXxTgxMce1pLntcPV4uFi8ksxMyPQh',
    chainId: 101,
    decimals: 9,
    name: 'daoSOL Token',
    symbol: 'daoSOL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GEJpt3Wjmr628FqXxTgxMce1pLntcPV4uFi8ksxMyPQh/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'daosol',
    },
  },
  {
    address: '5Wsd311hY8NXQhkt9cWHwTnqafk7BGEbLu8Py3DSnPAr',
    chainId: 101,
    decimals: 6,
    name: 'Compendium Finance',
    symbol: 'CMFI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5Wsd311hY8NXQhkt9cWHwTnqafk7BGEbLu8Py3DSnPAr/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'compendium-fi',
    },
  },
  {
    address: 'BABYsocP6cB95xvBDXnjXKX96VBNC37dmNWUtaV9Jk6v',
    chainId: 101,
    decimals: 2,
    name: 'SOL BABAY DOGE COIN',
    symbol: 'SBABYDOGE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BABYsocP6cB95xvBDXnjXKX96VBNC37dmNWUtaV9Jk6v/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'sol-baby-doge',
    },
  },
  {
    address: 'uNrix3Q5g51MCEUrYBUEBDdQ96RQDQspQJJnnQ4T3Vc',
    chainId: 101,
    decimals: 6,
    name: 'Solbank',
    symbol: 'SBNK',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/uNrix3Q5g51MCEUrYBUEBDdQ96RQDQspQJJnnQ4T3Vc/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solbank-token',
    },
  },
  {
    address: 'AEUT5uFm1D575FVCoQd5Yq891FJEqkncZUbBFoFcAhTV',
    chainId: 101,
    decimals: 9,
    name: 'Saber Wrapped USDT (9 decimals)',
    symbol: 'sUSDT-9',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AEUT5uFm1D575FVCoQd5Yq891FJEqkncZUbBFoFcAhTV/icon.png',
    tags: ['old-registry'],
  },
  {
    address: 'JEFFSQ3s8T3wKsvp4tnRAsUBW7Cqgnf8ukBZC4C8XBm1',
    chainId: 101,
    decimals: 9,
    name: 'Saber Wrapped USD Coin (9 decimals)',
    symbol: 'sUSDC-9',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/JEFFSQ3s8T3wKsvp4tnRAsUBW7Cqgnf8ukBZC4C8XBm1/icon.png',
    tags: ['old-registry'],
  },
  {
    address: '2mqi8iLJf9WaVRHd7nhRkqvCafxfb3Us7wshaJR73ykS',
    chainId: 101,
    decimals: 5,
    name: 'Poor token',
    symbol: 'POOR',
    logoURI:
      'https://shdw-drive.genesysgo.net/AZgm3Vdo1QLf8bKUjyearDC9NygpRHmmtzPaBNQcF4jt/IMG_1640.JPG',
    tags: ['community'],
  },
  {
    address: '5sM9xxcBTM9rWza6nEgq2cShA87JjTBx1Cu82LjgmaEg',
    chainId: 101,
    decimals: 9,
    name: 'Bamboo',
    symbol: 'BMBO',
    logoURI:
      'https://raw.githubusercontent.com/rishkumaria/bamboo/main/bamboo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'bamboo-coin',
    },
  },
  {
    address: 'Dhg9XnzJWzSQqH2aAnhPTEJHGQAkALDfD98MA499A7pa',
    chainId: 101,
    decimals: 9,
    name: 'Shibalana',
    symbol: 'SHIBA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Dhg9XnzJWzSQqH2aAnhPTEJHGQAkALDfD98MA499A7pa/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'shibalana',
    },
  },
  {
    address: 'FEELeKVxHtsHHvu1ARySjETxnJMKbLC6wHCaMD68ipiR',
    chainId: 101,
    decimals: 9,
    name: 'FEEL',
    symbol: 'FEEL',
    logoURI: 'https://api.feel.market/static/feel.png',
    tags: ['community'],
  },
  {
    address: 'CYuXNHURE8cF3rQc1687DZnmsWx9ATNG3mZPFmryu22S',
    chainId: 101,
    decimals: 9,
    name: 'PEPESOLANA',
    symbol: 'PEPE',
    logoURI:
      'https://shdw-drive.genesysgo.net/85Mup8SQSvcTXsykzNTAtypV2v3zYrYu9eFTRvUUwmXK/logopep200x200.png',
    tags: ['community'],
  },
  {
    address: 'B5Fvzd2RL5ctrmFsvDafXiNGbBqbxapiryJo8JfoSEcA',
    chainId: 101,
    decimals: 5,
    name: 'KITTI TOKEN',
    symbol: 'KITTI',
    logoURI: 'https://arweave.net/I1RzcnSel2oghDkMBE-lZBV9b6AuyDJc0Ywo6QmDlSQ',
    tags: ['community'],
    extensions: {
      coingeckoId: 'kitti',
    },
  },
  {
    address: '6kwTqmdQkJd8qRr9RjSnUX9XJ24RmJRSrU1rsragP97Y',
    chainId: 101,
    decimals: 6,
    name: 'SAIL',
    symbol: 'SAIL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6kwTqmdQkJd8qRr9RjSnUX9XJ24RmJRSrU1rsragP97Y/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'sail',
    },
  },
  {
    address: 'CobcsUrt3p91FwvULYKorQejgsm5HoQdv5T8RUZ6PnLA',
    chainId: 101,
    decimals: 8,
    name: 'ConstitutionDAO (Portal)',
    symbol: 'PEOPLE',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/PEOPLE_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'constitutiondao-wormhole',
    },
  },
  {
    address: 'DxRbkqB2cEqa4rnXJwq4z3GuksgpL2U27PWBw8QBcNv2',
    chainId: 101,
    decimals: 2,
    name: "Trippin' Ape Tribe Floor Index",
    symbol: 'TAPES',
    logoURI: 'https://i.imgur.com/iFgvQva.png',
    tags: ['community'],
  },
  {
    address: 'HonyeYAaTPgKUgQpayL914P6VAqbQZPrbkGMETZvW4iN',
    chainId: 101,
    decimals: 6,
    name: 'HONEY',
    symbol: '$HONEY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HonyeYAaTPgKUgQpayL914P6VAqbQZPrbkGMETZvW4iN/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'honey-finance',
    },
  },
  {
    address: '3DHPqxdMXogNNnpqBMF8N4Zs4dn1WR31H7UjWq6FExwG',
    chainId: 101,
    decimals: 9,
    name: 'DAWG',
    symbol: 'DAWG',
    logoURI:
      'https://user-images.githubusercontent.com/15795037/143055147-72513c02-be9b-4639-bb30-3c1c037cb030.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'dawg',
    },
  },
  {
    address: 'EAefyXw6E8sny1cX3LTH6RSvtzH6E5EFy1XsE2AiH1f3',
    chainId: 101,
    decimals: 6,
    name: 'Republic Credits',
    symbol: 'RPC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EAefyXw6E8sny1cX3LTH6RSvtzH6E5EFy1XsE2AiH1f3/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'republic-credits',
    },
  },
  {
    address: '5K1JtWpdSksVKaL6R2DuLpCDAjzxK6sq2CpXaXDWHVLg',
    chainId: 101,
    decimals: 9,
    name: 'Yorkipoo',
    symbol: 'YORK',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5K1JtWpdSksVKaL6R2DuLpCDAjzxK6sq2CpXaXDWHVLg/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'xALGoH1zUfRmpCriy94qbfoMXHtK6NDnMKzT4Xdvgms',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped ALGO',
    symbol: 'xALGO',
    logoURI: 'https://arweave.net/zZizaipiM5GvJ5upulPUzg9VW9bui0VaMCY6k1QyHgs',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'wrapped-algo',
    },
  },
  {
    address: '32gaR4rn9JyzoDVwMzZ5j3NgcHc5RQhMSJby55FFKnq3',
    chainId: 101,
    decimals: 9,
    name: 'RIBBET',
    symbol: 'RIBBET',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/32gaR4rn9JyzoDVwMzZ5j3NgcHc5RQhMSJby55FFKnq3/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'BzjsQpgKjxZedFawUV9GZMExhr7VbvsasQv12v2PVxSt',
    chainId: 101,
    decimals: 8,
    name: 'BAT',
    symbol: 'BATT',
    logoURI:
      'https://batt.finance/static/media/logo.6284c2cd472e1bacd3e5c370044f6a0e.svg',
    tags: ['community'],
  },
  {
    address: '2jw1uFmc1hhfJH3EqGhaE2rfZMMC2YBpxkZcdUbPppMn',
    chainId: 101,
    decimals: 9,
    name: 'Vivaion Token',
    symbol: 'VIVAION',
    logoURI: 'https://arweave.net/Xz7ErS3TZYmBnoh3OPkIQM_O6TPotyEJb6H5WFOe_qc',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '9zoqdwEBKWEi9G5Ze8BSkdmppxGgVv1Kw4LuigDiNr9m',
    chainId: 101,
    decimals: 9,
    name: 'Solster',
    symbol: 'STR',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9zoqdwEBKWEi9G5Ze8BSkdmppxGgVv1Kw4LuigDiNr9m/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solster',
    },
  },
  {
    address: '3AMtw8m3pZnrGLmGqQcJnHSQSaegtZGBMpon74EVZVQ3',
    chainId: 101,
    decimals: 6,
    name: 'Pink',
    symbol: 'PINK',
    logoURI: 'https://arweave.net/_ZVGjmZaB-1kxDkJzamQFo-kxJD0Kl0NhVx8dowP5zE',
    tags: ['community', 'token-2022'],
  },
  {
    address: 'FNFKRV3V8DtA3gVJN6UshMiLGYA8izxFwkNWmJbFjmRj',
    chainId: 101,
    decimals: 6,
    name: 'TabTrader Token',
    symbol: 'TTT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FNFKRV3V8DtA3gVJN6UshMiLGYA8izxFwkNWmJbFjmRj/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'tabtrader',
    },
  },
  {
    address: 'RLYv2ubRMDLcGG2UyvPmnPmkfuQTsMbg4Jtygc7dmnq',
    chainId: 101,
    decimals: 9,
    name: 'Rally (Legacy - deprecated)',
    symbol: 'sRLY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/RLYv2ubRMDLcGG2UyvPmnPmkfuQTsMbg4Jtygc7dmnq/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'GfJ3Vq2eSTYf1hJP6kKLE9RT6u7jF9gNszJhZwo5VPZp',
    chainId: 101,
    decimals: 9,
    name: 'Solpad Finance',
    symbol: 'SOLPAD',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GfJ3Vq2eSTYf1hJP6kKLE9RT6u7jF9gNszJhZwo5VPZp/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solpad-finance',
    },
  },
  {
    address: '4UuGQgkD3rSeoXatXRWwRfRd21G87d5LiCfkVzNNv1Tt',
    chainId: 101,
    decimals: 9,
    name: 'Solareum',
    symbol: 'XSB',
    logoURI: 'https://solareum.app/icons/XSB-G.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solareum-wallet',
    },
  },
  {
    address: 'CN7qFa5iYkHz99PTctvT4xXUHnxwjQ5MHxCuTJtPN5uS',
    chainId: 101,
    decimals: 9,
    name: 'Boryoku Dragonz',
    symbol: 'BOKU',
    logoURI:
      'https://boryoku-dragonz-public.s3.us-east-2.amazonaws.com/BokuBrew.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'boku',
    },
  },
  {
    address: 'E7BGDtpNXUTqPNbZxKHiLowgLddiAeuKcByD7tSnfYWD',
    chainId: 101,
    decimals: 5,
    name: 'GEM',
    symbol: 'GEM',
    logoURI:
      'https://bafkreifpm7rbwohp4yys2guyibfzqbctu3bist6zetmyq456om2rqvk544.ipfs.nftstorage.link/',
    tags: ['community', 'token-2022'],
  },
  {
    address: '4Te4KJgjtnZe4aE2zne8G4NPfrPjCwDmaiEx9rKnyDVZ',
    chainId: 101,
    decimals: 9,
    name: 'SolClout',
    symbol: 'SCT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4Te4KJgjtnZe4aE2zne8G4NPfrPjCwDmaiEx9rKnyDVZ/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solclout',
    },
  },
  {
    address: 'Ee1pKgTQmP5xjYQs76HmRM2c2YkqEdc9tk5mQbiGFigT',
    chainId: 101,
    decimals: 9,
    name: 'Mad Bears Club',
    symbol: 'MBC',
    logoURI: 'https://arweave.net/7jp6IaYj-kCiCDuHzk-zJLf2wRctrhIa1m_PO0rQuig',
    tags: ['community'],
    extensions: {
      coingeckoId: 'mad-bears-club-2',
    },
  },
  {
    address: '4BzxVoBQzwKoqm1dQc78r42Yby3EzAeZmMiYFdCjeu5Z',
    chainId: 101,
    decimals: 9,
    name: 'Swole Doge',
    symbol: 'SWOLE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4BzxVoBQzwKoqm1dQc78r42Yby3EzAeZmMiYFdCjeu5Z/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa',
    chainId: 101,
    decimals: 6,
    name: 'NIRV',
    symbol: 'NIRV',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa/NIRV.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'nirvana-nirv',
    },
  },
  {
    address: '9EaLkQrbjmbbuZG9Wdpo8qfNUEjHATJFSycEmw6f1rGX',
    chainId: 101,
    decimals: 9,
    name: 'pSOL (Parrot SOL)',
    symbol: 'pSOL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9EaLkQrbjmbbuZG9Wdpo8qfNUEjHATJFSycEmw6f1rGX/logo.svg',
    tags: ['old-registry'],
  },
  {
    address: 'LPFiNAybMobY5oHfYVdy9jPozFBGKpPiEGoobK2xCe3',
    chainId: 101,
    decimals: 9,
    name: 'LP Finance DAO',
    symbol: 'LPFi',
    logoURI:
      'https://raw.githubusercontent.com/LP-Finance-Inc/token-image/main/LPFiToken.png',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'lp-finance',
    },
  },
  {
    address: 'G7uYedVqFy97mzjygebnmmaMUVxWHFhNZotY6Zzsprvf',
    chainId: 101,
    decimals: 9,
    name: 'CoreStarter',
    symbol: 'CSTR',
    logoURI:
      'https://raw.githubusercontent.com/CoreStarter/token-logo/main/corestarter_logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'corestarter',
    },
  },
  {
    address: 'FYfQ9uaRaYvRiaEGUmct45F9WKam3BYXArTrotnTNFXF',
    chainId: 101,
    decimals: 9,
    name: 'Sola Token',
    symbol: 'SOLA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FYfQ9uaRaYvRiaEGUmct45F9WKam3BYXArTrotnTNFXF/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'sola-token',
    },
  },
  {
    address: 'HezGWsxSVMqEZy7HJf7TtXzQRLiDruYsheYWqoUVnWQo',
    chainId: 101,
    decimals: 9,
    name: 'HolyGrails',
    symbol: 'HOLY',
    logoURI: 'https://arweave.net/TDvr4xgh3VxmHG8GglxruoSwm41wkYOLPF7EBrhBiBY',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'holygrails-io',
    },
  },
  {
    address: '8RYSc3rrS4X4bvBCtSJnhcpPpMaAJkXnVKZPzANxQHgz',
    chainId: 101,
    decimals: 9,
    name: 'SolYard Finance',
    symbol: 'YARD',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8RYSc3rrS4X4bvBCtSJnhcpPpMaAJkXnVKZPzANxQHgz/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solyard-finance',
    },
  },
  {
    address: '24a1k6wSDQUSwoRXJyvkr25kF5do8f6Ddff6A2fTc1pM',
    chainId: 101,
    decimals: 9,
    name: 'BEAR',
    symbol: '$BEAR',
    logoURI: 'https://arweave.net/7Qzb-BKL734z8w77fPNJ8lu3f6TtA87nbiw2A-qmCK0',
    tags: ['community'],
  },
  {
    address: 'YtfMZ4jg2ubdz4GasY86iuGjHdo5rCPJnFqgSf8gxAz',
    chainId: 101,
    decimals: 9,
    name: 'Charactbit',
    symbol: 'CHB',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6D4aGWykMymkFaeVzDS6MiH6QEujsHUze2pPGbJEyh7y/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'charactbit',
    },
  },
  {
    address: 'AmgUMQeqW8H74trc8UkKjzZWtxBdpS496wh4GLy2mCpo',
    chainId: 101,
    decimals: 3,
    name: 'Mycelium McToken',
    symbol: 'TOKE',
    logoURI: 'https://arweave.net/kVddfi0QG_NfS_cRQQ0vehEt7n25wVk3O4ilHaeidqY',
    tags: ['community'],
  },
  {
    address: 'MLKmUCaj1dpBY881aFsrBwR9RUMoKic8SWT3u1q5Nkj',
    chainId: 101,
    decimals: 9,
    name: 'MILK',
    symbol: 'MILK',
    logoURI:
      'https://www.arweave.net/HayHyYd_wWkVl0-LqTXKfBqxGTLnXkSB8wQwtbXe8c0?ext=png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'udder-chaos-milk',
    },
  },
  {
    address: 'sRLY3migNrkC1HLgqotpvi66qGkdNedqPZ9TJpAQhyh',
    chainId: 101,
    decimals: 9,
    name: 'sRLY (Rally Solana)',
    symbol: 'sRLY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/RLYv2ubRMDLcGG2UyvPmnPmkfuQTsMbg4Jtygc7dmnq/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'rally-solana',
    },
  },
  {
    address: 'MarcoPaG4dV4qit3ZPGPFm4qt4KKNBKvAsm2rPGNF72',
    chainId: 101,
    decimals: 6,
    name: 'Gobi',
    symbol: 'GOBI',
    logoURI:
      'https://arweave.net/uscHuZUd7GsiPIJz2zS_et6_boil-DhtF0zJdrX8hM8?ext=png',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'gobi-labs',
    },
  },
  {
    address: '3K6rftdAaQYMPunrtNRHgnK2UAtjm2JwyT2oCiTDouYE',
    chainId: 101,
    decimals: 0,
    name: 'XCOPE',
    symbol: 'XCOPE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3K6rftdAaQYMPunrtNRHgnK2UAtjm2JwyT2oCiTDouYE/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '7SZUnH7H9KptyJkUhJ5L4Kee5fFAbqVgCHvt7B6wg4Xc',
    chainId: 101,
    decimals: 5,
    name: 'TheSolanDAO',
    symbol: 'SDO',
    logoURI: 'https://thesolandao.com/logohero.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'thesolandao',
    },
  },
  {
    address: '5s4BYUXLuvs9ZcVDTxkTpKhThWFSpaU8GG55q2iySe2N',
    chainId: 101,
    decimals: 2,
    name: 'Enrex',
    symbol: 'ENRX',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5s4BYUXLuvs9ZcVDTxkTpKhThWFSpaU8GG55q2iySe2N/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'enrex',
    },
  },
  {
    address: 'PhiLR4JDZB9z92rYT5xBXKCxmq4pGB1LYjtybii7aiS',
    chainId: 101,
    decimals: 5,
    name: 'Phil Overdrive | Youtube',
    symbol: 'POVT',
    logoURI:
      'https://raw.githubusercontent.com/PhilOverdrive/Token/main/Logo.png',
    tags: ['community'],
  },
  {
    address: '4jE4VuqFWZfmSXjTDD5KUoN2qkVu96nPTPj4mhs5PA1W',
    chainId: 101,
    decimals: 5,
    name: 'YoloNolo Coin',
    symbol: 'YOLO',
    logoURI:
      'https://nftstorage.link/ipfs/bafybeiepttutbes4mzojtmlvx3iqgwvs673czt5g7k7uoficx4vmjunmie/YOLO LOGO.png',
    tags: ['community'],
  },
  {
    address: '51tMb3zBKDiQhNwGqpgwbavaGH54mk8fXFzxTc1xnasg',
    chainId: 101,
    decimals: 9,
    name: 'APEX',
    symbol: 'APEX',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/51tMb3zBKDiQhNwGqpgwbavaGH54mk8fXFzxTc1xnasg/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'apexit-finance',
    },
  },
  {
    address: 'C6qep3y7tCZUJYDXHiwuK46Gt6FsoxLi8qV1bTCRYaY1',
    chainId: 101,
    decimals: 6,
    name: 'Learning Star',
    symbol: 'LSTAR',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/D3yigvdWq6qobhAwQL6UiSide5W9W7zcJbuVvKa3T231/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'learning-star',
    },
  },
  {
    address: '2maDvG9nXGVstjdnsCZoSsNtjoda1SsZTLrHBVRgLR5F',
    chainId: 101,
    decimals: 9,
    name: 'CORE',
    symbol: 'CORE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2x4fH7kWNgSLpBjCuFBKKKiNHMcJb6fHs8ahQZUWJj1p/Core.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'FkCaFsprX7gySagFoQPHNbe9MRkjrvh21cokJo6C1e2T',
    chainId: 101,
    decimals: 6,
    name: 'JEFF',
    symbol: 'JEFF',
    logoURI: 'https://arweave.net/Pi-s2vzZT8pfYVvFbNjgC0kSrW45PXb1_VPb5HoHuyI',
    tags: ['community', 'token-2022'],
  },
  {
    address: '7Q2afV64in6N6SeZsAAB81TJzwDoD6zpqmHkzi9Dcavn',
    chainId: 101,
    decimals: 9,
    name: 'JPOOL Solana Token',
    symbol: 'JSOL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7Q2afV64in6N6SeZsAAB81TJzwDoD6zpqmHkzi9Dcavn/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'jpool',
    },
  },
  {
    address: 'DNhZkUaxHXYvpxZ7LNnHtss8sQgdAfd1ZYS1fB7LKWUZ',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped USDT (Allbridge from Polygon)',
    symbol: 'apUSDT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BQcdHdAQW1hczDbBi9hiegXAR7A98Q9jx3X3iBBBDiq4/logo.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'wrapped-usdt-allbridge-from-polygon',
    },
  },
  {
    address: '6Y7LbYB3tfGBG6CSkyssoxdtHb77AEMTRVXe8JUJRwZ7',
    chainId: 101,
    decimals: 6,
    name: 'DINO',
    symbol: 'DINO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6Y7LbYB3tfGBG6CSkyssoxdtHb77AEMTRVXe8JUJRwZ7/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'dino',
    },
  },
  {
    address: 'Ue4yjkPjA4QGis37eWbBsnqfzyK83BtY4AioDETp3Ab',
    chainId: 101,
    decimals: 6,
    name: 'WHEY',
    symbol: 'WHEY',
    logoURI:
      'https://cdn.discordapp.com/attachments/1052450866243850280/1076846325951365161/Coin_2.png',
    tags: ['community'],
    extensions: {
      coingeckoId: 'whey-token',
    },
  },
  {
    address: '2uRFEWRBQLEKpLmF8mohFZGDcFQmrkQEEZmHQvMUBvY7',
    chainId: 101,
    decimals: 9,
    name: 'Solberg',
    symbol: 'SLB',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2uRFEWRBQLEKpLmF8mohFZGDcFQmrkQEEZmHQvMUBvY7/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solberg',
    },
  },
  {
    address: 'CCRJohp9bfQdhZCvCe7MzUQuXMJkKBi4XCjUq3A2YqN8',
    chainId: 101,
    decimals: 10,
    name: 'BOOP',
    symbol: 'BOOP',
    logoURI: 'https://arweave.net/2ArDrNlyF34gjZ7UdXmMVl_ET9igdcyDiAY-VFsw3ao',
    tags: ['community'],
  },
  {
    address: 'Czt7Fc4dz6BpLh2vKiSYyotNK2uPPDhvbWrrLeD9QxhV',
    chainId: 101,
    decimals: 9,
    name: 'Nest Arcade',
    symbol: 'NESTA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Czt7Fc4dz6BpLh2vKiSYyotNK2uPPDhvbWrrLeD9QxhV/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'nest-arcade',
    },
  },
  {
    address: '5EbpXhW7t8ypBF3Q1X7odFaHjuh7XJfCohXR3VYAW32i',
    chainId: 101,
    decimals: 3,
    name: 'MetaMall',
    symbol: 'MALL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5EbpXhW7t8ypBF3Q1X7odFaHjuh7XJfCohXR3VYAW32i/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'metamall',
    },
  },
  {
    address: 'DUALa4FC2yREwZ59PHeu1un4wis36vHRv5hWVBmzykCJ',
    chainId: 101,
    decimals: 6,
    name: 'Dual DAO Token',
    symbol: 'DUAL',
    logoURI: 'https://www.dual.finance/images/token-logos/dual.png',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'dual-finance',
    },
  },
  {
    address: 'SBTCB6pWqeDo6zGi9WVRMLCsKsN6JiR1RMUqvLtgSRv',
    chainId: 101,
    decimals: 8,
    name: 'Saber Wrapped Bitcoin (Sollet) (8 decimals)',
    symbol: 'sBTC-8',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SBTCB6pWqeDo6zGi9WVRMLCsKsN6JiR1RMUqvLtgSRv/icon.png',
    tags: ['old-registry'],
  },
  {
    address: '6naWDMGNWwqffJnnXFLBCLaYu1y5U9Rohe5wwJPHvf1p',
    chainId: 101,
    decimals: 3,
    name: 'SCRAP',
    symbol: 'SCRAP',
    logoURI: 'https://art.pixilart.com/bd1b1275fdc0ac1.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'scrap',
    },
  },
  {
    address: '6F9XriABHfWhit6zmMUYAQBSy6XK5VF1cHXuW5LDpRtC',
    chainId: 101,
    decimals: 9,
    name: 'Run Token',
    symbol: 'RUN',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6F9XriABHfWhit6zmMUYAQBSy6XK5VF1cHXuW5LDpRtC/RunGear.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'run',
    },
  },
  {
    address: '33fsBLA8djQm82RpHmE3SuVrPGtZBWNYExsEUeKX1HXX',
    chainId: 101,
    decimals: 8,
    name: 'Binance USD (Portal from Ethereum)',
    symbol: 'BUSDet',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/BUSDet_wh.png',
    tags: ['wormhole', 'old-registry'],
  },
  {
    address: 'EcK2evV2cDECVsmvY2FxU51eu3fp4w48zrZxuA92AAAN',
    chainId: 101,
    decimals: 9,
    name: 'Food Token',
    symbol: 'FOOD',
    logoURI: 'https://arweave.net/mq0Euf7EQja8Hr1s7TvhfzLi5GeDWMe3ryvnNJItP3c',
    tags: ['community'],
  },
  {
    address: '56tNQ29XBrbovm5K5SThuQatjCy92w2wKUaUeQ8WCD9g',
    chainId: 101,
    decimals: 9,
    name: 'CRY Coin',
    symbol: 'CRYY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/56tNQ29XBrbovm5K5SThuQatjCy92w2wKUaUeQ8WCD9g/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'cry-coin',
    },
  },
  {
    address: '8j3hXRK5rdoZ2vSpGLRmXtWmW6iYaRUw5xVk4Kzmc9Hp',
    chainId: 101,
    decimals: 9,
    name: 'SolChicks Shards',
    symbol: 'SHARDS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8j3hXRK5rdoZ2vSpGLRmXtWmW6iYaRUw5xVk4Kzmc9Hp/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solchicks-shards',
    },
  },
  {
    address: 'svtMpL5eQzdmB3uqK9NXaQkq8prGZoKQFNVJghdWCkV',
    chainId: 101,
    decimals: 6,
    name: 'Solvent',
    symbol: 'SVT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/svtMpL5eQzdmB3uqK9NXaQkq8prGZoKQFNVJghdWCkV/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CREAMpdDimXxj2zTCwP5wMEtba4NYaKCrTBEQTSKtqHe',
    chainId: 101,
    decimals: 9,
    name: 'Creamy',
    symbol: 'CREAMY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CREAMpdDimXxj2zTCwP5wMEtba4NYaKCrTBEQTSKtqHe/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'creamy',
    },
  },
  {
    address: '8FU95xFJhUUkyyCLU13HSzDLs7oC4QZdXQHL6SCeab36',
    chainId: 101,
    decimals: 8,
    name: 'Uniswap (Portal)',
    symbol: 'UNI',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/UNI_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'uniswap-wormhole',
    },
  },
  {
    address: 'HKfs24UEDQpHS5hUyKYkHd9q7GY5UQ679q2bokeL2whu',
    chainId: 101,
    decimals: 6,
    name: 'TinyBits',
    symbol: 'TINY',
    logoURI: 'https://tinycolony.io/tinycolonytoken.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'tiny-colony',
    },
  },
  {
    address: 'H7Qc9APCWWGDVxGD5fJHmLTmdEgT9GFatAKFNg6sHh8A',
    chainId: 101,
    decimals: 9,
    name: 'OOGI',
    symbol: 'OOGI',
    logoURI: 'https://oogi.com/icon.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'oogi',
    },
  },
  {
    address: '83LGLCm7QKpYZbX8q4W2kYWbtt8NJBwbVwEepzkVnJ9y',
    chainId: 101,
    decimals: 6,
    name: 'Synthetic USD',
    symbol: 'xUSD',
    logoURI: 'https://www.synthetify.io/icons/xusd.svg',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'synthetic-usd',
    },
  },
  {
    address: 'WNZzxM1WqWFH8DpDZSqr6EoHKWXeMx9NLLd2R5RzGPA',
    chainId: 101,
    decimals: 4,
    name: 'Winerz',
    symbol: '$WNZ',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/WNZzxM1WqWFH8DpDZSqr6EoHKWXeMx9NLLd2R5RzGPA/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'winerz',
    },
  },
  {
    address: 'G7eETAaUzmsBPKhokZyfbaT4tD9igdZSmfQGEYWem8Sw',
    chainId: 101,
    decimals: 6,
    name: 'NftEyez Coin',
    symbol: 'EYE',
    logoURI:
      'https://raw.githubusercontent.com/NftEyez/assets/main/assets/eye-coin.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'nfteyez',
    },
  },
  {
    address: 'BULLa6g9e5UCuTXC5Z3Cf7s7CgvJhnJfY71DwipSmF8w',
    chainId: 101,
    decimals: 9,
    name: 'BULL',
    symbol: 'BULL',
    logoURI:
      'https://shdw-drive.genesysgo.net/GVxcsjC2PMpAS1E6aVp78YH7FqpfqxPY1ujeqNduhD1f/bull.png',
    tags: ['community'],
  },
  {
    address: 'FTT9rBBrYwcHam4qLvkzzzhrsihYMbZ3k6wJbdoahxAt',
    chainId: 101,
    decimals: 9,
    name: 'Saber Wrapped Wrapped FTT (Sollet) (9 decimals)',
    symbol: 'sFTT-9',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FTT9rBBrYwcHam4qLvkzzzhrsihYMbZ3k6wJbdoahxAt/icon.png',
    tags: ['old-registry'],
  },
  {
    address: 'DjPt6xxMoZx1DyyWUHGs4mwqWWX48Fwf6ZJgqv2F9qwc',
    chainId: 101,
    decimals: 9,
    name: 'VOID Token',
    symbol: 'VOID',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DjPt6xxMoZx1DyyWUHGs4mwqWWX48Fwf6ZJgqv2F9qwc/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'void-games',
    },
  },
  {
    address: 'AVKnbqNQgXDY8kbnno9eSGfwpVz5idimBnDKiz1vbWAh',
    chainId: 101,
    decimals: 9,
    name: 'Particle',
    symbol: 'PART',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AVKnbqNQgXDY8kbnno9eSGfwpVz5idimBnDKiz1vbWAh/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'particle-technology',
    },
  },
  {
    address: 'BRLsMczKuaR5w9vSubF4j8HwEGGprVAyyVgS4EX7DKEg',
    chainId: 101,
    decimals: 6,
    name: 'Cykura',
    symbol: 'CYS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BRLsMczKuaR5w9vSubF4j8HwEGGprVAyyVgS4EX7DKEg/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'cyclos',
    },
  },
  {
    address: 'DeoP2swMNa9d4SGcQkR82j4RYYeNhDjcTCwyzEhKwfAf',
    chainId: 101,
    decimals: 9,
    name: 'Deo',
    symbol: 'DEO',
    logoURI: 'https://arweave.net/RuNPo7tAR05f_7g_Yz36NMyVKHAFrOXjIEKPtOZx2Qc',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'player-2',
    },
  },
  {
    address: 'seedEDBqu63tJ7PFqvcbwvThrYUkQeqT6NLf81kLibs',
    chainId: 101,
    decimals: 9,
    name: 'Seeded Network',
    symbol: 'SEEDED',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/seedEDBqu63tJ7PFqvcbwvThrYUkQeqT6NLf81kLibs/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'seeded-network',
    },
  },
  {
    address: 'FR87nWEUxVgerFGhZM8Y4AggKGLnaXswr1Pd8wZ4kZcp',
    chainId: 101,
    decimals: 8,
    name: 'Frax (Portal)',
    symbol: 'FRAX',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/FRAX_wh.png',
    tags: ['wormhole', 'old-registry'],
    extensions: {
      coingeckoId: 'frax',
    },
  },
  {
    address: '3uNAevHamuZKKQdtdLzmHNvqD8r14tXUUXx5PN48UbYC',
    chainId: 101,
    decimals: 9,
    name: 'Nasi Lemak',
    symbol: 'NLTK',
    logoURI: 'https://raw.githubusercontent.com/avaelon/nltk/main/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '4h4LvS6NsVjZ87uBwrYyTeppTm1ii5PtRN9A6Ld2kZjw',
    chainId: 101,
    decimals: 6,
    name: 'StayFly',
    symbol: '$FLY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4h4LvS6NsVjZ87uBwrYyTeppTm1ii5PtRN9A6Ld2kZjw/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CmSryDa4mnDYUicq7qSESsTKAdgBP26jSYcg8zavVoJd',
    chainId: 101,
    decimals: 7,
    name: 'GM Solana',
    symbol: 'GM',
    logoURI: 'https://cdn.jsdelivr.net/gh/brendanhernou/gm/GMSolana.jpg',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CRkwd2QedqDi5u6W2w6jeAViAUd1pR4AXs2aKvh7GW7M',
    chainId: 101,
    decimals: 6,
    name: 'Solanium Ecosystem Index',
    symbol: 'SEI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CRkwd2QedqDi5u6W2w6jeAViAUd1pR4AXs2aKvh7GW7M/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'B6aJ3TGfme3SMnLSouHXqWXjVFqYyqj7czzhzr8WJFAi',
    chainId: 101,
    decimals: 4,
    name: 'RAD',
    symbol: 'RAD',
    logoURI:
      'https://raw.githubusercontent.com/NFTBrickLayer/zillaz-assets/main/RAD-logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'rad',
    },
  },
  {
    address: 'CWE8jPTUYhdCTZYWPTe1o5DFqfdjzWKc9WKz6rSjQUdG',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped Chainlink (Sollet)',
    symbol: 'soLINK',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CWE8jPTUYhdCTZYWPTe1o5DFqfdjzWKc9WKz6rSjQUdG/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '6frkvZf72wiz3uqRWhBqLftNU4PS6XXYCoNrW9P4CFdK',
    chainId: 101,
    decimals: 6,
    name: 'QUACK',
    symbol: 'QUACK',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GP9zY2D8CgMreoUdYQjyn7Fo7XCq9ubVnX3u4ot1wpgt/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '2TxM6S3ZozrBHZGHEPh9CtM74a9SVXbr7NQ7UxkRvQij',
    chainId: 101,
    decimals: 6,
    name: 'DINOEGG',
    symbol: 'DINOEGG',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2TxM6S3ZozrBHZGHEPh9CtM74a9SVXbr7NQ7UxkRvQij/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'dinoegg',
    },
  },
  {
    address: 'BjTUmZjNUUAPKHVdTs8yZsCmecW5isSK4AbuFihXoUwa',
    chainId: 101,
    decimals: 9,
    name: 'Pussy',
    symbol: 'PUSSY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BjTUmZjNUUAPKHVdTs8yZsCmecW5isSK4AbuFihXoUwa/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'Gz3u6eJaKEviYpPC5AwUziz891kNX76PNdsmJrnaNNY4',
    chainId: 101,
    decimals: 9,
    name: 'SouloCoin',
    symbol: 'SOULO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Gz3u6eJaKEviYpPC5AwUziz891kNX76PNdsmJrnaNNY4/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'soulocoin',
    },
  },
  {
    address: 'A12XggFFk3b5GCd6ZYxuQ55cQbxarHL4h7Jxs3GQcdC3',
    chainId: 101,
    decimals: 9,
    name: 'Froggo',
    symbol: 'Froggo',
    logoURI: 'https://froggotoken.com/token_logo.png',
    tags: ['community'],
  },
  {
    address: '4F2yutcbkabE5MJoDvrDLa5U2re5HPABSCVKA7vqrKcH',
    chainId: 101,
    decimals: 2,
    name: 'REJECT Token',
    symbol: 'REJECT',
    logoURI: 'https://arweave.net/ijxRvhTwJRWTanYUI-j2DwPzOkpqRbB3y-qSuuvQqhQ',
    tags: ['community'],
  },
  {
    address: '7rmV64vLfbrbS5rTFvojYWzCVEn8dnJ9RfSRx3nD6C5E',
    chainId: 101,
    decimals: 4,
    name: 'Super Mario',
    symbol: 'MARIO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7rmV64vLfbrbS5rTFvojYWzCVEn8dnJ9RfSRx3nD6C5E/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CvB1ztJvpYQPvdPBePtRzjL4aQidjydtUz61NWgcgQtP',
    chainId: 101,
    decimals: 6,
    name: 'Epics Token',
    symbol: 'EPCT',
    logoURI:
      'https://bafybeibal7k2hz6frznyjbl4qcnzcwlsuzxmquatrsaly6ttmuppgmdvwe.ipfs.dweb.link/EpicsCoin.png',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'epics-token',
    },
  },
  {
    address: 'ARg9wfeLN4qZTxgYTYeuGtGFMmYdk5zFhBuSnTfXXUvb',
    chainId: 101,
    decimals: 9,
    name: 'Project Paradise - CHI Token',
    symbol: 'CHI',
    logoURI:
      'https://raw.githubusercontent.com/benthebape/projekt-paradise-chi-token/main/Moneda_1.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '7VUUicqKYFVmewg1U4w4e9K4FoEYdTcYyxYCPhRNf5Qy',
    chainId: 101,
    decimals: 9,
    name: 'solana green',
    symbol: 'green',
    logoURI: 'https://arweave.net/W68r4cNKbj0t_GRf1km_e9nzm4BLfspy0X-yX8mh4fQ',
    tags: ['community'],
  },
  {
    address: 'FgX1WD9WzMU3yLwXaFSarPfkgzjLb2DZCqmkx9ExpuvJ',
    chainId: 101,
    decimals: 6,
    name: 'NINJA',
    symbol: 'NINJA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FgX1WD9WzMU3yLwXaFSarPfkgzjLb2DZCqmkx9ExpuvJ/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'ninja-protocol',
    },
  },
  {
    address: 'HysWcbHiYY9888pHbaqhwLYZQeZrcQMXKQWRqS7zcPK5',
    chainId: 101,
    decimals: 8,
    name: 'Axie Infinity Shard (Portal from Ethereum)',
    symbol: 'AXSet',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/AXSet_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'axie-infinity-shard-wormhole',
    },
  },
  {
    address: 'FZgL5motNWEDEa24xgfSdBDfXkB9Ru9KxfEsey9S58bb',
    chainId: 101,
    decimals: 6,
    name: 'VentureCapital',
    symbol: 'VCC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FZgL5motNWEDEa24xgfSdBDfXkB9Ru9KxfEsey9S58bb/logo.svg',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '4TGxgCSJQx2GQk9oHZ8dC5m3JNXTYZHjXumKAW3vLnNx',
    chainId: 101,
    decimals: 9,
    name: 'Oxbull Sol',
    symbol: 'OXS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4TGxgCSJQx2GQk9oHZ8dC5m3JNXTYZHjXumKAW3vLnNx/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'oxbull-solana',
    },
  },
  {
    address: 'GYCVdmDthkf3jSz5ns6fkzCmHub7FSZxjVCfbfGqkH7P',
    chainId: 101,
    decimals: 9,
    name: 'GameYoo Token',
    symbol: 'GYC',
    logoURI: 'https://raw.githubusercontent.com/gameyoo/materials/main/gyc.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'AkhdZGVbJXPuQZ53u2LrimCjkRP6ZyxG1SoM85T98eE1',
    chainId: 101,
    decimals: 8,
    name: 'Starbots Token',
    symbol: 'BOT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AkhdZGVbJXPuQZ53u2LrimCjkRP6ZyxG1SoM85T98eE1/logo.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'starbots',
    },
  },
  {
    address: 'GS6E87SLTioRDG3uSVRwQmuKKMxDmWU7fktCTJ5xkEM8',
    chainId: 101,
    decimals: 9,
    name: 'Lost At Sea WAVE',
    symbol: 'WAVE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GS6E87SLTioRDG3uSVRwQmuKKMxDmWU7fktCTJ5xkEM8/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '7eJCLyW5KkvzdzkVXs1ukA1WfFjCcocXjVit64tYcown',
    chainId: 101,
    decimals: 9,
    name: 'SolanaLite',
    symbol: 'SLITE',
    logoURI:
      'https://raw.githubusercontent.com/SolanaLite/SolanaLite-Brand-Kit/main/SolanaLite%20(SLITE)%20Logo%20Solana%20Blockchain.svg',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '3byG6HEKhG5gUZ5PZU9zKkFaEHYPveGEtvs68LYR8R5N',
    chainId: 101,
    decimals: 4,
    name: 'OPOS Coin',
    symbol: 'OPOS',
    logoURI: 'https://arweave.net/fivrynPZdJv5ajd4d1TXW1yHArDA-RvkYYfDoh-_4EU',
    tags: ['community'],
  },
  {
    address: 'ALKiRVrfLgzeAV2mCT7cJHKg3ZoPvsCRSV7VCRWnE8zQ',
    chainId: 101,
    decimals: 9,
    name: 'Maneki-neko',
    symbol: 'NEKI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ALKiRVrfLgzeAV2mCT7cJHKg3ZoPvsCRSV7VCRWnE8zQ/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'maneki-neko',
    },
  },
  {
    address: 'CJ5U6wPmjxFUyTJpUTS7Rt1UqhTmSVRMvmJ8WD4nndXW',
    chainId: 101,
    decimals: 9,
    name: 'Astrals GLXY',
    symbol: 'GLXY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CJ5U6wPmjxFUyTJpUTS7Rt1UqhTmSVRMvmJ8WD4nndXW/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'astrals-glxy',
    },
  },
  {
    address: 'RoLLn5qBN4juQ1D2KFpJyAcC7Deo3cYotXi4qDooHLU',
    chainId: 101,
    decimals: 6,
    name: 'ROL',
    symbol: 'ROL',
    logoURI: 'https://assets.blockstars.gg/static/ROL.svg',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'BhPXDQio8xtNC6k5Bg5fnUVL9kGN8uvRDNwW8MZBu8DL',
    chainId: 101,
    decimals: 4,
    name: 'Shibana',
    symbol: 'BANA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BhPXDQio8xtNC6k5Bg5fnUVL9kGN8uvRDNwW8MZBu8DL/Shibana.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'shibana',
    },
  },
  {
    address: 'EwJN2GqUGXXzYmoAciwuABtorHczTA5LqbukKXV1viH7',
    chainId: 101,
    decimals: 6,
    name: 'UPS token (UPFI Network)',
    symbol: 'UPS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EwJN2GqUGXXzYmoAciwuABtorHczTA5LqbukKXV1viH7/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'upfi-network',
    },
  },
  {
    address: 'FsPncBfeDV3Uv9g6yyx1NnKidvUeCaAiT2NtBAPy17xg',
    chainId: 101,
    decimals: 6,
    name: 'Glitter Finance',
    symbol: 'XGLI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FsPncBfeDV3Uv9g6yyx1NnKidvUeCaAiT2NtBAPy17xg/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'glitter-finance',
    },
  },
  {
    address: 'AMNoi4727tzy7adu4wnx3cN2VQbQdG71DqaPoSm7isJ3',
    chainId: 101,
    decimals: 9,
    name: 'Bitch Of Solana',
    symbol: 'BITCH',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AMNoi4727tzy7adu4wnx3cN2VQbQdG71DqaPoSm7isJ3/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CpFE715P5DnDoJj9FbCRcuyHHeTXNdRnvzNkHvq1o23U',
    chainId: 101,
    decimals: 8,
    name: 'DARC Token',
    symbol: 'DARC',
    logoURI:
      'https://raw.githubusercontent.com/Konstellation/DARC_token/main/256darctoken.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'darcmatter-coin',
    },
  },
  {
    address: '9ae76zqD3cgzR9gvf5Thc2NN3ACF7rqqnrLqxNzgcre6',
    chainId: 101,
    decimals: 9,
    name: 'WipeMyAss',
    symbol: 'WIPE',
    logoURI: 'https://cdn.jsdelivr.net/gh/rxrxrxrx/WipeMyAss/wipemyass.jpg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'wipemyass',
    },
  },
  {
    address: 'BgqjQdnnjRtcELAgkYpfKAxWRqSReWercDdRTH6uLoer',
    chainId: 101,
    decimals: 6,
    name: 'ᗪOᖇK ᒪOᖇᗪ',
    symbol: 'DORKL',
    logoURI:
      'https://bafkreicufnhs5evfdochjopzpjaeuxoh5s6uhyl54dlfeb2cm4bqjfi4dq.ipfs.nftstorage.link',
    tags: ['community'],
  },
  {
    address: 'ANAxByE6G2WjFp7A4NqtWYXb3mgruyzZYg3spfxe6Lbo',
    chainId: 101,
    decimals: 6,
    name: 'ANA',
    symbol: 'ANA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ANAxByE6G2WjFp7A4NqtWYXb3mgruyzZYg3spfxe6Lbo/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'nirvana-ana',
    },
  },
  {
    address: 'zwqe1Nd4eiWyCcqdo4FgCq7LYZHdSeGKKudv6RwiAEn',
    chainId: 101,
    decimals: 9,
    name: 'SOLPAY',
    symbol: 'SOLPAY',
    logoURI:
      'https://raw.githubusercontent.com/nguilbaud/token-list/main/assets/mainnet/zwqe1Nd4eiWyCcqdo4FgCq7LYZHdSeGKKudv6RwiAEn/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solpay-finance',
    },
  },
  {
    address: '9TE7ebz1dsFo1uQ2T4oYAKSm39Y6fWuHrd6Uk6XaiD16',
    chainId: 101,
    decimals: 9,
    name: 'Million Monke',
    symbol: 'MIMO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9TE7ebz1dsFo1uQ2T4oYAKSm39Y6fWuHrd6Uk6XaiD16/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'million-monke',
    },
  },
  {
    address: 'GkDg1ZfoFkroLAwLqtJNXhxCDg8gmKxHAGxSUZagYFfE',
    chainId: 101,
    decimals: 9,
    name: 'SOL100',
    symbol: 'SOL100',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GkDg1ZfoFkroLAwLqtJNXhxCDg8gmKxHAGxSUZagYFfE/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '7SEsxCsiNiYqCpYG16wx4c9u2YGLZphnEFTAU9ENAizD',
    chainId: 101,
    decimals: 9,
    name: 'RING',
    symbol: 'RING',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7SEsxCsiNiYqCpYG16wx4c9u2YGLZphnEFTAU9ENAizD/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'F6weWmuc1vwdL4u38Ro9jKXHEMjP9BoNdWMF5o5TvtJf',
    chainId: 101,
    decimals: 9,
    name: 'SOUL',
    symbol: 'SOUL',
    logoURI: 'https://arweave.net/ipj9IdEAQAXt0LS6lOt7jQY7W4iazsVFBkN60U7M4iQ',
    tags: ['community'],
  },
  {
    address: 'FNMLmBPkhh7nBFyGHsdrmCuvgEf6ygpaVqFejimHEx9V',
    chainId: 101,
    decimals: 9,
    name: 'vBLSH',
    symbol: 'vBLSH',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FNMLmBPkhh7nBFyGHsdrmCuvgEf6ygpaVqFejimHEx9V/logo.png',
    tags: ['community', 'solana-fm'],
  },
  {
    address: 'ATX1pK34GgPtKJLaXvGHQqu5DKkoJnmZBbwCxvmq3Y3h',
    chainId: 101,
    decimals: 6,
    name: 'Atellix',
    symbol: 'ATX',
    logoURI: 'https://media.atellix.net/token/atx.png',
    tags: ['community'],
  },
  {
    address: 'FeLoyXk8ac2AYVmDhAWEKNWWT63Z9TczeidYbpDvxF3T',
    chainId: 101,
    decimals: 8,
    name: 'Wrapped Capsule Coin (Wormhole v1)',
    symbol: 'wCAPS_v1',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FeLoyXk8ac2AYVmDhAWEKNWWT63Z9TczeidYbpDvxF3T/logo.svg',
    tags: ['old-registry'],
  },
  {
    address: 'DK6PWMyuZ4NMjsm9AWNCTMKrajQYrtfMjMJ3QauX2UH5',
    chainId: 101,
    decimals: 9,
    name: 'BITXBIT',
    symbol: 'BITXBIT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DK6PWMyuZ4NMjsm9AWNCTMKrajQYrtfMjMJ3QauX2UH5/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CRYPTi2V87Tu6aLc9gSwXM1wSLc6rjZh3TGC4GDRCecq',
    chainId: 101,
    decimals: 9,
    name: 'Crypt',
    symbol: '$CRYPT',
    logoURI:
      'https://aql3kfuqpqpkdchvrzuwyx6pdnjw6p6pualx7kie5erqalavewgq.arweave.net/BBe1FpB8HqGI9Y5pbF_PG1NvP8-gF3-pBOkjACwVJY0?ext=png',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'secret-skellies-society',
    },
  },
  {
    address: '2cZv8HrgcWSvC6n1uEiS48cEQGb1d3fiowP2rpa4wBL9',
    chainId: 101,
    decimals: 2,
    name: 'ACF Game',
    symbol: 'ACF',
    logoURI: 'https://shop.alienchickenfarm.com/logos/acf-token.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'alien-chicken-farm',
    },
  },
  {
    address: 'EzL6LLmv4vgfF7irkjG7ZxM92bTJ9f6nFopDXJTow7zj',
    chainId: 101,
    decimals: 9,
    name: 'Solana Condoms',
    symbol: 'CONDOMS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EzL6LLmv4vgfF7irkjG7ZxM92bTJ9f6nFopDXJTow7zj/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '48AEwauAHsJibyt3WqjQ6EoHnFBcnyHASfo7vB2eCXPS',
    chainId: 101,
    decimals: 0,
    name: 'DragonWar',
    symbol: 'DRAW',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/48AEwauAHsJibyt3WqjQ6EoHnFBcnyHASfo7vB2eCXPS/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'dragon-war',
    },
  },
  {
    address: '5WWRMYPchxgh3VmYGPqoq2kfzCtBLxXB9vFH2TeFeR9m',
    chainId: 101,
    decimals: 4,
    name: 'TOYPOODLE COIN',
    symbol: 'TPC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5WWRMYPchxgh3VmYGPqoq2kfzCtBLxXB9vFH2TeFeR9m/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'fujiCeCeP9AFDVCv27P5JRcKLoH7wfs2C9xmDECs24m',
    chainId: 101,
    decimals: 3,
    name: 'FUJI',
    symbol: 'FUJI',
    logoURI:
      'https://raw.githubusercontent.com/MarkSackerberg/token-list/main/assets/mainnet/fujiCeCeP9AFDVCv27P5JRcKLoH7wfs2C9xmDECs24m/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'Ceqwd4CSGBZnW8PHEexBQCAV2NDPkBoSqheiKR7gzELV',
    chainId: 101,
    decimals: 5,
    name: 'BABS',
    symbol: 'BABS',
    logoURI: 'https://iili.io/HaOytTu.png',
    tags: ['community'],
  },
  {
    address: '66edZnAPEJSxnAK4SckuupssXpbu5doV57FUcghaqPsY',
    chainId: 101,
    decimals: 9,
    name: 'ProtoReality Games Token',
    symbol: 'PRGC',
    logoURI: 'https://www.protorealitygames.com/images/PRGC_Token.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'Qikhhhg9Ta3Jg7WoDFbSYuCAE14hx9hPvdz1zVp3zUw',
    chainId: 101,
    decimals: 9,
    name: 'tudaBirds Token',
    symbol: 'BURD',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Qikhhhg9Ta3Jg7WoDFbSYuCAE14hx9hPvdz1zVp3zUw/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'tudabirds',
    },
  },
  {
    address: '76gDMbyohg6yHy6XJ2Rn9kxC22Q6v6uYpPXxkiwR5ota',
    chainId: 101,
    decimals: 6,
    name: 'MOAR GAINZ',
    symbol: 'MOAR',
    logoURI:
      'https://bafkreidv3a37niwg56nytrh2dijfs3vqzebedww6dt5fp2kr46pst7kyui.ipfs.nftstorage.link',
    tags: ['community', 'token-2022'],
  },
  {
    address: 'TKMKgSh3aADsmjr4yFWG52tkCQvmDxsQC1he1aBsi65',
    chainId: 101,
    decimals: 9,
    name: 'TOKAMAK ON SOLANA',
    symbol: 'TKMK',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/TKMKgSh3aADsmjr4yFWG52tkCQvmDxsQC1he1aBsi65/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'FANTafPFBAt93BNJVpdu25pGPmca3RfwdsDsRrT3LX1r',
    chainId: 101,
    decimals: 6,
    name: 'Phantasia',
    symbol: 'FANT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FANTafPFBAt93BNJVpdu25pGPmca3RfwdsDsRrT3LX1r/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '3e9pHUxa2nvAqso2Kr2KqJxYvZaz9qZLjoLaG77uQwB1',
    chainId: 101,
    decimals: 9,
    name: 'BAIL COIN',
    symbol: 'BAIL',
    logoURI:
      'https://raw.githubusercontent.com/ApeLabsNFT/solpatrol/main/hammer.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '8EDaoeBqpcVACwvkYXh1vAcU29HiBiNhqoF4pRsuUsZS',
    chainId: 101,
    decimals: 9,
    name: 'SunnySideUp staked SOL (sSOL)',
    symbol: 'sSOL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8EDaoeBqpcVACwvkYXh1vAcU29HiBiNhqoF4pRsuUsZS/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '98ouGzbMV2DnHfn3Uc7oahwvDP4Cf7Ls77JsBiARdjvn',
    chainId: 101,
    decimals: 6,
    name: 'DBank Coin',
    symbol: 'DBC',
    logoURI: 'https://arweave.net/g4a4JTGvXRxWYFIkuJtyEIDdIp2b487R_2YdTSUreXM',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '7dgHoN8wBZCc5wbnQ2C47TDnBMAxG4Q5L3KjP67z8kNi',
    chainId: 101,
    decimals: 8,
    name: 'Decentraland (Portal)',
    symbol: 'MANA',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/MANA_wh.png',
    tags: ['wormhole', 'old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'decentraland-wormhole',
    },
  },
  {
    address: 'EzfnjRUKtc5vweE1GCLdHV4MkDQ3ebSpQXLobSKgQ9RB',
    chainId: 101,
    decimals: 6,
    name: 'Cricket Star Manager',
    symbol: 'CSM',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EzfnjRUKtc5vweE1GCLdHV4MkDQ3ebSpQXLobSKgQ9RB/logo.svg',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'cricket-star-manager',
    },
  },
  {
    address: 'ASTRALvKjGK2xk2pamjMBU5dav5cEQa6zpKCP6FZ7BAJ',
    chainId: 101,
    decimals: 6,
    name: 'ASTRALIS',
    symbol: 'ASTRALIS',
    logoURI:
      'https://shdw-drive.genesysgo.net/AcG1tjtJ3vR1XzSCcVArheGLrwmMsphqExa6VodLymGF/astralis_1500x1500_8bit.png',
    tags: ['community'],
  },
  {
    address: '4onzDs1X6ubktirorHB8iYbve3K4bBtkGpYehqzGm9So',
    chainId: 101,
    decimals: 9,
    name: 'BIJU',
    symbol: 'BIJU',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4onzDs1X6ubktirorHB8iYbve3K4bBtkGpYehqzGm9So/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'SCYfrGCw8aDiqdgcpdGjV6jp4UVVQLuphxTDLNWu36f',
    chainId: 101,
    decimals: 9,
    name: 'Synchrony',
    symbol: 'SCY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SCYfrGCw8aDiqdgcpdGjV6jp4UVVQLuphxTDLNWu36f/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'synchrony',
    },
  },
  {
    address: 'FriCEbw1V99GwrJRXPnSQ6su2TabHabNxiZ3VNsVFPPN',
    chainId: 101,
    decimals: 9,
    name: 'Soltato FRIES',
    symbol: 'FRIES',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FriCEbw1V99GwrJRXPnSQ6su2TabHabNxiZ3VNsVFPPN/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'soltato-fries',
    },
  },
  {
    address: '76aYNHbDfHemxSS7vmh6eJGfjodK8m7srCxiYCrKxzY1',
    chainId: 101,
    decimals: 6,
    name: 'HRHC Token',
    symbol: 'ROLL',
    logoURI: 'https://hrhc.io/images/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'high-roller-hippo-clique',
    },
  },
  {
    address: 'sunSBR8hRLZy13HCHdrT3hjJZVRpkVfXF3QaaJYjxZ2',
    chainId: 101,
    decimals: 6,
    name: 'sunSBR',
    symbol: 'sunSBR',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/sunSBR8hRLZy13HCHdrT3hjJZVRpkVfXF3QaaJYjxZ2/logo.svg',
    tags: ['community'],
  },
  {
    address: 'SL819j8K9FuFPL84UepVcFkEZqDUUvVzwDmJjCHySYj',
    chainId: 101,
    decimals: 8,
    name: 'Saber Wrapped Ethereum (Sollet) (8 decimals)',
    symbol: 'sETH-8',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SL819j8K9FuFPL84UepVcFkEZqDUUvVzwDmJjCHySYj/icon.png',
    tags: ['old-registry'],
  },
  {
    address: 'B8wCsjSv3TDZcaLuhPZNDvpk2vuBtRgpgmTuvoDAJZZ7',
    chainId: 101,
    decimals: 9,
    name: 'Chimp',
    symbol: 'CHIMP',
    logoURI:
      'https://raw.githubusercontent.com/tsbsoltn/soltn/main/chimp/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'AAXng5czWLNtTXHdWEn9Ef7kXMXEaraHj2JQKo7ZoLux',
    chainId: 101,
    decimals: 9,
    name: 'DarleyGo Essence',
    symbol: 'DGE',
    logoURI:
      'https://raw.githubusercontent.com/DarleyGo/token-list/main/assets/mainnet/AAXng5czWLNtTXHdWEn9Ef7kXMXEaraHj2JQKo7ZoLux/icon.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'darleygo-essence',
    },
  },
  {
    address: 'HCpyiCXvziKByTGoQMLUmooAWBkCLvZmzB9D6TyPdACR',
    chainId: 101,
    decimals: 8,
    name: 'QDOT',
    symbol: 'QDOT',
    logoURI:
      'https://www.arweave.net/qyhe_8Lmd82_NWRwxdfPX0fm_CItn18KXV1Skp-x6N0?ext=jpg',
    tags: ['old-registry'],
  },
  {
    address: 'KNVfdSJyq1pRQk9AKKv1g5uyGuk6wpm4WG16Bjuwdma',
    chainId: 101,
    decimals: 9,
    name: 'Saber Wrapped Ether (Portal) (9 decimals)',
    symbol: 'swhETH-9',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/KNVfdSJyq1pRQk9AKKv1g5uyGuk6wpm4WG16Bjuwdma/icon.png',
    tags: ['old-registry'],
  },
  {
    address: '5yw793FZPCaPcuUN4F61VJh2ehsFX87zvHbCA4oRebfn',
    chainId: 101,
    decimals: 2,
    name: 'RICE',
    symbol: 'RICE',
    logoURI:
      'https://raw.githubusercontent.com/kakasonz112/robocock-token/main/assets/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '6D7nXHAhsRbwj8KFZR2agB6GEjMLg4BM7MAqZzRT8F1j',
    chainId: 101,
    decimals: 8,
    name: 'Gosu',
    symbol: 'GOSU',
    logoURI:
      'https://raw.githubusercontent.com/jGosu/gosu/main/GOSU%20COIN.png',
    tags: ['old-registry'],
  },
  {
    address: 'SuperbZyz7TsSdSoFAZ6RYHfAWe9NmjXBLVQpS8hqdx',
    chainId: 101,
    decimals: 6,
    name: 'SuperBonds Token',
    symbol: 'SB',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SuperbZyz7TsSdSoFAZ6RYHfAWe9NmjXBLVQpS8hqdx/logo.svg',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'xnorPhAzWXUczCP3KjU5yDxmKKZi5cSbxytQ1LgE3kG',
    chainId: 101,
    decimals: 6,
    name: 'Serum (Portal from Ethereum)',
    symbol: 'SRMet',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/SRMet_wh.png',
    tags: ['wormhole', 'old-registry'],
  },
  {
    address: 'ELSnGFd5XnSdYFFSgYQp7n89FEbDqxN4npuRLW4PPPLv',
    chainId: 101,
    decimals: 8,
    name: 'HEX (Wormhole v1)',
    symbol: 'wHEX_v1',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ELSnGFd5XnSdYFFSgYQp7n89FEbDqxN4npuRLW4PPPLv/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '9iz45n44TQUPyoRymdZXEunqvZUksZyhzS6zQ7sLMadj',
    chainId: 101,
    decimals: 9,
    name: 'Positron',
    symbol: 'POT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9iz45n44TQUPyoRymdZXEunqvZUksZyhzS6zQ7sLMadj/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'positron-token',
    },
  },
  {
    address: '2e7yNwrmTgXp9ABUmcPXvFJTSrEVLj4YMyrb4GUM4Pdd',
    chainId: 101,
    decimals: 6,
    name: 'Matrix Solana Index',
    symbol: 'MSI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2e7yNwrmTgXp9ABUmcPXvFJTSrEVLj4YMyrb4GUM4Pdd/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '33MJjPS6H7P2nwD648uiTiUu8v5fJ1zKyjnVqeWZ344F',
    chainId: 101,
    decimals: 9,
    name: 'everwave',
    symbol: 'WVE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/33MJjPS6H7P2nwD648uiTiUu8v5fJ1zKyjnVqeWZ344F/logo.jpg',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'GePFQaZKHcWE5vpxHfviQtH5jgxokSs51Y5Q4zgBiMDs',
    chainId: 101,
    decimals: 9,
    name: 'Jungle DeFi',
    symbol: 'JFI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GePFQaZKHcWE5vpxHfviQtH5jgxokSs51Y5Q4zgBiMDs/logo.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'jungle-defi',
    },
  },
  {
    address: '7a4cXVvVT7kF6hS5q5LDqtzWfHfys4a9PoK6pf87RKwf',
    chainId: 101,
    decimals: 9,
    name: 'Luna Yield',
    symbol: 'LUNY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7a4cXVvVT7kF6hS5q5LDqtzWfHfys4a9PoK6pf87RKwf/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '2MtPZqwNKTNsBoFCwm4ZTWk3ySz4LSd82ucDGeTk7VNu',
    chainId: 101,
    decimals: 2,
    name: 'Portals Ivory Index',
    symbol: 'IVRY',
    logoURI:
      'https://dl.airtable.com/.attachmentThumbnails/102af36cc30fec0b05ebb45406f20971/126d0320',
    tags: ['old-registry'],
  },
  {
    address: '5L2YboFbHAUpBDDJjvDB5M6pu9CW2FRjyDB2asZyvjtE',
    chainId: 101,
    decimals: 8,
    name: 'Pixels.so Token',
    symbol: 'PIXL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5L2YboFbHAUpBDDJjvDB5M6pu9CW2FRjyDB2asZyvjtE/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '6Cw88QKMxS7LzAucXbYDcUEXPq1TvsojYPV9xWwJPt7r',
    chainId: 101,
    decimals: 8,
    name: 'Spore',
    symbol: 'SPORE',
    logoURI:
      'https://bafkreidodmcqrprsgoelphtr5vyqintuqscwixqfh6ndaqurvp2mnnx2h4.ipfs.nftstorage.link/',
    tags: ['community'],
  },
  {
    address: 'HkNokfCXG33eu5vCcS49mq3jZcKZeQSQCyta964YxxYg',
    chainId: 101,
    decimals: 0,
    name: 'Breezy Bunnies Carrot',
    symbol: 'CRRT',
    logoURI: 'https://breezybunnies.com/images/3-p-500.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'Hmatmu1ktLbobSvim94mfpZmjL5iiyoM1zidtXJRAdLZ',
    chainId: 101,
    decimals: 7,
    name: 'Parasol',
    symbol: 'PSOL',
    logoURI:
      'https://raw.githubusercontent.com/parasol-finance/white-paper/main/logo.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'parasol-finance',
    },
  },
  {
    address: 'FTT8cGNp3rfTC6c44uPTuEFLqmsVDhjd2BhH65v2uppr',
    chainId: 101,
    decimals: 8,
    name: 'Saber Wrapped Wrapped FTT (Sollet) (8 decimals)',
    symbol: 'ssoFTT-8',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FTT8cGNp3rfTC6c44uPTuEFLqmsVDhjd2BhH65v2uppr/icon.png',
    tags: ['old-registry'],
  },
  {
    address: '7GNyprqrpvJHNwzWSj4KVkqw9cKyV5aR3ehM2HeE5pw',
    chainId: 101,
    decimals: 0,
    name: 'Mikuko Token',
    symbol: 'Miku',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7GNyprqrpvJHNwzWSj4KVkqw9cKyV5aR3ehM2HeE5pw/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'unknXbA1bDg39nuBqVgMNZ5qSZa8pw5HditgkPe5eFA',
    chainId: 101,
    decimals: 9,
    name: 'UNKN',
    symbol: 'UNKN',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/unknXbA1bDg39nuBqVgMNZ5qSZa8pw5HditgkPe5eFA/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'AymKzSDznoLT7Vhsb4wSRnCj1gjcG3zkgYFY8fxsHHer',
    chainId: 101,
    decimals: 8,
    name: 'The Ticket Finance',
    symbol: 'TICKET',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AymKzSDznoLT7Vhsb4wSRnCj1gjcG3zkgYFY8fxsHHer/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'KRTapyUMe5fW92KZkYoXToFtc6Cn7UG6seaKz646oGu',
    chainId: 101,
    decimals: 9,
    name: 'OOINK',
    symbol: 'OOINK',
    logoURI:
      'https://raw.githubusercontent.com/danvernon/tiny-dogz-logo/main/oink.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'HNm1VgnyhaMZZF71RjNFNiYLN76zyZTDcBZPjYveWFXX',
    chainId: 101,
    decimals: 6,
    name: 'Chimp Frens',
    symbol: 'FRENS',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HNm1VgnyhaMZZF71RjNFNiYLN76zyZTDcBZPjYveWFXX/chimp.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'gmdu3snwW28DmmxCseChp9owWLUhamH9eS3hWfHG8Vg',
    chainId: 101,
    decimals: 9,
    name: 'We Say gm',
    symbol: 'GMSOL',
    logoURI: 'https://github.com/icnivadmai/gm-logo/blob/master/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CTYiHf58UGShfHtpkTwx7vjPDA779dd6iVaeD281fEVx',
    chainId: 101,
    decimals: 9,
    name: 'Hunter Diamond',
    symbol: 'HUNT',
    logoURI: 'https://tokenhunters.app/assets/img/icons/chest-close.svg',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'BvEj2MNMPsUrD4vSk7NHs4TtRcCcJd75Wx5HvVbY4rbK',
    chainId: 101,
    decimals: 9,
    name: 'Decimus Dynamics Token',
    symbol: 'DEDS',
    logoURI:
      'https://github.com/DecimusDynamics/assets/blob/main/decimus-icon-1x1-black.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'BKydRTNdaMJ8B4zPva3YhwUQcpvAsyZaGJnKA6F44fX7',
    chainId: 101,
    decimals: 9,
    name: 'FakeBiz',
    symbol: 'FBZ',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BKydRTNdaMJ8B4zPva3YhwUQcpvAsyZaGJnKA6F44fX7/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '3LDAW7enNUZ4DjE1jCi1cDpXvXLrJ1rPiECPbcHpMgG2',
    chainId: 101,
    decimals: 2,
    name: 'FEED on ACF Game',
    symbol: 'FEED',
    logoURI: 'https://shop.alienchickenfarm.com/logos/feed-token.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'H5euuuZXAuFak2NVTMu53fckdkHFWuJzXXb3TfKTrLWK',
    chainId: 101,
    decimals: 9,
    name: 'DevCoin',
    symbol: 'DEV',
    logoURI:
      'https://raw.githubusercontent.com/thedevdojo/devcoin/main/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '9mXZ54YnJJRmUN2MaMEtWCfFyoncP4ZhKz7U9DZ4JY2X',
    chainId: 101,
    decimals: 4,
    name: 'SPACEGOLD',
    symbol: 'SPACEGOLD',
    logoURI:
      'https://raw.githubusercontent.com/cosmic-condos/SPACEGOLD/main/logo-icon.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'Hg35Vd8K3BS2pLB3xwC2WqQV8pmpCm3oNRGYP1PEpmCM',
    chainId: 101,
    decimals: 9,
    name: 'Eversol staked SOL',
    symbol: 'eSOL',
    logoURI:
      'https://raw.githubusercontent.com/everstake/solana-program-library/master/stake-pool/static-content/images/esol_token.jpg',
    tags: ['old-registry'],
  },
  {
    address: 'EZF2sPJRe26e8iyXaCrmEefrGVBkqqNGv9UPGG9EnTQz',
    chainId: 101,
    decimals: 9,
    name: 'FUMoney',
    symbol: 'FUM',
    logoURI:
      'https://raw.githubusercontent.com/FUMoney801/token-list/main/assets/mainnet/EZF2sPJRe26e8iyXaCrmEefrGVBkqqNGv9UPGG9EnTQz/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'fumoney',
    },
  },
  {
    address: 'BUD1144GGYwmMRFs4Whjfkom5UHqC9a8dZHPVvR2vfPx',
    chainId: 101,
    decimals: 6,
    name: 'BunnyDucky Token',
    symbol: 'BUD',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BUD1144GGYwmMRFs4Whjfkom5UHqC9a8dZHPVvR2vfPx/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'PRAxfbouRoJ9yZqhyejEAH6RvjJ86Y82vfiZTBSM3xG',
    chainId: 101,
    decimals: 6,
    name: 'prANA',
    symbol: 'PRANA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/PRAxfbouRoJ9yZqhyejEAH6RvjJ86Y82vfiZTBSM3xG/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'nirvana-prana',
    },
  },
  {
    address: 'rvxo8t7TKeSmAgpdqK1CY9ddZi3NyowRCh1m2d7KrUc',
    chainId: 101,
    decimals: 9,
    name: 'SMRAI',
    symbol: 'SMRAI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/rvxo8t7TKeSmAgpdqK1CY9ddZi3NyowRCh1m2d7KrUc/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'GHAhTrgtYW7jRkojQQWPGkMbmG5jGK25QBu6FSj5tvZ5',
    chainId: 101,
    decimals: 9,
    name: 'Glitter',
    symbol: 'GLTR',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GHAhTrgtYW7jRkojQQWPGkMbmG5jGK25QBu6FSj5tvZ5/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CejQBkdRPN8Jyod2jVUYTfHwU9hPHvM3rD9prvQiffDU',
    chainId: 101,
    decimals: 9,
    name: 'TAP Coin',
    symbol: 'TAP',
    logoURI: 'https://arweave.net/gHPUUFpbtWac5AnYtV10nGXa3VBgu0PgBiA7gDHJkJE',
    tags: ['community'],
  },
  {
    address: '2zjmVX4KDWtNWQyJhbNXgpMmsAoXwftB7sGV4qvV18xa',
    chainId: 101,
    decimals: 9,
    name: 'Shear Ego Coin',
    symbol: 'EGO',
    logoURI: 'https://raw.githubusercontent.com/jcards26/sol/main/new-new.png',
    tags: ['old-registry'],
  },
  {
    address: 'ANqY8h3sRSwkC29FvGJenAh7VGRABVVx7Ls6Mq4BuGT',
    chainId: 101,
    decimals: 9,
    name: 'ZIG Coin',
    symbol: 'ZIG',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ANqY8h3sRSwkC29FvGJenAh7VGRABVVx7Ls6Mq4BuGT/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '8FktFPUvi73Ywf7ZivsbuQFyQCqZUwvqSQ51hNvRhR26',
    chainId: 101,
    decimals: 8,
    name: 'Milk',
    symbol: '$MILK',
    logoURI:
      'https://shdw-drive.genesysgo.net/Ck7ByKk3NZfC9EFTNiGBrLkvquKGyDL7KLk3h1rdW2P4/image.png',
    tags: ['community'],
  },
  {
    address: 'HDEqEpFgTrBawzDgTG1eyH8Go9PX84LCEC8Qjt8T4jFN',
    chainId: 101,
    decimals: 2,
    name: 'Skullbot Biker Gang Floor Index',
    symbol: 'BOTS',
    logoURI:
      'https://dl.airtable.com/.attachmentThumbnails/85c63ffb5a6bb05e08daa667fecb7c84/6949eab5',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'HtbhBYdcfXbbD2JiH6jtsTt2m2FXjn7h4k6iXfz98k5W',
    chainId: 101,
    decimals: 9,
    name: 'DeadKnight Token',
    symbol: 'DKM',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HtbhBYdcfXbbD2JiH6jtsTt2m2FXjn7h4k6iXfz98k5W/dkmlogo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '9999j2A8sXUtHtDoQdk528oVzhaKBsXyRGZ67FKGoi7H',
    chainId: 101,
    decimals: 9,
    name: 'Saber Wrapped Bitcoin (Sollet) (9 decimals)',
    symbol: 'sBTC-9',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9999j2A8sXUtHtDoQdk528oVzhaKBsXyRGZ67FKGoi7H/icon.png',
    tags: ['old-registry'],
  },
  {
    address: '3vHSsV6mgvpa1JVuuDZVB72vYbeUNzW4mBxiBftwzHEA',
    chainId: 101,
    decimals: 9,
    name: 'Final Frontier',
    symbol: 'FRNT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3vHSsV6mgvpa1JVuuDZVB72vYbeUNzW4mBxiBftwzHEA/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'final-frontier',
    },
  },
  {
    address: '9kt93AW5QMjFL6ZxomnSq3FbWiU5ibNeTSgBz9UDFSB6',
    chainId: 101,
    decimals: 6,
    name: 'GOD',
    symbol: 'GOD',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9kt93AW5QMjFL6ZxomnSq3FbWiU5ibNeTSgBz9UDFSB6/logo.png',
    tags: ['old-registry'],
  },
  {
    address: 'EctmRn2jMAdTDvQdG7mxadyiTvhGZiGYNrt9PWe6zioG',
    chainId: 101,
    decimals: 9,
    name: 'Santaclaus',
    symbol: 'SANTA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EctmRn2jMAdTDvQdG7mxadyiTvhGZiGYNrt9PWe6zioG/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'GV6n9Uow3XzMWSs8vwTCML8SvMA6ozbidaEfdPoSoraQ',
    chainId: 101,
    decimals: 9,
    name: 'Space Vizsla',
    symbol: 'SVIZ',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GV6n9Uow3XzMWSs8vwTCML8SvMA6ozbidaEfdPoSoraQ/VizslaMoonLogo100x100.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CRMaDAzKCWYbhUfsKYA8448vaA1qUzCETd7gNBDzQ1ks',
    chainId: 101,
    decimals: 9,
    name: 'Crema',
    symbol: 'CRM',
    logoURI:
      'https://www.arweave.net/E6II9rfGbg3zzLugMjtbPGf5sM-JKKky2iXGA5SoYjQ?ext=png',
    tags: ['community'],
  },
  {
    address: 'FanJWA4yEVUJj1r83tR7XybxmDGF6bNH8M81ag9aeUbF',
    chainId: 101,
    decimals: 9,
    name: 'BMT',
    symbol: 'BMT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FanJWA4yEVUJj1r83tR7XybxmDGF6bNH8M81ag9aeUbF/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '7xd71KP4HwQ4sM936xL8JQZCwE4amUko1AdCCf6Znjrt',
    chainId: 101,
    decimals: 9,
    name: 'SOL Frens',
    symbol: 'FREN',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7xd71KP4HwQ4sM936xL8JQZCwE4amUko1AdCCf6Znjrt/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'F14Cp89oAXMrNnaC4mKMNKHPWw2p2R4DRFAZEdJhUBkD',
    chainId: 101,
    decimals: 6,
    name: 'MOONBURN',
    symbol: 'MOONBURN',
    logoURI:
      'https://raw.githubusercontent.com/Joblo197/Crypto/main/Shroom%20Logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'DSXWF79VQ3RzFBB67WeNfCzfzAQq5X6m97zi85bq1TRx',
    chainId: 101,
    decimals: 2,
    name: 'Catalina Whale Mixer Floor Index',
    symbol: 'WHALES',
    logoURI:
      'https://bafkreicadecx3rbffm6tqtgtc67bi6r2xiibtmawcejje7pfu7id2zxwwy.ipfs.dweb.link/',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'catalina-whales-index',
    },
  },
  {
    address: '6nuaX3ogrr2CaoAPjtaKHAoBNWok32BMcRozuf32s2QF',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped BUSD (Allbridge from BSC)',
    symbol: 'abBUSD',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AJ1W9A9N9dEMdVyoDiam2rV44gnBm2csrPDP7xqcapgX/logo.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'wrapped-busd-allbridge-from-bsc',
    },
  },
  {
    address: 'DHVUoxNqv3D7EgktBxUsxFF2Wx83hVDmD2wBBpUaw3jn',
    chainId: 101,
    decimals: 9,
    name: 'Crypto Health Plus',
    symbol: 'CHP',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DHVUoxNqv3D7EgktBxUsxFF2Wx83hVDmD2wBBpUaw3jn/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'BygDd5LURoqztD3xETc99WCxLUbTi6WYSht9XiBgZ4HW',
    chainId: 101,
    decimals: 9,
    name: 'Whalemap',
    symbol: 'WMP',
    logoURI: 'https://raw.githubusercontent.com/ssi91/crypto/main/logo.svg',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CsZ5LZkDS7h9TDKjrbL7VAwQZ9nsRu8vJLhRYfmGaN8K',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped ALEPH (Sollet)',
    symbol: 'soALEPH',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CsZ5LZkDS7h9TDKjrbL7VAwQZ9nsRu8vJLhRYfmGaN8K/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'UST8SCn7jrqsq51odVLqcmvnC658HkqrKrPL3w2hHQ7',
    chainId: 101,
    decimals: 8,
    name: 'Saber Wrapped UST (Portal) (8 decimals)',
    symbol: 'sUST-8',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/UST8SCn7jrqsq51odVLqcmvnC658HkqrKrPL3w2hHQ7/icon.png',
    tags: ['old-registry'],
  },
  {
    address: '3zE4Qmh9hrC4inHynT3aSRzHcWhnxPCHLeN9WWqvoRVz',
    chainId: 101,
    decimals: 9,
    name: 'Race Raiders Rewards',
    symbol: 'RRR',
    logoURI: 'https://arweave.net/SH106hrChudKjQ_c6e6yd0tsGUbFIScv2LL6Dp-LDiI',
    tags: ['community'],
  },
  {
    address: 'E6oCGvmSYW7qhy7oeDfiNZLX6hEmPCVxBC8AknwAj82B',
    chainId: 101,
    decimals: 2,
    name: 'Playground Art Collection',
    symbol: 'PLAYA',
    logoURI:
      'https://ybtrj4uri4zn4ob36ww7gdkqek3tkpm3uqq3mhsavul4ls5us3aa.arweave.net/wGcU8pFHMt44O_Wt8w1QIrc1PZukIbYeQK0Xxcu0lsA/?ext=png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CgbJxXyaHeU8VsquBpySuFXA94b6LWXxioZ28wRr8fs9',
    chainId: 101,
    decimals: 6,
    name: 'Viral Inu',
    symbol: 'VINU',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CgbJxXyaHeU8VsquBpySuFXA94b6LWXxioZ28wRr8fs9/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'viral-inu',
    },
  },
  {
    address: 'Aogv6j1wWiBAZcqRNN1Y89eozda2ke6rkc4CYy7c4iCi',
    chainId: 101,
    decimals: 9,
    name: 'Jungle',
    symbol: 'JUNGLE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Aogv6j1wWiBAZcqRNN1Y89eozda2ke6rkc4CYy7c4iCi/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'jungle',
    },
  },
  {
    address: '9m8E1yLHaG1B2TFSNeWahsitQh5yQRnrbyw756HFAcEa',
    chainId: 101,
    decimals: 9,
    name: 'Random Blockasset Legends',
    symbol: 'rLGND',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9m8E1yLHaG1B2TFSNeWahsitQh5yQRnrbyw756HFAcEa/rLGND.png',
    tags: ['old-registry'],
  },
  {
    address: '7vVRYg24HvVmgxV4neAog66GjW6aCUwnArvjDn6bgrX5',
    chainId: 101,
    decimals: 9,
    name: 'NECTAR2 Token',
    symbol: 'NECTAR2',
    logoURI:
      'https://raw.githubusercontent.com/agave-com/nectar-token/main/logo-sq.png',
    tags: ['old-registry'],
  },
  {
    address: '51pPuhLArFyrUTiLwFtoySBnELppjNdG13b86zPVBY9Z',
    chainId: 101,
    decimals: 9,
    name: 'CIKKA',
    symbol: 'CKKA',
    logoURI:
      'https://raw.githubusercontent.com/baba7ji/crypto/main/cikka.png.png',
    tags: ['community'],
  },
  {
    address: 'ELXRYrf8wd4DcyXDU9QPnMdD8jn2twg7o7qEtf5z2GBW',
    chainId: 101,
    decimals: 9,
    name: 'ELIXIR',
    symbol: 'ELIXIR',
    logoURI: 'https://raw.githubusercontent.com/zaptors/image/main/elixir.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'FwEHs3kJEdMa2qZHv7SgzCiFXUQPEycEXksfBkwmS8gj',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped USDT (Allbridge from Avalanche)',
    symbol: 'aaUSDT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg',
    tags: ['old-registry'],
  },
  {
    address: 'HuMShjViKhcfihmHkgvctcFAyeyxAk8hK5K58zWpuRKf',
    chainId: 101,
    decimals: 9,
    name: 'DREAM TOKEN',
    symbol: 'DREAM',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HuMShjViKhcfihmHkgvctcFAyeyxAk8hK5K58zWpuRKf/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CgnTSoL3DgY9SFHxcLj6CgCgKKoTBr6tp4CPAEWy25DE',
    chainId: 101,
    decimals: 9,
    name: 'Cogent SOL',
    symbol: 'cgntSOL',
    logoURI: 'https://cogent-cogs.s3.us-west-2.amazonaws.com/cgntSOL.png',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'cogent-sol',
    },
  },
  {
    address: 'EHaEBhYHWA7HSphorXXosysJem6qF4agccoqDqQKCUge',
    chainId: 101,
    decimals: 8,
    name: 'WEYU',
    symbol: 'WEYU',
    logoURI: 'https://weyu.io/img/WEYU.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'weyu',
    },
  },
  {
    address: '7V5AaqHTwiySegaAmNPLekQfTAoK4WvEVgfi2R8V44tB',
    chainId: 101,
    decimals: 9,
    name: 'Random FRAKTs',
    symbol: 'rFRAKT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7V5AaqHTwiySegaAmNPLekQfTAoK4WvEVgfi2R8V44tB/rFRAKT.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'NEo3D6MXRXf2iAfaqvZYqSmFkfutLvNjm86xmfGWNh5',
    chainId: 101,
    decimals: 9,
    name: 'NEO3D TOKEN',
    symbol: 'NEO',
    logoURI:
      'https://raw.githubusercontent.com/minh-git/docusaurus-2/main/static/img/neo3d-logo.jpg',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '2Ry7AGS1w488LdSxhz2XvSrU1EVUzUGJo27DBP57couh',
    chainId: 101,
    decimals: 7,
    name: 'BEN',
    symbol: '$BEN',
    logoURI: 'https://arweave.net/vvRsvtg1dtVxoUL6XNeRp-cOIYp8BRbaDigmuKvLazk',
    tags: ['community'],
  },
  {
    address: 'CCKDRAd4Xwjoovtf2s1duu3d4TPTmFRyh1hfrb3ZUGR2',
    chainId: 101,
    decimals: 9,
    name: 'Tiddy Juice Coin',
    symbol: 'MILK',
    logoURI: 'https://arweave.net/S71DNASA5TYlrK9giRy7QgqFNw1m4mxqY6OdtgY1E7k',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '7sWMHQaJJPn1rkeizq41iPiW5gG7Ry7PXYAVHaUwY4qu',
    chainId: 101,
    decimals: 9,
    name: 'EDO',
    symbol: 'EDO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7sWMHQaJJPn1rkeizq41iPiW5gG7Ry7PXYAVHaUwY4qu/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '3JSf5tPeuscJGtaCp5giEiDhv51gQ4v3zWg8DGgyLfAB',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped YFI (Sollet)',
    symbol: 'soYFI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3JSf5tPeuscJGtaCp5giEiDhv51gQ4v3zWg8DGgyLfAB/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'EwxNF8g9UfmsJVcZFTpL9Hx5MCkoQFoJi6XNWzKf1j8e',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped CUSD (Allbridge from Celo)',
    symbol: 'acUSD',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7236.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'wrapped-cusd-allbridge-from-celo',
    },
  },
  {
    address: '75XracgnqjPeuexHKWQU3bBcXMZG6XLDF867tKB1T9e6',
    chainId: 101,
    decimals: 9,
    name: 'The Islanders',
    symbol: 'ISL',
    logoURI: 'https://cdn.jsdelivr.net/gh/koudydev/crypto/main/islIcon.png',
    tags: ['old-registry'],
  },
  {
    address: 'T8KdT8hDzNhbGx5sjpEUxepnbDB1TZoCa7vtC5JjsMw',
    chainId: 101,
    decimals: 8,
    name: 'Saber Wrapped USDT (8 decimals)',
    symbol: 'sUSDT-8',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/T8KdT8hDzNhbGx5sjpEUxepnbDB1TZoCa7vtC5JjsMw/icon.png',
    tags: ['old-registry'],
  },
  {
    address: '4NGNdLiQ1KG8GgqZimKku4WCLdXbNw6UQJvqax3fE6CJ',
    chainId: 101,
    decimals: 2,
    name: 'fWAVE999',
    symbol: 'WAV',
    logoURI:
      'https://www.arweave.net/qV0rFkGG-cTdtgRu7le-k8DstT8_-pzG2MWsceSlXjQ?ext=png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'ASoLXbfe7cd6igh5yiEsU8M7FW64QRxPKkxk7sjAfond',
    chainId: 101,
    decimals: 9,
    name: 'aSOL Aggregate Solana Stake Pool',
    symbol: 'aSOL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ASoLXbfe7cd6igh5yiEsU8M7FW64QRxPKkxk7sjAfond/logo.svg',
    tags: ['old-registry'],
  },
  {
    address: 'TKDrcm3n4mfXFfPKZoLp5soRSdFQSmyWLdomdKL3ktU',
    chainId: 101,
    decimals: 0,
    name: 'Tenkai Token',
    symbol: 'TENKAI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/TKDrcm3n4mfXFfPKZoLp5soRSdFQSmyWLdomdKL3ktU/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'aYZPYgohjK6LYM8o1v6pnr3ZinhuRzSHd6TRDVDUBkK',
    chainId: 101,
    decimals: 8,
    name: 'BitLegacy Token',
    symbol: 'BTL',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/aYZPYgohjK6LYM8o1v6pnr3ZinhuRzSHd6TRDVDUBkK/logo.png',
    tags: ['old-registry'],
  },
  {
    address: 'D8TFo4FsDF9CnejkezEZtwdhdmwaiNgLRDAQUTwWQuBU',
    chainId: 101,
    decimals: 6,
    name: 'TEST',
    symbol: '$TEST',
    logoURI:
      'https://bafkreia7lr4higfpv6xc5owc3m2vjgcq2zzb7nqoaeut2lqcfy4pplpy5u.ipfs.nftstorage.link',
    tags: ['community'],
  },
  {
    address: 'HbrmyoumgcK6sDFBi6EZQDi4i4ZgoN16eRB2JseKc7Hi',
    chainId: 101,
    decimals: 9,
    name: 'Crystal',
    symbol: 'CRY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HbrmyoumgcK6sDFBi6EZQDi4i4ZgoN16eRB2JseKc7Hi/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '4JWktLr39ZbyutVnym7wKxV1RDoJz7ifDYxMUHDmAbPB',
    chainId: 101,
    decimals: 8,
    name: 'DARK COIN',
    symbol: 'DMV',
    logoURI:
      'https://raw.githubusercontent.com/Shaik-Sirajuddin/RepoForUploadsNeverDelete/master/Images/darkcoin.png',
    tags: ['old-registry'],
  },
  {
    address: 'EBQ6gWBQNxA2zB4twR5GWP6CkeAhqZZZeDgeP7BTtdM3',
    chainId: 101,
    decimals: 2,
    name: 'PerpeTraders',
    symbol: 'PERP',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EBQ6gWBQNxA2zB4twR5GWP6CkeAhqZZZeDgeP7BTtdM3/logo.jpg',
    tags: ['old-registry'],
  },
  {
    address: 'GtLBsmS6Z4FC9gmnCFS2ZzCKmb9vYL3kELnjVmxHurnh',
    chainId: 101,
    decimals: 2,
    name: 'ENG Token',
    symbol: 'ENG',
    logoURI:
      'https://www.arweave.net/N_pDeYTYERWexWo2E3-mzZhqMtqdcqA_ZktPva4ImnY?ext=png',
    tags: ['community'],
  },
  {
    address: 'Bqd2ujCTEzpKzfjb1FHL7FKrdM6n1rZSnRecJK57EoKz',
    chainId: 101,
    decimals: 9,
    name: 'HottoShotto',
    symbol: 'HOTTO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Bqd2ujCTEzpKzfjb1FHL7FKrdM6n1rZSnRecJK57EoKz/logo.png',
    tags: ['old-registry'],
  },
  {
    address: '8HfNu2EfwFQz2srSNDvPsjaWV3G65ZWP3pDC67mcNv6J',
    chainId: 101,
    decimals: 9,
    name: 'Neural Octopus',
    symbol: 'NOCT',
    logoURI:
      'https://raw.githubusercontent.com/Neural-Octopus-Token/noct-metadata/main/logo.png',
    tags: ['community'],
  },
  {
    address: 'CRSzWoeyfR8sJxB2d6LLEre92Uc59TCPX2gZidp4t3eE',
    chainId: 101,
    decimals: 9,
    name: 'Agave Zwolf',
    symbol: 'AGVZ',
    logoURI:
      'https://raw.githubusercontent.com/GrupoZwolf/cryptozw/main/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '3uejHm24sWmniGA5m4j4S1DVuGqzYBR5DJpevND4mivq',
    chainId: 101,
    decimals: 9,
    name: 'IP3',
    symbol: 'IP3',
    logoURI: 'https://cripco.com/token/image/ip3?ext=png',
    tags: ['community', 'solana-fm'],
  },
  {
    address: '4iGtA8VSTFNFjXdQZiSkMkM2sS4x21tC9y5DAU9WxoQd',
    chainId: 101,
    decimals: 5,
    name: 'Quantity build',
    symbol: 'QB',
    logoURI: 'https://arweave.net/Pg5DdUVvKwY6iaqFMsXwomg7H40CFzHyG14E7PJyn9s',
    tags: ['community'],
  },
  {
    address: 'FyNuYGBBry5LAtPEkh8Y73izjTUNT2td2J3sGCK7E9Ju',
    chainId: 101,
    decimals: 9,
    name: 'VIBEZ',
    symbol: 'VIBEZ',
    logoURI:
      'https://github.com/ArthurPaivaT/token-list/blob/main/assets/mainnet/FyNuYGBBry5LAtPEkh8Y73izjTUNT2td2J3sGCK7E9Ju/logo.png?raw=true',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '5YtGSyQ7YxFgDc9oj4SpZGTjoS5p5Fubkg8sMauQqXoS',
    chainId: 101,
    decimals: 9,
    name: 'PULP',
    symbol: 'PULP',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5YtGSyQ7YxFgDc9oj4SpZGTjoS5p5Fubkg8sMauQqXoS/logo.png',
    tags: ['old-registry'],
  },
  {
    address: '8yQuj5v4s72UqZi3sYZL5rAD4NPV4ueUwBKzChBDWMVf',
    chainId: 101,
    decimals: 9,
    name: 'Maars',
    symbol: 'MRX',
    logoURI:
      'https://raw.githubusercontent.com/maarstoken/crypto/main/maars-800x800.png',
    tags: ['old-registry'],
  },
  {
    address: '8TQdiAzdZZEtkWUR8Zj1tqDYGPv9TR1XjPqrew39Vq9V',
    chainId: 101,
    decimals: 7,
    name: 'HypeProxy',
    symbol: 'HYPE',
    logoURI:
      'https://raw.githubusercontent.com/hypeproxy/hypeproxy/main/logo.png',
    tags: ['old-registry'],
  },
  {
    address: '6ybxMQpMgQhtsTLhvHZqk8uqao7kvoexY6e8JmCTqAB1',
    chainId: 101,
    decimals: 4,
    name: 'QUEST',
    symbol: 'QUEST',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6ybxMQpMgQhtsTLhvHZqk8uqao7kvoexY6e8JmCTqAB1/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'hone3CJTYjczb5nJh45KCNMkjrKMt7SCnHkWGWsVfVu',
    chainId: 101,
    decimals: 0,
    name: 'Yokoito Crew Hone',
    symbol: 'HONE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/hone3CJTYjczb5nJh45KCNMkjrKMt7SCnHkWGWsVfVu/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'FDKBUXKxCdNQnDrqP7DLe8Kri3hzFRxcXyoskoPa74rk',
    chainId: 101,
    decimals: 9,
    name: 'YETI',
    symbol: '$YETI',
    logoURI: 'https://raw.githubusercontent.com/yet777/tokenlogo/main/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'LiLyT885cG9xZKYQk9x6VWMzmcui4ueV9J1uzPDDajY',
    chainId: 101,
    decimals: 6,
    name: 'Solily Protocol Coin',
    symbol: 'LILY',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/LiLyT885cG9xZKYQk9x6VWMzmcui4ueV9J1uzPDDajY/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '9MjAmgHXbu5drkNa9XpzfozgsM5Dcq6bSnKZzdNrwscC',
    chainId: 101,
    decimals: 9,
    name: 'Force',
    symbol: '$FORCE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9MjAmgHXbu5drkNa9XpzfozgsM5Dcq6bSnKZzdNrwscC/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '3in9a9yHtdjDFRjDyGTTpGUwJpT9zZBcyjQ8J7nqqNtq',
    chainId: 101,
    decimals: 9,
    name: 'Doggy Style',
    symbol: 'DoggyStyle',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3in9a9yHtdjDFRjDyGTTpGUwJpT9zZBcyjQ8J7nqqNtq/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '3Ztt53vwGhQGoEp3n1RjSu4CFnGRfqzwo6L8KN8gmXfd',
    chainId: 101,
    decimals: 9,
    name: 'METASEER',
    symbol: 'METAS',
    logoURI: 'https://metaseer.io/img/home-one/logo256.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '7JnHPPJBBKSTJ7iEmsiGSBcPJgbcKw28uCRXtQgimncp',
    chainId: 101,
    decimals: 8,
    name: 'Orbs',
    symbol: 'Orbs',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7JnHPPJBBKSTJ7iEmsiGSBcPJgbcKw28uCRXtQgimncp/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '27nqFZqb2iPBeVA7bbE4KPZrJgi3dJdKV9VzhCguSy6Y',
    chainId: 101,
    decimals: 9,
    name: 'PozzCoin',
    symbol: 'POZZ',
    logoURI: 'https://raw.githubusercontent.com/dc215007/pozz1/main/logo1.png',
    tags: ['old-registry'],
  },
  {
    address: 'E8G4uo2i9d12aGnXDHXXcw6hU2fh2NytR5XR3qurTLBx',
    chainId: 101,
    decimals: 9,
    name: 'WNDO',
    symbol: 'WNDO',
    logoURI:
      'https://static1.squarespace.com/static/6252f1590fac8d79fb6d772e/t/627682f25295251e0967c29c/1651933939477/wndocoin.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CFbdjaKonbBQTYG2GC6CmB7exofgDYGCDR8tp8KVGS7T',
    chainId: 101,
    decimals: 6,
    name: 'Cyborg Apes BORG',
    symbol: 'BORG',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CFbdjaKonbBQTYG2GC6CmB7exofgDYGCDR8tp8KVGS7T/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'cyborg-apes',
    },
  },
  {
    address: '88YqDBWxYhhwPbExF966EdaCYBKP51xVm1oGBcbWzcf2',
    chainId: 101,
    decimals: 9,
    name: 'Garlic',
    symbol: 'GRLC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/88YqDBWxYhhwPbExF966EdaCYBKP51xVm1oGBcbWzcf2/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'Gh1jKzmxf95cT5PQabNbfJskkQU8kQ5UugfpbHSnPq9z',
    chainId: 101,
    decimals: 3,
    name: 'Neon Rocket Coin',
    symbol: 'NRC',
    logoURI:
      'https://raw.githubusercontent.com/neontechanoah/neon_rocket_coin/main/asset/NRC_Logo_100px.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '4mJ6N65rD9w6sFPQ17UDWot2H64UtzR31biVLaKpZT6J',
    chainId: 101,
    decimals: 0,
    name: 'AlienUniverse Token',
    symbol: 'ALIEN',
    logoURI:
      'https://raw.githubusercontent.com/alien-universe/assets/main/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'idoLztG5ZGMVEjjoQWjeSu2eVkVsp3YnrFZKf7dNi4j',
    chainId: 101,
    decimals: 9,
    name: 'IDOLZ Token',
    symbol: 'IDOLZ',
    logoURI:
      'https://arweave.net/mdvmPYEgiX_uPGRtiIZA3HrpilDK5JfW2bXkDBRuzVM?ext=png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '42Y3CgJQLnHjdScYMu8VS4TbeZMUNVdBMKYbf7hz7aum',
    chainId: 101,
    decimals: 6,
    name: 'Gamify Club',
    symbol: 'GMFC',
    logoURI:
      'https://pbs.twimg.com/profile_images/1444964749897175046/wdz26CzM_400x400.jpg',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '3jsFX1tx2Z8ewmamiwSU851GzyzM2DJMq7KWW5DM8Py3',
    chainId: 101,
    decimals: 8,
    name: 'CHAI (Portal)',
    symbol: 'CHAI',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/CHAI_wh.png',
    tags: ['wormhole'],
    extensions: {
      coingeckoId: 'chai',
    },
  },
  {
    address: '7y2KpMzsxmjCN8ogA3PSfwZvmYUgMuWo7NWY4Ct5jRHp',
    chainId: 101,
    decimals: 6,
    name: 'SolBird',
    symbol: 'BIRD',
    logoURI: 'https://arweave.net/K_IaCXwL9YQTPJnZfvi302k2lhANDvmzkiy6e0Y6Zho',
    tags: ['community'],
  },
  {
    address: 'ForaXiBD8K3a7C1PwxV1xqDHs5aV8y8nWRmHebafdkes',
    chainId: 101,
    decimals: 9,
    name: 'Fora',
    symbol: 'FORA',
    logoURI: 'imagepng',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '6FLsSkF4AqQeDuqEmGPyBZvVebc4WWWntnZP2QZyBzG8',
    chainId: 101,
    decimals: 9,
    name: 'JJC',
    symbol: 'JJJJC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6FLsSkF4AqQeDuqEmGPyBZvVebc4WWWntnZP2QZyBzG8/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'Ce3PSQfkxT5ua4r2JqCoWYrMwKWC5hEzwsrT9Hb7mAz9',
    chainId: 101,
    decimals: 9,
    name: 'SolDate(DATE) Token',
    symbol: 'DATE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Ce3PSQfkxT5ua4r2JqCoWYrMwKWC5hEzwsrT9Hb7mAz9/DATE.svg',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'KomoNuvereGko9jNKUgb3AJZdG3pDaXjbph77ZWvFy1',
    chainId: 101,
    decimals: 2,
    name: 'Komoverse Token',
    symbol: 'KOMO',
    logoURI: 'https://komoverse.io/assets/img/favicon.png',
    tags: ['community'],
  },
  {
    address: 'LAinEtNLgpmCP9Rvsf5Hn8W6EhNiKLZQti1xfWMLy6X',
    chainId: 101,
    decimals: 9,
    name: 'Laine Stake',
    symbol: 'laineSOL',
    logoURI:
      'https://shdw-drive.genesysgo.net/4DUkKJB966oMk8zq57KkAUxqg9HpuWtZ3BKobhmYph39/laineSOL.webp',
    tags: ['community', 'solana-fm'],
    extensions: {
      coingeckoId: 'laine-stake',
    },
  },
  {
    address: 'PRiME7gDoiG1vGr95a3CRMv9xHY7UGjd4JKvfSkmQu2',
    chainId: 101,
    decimals: 9,
    name: 'SolanaPrime',
    symbol: 'PRIME',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/PRiME7gDoiG1vGr95a3CRMv9xHY7UGjd4JKvfSkmQu2/logo.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'solanaprime',
    },
  },
  {
    address: '8iSagwHZNj4Hx4CMeoZwLLMVbWt4mUT6qk42TxiHkRtn',
    chainId: 101,
    decimals: 6,
    name: 'DegenAlley',
    symbol: 'DGNA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8iSagwHZNj4Hx4CMeoZwLLMVbWt4mUT6qk42TxiHkRtn/DGNA.png',
    tags: ['old-registry'],
  },
  {
    address: 'Gm6szibJfB1ZzUxNYf85nXwFchugqTqNyE5fDwWfBc7K',
    chainId: 101,
    decimals: 9,
    name: 'ILoveU Token',
    symbol: 'ILU',
    logoURI:
      'https://raw.githubusercontent.com/rjdrar/crypto/main/symbol-1.png',
    tags: ['old-registry'],
  },
  {
    address: 'Aymdf5Fp2URJNcsHpEF2NqEqFHiqvvhrDvYQtyZFw7zn',
    chainId: 101,
    decimals: 4,
    name: 'Water Bears',
    symbol: 'WTRBR',
    logoURI: 'https://arweave.net/GZNQl83S1kK5kvak1yvMrI8muuPVm80fdliPcgwsWfw',
    tags: ['community'],
  },
  {
    address: 'sMEANebFMnd9uTYpyntGzBmTmzEukRFwCjEcnXT2E8z',
    chainId: 101,
    decimals: 6,
    name: 'Staked MEAN',
    symbol: 'sMEAN',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/sMEANebFMnd9uTYpyntGzBmTmzEukRFwCjEcnXT2E8z/logo.svg',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'uL2qhMckUAroJPt2MLHwEeppJNYE3wBAGFMCs3anwXn',
    chainId: 101,
    decimals: 2,
    name: 'Drippies Floor Index',
    symbol: 'DRIPSPLIT',
    logoURI:
      'https://creator-hub-prod.s3.us-east-2.amazonaws.com/drippies_pfp_1648415706808.gif',
    tags: ['old-registry'],
  },
  {
    address: '8BLiujyxu5gJajWBXoZQkwSsamdeHNKWQbu1ApAao8Ps',
    chainId: 101,
    decimals: 6,
    name: 'Acacia',
    symbol: 'ACA',
    logoURI:
      'https://raw.githubusercontent.com/qubelabsllc/ACALogo/main/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '7R7rZ7SsLDXkYAfJyRCBScLuZwizeMWaTWrwFhSZU2Jq',
    chainId: 101,
    decimals: 9,
    name: 'Weble Ecosystem Token',
    symbol: 'WET',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7R7rZ7SsLDXkYAfJyRCBScLuZwizeMWaTWrwFhSZU2Jq/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'KARTdF5K68Q2nGppizG3DeCzp7AhHy6YXf2uTQjBSQx',
    chainId: 101,
    decimals: 0,
    name: 'Mushroom Racers Token',
    symbol: 'VROOM',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/KARTdF5K68Q2nGppizG3DeCzp7AhHy6YXf2uTQjBSQx/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'DMbb79fgxR3fKKVKWcbetMCuxNNtJnfjY3qqAE4G4wJf',
    chainId: 101,
    decimals: 3,
    name: 'Dusk',
    symbol: 'DUSK',
    logoURI:
      'https://firebasestorage.googleapis.com/v0/b/mom-prod-625e5.appspot.com/o/TokensNoBG%2FDusk_Coin_INV.png?alt=media&token=66709e38-8d35-40b0-8c0d-9499372f421f',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'iVNcrNE9BRZBC9Aqf753iZiZfbszeAVUoikgT9yvr2a',
    chainId: 101,
    decimals: 6,
    name: 'Investin Protocol',
    symbol: 'IVN',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/iVNcrNE9BRZBC9Aqf753iZiZfbszeAVUoikgT9yvr2a/logo.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'investin',
    },
  },
  {
    address: '4nhQdXfoHvCCVnyZQg3awXqPrKL89Ys7Rbe77oXM47GG',
    chainId: 101,
    decimals: 9,
    name: 'AIO Exchange Token',
    symbol: 'AIO',
    logoURI:
      'https://raw.githubusercontent.com/adminesc/AIO_EXCHANGE_Token/main/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'dab15vg2k8zGJPy4xM2DH2G2BY3khrqduXapzYAV3y8',
    chainId: 101,
    decimals: 8,
    name: 'DABLOONS',
    symbol: 'DABLNS',
    logoURI: 'https://arweave.net/AYbNmLsPhYrlgrVtCERbp7UysLGL-IXQQrTL826ai6Y',
    tags: ['community'],
  },
  {
    address: '9e6nnqbsTjWx3ss6a3x7Q9ZvpupLNYLb8cTbVmm6UD2K',
    chainId: 101,
    decimals: 9,
    name: 'Shuttlecoin',
    symbol: 'SHUT',
    logoURI:
      'https://raw.githubusercontent.com/Mikkel76543/crypto9/main/logo.png',
    tags: ['old-registry'],
  },
  {
    address: '7udMmYXh6cuWVY6qQVCd9b429wDVn2J71r5BdxHkQADY',
    chainId: 101,
    decimals: 3,
    name: 'COBAN',
    symbol: 'COBAN',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7udMmYXh6cuWVY6qQVCd9b429wDVn2J71r5BdxHkQADY/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'coban',
    },
  },
  {
    address: '4tejdaGTug9xWg58f92zmFMrsoWqCnvt8WaVuCiP3uUy',
    chainId: 101,
    decimals: 8,
    name: 'ICHIGO',
    symbol: 'ICHIGO',
    logoURI: 'https://ichigo.network/logos/logo.png',
    tags: ['old-registry'],
  },
  {
    address: 'icex2Fy2KtXjfiAAUEHLPHu7XKDLvwiyVUPP9PNpSkF',
    chainId: 101,
    decimals: 9,
    name: 'Infinity Diamonds ICE',
    symbol: 'ICE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/icex2Fy2KtXjfiAAUEHLPHu7XKDLvwiyVUPP9PNpSkF/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'Bx1fDtvTN6NvE4kjdPHQXtmGSg582bZx9fGy4DQNMmAT',
    chainId: 101,
    decimals: 9,
    name: 'Solcubator',
    symbol: 'SOLC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Bx1fDtvTN6NvE4kjdPHQXtmGSg582bZx9fGy4DQNMmAT/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'solcubator',
    },
  },
  {
    address: '4B619RbcXbXrKTzNVgDSRiUn9wfxWgA1w1oFLveGacNy',
    chainId: 101,
    decimals: 3,
    name: 'Hydrogencoin',
    symbol: 'HCOIN',
    logoURI:
      'https://raw.githubusercontent.com/dataalg/Hydrogen/main/4B619RbcXbXrKTzNVgDSRiUn9wfxWgA1w1oFLveGacNy/logo.png',
    tags: ['old-registry'],
  },
  {
    address: '7rrJLRar2WjZwRoF3iJKHKnA7d7d9YJT1X9HAJnwUH3Z',
    chainId: 101,
    decimals: 6,
    name: 'Project Wisdom',
    symbol: 'WIZE',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7rrJLRar2WjZwRoF3iJKHKnA7d7d9YJT1X9HAJnwUH3Z/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'GTuDe5yneFKaWSsPqqKgu413KTk8WyDnUZcZUGxuNYsT',
    chainId: 101,
    decimals: 9,
    name: 'Dasch Coin',
    symbol: 'DASCH',
    logoURI: 'https://github.com/kennethoqs/dasch/blob/main/logo.png',
    tags: ['old-registry'],
  },
  {
    address: 'GZL4yjPohDShW4RofJ6dEWu2Fv7qEa5mBT7Dpje5hqe7',
    chainId: 101,
    decimals: 2,
    name: 'Stoned Ape Crew Index',
    symbol: 'SAC',
    logoURI: 'https://i.imgur.com/sxmJbDr.jpg',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '45wdSjpSqZCk9mkqmq5Nh7beCEqqUJMJcVduwYCip5eq',
    chainId: 101,
    decimals: 8,
    name: 'BofB',
    symbol: 'BOFB',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/45wdSjpSqZCk9mkqmq5Nh7beCEqqUJMJcVduwYCip5eq/logo.svg',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'AgnHzGspNu7F3nFM4izuPt5g7m1URjVaTaFNgvqSXcjC',
    chainId: 101,
    decimals: 9,
    name: 'Nectar',
    symbol: 'NCTR',
    logoURI:
      'https://www.arweave.net/8imTwET4YerNLKAL8nEmI6ONDlMXBHZ96YC7TeFTI1s?ext=png',
    tags: ['community'],
  },
  {
    address: 'GjdreVe7iUG4hyESSweGyFzgekWufhEwGJqAaa1hr7pf',
    chainId: 101,
    decimals: 9,
    name: 'WATT token',
    symbol: 'WATT',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GjdreVe7iUG4hyESSweGyFzgekWufhEwGJqAaa1hr7pf/logo.png',
    tags: ['old-registry'],
  },
  {
    address: '8UaGbxQbV9v2rsMxy2G2NEh1JYQ8T9dmggq1oesrXD9c',
    chainId: 101,
    decimals: 3,
    name: 'Ribh',
    symbol: 'RIBH',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8UaGbxQbV9v2rsMxy2G2NEh1JYQ8T9dmggq1oesrXD9c/logo.png',
    tags: ['old-registry'],
  },
  {
    address: '2zzC22UBgJGCYPdFyo7GDwz7YHq5SozJc1nnBqLU8oZb',
    chainId: 101,
    decimals: 9,
    name: '1SPACE',
    symbol: '1SP',
    logoURI: 'https://1space.me/images/1SP_logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'onespace',
    },
  },
  {
    address: 'C5xtJBKm24WTt3JiXrvguv7vHCe7CknDB7PNabp4eYX6',
    chainId: 101,
    decimals: 9,
    name: 'Tiny Bonez',
    symbol: 'T1NY',
    logoURI:
      'https://raw.githubusercontent.com/danvernon/tiny-dogz-logo/main/coin.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'tiny-bonez',
    },
  },
  {
    address: 'UST98bfV6EASdTFQrRwCBczpehdMFwYCUdLT5tEbhpW',
    chainId: 101,
    decimals: 9,
    name: 'Saber Wrapped UST (Portal) (9 decimals)',
    symbol: 'swtUST-9',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/UST98bfV6EASdTFQrRwCBczpehdMFwYCUdLT5tEbhpW/icon.png',
    tags: ['old-registry'],
  },
  {
    address: 'Frog8vt6gmuuUuuerd7ispP6yavssBUtMpEP5DCEuUgD',
    chainId: 101,
    decimals: 9,
    name: 'Frog',
    symbol: '$FROG',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Frog8vt6gmuuUuuerd7ispP6yavssBUtMpEP5DCEuUgD/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'At5j3zhbEj8mfFsSy1MPbjVhrX2uNmRMPEDZiyFcETNX',
    chainId: 101,
    decimals: 4,
    name: 'BRAWNDO',
    symbol: 'BRWNDO',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/At5j3zhbEj8mfFsSy1MPbjVhrX2uNmRMPEDZiyFcETNX/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'FtgGSFADXBtroxq8VCausXRr2of47QBf5AS1NtZCu4GD',
    chainId: 101,
    decimals: 4,
    name: 'BRZ',
    symbol: 'BRZ',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FtgGSFADXBtroxq8VCausXRr2of47QBf5AS1NtZCu4GD/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'brz',
    },
  },
  {
    address: '6Dujewcxn1qCd6rcj448SXQL9YYqTcqZCNQdCn3xJAKS',
    chainId: 101,
    decimals: 6,
    name: 'ARTE',
    symbol: 'ARTE',
    logoURI:
      'https://raw.githubusercontent.com/ArtPunks/ARTE-token/main/assets/token_512.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'EP2aYBDD4WvdhnwWLUMyqU69g1ePtEjgYK6qyEAFCHTx',
    chainId: 101,
    decimals: 9,
    name: 'KRILL',
    symbol: 'KRILL',
    logoURI:
      'https://raw.githubusercontent.com/solanahodlwhales/whitelist/main/Krill_towen.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'krill',
    },
  },
  {
    address: 'F9BqFoWRML4Red6YPiL3xJBP7u9g8f61AKJMEYDB3wBR',
    chainId: 101,
    decimals: 9,
    name: 'Athens',
    symbol: 'ATH',
    logoURI: 'https://arweave.net/GNYZdT1icjRPLbRoivdtSU9_GqBM7LF6khrpV9qCBtM',
    tags: ['community'],
  },
  {
    address: 'GKNr1Gwf7AMvEMEyMzBoEALVBvCpKJue9Lzn9HfrYYhg',
    chainId: 101,
    decimals: 9,
    name: '611Coin',
    symbol: 'SIXY',
    logoURI: 'https://raw.githubusercontent.com/dc215007/611/main/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'DYbRXaQcnj44SH9woxvyFdtcKkSoPoCEshRTQDZSjsBm',
    chainId: 101,
    decimals: 9,
    name: 'Marijuana Joint',
    symbol: 'MARIJUANA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DYbRXaQcnj44SH9woxvyFdtcKkSoPoCEshRTQDZSjsBm/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'AGkFkKgXUEP7ZXazza5a25bSKbz5dDpgafPhqywuQnpf',
    chainId: 101,
    decimals: 9,
    name: 'SunnySideUp Token',
    symbol: 'SSU',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AGkFkKgXUEP7ZXazza5a25bSKbz5dDpgafPhqywuQnpf/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'sunnysideup',
    },
  },
  {
    address: 'kiNeKo77w1WBEzFFCXrTDRWGRWGP8yHvKC9rX6dqjQh',
    chainId: 101,
    decimals: 9,
    name: 'KKO Protocol',
    symbol: 'KKO',
    logoURI:
      'https://www.arweave.net/lxCJWYgYzilFtAEzqbdvS9xN98-9cG4EvizAkgx1dCY?ext=png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'kineko',
    },
  },
  {
    address: 'FmoKY2ERGmE9NzrYphAJcqH5BPRy2Hs4VomRfu8Qgt7Y',
    chainId: 101,
    decimals: 2,
    name: 'SMB Index',
    symbol: 'MONKES',
    logoURI: 'https://i.imgur.com/FczxrLa.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'FUCKuTfQVT9yCe3jPXdejBPhcPJpnceQy17uvcT9cLx8',
    chainId: 101,
    decimals: 9,
    name: 'White Solana',
    symbol: 'white',
    logoURI:
      'https://raw.githubusercontent.com/loufly1/Birdies/main/photo1697130653.jpeg',
    tags: ['community'],
  },
  {
    address: 'HWSqJdwemji7TNiKQPudUj86LXyF3vGAtWm5ePk5KzgD',
    chainId: 101,
    decimals: 9,
    name: 'Solana Eco Index',
    symbol: 'SIX',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HWSqJdwemji7TNiKQPudUj86LXyF3vGAtWm5ePk5KzgD/logo.png',
    tags: ['old-registry'],
  },
  {
    address: 'BB33fYoeBVA2uv119be9tKvmXeuwtcx1W25N9KFNd2ca',
    chainId: 101,
    decimals: 9,
    name: 'Godz Token',
    symbol: 'GODZ',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BB33fYoeBVA2uv119be9tKvmXeuwtcx1W25N9KFNd2ca/logo.jpg',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'gso1xA56hacfgTHTF4F7wN5r4jbnJsKh99vR595uybA',
    chainId: 101,
    decimals: 9,
    name: 'Sunrise gSOL',
    symbol: 'GSOL',
    logoURI: 'https://arweave.net/46QNhUyat533ptVC2myiNVb5BvSP7PAFzM5ILCZTrGU',
    tags: ['community', 'solana-fm'],
  },
  {
    address: '9AGm8DWXiB4PwvH1V2r31ChsTE2f2TDySvDbfJmfaMBq',
    chainId: 101,
    decimals: 8,
    name: 'DLP8 Coin',
    symbol: 'DLP8',
    logoURI: 'https://arweave.net/T2RURwcLfB2xSjrfksI7R2SL3fKyZoqlTPiLCE3fsBo',
    tags: ['community'],
  },
  {
    address: '6j14WyX1Ag2pLWvn99euK4xp2VcZD62VeJv2iwCrYmT8',
    chainId: 101,
    decimals: 9,
    name: 'Keeshond Coin',
    symbol: '$KSH',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6j14WyX1Ag2pLWvn99euK4xp2VcZD62VeJv2iwCrYmT8/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'Kz1csQA91WUGcQ2TB3o5kdGmWmMGp8eJcDEyHzNDVCX',
    chainId: 101,
    decimals: 6,
    name: 'Tether USD (Portal from Avalanche)',
    symbol: 'USDTav',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDTav_wh.png',
    tags: ['wormhole'],
  },
  {
    address: 'MMAx26JtJgSWv6yH48nEHCGZcVvRbf9Lt9ALa7jSipe',
    chainId: 101,
    decimals: 9,
    name: 'mma',
    symbol: 'MMA',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MMAx26JtJgSWv6yH48nEHCGZcVvRbf9Lt9ALa7jSipe/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'Vjq9T5xmqRzLXQRyvigzyZzpHCGCsbYAJ7afLVuF8j9',
    chainId: 101,
    decimals: 9,
    name: 'Random Zaysan Raptors',
    symbol: 'rZOOM',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Vjq9T5xmqRzLXQRyvigzyZzpHCGCsbYAJ7afLVuF8j9/rZOOM.png',
    tags: ['old-registry'],
  },
  {
    address: '3WV4fTWGvtWNvQb8oVU4t99By8KztDLtExqHnkPfHAA9',
    chainId: 101,
    decimals: 9,
    name: 'CopyCats token',
    symbol: 'PAW',
    logoURI:
      'https://imagedelivery.net/aAmca-Po70V1nH4n9cT-uA/98c9b68b-1494-43d1-0c2c-31e5d0129a00/public',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'E9bjYSAqabYAd2Zaev4qAMVNAiX7Z2Dp4Sn1JgsTn2b6',
    chainId: 101,
    decimals: 9,
    name: 'Chairman Chow',
    symbol: 'CCC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/E9bjYSAqabYAd2Zaev4qAMVNAiX7Z2Dp4Sn1JgsTn2b6/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'AR1Mtgh7zAtxuxGd2XPovXPVjcSdY3i4rQYisNadjfKy',
    chainId: 101,
    decimals: 6,
    name: 'Wrapped SUSHI (Sollet)',
    symbol: 'soSUSHI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AR1Mtgh7zAtxuxGd2XPovXPVjcSdY3i4rQYisNadjfKy/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'bonegFPgrpZ4bfVn3kQK1aMbGYddWtfMAywNt5LsuVE',
    chainId: 101,
    decimals: 2,
    name: 'BONES Token',
    symbol: 'BONES',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/bonegFPgrpZ4bfVn3kQK1aMbGYddWtfMAywNt5LsuVE/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'soul-dog-city-bones',
    },
  },
  {
    address: 'GpQLC7KnNgAvEpamfWi1AWFdXECZ1eQetvFYTuETLZC7',
    chainId: 101,
    decimals: 9,
    name: 'SchimmelPeter Monster',
    symbol: 'SPM',
    logoURI: 'https://www.schimmelpeter.de/spm_solana.png',
    tags: ['old-registry'],
  },
  {
    address: '519W6ZZnduudeo6tp1YMgeWiNFeoq4kTVS4uMZggKE5r',
    chainId: 101,
    decimals: 9,
    name: 'Kleyne Gelt',
    symbol: 'KLGT',
    logoURI: 'https://raw.githubusercontent.com/klglt/Crypto/main/menorah.png',
    tags: ['old-registry'],
  },
  {
    address: 'AMzmwvDRKdt5AQ3m1m28tWjzBxmQNe1PsmHnYitVZwzp',
    chainId: 101,
    decimals: 9,
    name: 'JUNK',
    symbol: 'JUNKz',
    logoURI:
      'https://raw.githubusercontent.com/XAGBack/JUNKToken1/main/JunkToken.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '6ABQdaTwRvmacto7aeRBGghS6Pxctd6cFGL8gDdwV1dd',
    chainId: 101,
    decimals: 8,
    name: 'Extra Reality',
    symbol: 'XTR',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6ABQdaTwRvmacto7aeRBGghS6Pxctd6cFGL8gDdwV1dd/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '3rH1toffQAELHo5vyRKdwEFxhPTZA7ocfRdJK2c8txoJ',
    chainId: 101,
    decimals: 9,
    name: 'FamilySOL',
    symbol: 'FamSOL',
    logoURI:
      'https://raw.githubusercontent.com/solodevo/FamilySOL/main/LOGOFamilySOL.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: '42KmnheUHt3UaQFoAKnipLgBJ1Zm427heJdQcHGPtnjc',
    chainId: 101,
    decimals: 7,
    name: 'TURBO on Solana',
    symbol: '$TURBO',
    logoURI: 'https://arweave.net/FVrzsx6r7mwCakD64Axt59qAB_g-nvYfA0wvWydw5u0',
    tags: ['community'],
  },
  {
    address: 'A3HyGZqe451CBesNqieNPfJ4A9Mu332ui8ni6dobVSLB',
    chainId: 101,
    decimals: 5,
    name: 'WOOP',
    symbol: 'WOOP',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/A3HyGZqe451CBesNqieNPfJ4A9Mu332ui8ni6dobVSLB/logo.png',
    tags: ['old-registry', 'solana-fm'],
    extensions: {
      coingeckoId: 'woop',
    },
  },
  {
    address: 'CALusHembJf3tQ69BxFbLRUSpGRwKzEnLKWUPhQo5dFk',
    chainId: 101,
    decimals: 9,
    name: 'calUSD Stablecoin',
    symbol: 'calUSD',
    logoURI:
      'https://user-images.githubusercontent.com/8619106/167318344-e9ea9147-8969-4818-877c-5c75de10aecc.png',
    tags: ['old-registry'],
  },
  {
    address: 'BybpSTBoZHsmKnfxYG47GDhVPKrnEKX31CScShbrzUhX',
    chainId: 101,
    decimals: 8,
    name: 'HUSD Stablecoin (Wormhole v1)',
    symbol: 'wHUSD_v1',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BybpSTBoZHsmKnfxYG47GDhVPKrnEKX31CScShbrzUhX/logo.png',
    tags: ['old-registry'],
  },
  {
    address: 'PUhuAtMHsKavMTwZsLaDeKy2jb7ciETHJP7rhbKLJGY',
    chainId: 101,
    decimals: 9,
    name: 'USN (Allbridge from Near)',
    symbol: 'USN',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/PUhuAtMHsKavMTwZsLaDeKy2jb7ciETHJP7rhbKLJGY/logo.png',
    tags: ['old-registry'],
  },
  {
    address: '7p6zGHdmWHvCH4Lsik2MoMBXqPGhFbSPSceSBXd8KNEC',
    chainId: 101,
    decimals: 6,
    name: 'Plutonium 238',
    symbol: 'PU238',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7p6zGHdmWHvCH4Lsik2MoMBXqPGhFbSPSceSBXd8KNEC/logo.png',
    tags: ['old-registry', 'solana-fm'],
  },
  {
    address: 'CXLBjMMcwkc17GfJtBos6rQCo1ypeH6eDbB82Kby4MRm',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped UST (Wormhole v1)',
    symbol: 'wUST_v1',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CXLBjMMcwkc17GfJtBos6rQCo1ypeH6eDbB82Kby4MRm/logo.png',
    tags: ['old-registry'],
    extensions: {
      coingeckoId: 'wrapped-ust',
    },
  },
  {
    address: 'xLPFiPmWve5rUnAYcHZSZWjwgyqEdcV6dDzoBJRtNw9',
    chainId: 101,
    decimals: 9,
    name: 'xLP Finance',
    symbol: 'xLPFi',
    logoURI:
      'https://raw.githubusercontent.com/LP-Finance-Inc/token-image/main/xLPFi.png',
    tags: ['community', 'solana-fm'],
  },
  {
    address: '8L8pDf3jutdpdr4m3np68CL9ZroLActrqwxi6s9Ah5xU',
    chainId: 101,
    decimals: 9,
    name: 'Frax (Wormhole v1)',
    symbol: 'wFRAX_v1',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8L8pDf3jutdpdr4m3np68CL9ZroLActrqwxi6s9Ah5xU/logo.png',
    tags: ['old-registry'],
  },
  {
    address: 'FYpdBuyAHSbdaAyD1sKkxyLWbAP8uUW9h6uvdhK74ij1',
    chainId: 101,
    decimals: 9,
    name: 'Dai Stablecoin (Wormhole v1)',
    symbol: 'wDAI_v1',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FYpdBuyAHSbdaAyD1sKkxyLWbAP8uUW9h6uvdhK74ij1/logo.png',
    tags: ['old-registry'],
  },
  {
    address: 'DHpoYejUDqzByb6HAdaLWF7KZvwUv2vWYDY9cTENNZui',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped USDC (Allbridge from Celo)',
    symbol: 'acUSDC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
    tags: ['old-registry'],
  },
  {
    address: 'EgQ3yNtVhdHz7g1ZhjfGbxhFKMPPaFkz8QHXM5RBZBgi',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped DAI (Allbridge from Avalanche)',
    symbol: 'aaDAI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FYpdBuyAHSbdaAyD1sKkxyLWbAP8uUW9h6uvdhK74ij1/logo.png',
    tags: ['old-registry'],
  },
  {
    address: '9w6LpS7RU1DKftiwH3NgShtXbkMM1ke9iNU4g3MBXSUs',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped DAI (Allbridge from Ethereum)',
    symbol: 'aeDAI',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FYpdBuyAHSbdaAyD1sKkxyLWbAP8uUW9h6uvdhK74ij1/logo.png',
    tags: ['old-registry'],
  },
  {
    address: 'AJ1W9A9N9dEMdVyoDiam2rV44gnBm2csrPDP7xqcapgX',
    chainId: 101,
    decimals: 9,
    name: 'Binance USD (Wormhole v1)',
    symbol: 'wBUSD_v1',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AJ1W9A9N9dEMdVyoDiam2rV44gnBm2csrPDP7xqcapgX/logo.png',
    tags: ['old-registry'],
  },
  {
    address: '43m2ewFV5nDepieFjT9EmAQnc1HRtAF247RBpLGFem5F',
    chainId: 101,
    decimals: 8,
    name: 'USDK (Portal)',
    symbol: 'USDK',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDK_wh.png',
    tags: ['wormhole', 'old-registry'],
  },
  {
    address: 'EyrnrbE5ujd3HQG5PZd9MbECN9yaQrqc8pRwGtaLoyC',
    chainId: 101,
    decimals: 9,
    name: 'Wrapped ETH (Allbridge from BSC)',
    symbol: 'abETH',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FeGn77dhg1KXRRFeSwwMiykZnZPw5JXW6naf2aQgZDQf/logo.png',
    tags: ['old-registry'],
  },
  {
    address: '8bqjz8DeSuim1sEAsQatjJN4zseyxSPdhHQcuuhL8PCK',
    chainId: 101,
    decimals: 9,
    name: 'Synthetic ETH',
    symbol: 'xETH',
    logoURI: 'https://www.synthetify.io/icons/xeth.svg',
    tags: ['old-registry'],
  },
  {
    address: 'Bzq68gAVedKqQkQbsM28yQ4LYpc2VComDUD9wJBywdTi',
    chainId: 101,
    decimals: 8,
    name: 'Interest Bearing Bitcoin (Portal)',
    symbol: 'ibBTC',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/ibBTC_wh.png',
    tags: ['wormhole'],
  },
  {
    address: '7dVH61ChzgmN9BwG4PkzwRP8PbYwPJ7ZPNF2vamKT2H8',
    chainId: 101,
    decimals: 8,
    name: 'Huobi BTC (Portal)',
    symbol: 'HBTC',
    logoURI:
      'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/HBTC_wh.png',
    tags: ['wormhole', 'old-registry'],
    extensions: {
      coingeckoId: 'huobi-btc-wormhole',
    },
  },
  {
    address: 'DYDWu4hE4MN3aH897xQ3sRTs5EAjJDmQsKLNhbpUiKun',
    chainId: 101,
    decimals: 8,
    name: 'pBTC (Parrot BTC)',
    symbol: 'pBTC',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DYDWu4hE4MN3aH897xQ3sRTs5EAjJDmQsKLNhbpUiKun/logo.svg',
    tags: ['old-registry'],
  },
  {
    address: 'FACTQhZBfRzC7A76antnpAoZtiwYmUfdAN8wz7e8rxC5',
    chainId: 101,
    decimals: 9,
    name: 'Saber Wrapped renBTC (9 decimals)',
    symbol: 'srenBTC-9',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FACTQhZBfRzC7A76antnpAoZtiwYmUfdAN8wz7e8rxC5/icon.png',
    tags: ['old-registry'],
  },
  {
    address: 'BtX7AfzEJLnU8KQR1AgHrhGH5s2AHUTbfjhUQP8BhPvi',
    chainId: 101,
    decimals: 10,
    name: 'Saber Wrapped renBTC (10 decimals)',
    symbol: 'srenBTC-10',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BtX7AfzEJLnU8KQR1AgHrhGH5s2AHUTbfjhUQP8BhPvi/icon.png',
    tags: ['old-registry'],
  },
  {
    address: 'GbBWwtYTMPis4VHb8MrBbdibPhn28TSrLB53KvUmb7Gi',
    chainId: 101,
    decimals: 9,
    name: 'FTT (Wormhole v1)',
    symbol: 'wFTT_v1',
    logoURI:
      'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GbBWwtYTMPis4VHb8MrBbdibPhn28TSrLB53KvUmb7Gi/logo.png',
    tags: ['old-registry'],
  },
];
