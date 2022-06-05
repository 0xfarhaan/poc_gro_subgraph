import {
  GROVesting,
  LogExit,
  LogExtend,
  LogVest
} from "../generated/GROVesting/GROVesting"
import { UserVest } from "../generated/schema"

export function handleLogExit(event: LogExit): void {
  let entity = UserVest.load(event.transaction.from.toHex())

    if (!entity) {
        entity = new UserVest(event.transaction.from.toHex())
    }

  let vestingContract = GROVesting.bind(event.address)
  entity.totalVestedAmount = vestingContract.totalBalance(event.params.user)
  entity.vestedAmount = vestingContract.vestedBalance(event.params.user)
  entity.vestingAmount = vestingContract.vestingBalance(event.params.user)

  entity.save()

}

export function handleLogExtend(event: LogExtend): void {
    let entity = UserVest.load(event.transaction.from.toHex())

    if (!entity) {
        entity = new UserVest(event.transaction.from.toHex())
    }

    let vestingContract = GROVesting.bind(event.address)
    entity.totalVestedAmount = vestingContract.totalBalance(event.params.user)
    entity.vestedAmount = vestingContract.vestedBalance(event.params.user)
    entity.vestingAmount = vestingContract.vestingBalance(event.params.user)

    entity.save()
}

export function handleLogVest(event: LogVest): void {
    let entity = UserVest.load(event.transaction.from.toHex())

    if (!entity) {
        entity = new UserVest(event.transaction.from.toHex())
    }

    let vestingContract = GROVesting.bind(event.address)
    entity.totalVestedAmount = vestingContract.totalBalance(event.params.user)
    entity.vestedAmount = vestingContract.vestedBalance(event.params.user)
    entity.vestingAmount = vestingContract.vestingBalance(event.params.user)

    entity.save()
}

