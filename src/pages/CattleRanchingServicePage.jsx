import React from 'react';
import { Box } from '@chakra-ui/react';

import RanchDesc from '../components/MAIN/Services/RanchDesc';
import UnitPriceBar from '../components/MAIN/Services/UnitPriceBar';
import Resources from '../components/MAIN/Services/Resources';
import NewsLetterSignupRequest from '../components/MAIN/Services/NewsLetterSignupRequest';
const product = {
  title: 'Cattle ranching investment plan',
  shortTitle: 'Cattle ranching',
  image: 'cattle ranch',
  path: '/cattle-ranch',

  catchPhrase: 'Own a cattle fattening or dairy ranch',
  riderQuote:
    'Cattle ranches are a good investment now because prices are rising both for cattle and the property on which to raise cattle, the economy is growing and projected to continue growing, and the market for cattle is on track with this growth.',
  details: [
    'Yes! You read right, we want to make you a profitable proud rancher. ',
    "It is clear that cattle rearing practice is currently being scrutinised and reform is inevitable. With these scrutinies and reforms comes one of the biggest opportunities ever in Nigeria's agricultural landscape. ",
    'We have packaged an incredible turn key cattle ranch model for both dairy and fattening. Agriculture has never been this exciting and profitable. ',
  ],
  resources: [],
  legalDocs: [],
  howItWorks: [],
  detailsComplete: false,

  type: 'productWithoutForm',
};
function CattleRanchServicePage() {
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

export default CattleRanchServicePage;
