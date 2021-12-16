import { HStack, Text, SimpleGrid } from '@chakra-ui/layout';
import { Button, Fade } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function MappedReportsRows({ report, onOpen, setReportToview }) {
  return (
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
            {report.id}
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
            {report.title}
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
            {report.description.slice(0, 25) + ' ...'}
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
            <Link t={report.link}>
              <Text textDecoration="underline" fontSize="15px" color="blue">
                media
              </Text>
            </Link>
            <Button
              size="sm"
              justifyContent="flex-start"
              bg="primary.100"
              color="white"
              _hover={{
                bg: 'secondary.100',
              }}
              onClick={() => {
                setReportToview(report);
                onOpen();
              }}
            >
              View
            </Button>
          </HStack>
        </HStack>

      </SimpleGrid>
    </Fade>
  );
}
