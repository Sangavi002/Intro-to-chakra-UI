import { ChakraProvider, Heading, Button, Input, Box,Flex } from '@chakra-ui/react';


function App() {
  return (
    <ChakraProvider>
      <Box textAlign="center" p={4}>
        <Heading size="xl" color="tomato">Chakra UI Example</Heading>
        <Input placeholder="Enter text" variant="filled" mt={10}  width='40%'/>
        <br />
        <Button bg="green" color="white" mt={10}>
          Submit
        </Button>
        <Flex justifyContent="center" alignItems="center" >
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" mt={10}>
            <Box p="6">
              <Heading size="md" fontWeight="semibold" color='blue'>
                Happy b'day Inbha
              </Heading>
              <Box mt={2}  color='purple'>
                <p>May god bless you child.</p>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
