import React from 'react';
import { Box } from '@chakra-ui/react';

import RanchDesc from '../components/Services/RanchDesc';
import UnitPriceBar from '../components/Services/UnitPriceBar';
import Resources from '../components/Services/Resources';

import HowItWorks from '../components/Services/HowItWorks';
import NewsLetterSignupRequest from '../components/Services/NewsLetterSignupRequest';

const product = {
  title: 'Beef processing',
  shortTitle: 'Beef processing',

  image: 'beef,cow',
  path: '/beef-processing',

  catchPhrase: 'Hygienic meat preparation',
  details: [
    'The rising sophisticated and health conscious population is already changing our traditional ways of eating and preparing food. ',
    'We believe our current beef processing and marketing system is outdated and unsafe. We are putting resources together to address this challenge by building a modern beef processing and distribution network at a competitive cost for consumers. ',
  ],
  resources: [],
  legalDocs: [],
  howItWorks: [],
  detailsComplete: false,

  type: 'productWithoutForm',
};

function BeefProcessingServicePage() {
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

export default BeefProcessingServicePage;
