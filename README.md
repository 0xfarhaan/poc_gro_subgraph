# Proof Of Concept Subgraph

## Background
This repo serves as an example of how to build a subgraph for future reference. This example is used against the GroVesting contract to index and store a users total vesting balance and to give the unlocked/locked values.

## How to Guide

The following blog was used to help created this example https://thegraph.academy/developers/defining-a-subgraph/

Loose Steps:

- Create project on subgraph studio
- Using cli initiate project
- Define your entities in the schema
- Update the manifest file to reflect the different listeners you want to have.
- Also update the contracts / start blocks in the manifest
- Run the codegen to get the types generated to use
- Then write your handlers to update the store the entities as you require.


## Future Considerations
- You can listern to multiple contracts by updating the manifest datasource in subgraph.yaml
- Make sure to specify the startBlock in the manifest for contracts to sync faster
- If you want to use current data on the DAPP it's always better to read from a contract directly if that value is provided. As you can see in this example the vested balance is stored during the event being triggered and isn't updated to reflect the latest block which can catch people out. 
