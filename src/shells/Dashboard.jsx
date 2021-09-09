import { Center, HStack, Text } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import DashBoardShell from '../components/DASHBOARD/Layout';

const MyFarms = lazy(() => import('../components/DASHBOARD/MyFarms/MyFarms'));

const DashboardOverview = lazy(() =>
  import('../components/DASHBOARD/Overview/DashboardOverview')
);

function FallBackComponent() {
  return (
    <Center flexDir="column">
      <HStack>
        <Text>Loading page ... </Text>
        <Spinner size="md" color="secondary.100" />
      </HStack>
    </Center>
  );
}

export default function Dashboard() {
  return (
    <DashBoardShell>
      <Switch>
        <Route exact path="/dashboard">
          <Suspense fallback={<FallBackComponent />}>
            <DashboardOverview />
          </Suspense>
        </Route>
        <Route exact path="/dashboard/my-farms">
          <Suspense fallback={<FallBackComponent />}>
            <MyFarms />
          </Suspense>
        </Route>

        <Route path="*">Coming Soon</Route>
      </Switch>
    </DashBoardShell>
  );
}
