import Web3 from 'web3';
import {provider} from 'web3-core';
import {Subscription} from 'web3-core-subscriptions';
import {BlockHeader} from 'web3-eth';
import {Contract} from 'web3-eth-contract';
import {AbiItem} from 'web3-utils';

import LotteryABI from './Lottery.json';


export interface Options {
  web3?: Web3;
  provider?: provider;
  address: string;
}


export class LotterySubscription<SubscriptionType> {
  public constructor(private readonly _subscription: Subscription<SubscriptionType>) {}

  public cancel(): void {
    this._subscription.unsubscribe();
  }
}


export interface Receipt {
  transactionHash: string;
  transactionIndex: number;
  blockHash: string;
  blockNumber: number;
}

export interface Draw {
  date: Date;
  round: number;
  jackpot: number;
  numbers: number[];
  winners: number[][];
}

export interface Ticket {
  id: number;
  date: Date;
  round: number;
  draw: Draw | null;
  player: string;
  numbers: number[];
}


export class Lottery {
  public static readonly ABI: AbiItem[] = LotteryABI.abi as AbiItem[];

  public static readonly NULL_REFERRAL_CODE =
      '0x0000000000000000000000000000000000000000000000000000000000000000';

  private readonly _address: string;
  private readonly _web3: Web3;
  private readonly _contract: Contract;

  public constructor(options: Options) {
    if (!options.address) {
      throw new Error('the `address` option is required');
    }
    if (!options.web3 && !options.provider) {
      throw new Error('either a Web3 instance or a `provider` must be specified in the options');
    }
    this._address = options.address;
    if (options.web3) {
      this._web3 = options.web3;
    } else {
      this._web3 = new Web3(options.provider!);
    }
    this._contract = new this._web3.eth.Contract(Lottery.ABI, this._address);
  }

  public get address(): string {
    return this._address;
  }

  public get web3(): Web3 {
    return this._web3;
  }

  public setProvider(p: provider): void {
    this._web3.setProvider(p);
  }

  public async isPaused(): Promise<boolean> {
    return await this._contract.methods.paused().call();
  }

  public async getJackpot(): Promise<string> {
    return await this._contract.methods.getJackpot().call();
  }

  public subscribeToJackpot(
      callback: (jackpot: string) => unknown): LotterySubscription<BlockHeader>
  {
    const fetch = async () => callback(await this.getJackpot());
    const subscription = this._web3.eth.subscribe('newBlockHeaders').on('data', () => fetch());
    fetch();
    return new LotterySubscription<BlockHeader>(subscription);
  }

  // TODO: referral code management.

  public async getBaseTicketPrice(): Promise<string> {
    return await this._contract.methods.getBaseTicketPrice().call();
  }

  public async getTicketPrice(numbers: number[]): Promise<string> {
    return await this._contract.methods.getTicketPrice(numbers).call();
  }

  public async buyTicket(numbers: number[], account?: string): Promise<Receipt> {
    const value = await this._contract.methods.getTicketPrice(numbers).call();
    if (numbers.length > 6) {
      return await this._contract.methods.buyTicket(
          Lottery.NULL_REFERRAL_CODE, numbers).send({from: account, value});
    } else {
      return await this._contract.methods.buyTicket6(
          Lottery.NULL_REFERRAL_CODE, numbers).send({from: account, value});
    }
  }

  public async getCurrentRound(): Promise<number> {
    const round = await this._contract.methods.getCurrentRound().call();
    return parseInt(round, 10);
  }

  public async getTicketIds(account: string): Promise<number[]> {
    const ids: string[] = await this._contract.methods.getTicketIds(account).call();
    return ids.map(id => parseInt(id, 10));
  }

  public async getTicket(id: number): Promise<Ticket> {
    const {player, round, timestamp, numbers}: {
      player: string,
      round: string,
      timestamp: string,
      numbers: string[],
    } = await this._contract.methods.getTicket(id).call();
    const parsedRound = parseInt(round, 10);
    const currentRound = await this.getCurrentRound();
    return {
      id,
      date: new Date(parseInt(timestamp, 10) * 1000),
      round: parsedRound,
      draw: null,
      player,
      numbers: numbers.map(number => parseInt(number, 10)),
    };
  }

  // TODO

  public async getTimeOfNextDraw(): Promise<Date> {
    const nextDrawTime = await this._contract.methods.getNextDrawTime().call();
    return new Date(parseInt(nextDrawTime, 10) * 1000);
  }

  // TODO
}
