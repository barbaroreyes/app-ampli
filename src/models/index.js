// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Order, OfertP } = initSchema(schema);

export {
  Order,
  OfertP
};