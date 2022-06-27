import React from 'react';
import Accordion from './accordion';

const questions = [
  {
    id: 1,
    question: 'What is Smol Kongz Reborn?',
    answer: 'SKR is an NFT project that inhabits Smolverse, and will live on Arbitrum. Our community is built around 2 core pillars Genesis and Factions. Genesis being an homage to the rug that united the founders; Factions being born from the ashes of the rug.',
  },
  {
    id: 2,
    question: 'When is mint?',
    answer: 'Our Genesis collection will be available to mint June 17th. Factions mint date will be announced soon...',
  },
  {
    id: 3,
    question: 'What is the Supply?',
    answer: "Our Genesis collection will have 1111 different Kongz. And our Faction collection will have a supply of 8888 different Kongz. This is just the beginning.",
  },
  {
    id: 4,
    question: 'Is there a mintlist?',
    answer: "Yes. There's A Mintlist. We're Choosing The Most Prominent Members From Our Community To Be Able To Mint The SKR Genesis Collection for free. For The OG Role, It Will Be Handpicked. Our Team Will Choose These Members As Soon As They Can, Their mission: To Spread The Word Of Smol Kongz.",
  },
  {
    id: 5,
    question: 'How can I get Kongzlist/Mintlist/whitelist?',
    answer: 'The best way to get kongzlist is to be a part of this community. We discourage the idea of “grinding” and like to promote a more organic way to get whitelisted. For more information check out the “how to wl” channel on our discord!',
  },
  {
    id: 6,
    question: 'What Is The Price Of The Nfts?',
    answer: 'Our genesis mint will be free and consist of 1111 smol kongz. The genesis will also be whitelisted to mint factions at a price of 0.0275 AETH. All remaining Factions will be sold at a price of 0.055 AETH',
  },
  {
    id: 7,
    question: 'Where can I learn more about Smol Kongz Reborn?',
    answer: 'Great question, if you have any additional questions feel free to ask in our discord server as we have thousands of helpful and kind kongz eager to help. If you have a more private request or question feel free to open a support ticket within our discord server!',
  },
  // to add additional questions
  // {
  //   id: 8,
  //   question: 'Where can I learn more about Smol Kongz Reborn?',
  //   answer: 'Great question, if you have any additional questions feel free to ask in our discord server as we have thousands of helpful and kind kongz eager to help. If you have a more private request or question feel free to open a support ticket within our discord server!',
  // },
]

const Questions = () => {
  return (
    <div className='questions-section'>
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="questions-wrapper">
          {questions.map(question => (
            <Accordion key={question.id} title={question.question} content={question.answer} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Questions;