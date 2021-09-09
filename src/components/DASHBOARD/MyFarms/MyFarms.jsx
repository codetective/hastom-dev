import {
  Stack,
  HStack,
  SimpleGrid,
  Box,
  Image,
  Container,
  Badge,
  Button,
  Text,
} from '@chakra-ui/react';
import { FaIndustry } from 'react-icons/fa';
import { AiFillAppstore } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import nuts from '../../../assets/header/nuts.jpg';
import cows from '../../../assets/header/cows.jpg';
import useQuery from '../../../helpers/useQuery';
import CashewFarmsListing from './Farms/CashewFarmsListing';
import PackDetailsPage from './Farms/PackDetailsPage';

function PageTitle() {
  return (
    <Stack spacing="20px">
      <Stack direction={['row', 'row', 'column']} spacing="20px">
        <Box as="span" color="gray.400" fontSize="35px">
          <FaIndustry />
        </Box>
        <Text
          color="gray.400"
          as="h1"
          fontSize={['24px', '28px']}
          fontWeight="bold"
          className="afont"
        >
          My Farms
        </Text>
      </Stack>
      <Text as="small">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor
        vestibulum porta. Sed sed interdum erat. Curabitur sem dui, auctor eget
        tincidunt sed, porta vel tortor.
      </Text>
    </Stack>
  );
}

function FarmDetailBox({ name, capital, units, pack, id, image }) {
  return (
    <Stack spacing="20px" shadow="lg" bg="white" justifyContent="space-between">
      <Box height="150px" pos="relative">
        <Image src={image} w="100%" h="100%" objectFit="cover" />
        {units === 0 && (
          <Badge
            ml={5}
            position="relative"
            top="-15px"
            rounded="full"
            color="white"
            bg="secondary.100"
            size="sm"
            py="1"
            pl="15px"
            pr="30px"
            textAlign="left"
          >
            Coming Soon
          </Badge>
        )}
      </Box>
      <Stack spacing="10px" px="5">
        <Text
          color="textDarker.100"
          as="h1"
          fontSize={['24px', '23px']}
          fontWeight="bold"
          className="afont"
          textTransform="capitalize"
        >
          {name}
        </Text>

        {units !== 0 && (
          <>
            {' '}
            <Text as="small" color="gray.500" textTransform="uppercase">
              capital
            </Text>
            <Text
              color="textDarker.100"
              as="h1"
              fontSize={['24px', '23px']}
              fontWeight="bold"
              className="qfont"
              textTransform="capitalize"
            >
              {'$' + capital}
            </Text>
            <HStack justifyContent="space-between" className="qfont">
              <HStack spacing="10px">
                <Box as="span" color="green" fontSize="20px">
                  <AiFillAppstore />
                </Box>
                <Text color="textDarkest.100" fontWeight="bold" as="small">
                  Total units : {units}
                </Text>
              </HStack>
              <Text
                textTransform="uppercase"
                color="secondary.100"
                fontWeight="bold"
                as="small"
              >
                {pack} packs
              </Text>
            </HStack>
          </>
        )}
        {units === 0 && (
          <Text as="small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            auctor vestibulum porta. Sed sed interdum erat. Curabitur sem dui,
            auctor eget tincidunt sed, porta vel tortor. Sed sed interdum erat.
            Curabitur sem dui, auctor eget tincidunt sed, porta vel tortor.
          </Text>
        )}
      </Stack>
      <Box>
        <Link to={'/dashboard/my-farms?product=' + id}>
          <Button
            w="full"
            rounded="0"
            className="afont"
            bg="primary.100"
            _hover={{
              bg: 'secondary.100',
            }}
            color="white"
          >
            {units === 0 ? 'Book a Spot' : 'View farms'}
          </Button>
        </Link>
      </Box>
    </Stack>
  );
}

export default function MyPage() {
  const product = useQuery().get('product');
  const pack = useQuery().get('pack');

  return (
    <>
      {product === 'cashew-farms' ? (
        <CashewFarmsListing />
      ) : product === 'ranch-pack' ? (
        'ranch'
      ) : pack ? (
        <PackDetailsPage />
      ) : (
        <Box>
          <Stack
            py="40px"
            bg="gray.100"
            h={['fit-content', 'fit-content', '40vh', '40vh']}
          >
            <Container maxW="container.xl" px={8}>
              <SimpleGrid columns={[1, 1, 2, 3]} spacing="30px" mb="50">
                <PageTitle />
                <FarmDetailBox
                  name={'Cashew Farms'}
                  units={24}
                  capital="5900"
                  pack={3}
                  id={'cashew-farms'}
                  image={nuts}
                />
                <FarmDetailBox
                  name={'Ranching pack'}
                  units={0}
                  capital={0}
                  pack={0}
                  id={'ranch-pack'}
                  image={cows}
                />
              </SimpleGrid>
            </Container>
          </Stack>
        </Box>
      )}
    </>
  );
}
