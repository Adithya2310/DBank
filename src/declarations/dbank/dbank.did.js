export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'compund' : IDL.Func([], [], ['oneway']),
    'debit' : IDL.Func([IDL.Float64], [], ['oneway']),
    'getBalance' : IDL.Func([], [IDL.Float64], ['query']),
    'topUp' : IDL.Func([IDL.Float64], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
