import { useMemo } from 'react';
import { TokenList } from '@uniswap/token-lists';
import useIPFSFile from '../ipfs/useIPFSFile';

// TODO: Update to the DXgov curated token list once its ready
const SWAPR_TOKEN_LIST = 'QmSbyVo6Kz5BuqyAHYcN7UkeCk5cALFp6QmPUN6NtPpDWL';

export const useTokenList = (chainId?: number) => {
  const tokenList = useIPFSFile<TokenList>(SWAPR_TOKEN_LIST);

  const tokens = useMemo(() => {
    let list = tokenList.data?.tokens || [];

    if (chainId) {
      list = list.filter(token => token.chainId === chainId);
    }

    return list;
  }, [chainId, tokenList]);

  return { tokens };
};
