// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class LoanPoolAave extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("LoanPoolAave", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "LoanPoolAave",
      [address.toHex()],
      context
    );
  }
}

export class LoanPoolMstable extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("LoanPoolMstable", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "LoanPoolMstable",
      [address.toHex()],
      context
    );
  }
}