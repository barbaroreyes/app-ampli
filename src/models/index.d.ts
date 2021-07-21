import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OfertPMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Order {
  readonly id: string;
  readonly date?: string;
  readonly total?: number;
  readonly username: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class OfertP {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly price?: string;
  readonly image?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<OfertP, OfertPMetaData>);
  static copyOf(source: OfertP, mutator: (draft: MutableModel<OfertP, OfertPMetaData>) => MutableModel<OfertP, OfertPMetaData> | void): OfertP;
}