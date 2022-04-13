# Blockngswap SDK

Forked from the [Pancakeswap SDK](https://github.com/pancakeswap/pancake-swap-sdk/commit/8679485f6da8210370278b6f91d1bf89302c13bd).

You can refer to the Uniswap SDK documentation [uniswap.org](https://uniswap.org/docs/v2/SDK/getting-started/).

## Running tests

To run the tests, follow these steps. You must have at least node v10 and [yarn](https://yarnpkg.com/) installed.

First clone the repository:

```sh
git clone https://github.com/BlockNG-Foundation/blockng-swap-sdk.git
```

Move into the blockng-swap-sdk working directory

```sh
cd blockng-swap-sdk/
```

Install dependencies

```sh
yarn install
```

Run tests

```sh
yarn test
```

You should see output like the following:

```sh
yarn run v1.22.4
$ tsdx test
 PASS  test/constants.test.ts
 PASS  test/pair.test.ts
 PASS  test/miscellaneous.test.ts
 PASS  test/router.test.ts
 PASS  test/route.test.ts
 PASS  test/entities.test.ts
 PASS  test/fraction.test.ts
 PASS  test/token.test.ts
 PASS  test/trade.test.ts

Test Suites: 1 skipped, 9 passed, 9 of 10 total
Tests:       3 skipped, 126 passed, 129 total
Snapshots:   0 total
Time:        6.113s
Ran all test suites.
✨  Done in 8.55s.
```
