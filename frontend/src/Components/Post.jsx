import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { BiLike, BiChat, BiShare } from 'react-icons/bi';
import React from "react";

function Post({tweet}) {
  console.log(tweet);
  return (
    <div>
      <Card maxW='xl'>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
        <Box>
          <Heading size='sm'>{tweet.user}</Heading>
          <Text>Creator, Chakra UI</Text>
        </Box>
      </Flex>
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>
      {tweet.description}
    </Text>
  </CardBody>
  <Image
    objectFit='cover'
    src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    alt='Chakra UI'
  />

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
      Like
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
      Comment
    </Button>
  </CardFooter>
</Card>
    </div>
  );
}

export default Post;
