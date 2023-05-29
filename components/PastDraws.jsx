import {useEffect, useState} from 'react';
import Link from 'next/link';

import {useWeb3React} from '@web3-react/core';

import Web3 from 'web3';

import Card from './Cards';
import {LotteryContext} from './LotteryContext';
import {Modal, ModalContext} from './Modals';
import {SectionTitle} from './SectionTitle';
import Table from './Tables';


export const DrawModal = () => (
  <Modal name="draw" className="modal-dialog-lg" resolveOnHide>{({params: [draw], setTitle}) => {
    setTitle(`${draw.date.toDateString()} Drawing`);
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Cell>
              <span className="main-table__text">Matches</span>
            </Table.Cell>
            <Table.Cell>
              <span className="main-table__text">Prize</span>
            </Table.Cell>
            <Table.Cell>
              <span className="main-table__text">Number of winners</span>
            </Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <span className="main-table__text">6</span>
            </Table.Cell>
            <Table.Cell>
              <span className="main-table__text">
                {Math.floor(Web3.utils.fromWei(draw.prizes[4]) * 100) / 100}
              </span>
            </Table.Cell>
            <Table.Cell>
              <span className="main-table__text main-table__text--blue">
                {draw.winners[4]}
              </span>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <span className="main-table__text">5</span>
            </Table.Cell>
            <Table.Cell>
              <span className="main-table__text">
                {Math.floor(Web3.utils.fromWei(draw.prizes[3]) * 100) / 100}
              </span>
            </Table.Cell>
            <Table.Cell>
              <span className="main-table__text main-table__text--blue">
                {draw.winners[3]}
              </span>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <span className="main-table__text">4</span>
            </Table.Cell>
            <Table.Cell>
              <span className="main-table__text">
                {Math.floor(Web3.utils.fromWei(draw.prizes[2]) * 100) / 100}
              </span>
            </Table.Cell>
            <Table.Cell>
              <span className="main-table__text main-table__text--blue">
                {draw.winners[2]}
              </span>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <span className="main-table__text">3</span>
            </Table.Cell>
            <Table.Cell>
              <span className="main-table__text">
                {Math.floor(Web3.utils.fromWei(draw.prizes[1]) * 100) / 100}
              </span>
            </Table.Cell>
            <Table.Cell>
              <span className="main-table__text main-table__text--blue">
                {draw.winners[1]}
              </span>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <span className="main-table__text">2</span>
            </Table.Cell>
            <Table.Cell>
              <span className="main-table__text">
                {Math.floor(Web3.utils.fromWei(draw.prizes[0]) * 100) / 100}
              </span>
            </Table.Cell>
            <Table.Cell>
              <span className="main-table__text main-table__text--blue">
                {draw.winners[0]}
              </span>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }}</Modal>
);


const DrawCard = ({draw}) => (
  <ModalContext.Consumer>{({showModal}) => (
    <Card date={draw.date} onAction={() => {
      showModal('draw', draw);
    }}>
      <Card.Jackpot jackpot={draw.prizes[4]}/>
      <Card.Numbers title="Drawn Numbers" numbers={draw.numbers}/>
      {(draw.drawTxHash && draw.closureTxHash) ? (
        <div className="prize">
          <div className="prize__title"></div>
          <div className="prize__transaction">
            VRF request: <a href={`https://${process.env.NEXT_PUBLIC_ETHERSCAN_ADDRESS}/tx/${draw.drawTxHash}`} target="_blank" rel="noreferrer">{draw.drawTxHash}</a>
          </div>
          <div className="prize__transaction">
            VRF fulfillment: <a href={`https://${process.env.NEXT_PUBLIC_ETHERSCAN_ADDRESS}/tx/${draw.closureTxHash}`} target="_blank" rel="noreferrer">{draw.closureTxHash}</a>
          </div>
        </div>
      ) : null}
    </Card>
  )}</ModalContext.Consumer>
);


const DrawList = ({lottery}) => {
  const [draws, setDraws] = useState([]);
  useEffect(() => {
    (async () => {
      let data = await Promise.all([-1, -2, -3].map(async round => {
        try {
          return await lottery.getDrawData(round);
        } catch (e) {
          return null;
        }
      }));
      data = data.filter(draw => !!draw);
      setDraws(data);
      setDraws(await Promise.all(data.map(draw => lottery.getExtendedDrawData(draw))));
    })();
  }, [lottery]);
  return (
    <section className="draws d-flex justify-content-start align-items-center flex-column flex-lg-row align-items-lg-start">
      {draws.map((draw, index) => (
        <DrawCard key={index} draw={draw}/>
      ))}
    </section>
  );
};


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
          week (<Link href="/howtoplay">read more</Link>).
        </p>
        <p className="past-draws__descr">
          ExaLotto is the safest and most rewarding lottery ever created, and it will last forever.
        </p>
      </article>
      <SectionTitle title="Past Draws"/>
      <LotteryContext.Consumer>{({lottery}) => lottery ? (
        <DrawList lottery={lottery}/>
      ) : null}</LotteryContext.Consumer>
    </div>
  </section>
);
