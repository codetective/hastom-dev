import React from 'react';
import { Box } from '@chakra-ui/react';

import RanchDesc from '../components/MAIN/Services/RanchDesc';
import UnitPriceBar from '../components/MAIN/Services/UnitPriceBar';
import Resources from '../components/MAIN/Services/Resources';
import BottomCTA from '../components/MAIN/Services/BottomCTA';
import tablet from '../assets/howItWorks/tablet.png';
import atm from '../assets/howItWorks/atm.png';
import debitCard from '../assets/howItWorks/debit-card.png';
import stats from '../assets/howItWorks/stats.png';

import HowItWorks from '../components/MAIN/Services/HowItWorks';
const product = {
  image: 'cashew',
  title: 'Cashew revival plan',
  shortTitle: 'Cashew farm',

  catchPhrase: 'Own a cashew farm today',
  details: [
    'With 19 Cashew producing states in Nigeria, Ogbomoso Cashew ranks 1st in terms of quality thereby commanding the best price in the country. Owning a Cashew farm in Ogbomoso gives you a higher preference of partnership and trade over other producing states by foreigners who travel from places like India, Germany, Vietnam etc to source for raw ogbomoso cashew nuts during the cashew season.',
    'Our Cashew Revival Plan affords you the opportunity to own at least 1 acre of Cashew farm in our Cashew Revival Park in Ogbomoso without having to go through the stress of getting your hands dirty. We will rightly set up and manage your farm for you and at harvest, use our experience in cashew trade to profitably sell your harvest on your behalf.',
    'At a cost of N950,000, you become a farmland owner and also earn from your harvest sales for up to 40 years; this means while your land appreciates overtime, you earn from the harvest sales of your cashew farm from year 4 up till year 40 when production declines.',
    'See Resources section for detailed Brochure.',
  ],
  resources: ['Brochure', 'MoU', 'FAQ'],
  legalDocs: ['Receipt', 'Certificate of Investment', 'Deed of Assignment'],
  howItWorks: [
    {
      icon: tablet,
      text: 'Select your unit options',
    },
    {
      icon: debitCard,
      text: 'Make payment',
    },
    {
      icon: stats,
      text: 'Watch your farm grow',
    },
    {
      icon: atm,
      text: 'Receive your returns at harvests',
    },
  ],
  detailsComplete: true,

  type: 'productWithoutForm',
};

function CashewServicePage() {
  return (
    <Box>
      <UnitPriceBar p={product} />
      <RanchDesc p={product} />
      <Resources p={product} />
      <HowItWorks p={product} />
      <BottomCTA p={product} />
    </Box>
  );
}

export default CashewServicePage;
