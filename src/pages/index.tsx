import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { Carousel } from "../components/Carousel";


export default function Home() {
  return (
    <>
      <Box w="100%">
        <Flex 
          w="100%" 
          maxWidth={1160} 
          align="center" 
          justify="center" 
          py="7" 
          mx="auto"
        >
          <Image src="/assets/logo.svg" alt="WorldTrip" />
        </Flex>
      </Box>
      <Box 
        h={335} 
        w="100%" 
        backgroundImage="url('/assets/background.jpg')" 
        backgroundRepeat="no-repeat" 
        backgroundSize="cover" 
      >
        <Flex 
          h="100%" 
          w="100%" 
          maxWidth={1160}
          mx="auto" 
          align="center" 
          position="relative"
        >
          <Stack spacing="5" w="100%" maxWidth={524}>
            <Heading fontSize="4xl" fontWeight="medium" color="gray.50">
              5 Continentes, <br />
              infinitas possibilidades.
            </Heading>
            <Text fontSize="xl" color="gray.100">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
            </Text>
          </Stack>
          <Image 
            src="/assets/airplane.png"
            alt="airplane"
            position="absolute"
            bottom={-33}
            right="0"
          />
        </Flex>
      </Box>
      <Flex 
        w="100%" 
        maxWidth={1160}
        mx="auto"
        mt="20"
        align="center"
        wrap="wrap"
      >
        <Card name="vida noturna" image="/assets/cocktail.svg" mr={131} />
        <Card name="praia" image="/assets/surf.svg" mr={151} />
        <Card name="moderno" image="/assets/building.svg" mr={151} />
        <Card name="clássico" image="/assets/museum.svg" mr={171} />
        <Card name="e mais..." image="/assets/earth.svg" />
      </Flex>
      <Box w={90} h="2px" bg="gray.900" mx="auto" mt="20" />
      <Text 
        textAlign="center" 
        fontSize="4xl" 
        color="gray.900" 
        fontWeight="medium" 
        mx="auto"
        my="14"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>
      <Box w="100%" maxWidth={1240} px="4"  mx="auto" mb="10" >
        <Carousel />
      </Box>
    </>
  )
}
