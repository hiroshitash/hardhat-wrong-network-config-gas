# gas config value must be within a set range, or mysterious errors abound #2364

In `hardhat.config.ts`, gas is set to 5000. 

```
const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      gas: 5000
    },
    localhost: {
      gas: 5000
    },
  },
};
```

When you run `npx hardhat test`, you see the following error.

```
Error: invalid hex string (argument="value", value="-0x0edba0", code=INVALID_ARGUMENT, version=bytes/5.7.0)
```
