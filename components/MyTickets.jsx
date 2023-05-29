import {useEffect, useState} from 'react';

import {useWeb3React} from '@web3-react/core';

import Card from './Cards';
import {useLottery} from './LotteryContext';
import {SectionTitle} from './SectionTitle';


const Winnings = ({lottery, ticket, prize}) => {
  if (prize.isZero()) {
    return (<Card.NoWin/>);
  }
  const matches = ticket.draw.numbers
      .map(number => ticket.numbers.includes(number))
      .reduce((count, match) => count + match, 0);
  return (<Card.Prize matches={matches} prize={prize}/>);
};


const Ticket = ({lottery, ticket}) => {
  const {account} = useWeb3React();
  const [prize, setPrize] = useState(null);
  const [withdrawn, setWithdrawn] = useState(false);
    useEffect(() => {
      if (ticket.draw) {
        (async () => {
          const data = await lottery.getExtendedTicket(ticket);
          setPrize(lottery.web3.utils.toBN(data.prize));
          setWithdrawn(data.withdrawn);
        })();
      }
    }, [lottery, ticket.draw, ticket.id]);
  return (
    <Card
        date={ticket.date}
        onAction={(!prize || prize.isZero()) ? null : () => {
          lottery.withdrawPrize(ticket.id, account);
        }}
        actionTitle={withdrawn ? "Withdrawn" : "Withdraw"}
        actionEnabled={!withdrawn}
    >
      {ticket.txHash ? (
        <Card.Section title="Transaction">
          <a href={`https://${process.env.NEXT_PUBLIC_ETHERSCAN_ADDRESS}/tx/${ticket.txHash}`} target="_blank" rel="noreferrer">
            {ticket.txHash.substring(0, 22)}&hellip;
          </a>
        </Card.Section>
      ) : null}
      <Card.Numbers
          title="Your Numbers"
          numbers={ticket.numbers}
          highlightedNumbers={ticket.draw?.numbers}/>
      {ticket.draw ? (
        <Card.Numbers
            title="Drawn Numbers"
            numbers={ticket.draw.numbers}
            highlightedNumbers={ticket.numbers}/>
      ) : null}
      {(ticket.draw && prize) ? (
        <Winnings lottery={lottery} ticket={ticket} prize={prize}/>
      ) : null}
    </Card>
  );
};


const TicketList = ({lottery, account}) => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    (async () => {
      const ids = (await lottery.getTicketIds(account)).sort((id1, id2) => id2 - id1);
      setTickets(await Promise.all(ids.map(id => lottery.getTicket(id))));
    })();
  }, [account, lottery]);
  return (
    <section className="draws d-flex justify-content-start align-items-center flex-column flex-lg-row align-items-lg-start">
      {tickets.map((ticket, index) => (
        <Ticket key={index} lottery={lottery} ticket={ticket}/>
      ))}
    </section>
  );
};


export const MyTickets = () => {
  const {context, lottery} = useLottery();
  return (
    <section className="past-draws">
      <div className="container">
        <SectionTitle title="My Tickets"/>
        {context.account ? (
          <TicketList lottery={lottery} account={context.account}/>
        ) : (
          <article>
            <p className="past-draws__descr">Please connect your wallet.</p>
          </article>
        )}
      </div>
    </section>
  );
};
