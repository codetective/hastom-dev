import React from 'react';
import { Box, Text, Stack, Heading, Image } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import placeholder from '../../assets/placeholder.png';

function ProductCard({ p }) {
  return (
    <Box
      as="div"
      shadow="lg"
      borderTopLeftRadius="10px"
      borderTopRightRadius="10px"
      width={['100%', '100%', '100%', '100%']}
      bg="white"
      mx="auto"
      rounded="20px"
      position="relative"
    >
      <Box
        width="100%"
        minHeight="180px"
        height="180px"
        maxHeight="180px"
        zIndex="2"
        rounded="0"
      >
        <Link
          to={'/services' + p.path}
          _hover={{ textDecoration: 'none' }}
          style={{
            textDecoration: 'none',
          }}
        >
          {p.image ? (
            <Image
              roundedTop="20px"
              borderTopRightRadius="10px"
              borderTopLeftRadius="10px"
              src={'https://source.unsplash.com/800x800/?' + p.image}
              margin="auto"
              alt={p.catchPhrase}
              objectFit="cover"
              width="100%"
              height="100%"
            />
          ) : (
            <Image
              roundedTop="20px"
              borderTopRightRadius="10px"
              borderTopLeftRadius="10px"
              margin="auto"
              src={placeholder}
              alt={p.catchPhrase}
              objectFit="cover"
              width="100%"
              height="100%"
            />
          )}
        </Link>
      </Box>

      <Stack>
        <Box p={4}>
          <Text
            as="small"
            color="#3eb900"
            fontWeight="600"
            letterSpacing="0"
            whiteSpace="nowrap"
            fontSize="15px"
            textTransform="capitalize"
          >
            {p.catchPhrase}
          </Text>
          <Heading
            pt="2"
            className="qfont line-clamp"
            fontSize={['18px', '20px', '20px', '20px']}
          >
            <Link
              className="afont"
              to={'/services' + p.path}
              _hover={{ textDecoration: 'none' }}
              style={{
                textDecoration: 'none',
              }}
            >
              {p.title}
            </Link>
          </Heading>
          <Text
            color="textDark.100"
            py={'15px'}
            height="100px"
            className="line-clamp"
          >
            {p.details[0]}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}

export default ProductCard;
