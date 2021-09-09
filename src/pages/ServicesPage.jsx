import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

import RanchDesc from '../components/MAIN/Services/RanchDesc';
import UnitPriceBar from '../components/MAIN/Services/UnitPriceBar';
import Resources from '../components/MAIN/Services/Resources';
import BottomCTA from '../components/MAIN/Services/BottomCTA';
import { Route, Switch, useLocation } from 'react-router-dom';

import products from '../helpers/products';
import HowItWorks from '../components/MAIN/Services/HowItWorks';

function ServicesPage() {
  const { pathname } = useLocation();
  const [, setTitle] = useState('Services');

  useEffect(() => {
    if (pathname === '/services') {
      document.title = 'Services';
    }
    setTitle(document.title);
  }, [pathname]);
  return (
    <>
      <Switch>
        <Box id="farms" pt={['0px', '0px', '40px', '40px']}>
          {products.map((p, i) => {
            return (
              <Route key={i} path={'/services' + p.path}>
                <UnitPriceBar p={p} />
                <RanchDesc p={p} />
                <Resources p={p} />
                {p.howItWorks.length !== 0 && <HowItWorks p={p} />}
                <BottomCTA p={p} />
              </Route>
            );
          })}
        </Box>
      </Switch>
    </>
  );
}

export default ServicesPage;
