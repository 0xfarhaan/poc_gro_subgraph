// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class UserVest extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserVest entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UserVest must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UserVest", id.toString(), this);
    }
  }

  static load(id: string): UserVest | null {
    return changetype<UserVest | null>(store.get("UserVest", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get vestingAmount(): BigInt {
    let value = this.get("vestingAmount");
    return value!.toBigInt();
  }

  set vestingAmount(value: BigInt) {
    this.set("vestingAmount", Value.fromBigInt(value));
  }

  get vestedAmount(): BigInt {
    let value = this.get("vestedAmount");
    return value!.toBigInt();
  }

  set vestedAmount(value: BigInt) {
    this.set("vestedAmount", Value.fromBigInt(value));
  }

  get totalVestedAmount(): BigInt {
    let value = this.get("totalVestedAmount");
    return value!.toBigInt();
  }

  set totalVestedAmount(value: BigInt) {
    this.set("totalVestedAmount", Value.fromBigInt(value));
  }
}