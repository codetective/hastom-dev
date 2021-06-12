import React from 'react';
import {
  Box,
  Container,
  Flex,
  Text,
  Heading,
  Image,
  Button,
  Stack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';
import cowstrip from '../../assets/home/faqcows.jpg';
import Logo from '../../components/Nav/Logo';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

function FAQ() {
  return (
    <Box id="faq" position="relative" width="100vw">
      <Box height="35vh" position="relative">
        <Image src={cowstrip} width="100%" height="100%" objectFit="cover" />
        <Box position="absolute" bottom="-70px" width="100%">
          <Flex
            height="180px"
            width="180px"
            bg="white"
            shadow="md"
            alignItems="center"
            justifyContent="center"
            margin="auto"
            rounded="full"
          >
            <Logo />
          </Flex>
        </Box>
      </Box>
      <Box bg="white" textAlign="center" pt={'6rem'} pb={'6rem'}>
        <Text
          as="p"
          color="#3eb900"
          font-weight="600"
          letter-spacing="0"
          white-space="nowrap"
          font-size="14px"
          p={0}
        >
          Dive into the Agro Space
        </Text>

        <Heading
          className="qfont"
          as="h2"
          fontSize={['24px', '28px']}
          fontWeight=" 500"
          letterSpacing="0"
          lineHeight="1.4"
          mb="5"
          p={0}
        >
          <Text as="span">
            Join the Farming Trend with <br />
          </Text>
          <Text as="span">Hastom</Text>
        </Heading>
        <Button
          size="sm"
          rounded="34px"
          color="white"
          bg="primary.100"
          px={'40px'}
          _hover={{
            bg: ['secondary.100'],
          }}
        >
          Invest Now
        </Button>
      </Box>

      <Container maxW="container.xl" px={8}>
        <Stack
          direction={['column', 'column', 'row', 'row']}
          py={14}
          spacing="10"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Stack
            w={['100%', '100%', '30%', '30%']}
            alignItems="flex-start"
            flexDir="column"
            justifyContent="center"
            pr="1"
          >
            <Text
              as="p"
              color="#3eb900"
              font-weight="600"
              letter-spacing="0"
              white-space="nowrap"
              font-size="14px"
              p={0}
            >
              What's Your Question?
            </Text>

            <Heading
              className="qfont"
              as="h2"
              fontSize={['24px', '28px']}
              fontWeight=" 500"
              letterSpacing="0"
              lineHeight="1.4"
              mb="5"
              p={0}
            >
              <span class="span">FAQ? </span>
            </Heading>

            <Text as="p" pt="2" mb={10} position="relative" fontSize="14px">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diamnonumy eirmod tempor invidunt ut labore et dolore diam nonumy
              eirmod tempor invidunt ut labore et dolore eirmod tempor invidunt
              ut labore et dolore eirmod tempor invidunt ut labore et dolore
            </Text>
            <Link
              style={{
                color: '#f8a22f',
              }}
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
              fontWeight="bold"
              className="qfont"
              to="/contact"
            >
              Email Us
            </Link>
          </Stack>

          <Box px={8} py={10} bg="white" width={['100%', '100%', '60%', '60%']}>
            <Heading
              as="h5"
              fontSize="20px"
              className="qfont"
              color="textDarkest.100"
              pb="10"
            >
              Frequently Asked Questions
            </Heading>
            <Accordion allowToggle>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        _expanded={{ color: 'secondary.100' }}
                        bg="white"
                        _hover={{
                          bg: 'white',
                          color: 'secondary.100',
                        }}
                        _focus={{
                          boxShadow: 'none',
                        }}
                        color="textDark.100"
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          py="5"
                          fontWeight="700"
                          className="qfont"
                          color="textDarker.100"
                        >
                          How do i get my investments documents and sign?
                        </Box>
                        {isExpanded ? (
                          <Box a="span" color="secondary.100" fontSize="30px">
                            <FaAngleUp />
                          </Box>
                        ) : (
                          <Box a="span" fontSize="30px">
                            <FaAngleDown />
                          </Box>
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        _expanded={{ color: 'secondary.100' }}
                        bg="white"
                        _hover={{
                          bg: 'white',
                          color: 'secondary.100',
                        }}
                        _focus={{
                          boxShadow: 'none',
                        }}
                        color="textDark.100"
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          py="5"
                          fontWeight="700"
                          className="qfont"
                          color="textDarker.100"
                        >
                          Can i add more investment packs to my existing
                          package?
                        </Box>
                        {isExpanded ? (
                          <Box a="span" color="secondary.100" fontSize="30px">
                            <FaAngleUp />
                          </Box>
                        ) : (
                          <Box a="span" fontSize="30px">
                            <FaAngleDown />
                          </Box>
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        _expanded={{ color: 'secondary.100' }}
                        bg="white"
                        _hover={{
                          bg: 'white',
                          color: 'secondary.100',
                        }}
                        _focus={{
                          boxShadow: 'none',
                        }}
                        color="textDark.100"
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          py="5"
                          fontWeight="700"
                          className="qfont"
                          color="textDarker.100"
                        >
                          How do i get my profit after maturity and what is the
                          policy?
                        </Box>
                        {isExpanded ? (
                          <Box a="span" color="secondary.100" fontSize="30px">
                            <FaAngleUp />
                          </Box>
                        ) : (
                          <Box a="span" fontSize="30px">
                            <FaAngleDown />
                          </Box>
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        _expanded={{ color: 'secondary.100' }}
                        bg="white"
                        _hover={{
                          bg: 'white',
                          color: 'secondary.100',
                        }}
                        _focus={{
                          boxShadow: 'none',
                        }}
                        color="textDark.100"
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          py="5"
                          fontWeight="700"
                          className="qfont"
                          color="textDarker.100"
                        >
                          How secures are my farms? Can i come for inspection?
                        </Box>
                        {isExpanded ? (
                          <Box a="span" color="secondary.100" fontSize="30px">
                            <FaAngleUp />
                          </Box>
                        ) : (
                          <Box a="span" fontSize="30px">
                            <FaAngleDown />
                          </Box>
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default FAQ;
