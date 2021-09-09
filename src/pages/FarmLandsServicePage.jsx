import React from 'react';
import {
  Box,
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

import RanchDesc from '../components/MAIN/Services/RanchDesc';
import UnitPriceBar from '../components/MAIN/Services/UnitPriceBar';

import BottomCTA from '../components/MAIN/Services/BottomCTA';
import SellFarmForm from '../components/MAIN/Services/SellFarmForm';
import BuyFarmForm from '../components/MAIN/Services/BuyFarmForm';

const product = {
  title: 'Buy or Sell farmlands',
  shortTitle: 'Farmlands',

  path: '/farmlands',
  image: 'farm',

  catchPhrase: 'A helping hand',
  details: [
    "Facilitating agriculture starts for us by solving the first challenge (Safe and Secure Farmlands) for new and veteran farmers. And that's where we started our journey in this industry.",
    'Since 2013, Hastom Properties Limited has acquired and sold over 15,000 acres of dispute-free, affordable, fertile farmlands in Ogbomoso, Oyo State. And now we are set to expand beyond Oyo state to other parts of the country.',
    'Do you have farmland to sell? Or are you interested in owning farmland in any part of Nigeria? Fill the appropriate form below to help us assist you in finding problem free farmlands , our team will contact you shortly.',
  ],
  resources: [],
  legalDocs: [],
  howItWorks: [],
  detailsComplete: false,

  type: 'productWithForm',
};

function FarmLandsServicePage() {
  return (
    <Box>
      <UnitPriceBar p={product} />
      <RanchDesc p={product} />

      <Container maxW="container.xl" px={8} py={'40px'}>
        <Tabs isFitted variant="enclosed" isLazy>
          <TabList mb="1em">
            <Tab
              _focus={{
                outline: 'none',
                boxShadow: 'none',
              }}
              fontWeight="600"
              fontSize="24px"
              className="afont"
            >
              I want to sell a farm
            </Tab>
            <Tab
              fontWeight="600"
              fontSize="24px"
              className="afont"
              _focus={{
                outline: 'none',
                boxShadow: 'none',
              }}
            >
              I want to own a farm
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SellFarmForm />
            </TabPanel>
            <TabPanel>
              <BuyFarmForm />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <BottomCTA p={product} />
    </Box>
  );
}

export default FarmLandsServicePage;
