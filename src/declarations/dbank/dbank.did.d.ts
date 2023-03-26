import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'compund' : () => Promise<undefined>,
  'debit' : (arg_0: number) => Promise<undefined>,
  'getBalance' : () => Promise<number>,
  'topUp' : (arg_0: number) => Promise<undefined>,
}
