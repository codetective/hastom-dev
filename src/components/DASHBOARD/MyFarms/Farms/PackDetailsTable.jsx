import { useDisclosure } from '@chakra-ui/hooks';
import {HStack, SimpleGrid, Stack, Text} from '@chakra-ui/layout';
import React, { useState } from 'react';
import MappedReportsRows from './MappedReportRows';
import PseudoTableHead from './PseudoTableHead';
import ReportModalBox from './ReportModalBox';
import SortingHeadBar from './SortingHeadBar';
import {Button, Fade} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const reportsArray = [
  {
    id: '31/4/2021',
    activity:
      "Yar Pirate Ipsum Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.",
    report: 'report on fake activity',
    media_link: '#',
  },
  {
    id: '31/4/2021',
    activity:
      "Yar Pirate Ipsum Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.",
    report: 'report on faksssse activity',
    media_link: '#',
  },
  {
    id: '31/4/2021',
    activity:
      "Yar Pirate Ipsum Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.",
    report: 'report on fake activity',
    media_link: '#',
  },
];

export default function PackDetailsTable({data}) {
  //eslint-disable-next-line
  const [reports, setReports] = useState(reportsArray);
  const [reportToView, setReportToview] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack spacing="10px" py="3">
      <SortingHeadBar />
      <PseudoTableHead />
          return (
      {/*{data.map((report, i) => (*/}
          <Fade in>
            <SimpleGrid
                w="100%"
                columns={[1, 1, 4,4]}
                className="qfont"
                px="4"
                spacing="10px"
                py="3"
                border="1px solid"
                borderColor="gray.100"
            >
              <HStack spacing="10px" justifyContent="space-between">
                <Text
                    fontWeight="bold"
                    className="afont"
                    display={['initial', 'inital', 'none', 'none']}
                    textTransform="uppercase"
                    as="small"
                >
                  date :
                </Text>
                <Text fontSize="15px" color="textDarker.100">
                  {data.id}
                </Text>
              </HStack>
              <HStack spacing="10px" justifyContent="space-between">
                <Text
                    fontWeight="bold"
                    className="afont"
                    display={['initial', 'inital', 'none', 'none']}
                    textTransform="uppercase"
                    as="small"
                >
                  report :
                </Text>
                <Text wordBreak="break-word" fontSize="15px" color="textDarker.100">
                  {data.id}
                </Text>
              </HStack>
              <HStack justifyContent="space-between" alignItems="flex-start">
                <Text
                    fontWeight="bold"
                    className="afont"
                    display={['initial', 'inital', 'none', 'none']}
                    textTransform="uppercase"
                    as="small"
                >
                  activity:
                </Text>
                <Text
                    wordBreak="break-all"
                    fontSize="15px"
                    // maxH="60px"
                    color="textDarker.100"
                    overflowY="hidden"
                >
                  {/*{data.id.slice(0, 25) + ' ...'}*/}
                  {data.id}
                </Text>
              </HStack>
              <HStack justifyContent="space-between" alignItems="flex-start">
                <Text
                    fontWeight="bold"
                    className="afont"
                    display={['initial', 'inital', 'none', 'none']}
                    textTransform="uppercase"
                    as="small"
                >
                  Media link :
                </Text>
                <HStack w={['fit-content', '100%']} justifyContent="flex-end">
                  <a target="_blank" href={data.id}>
                    <Text textDecoration="underline" fontSize="15px" color="blue">
                      media
                    </Text>
                  </a>
                  <Button
                      size="sm"
                      justifyContent="flex-start"
                      bg="primary.100"
                      color="white"
                      _hover={{
                        bg: 'secondary.100',
                      }}
                      onClick={() => {
                        setReportToview(data);
                        onOpen();
                      }}
                  >
                    View
                  </Button>
                </HStack>
              </HStack>

            </SimpleGrid>
          </Fade>
      {/*))}*/}
          );

      {reportToView && (
        <ReportModalBox
          reportToView={reportToView}
          onClose={onClose}
          isOpen={isOpen}
        />
      )}
    </Stack>
  );
}
