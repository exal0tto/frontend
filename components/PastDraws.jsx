import Link from 'next/link';

import {LotteryContext} from './LotteryContext';
import {SectionTitle} from './SectionTitle';


const DrawList = ({lottery}) => (
  <section className="draws d-flex justify-content-start align-items-center flex-column flex-lg-row align-items-lg-start"></section>
);


export const PastDraws = ({lottery}) => (
  <section className="past-draws">
    <div className="container">
      <article className="mb-5">
        <p className="past-draws__descr">
          ExaLotto is a global, decentralized, trustless, autonomous, and provably fair lottery
          game. It&apos;s based on the Ethereum blockchain.
        </p>
        <p className="past-draws__descr">
          To win the game a player must predict at least 2 of 6 numbers that will be drawn every
          week (<Link href="/howtoplay.html">read more</Link>).
        </p>
        <p className="past-draws__descr">
          ExaLotto is the safest and most rewarding lottery ever created, and it will last forever.
        </p>
      </article>
      <SectionTitle title="Past Draws"/>
      <LotteryContext.Consumer>{lottery => lottery ? (
        <DrawList lottery={lottery}/>
      ) : null}</LotteryContext.Consumer>
    </div>
  </section>
);
