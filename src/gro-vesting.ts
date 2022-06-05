import { BigInt } from "@graphprotocol/graph-ts"
import {
  GROVesting,
  LogExit,
  LogExtend,
  LogInstantExit,
  LogMaxLockPeriod,
  LogMigrate,
  LogNewBonusContract,
  LogNewDistributer,
  LogNewInitUnlockedPercent,
  LogNewInstantUnlockedPercent,
  LogNewMigrator,
  LogSetStatus,
  LogVest,
  LogVester,
  OwnershipTransferred
} from "../generated/GROVesting/GROVesting"
import { ExampleEntity } from "../generated/schema"

export function handleLogExit(event: LogExit): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.user = event.params.user
  entity.totalLockedAmount = event.params.totalLockedAmount

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.PERCENTAGE_DECIMAL_FACTOR(...)
  // - contract.TIME_LOCK(...)
  // - contract.accountInfos(...)
  // - contract.calcPartialExit(...)
  // - contract.distributer(...)
  // - contract.getVestingDates(...)
  // - contract.globalStartTime(...)
  // - contract.hodlerClaims(...)
  // - contract.initUnlockedPercent(...)
  // - contract.initialized(...)
  // - contract.instantUnlockPercent(...)
  // - contract.lockPeriodFactor(...)
  // - contract.maxLockPeriod(...)
  // - contract.oldVesting(...)
  // - contract.owner(...)
  // - contract.paused(...)
  // - contract.totalBalance(...)
  // - contract.totalGroove(...)
  // - contract.totalLockedAmount(...)
  // - contract.totalWithdrawn(...)
  // - contract.userMigrated(...)
  // - contract.vestedBalance(...)
  // - contract.vesters(...)
  // - contract.vestingBalance(...)
  // - contract.withdrawals(...)
}

export function handleLogExtend(event: LogExtend): void {}

export function handleLogInstantExit(event: LogInstantExit): void {}

export function handleLogMaxLockPeriod(event: LogMaxLockPeriod): void {}

export function handleLogMigrate(event: LogMigrate): void {}

export function handleLogNewBonusContract(event: LogNewBonusContract): void {}

export function handleLogNewDistributer(event: LogNewDistributer): void {}

export function handleLogNewInitUnlockedPercent(
  event: LogNewInitUnlockedPercent
): void {}

export function handleLogNewInstantUnlockedPercent(
  event: LogNewInstantUnlockedPercent
): void {}

export function handleLogNewMigrator(event: LogNewMigrator): void {}

export function handleLogSetStatus(event: LogSetStatus): void {}

export function handleLogVest(event: LogVest): void {}

export function handleLogVester(event: LogVester): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
