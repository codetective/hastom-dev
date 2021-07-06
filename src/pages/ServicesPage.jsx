import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Container } from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

import RanchDesc from '../components/Services/RanchDesc';
import UnitPriceBar from '../components/Services/UnitPriceBar';
import Resources from '../components/Services/Resources';
import BottomCTA from '../components/Services/BottomCTA';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import ProductCard from '../components/Services/ProductCard';
import { FaChevronRight } from 'react-icons/fa';
import products from '../helpers/products';
import HowItWorks from '../components/Services/HowItWorks';

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
          <Container
            maxW="container.xl"
            px={8}
            display={pathname === '/services' ? 'none' : 'flex'}
          >
            <Breadcrumb
              spacing="8px"
              py="3"
              separator={<FaChevronRight color="gray.500" />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/services">
                  Services
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>{document.title}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
          <Route exact path={'/services'}>
            <Container maxW="container.xl" pb="80px">
              <SimpleGrid spacing="30px" columns={[1, 1, 2, 3]}>
                {products.map((p, i) => {
                  return <ProductCard key={i} p={p} />;
                })}
              </SimpleGrid>
            </Container>
          </Route>
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
