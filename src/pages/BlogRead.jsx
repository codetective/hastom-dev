import { Image } from '@chakra-ui/image';
import {
  Box,
  Center,
  Circle,
  Container,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/layout';
import React from 'react';
import { AuthorCategory } from '../components/Blog/LatestArticle';
import LabCorner from '../components/Home/LabCorner';
import { GoPrimitiveDot } from 'react-icons/go';
import bloghead from '../assets/bloghead.jpg';
import { PopularPosts } from '../components/Blog/FeaturedPosts';
import news1 from '../assets/blog/news1.jpg';
import news2 from '../assets/blog/news2.jpg';
import news3 from '../assets/blog/news3.jpg';
import { IoIosShareAlt } from 'react-icons/io';
import { FaCopy } from 'react-icons/fa';
import facebook from '../assets/social_icons/facebook.png';
import whatsapp from '../assets/social_icons/whatsapp.png';
import pinterest from '../assets/social_icons/pinterest.png';
import twitter from '../assets/social_icons/twitter.png';
import linkedin from '../assets/social_icons/linkedin.png';
const popular = [
  {
    date: '11/07/2020',
    caption: 'Filling system for agricultural exports and its advantages',
  },
  {
    date: '11/07/2020',
    caption: 'Filling system for agricultural exports and its advantages',
  },
  {
    date: '11/07/2020',
    caption: 'Filling system for agricultural exports and its advantages',
  },
  {
    date: '11/07/2020',
    caption: 'Filling system for agricultural exports and its advantages',
  },
];
function BlogRead() {
  return (
    <Box bg="white">
      <Container maxW="container.xl" px={8}>
        <Stack
          direction={['column', 'column', 'row', 'row']}
          pt="40px"
          spacing="40px"
          justify="space-between"
        >
          <VStack
            spacing="15px"
            align="flex-start"
            width={['100%', '100%', '60%', '60%']}
            borderBottom="3px solid"
            borderBottomColor="gray.100"
          >
            <AuthorCategory author="Debo Ajikede" category="Economics" />
            <Heading
              className="afont"
              color="textDarker.100"
              fontWeight="500"
              py={4}
              fontSize={['24px', '24px', '28px', '28px']}
            >
              Global News crisis southern vast ban on open grazing
            </Heading>
            <Box width={{ base: '100%', sm: '100%' }}>
              <Image
                margin="auto"
                borderRadius="lg"
                src={bloghead}
                alt="some good alt text"
                objectFit={['contain', 'cover']}
                width="100%"
                height="400px"
              />
            </Box>
            <Box
              borderBottom="3px solid"
              width="100%"
              borderBottomColor="primary.100"
            >
              <Text color="primary.100">17/03/2002</Text>
            </Box>
            <Stack spacing="20px">
              <Text as="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam maiores eligendi mollitia sapiente? Quaerat esse quas
                corporis eaque reprehenderit velit odio harum, sit, assumenda
                quo debitis ab ex distinctio labore.
              </Text>
              <Text as="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam maiores eligendi mollitia sapiente? Quaerat esse quas
                corporis eaque reprehenderit velit odio harum, sit, assumenda
                quo debitis ab ex distinctio labore.
              </Text>
              <Text as="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam maiores eligendi mollitia sapiente? Quaerat esse quas
                corporis eaque reprehenderit velit odio harum, sit, assumenda
                quo debitis ab ex distinctio labore.
              </Text>
              <Center px="40px">
                <Text
                  className="qfont"
                  fontStyle="italic"
                  textAlign="center"
                  as="p"
                  fontWeight="bold"
                >
                  anyone against the ban of open grazing is against the peace
                  and progress of our country
                </Text>
              </Center>

              <Text as="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam maiores eligendi mollitia sapiente? Quaerat esse quas
                corporis eaque reprehenderit velit odio harum, sit, assumenda
                quo debitis ab ex distinctio labore.
              </Text>
              <List spacing={3} color="textDark.100">
                <ListItem>
                  <ListIcon as={GoPrimitiveDot} color="secondary.100" />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <ListItem>
                  <ListIcon as={GoPrimitiveDot} color="secondary.100" />
                  Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </ListItem>
                <ListItem>
                  <ListIcon as={GoPrimitiveDot} color="secondary.100" />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={GoPrimitiveDot} color="secondary.100" />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
              </List>
              <HStack>
                <Image
                  margin="auto"
                  borderRadius="lg"
                  src={news1}
                  alt="some good alt text"
                  objectFit={['contain', 'cover']}
                  width="33%"
                />
                <Image
                  margin="auto"
                  borderRadius="lg"
                  src={news2}
                  alt="some good alt text"
                  objectFit={['contain', 'cover']}
                  width="33%"
                />
                <Image
                  margin="auto"
                  borderRadius="lg"
                  src={news3}
                  alt="some good alt text"
                  objectFit={['contain', 'cover']}
                  width="33%"
                />
              </HStack>
              <Text as="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam maiores eligendi mollitia sapiente? Quaerat esse quas
                corporis eaque reprehenderit velit odio harum, sit, assumenda
                quo debitis ab ex distinctio labore.
              </Text>
            </Stack>

            <HStack
              align="center"
              borderTop="3px solid"
              width="100%"
              py="20px"
              borderTopColor="primary.100"
              spacing="10px"
            >
              <Text fontWeight="600" color="textDarker.100" className="afont">
                Share
              </Text>
              <Box as="span" fontSize="30px">
                <IoIosShareAlt />
              </Box>
              <Box
                as="span"
                transition="all .3s ease"
                _hover={{
                  transform: 'scale(1.3)',
                }}
                width="30px"
                height="30px"
                cursor="pointer"
              >
                <Image src={facebook} width="100%" />
              </Box>

              <Box
                as="span"
                transition="all .3s ease"
                _hover={{
                  transform: 'scale(1.3)',
                }}
                width="30px"
                height="30px"
                cursor="pointer"
              >
                <Image src={linkedin} width="100%" />
              </Box>

              <Box
                as="span"
                transition="all .3s ease"
                _hover={{
                  transform: 'scale(1.3)',
                }}
                width="30px"
                height="30px"
                cursor="pointer"
              >
                <Image src={twitter} width="100%" />
              </Box>

              <Box
                as="span"
                transition="all .3s ease"
                _hover={{
                  transform: 'scale(1.3)',
                }}
                width="30px"
                height="30px"
                cursor="pointer"
              >
                <Image src={pinterest} width="100%" />
              </Box>

              <Box
                as="span"
                transition="all .3s ease"
                _hover={{
                  transform: 'scale(1.3)',
                }}
                width="30px"
                height="30px"
                cursor="pointer"
              >
                <Image src={whatsapp} width="100%" />
              </Box>
              <Circle
                transition="all .3s ease"
                _hover={{
                  transform: 'scale(1.3)',
                }}
                size="30px"
                bg="secondary.100"
                color="white"
                cursor="pointer"
              >
                <FaCopy />
              </Circle>
            </HStack>
          </VStack>

          <PopularPosts
            popular={popular}
            width={['100%', '100%', '30%', '30%']}
          />
        </Stack>
      </Container>
      <LabCorner />
    </Box>
  );
}

export default BlogRead;
