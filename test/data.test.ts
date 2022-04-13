import { ChainId, WETH, Token, Fetcher } from '../src'

// TODO: replace the provider in these tests
describe.skip('data', () => {
  it('Token', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.MAINNET, '0x0b00366fBF7037E9d75E4A569ab27dAB84759302') // LAW
    expect(token.decimals).toEqual(18)
  })

  it('Token:CACHE', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.MAINNET, '0x265bD28d79400D55a1665707Fa14A72978FA6043') // CATS
    expect(token.decimals).toEqual(2)
  })

  it('Pair', async () => {
    const token = new Token(ChainId.MAINNET, '0x0b00366fBF7037E9d75E4A569ab27dAB84759302', 18) // LAW
    const pair = await Fetcher.fetchPairData(WETH[ChainId.MAINNET], token)
    expect(pair.liquidityToken.address).toEqual('0x54AA3B2250A0e1f9852b4a489Fe1C20e7C71fd88')
  })
})
