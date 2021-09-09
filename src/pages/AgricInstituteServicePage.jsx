import React from 'react';
import { Box } from '@chakra-ui/react';

import RanchDesc from '../components/MAIN/Services/RanchDesc';
import UnitPriceBar from '../components/MAIN/Services/UnitPriceBar';
import Resources from '../components/MAIN/Services/Resources';

import NewsLetterSignupRequest from '../components/MAIN/Services/NewsLetterSignupRequest';

const product = {
  title: 'Agricultural institute',
  shortTitle: 'Agricultural institute',

  image: 'agricultural equipments,tractor',
  path: '/agricultural-institute',

  catchPhrase: 'Sharing knowledge',
  details: [
    "Our vision to be the most vital facilitator of the industry led us to conclude that inadequate knowledge and poor practice is the bane of low productivity and profitability in Africa's agriculture industry.",
    'Democratising Knowledge that leads to improved agricultural practice across Africa is the reason for conceiving this Institute. ',
    'Africa has the world best arable land and with adequate knowledge we will feed the world. Our institute will cover diverse areas of agriculture, value addition and trade.',
  ],
  resources: [],
  legalDocs: [],
  howItWorks: [],
  detailsComplete: false,

  type: 'productWithoutForm',
};

function AgricInstituteServicePage() {
  return (
    <Box>
      <UnitPriceBar p={product} />
      <RanchDesc p={product} />
      <Resources p={product} />
      <NewsLetterSignupRequest />
      {/* <BottomCTA p={product} /> */}
    </Box>
  );
}

export default AgricInstituteServicePage;
