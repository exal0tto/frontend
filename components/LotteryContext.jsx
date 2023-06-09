import React, {useContext, useEffect, useState} from 'react';

import {useWeb3React} from '@web3-react/core';

import {Lottery} from './Lottery';


export const LotteryContext = React.createContext(null);

export const useLottery = () => useContext(LotteryContext);

export const LotteryContextProvider = ({children}) => {
  const context = useWeb3React();
  const [lottery, setLottery] = useState(null);
  useEffect(() => {
    if (context.active && context.library) {
      setLottery(new Lottery({
        web3: context.library,
        address: process.env.NEXT_PUBLIC_LOTTERY_ADDRESS,
        defaultSigner: context.account,
      }));
    } else {
      setLottery(null);
    }
  }, [context, context.active, context.library, context.account]);
  return (
    <LotteryContext.Provider value={{context, lottery}}>
      {children}
    </LotteryContext.Provider>
  );
};
