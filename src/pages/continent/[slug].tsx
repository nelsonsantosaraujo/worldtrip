import { Box, Flex, Heading, Icon, Image, SimpleGrid, Stack, Text, Tooltip } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { FiInfo } from 'react-icons/fi';

export default function Continent() {
  return (
    <>
      <Header hasBack />
      <Box
        h={{base: 150, md: 500}} 
        w="100%" 
        backgroundImage="url('/assets/background.jpg')" 
        backgroundRepeat="no-repeat" 
        backgroundSize="cover" 
      >
        <Flex 
          w="100%" 
          maxWidth={1160}
          h="100%" 
          mx="auto"
          align={{base: 'center', xl: 'flex-end'}}
          justify={{base: 'center', xl: 'flex-start'}}
          paddingBottom={{base: '0', xl: '14'}}
          paddingLeft={{base: '0', xl: '4'}}
        >
          <Heading 
            fontSize="5xl" 
            fontWeight="semibold" 
            color="gray.50"
          >
            Europa
          </Heading>
        </Flex>
      </Box>
      <Flex w="100%" maxWidth={1160} mx="auto" mt={{base: '6', xl:'20'}} align="center" justify="space-between" wrap="wrap" px={{base: '4', xl: '0'}}>
        <Text fontSize={{base: 'sm', xl: '2xl'}} w="100%" maxWidth={{base: 'unset', lg: 600}} textAlign="justify">
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <Stack direction="row" spacing={['3', '8','10']} align="center" justify="space-between" mt={{base: '4', xl: '0'}}>
          <Box textAlign={{base: 'left', xl: 'center'}}>
            <Heading fontSize={{base: '2xl', xl: '5xl'}} fontWeight="semibold" color="orange.300">
              50
            </Heading>
            <Text fontSize={{base: 'lg', xl: '2xl'}} fontWeight="semibold" color="gray.900">
              países
            </Text>
          </Box>
          <Box textAlign={{base: 'left', xl: 'center'}}>
            <Heading fontSize={{base: '2xl', xl: '5xl'}} fontWeight="semibold" color="orange.300">
              60
            </Heading>
            <Text fontSize={{base: 'lg', xl: '2xl'}} fontWeight="semibold" color="gray.900">
              línguas
            </Text>
          </Box>
          <Box textAlign={{base: 'left', xl: 'center'}}>
          <Heading fontSize={{base: '2xl', xl: '5xl'}} fontWeight="semibold" color="orange.300">
              27
            </Heading>
            <Flex align="center" justify="center">
              <Text fontSize={{base: 'lg', xl: '2xl'}} fontWeight="semibold" color="gray.900">
                cidades +100
              </Text>
              <Tooltip 
                label="+ 100 ótimas opções"
                bg="gray.900"
                borderRadius="4"
                placement="bottom-start"
                fontSize="md"
              >
                <span>
                  <Icon as={FiInfo} h={['3', '4']} w={['2', '4']} ml="1" color="rgba(153,153,153,0.5)" />
                </span>
              </Tooltip>
            </Flex>
          </Box>
        </Stack>
      </Flex>
      <Box w="100%" maxWidth={1160} mx="auto" mt={{base: '8', xl: '20'}} mb="9" px={{base: '4', xl: '0'}}>
        <Heading fontSize={{base: '2xl', xl: '4xl'}} fontWeight="medium" color="gray.900" mb={{base: '5', xl: '10'}}>
          Cidades + 100
        </Heading>
        <SimpleGrid
          justifyItems="center"
          spacing="10"
          minChildWidth="260px"
        >
          <Box w="fit-content" bg="white" borderRadius="4" borderWidth="1px" borderColor="rgba(255,186,8,0.5)">
            <Image w="256px" h="173px" src="https://via.placeholder.com/256x173" borderTopRadius="4" />
            <Flex align="center" justify="space-between" mt="5" mb="6" mx="6">
              <Stack spacing="3">
                <Text fontSize="xl" fontFamily="Barlow" fontWeight="semibold" color="gray.900" >
                  Londres
                </Text>
                <Text fontSize="md" fontFamily="Barlow" fontWeight="medium" color="gray.800" >
                  Reino Unido
                </Text>
              </Stack>
              <Image h="30px" w="30px" src="https://via.placeholder.com/30x30?text=1" borderRadius="50%" />
            </Flex>
          </Box>
          <Box w="fit-content" bg="white" borderRadius="4" borderWidth="1px" borderColor="rgba(255,186,8,0.5)">
            <Image w="256px" h="173px" src="https://via.placeholder.com/256x173" borderTopRadius="4" />
            <Flex align="center" justify="space-between" mt="5" mb="6" mx="6">
              <Stack spacing="3">
                <Text fontSize="xl" fontFamily="Barlow" fontWeight="semibold" color="gray.900" >
                  Londres
                </Text>
                <Text fontSize="md" fontFamily="Barlow" fontWeight="medium" color="gray.800" >
                  Reino Unido
                </Text>
              </Stack>
              <Image h="30px" w="30px" src="https://via.placeholder.com/30x30?text=1" borderRadius="50%" />
            </Flex>
          </Box>
          <Box w="fit-content" bg="white" borderRadius="4" borderWidth="1px" borderColor="rgba(255,186,8,0.5)">
            <Image w="256px" h="173px" src="https://via.placeholder.com/256x173" borderTopRadius="4" />
            <Flex align="center" justify="space-between" mt="5" mb="6" mx="6">
              <Stack spacing="3">
                <Text fontSize="xl" fontFamily="Barlow" fontWeight="semibold" color="gray.900" >
                  Londres
                </Text>
                <Text fontSize="md" fontFamily="Barlow" fontWeight="medium" color="gray.800" >
                  Reino Unido
                </Text>
              </Stack>
              <Image h="30px" w="30px" src="https://via.placeholder.com/30x30?text=1" borderRadius="50%" />
            </Flex>
          </Box>
          <Box w="fit-content" bg="white" borderRadius="4" borderWidth="1px" borderColor="rgba(255,186,8,0.5)">
            <Image w="256px" h="173px" src="https://via.placeholder.com/256x173" borderTopRadius="4" />
            <Flex align="center" justify="space-between" mt="5" mb="6" mx="6">
              <Stack spacing="3">
                <Text fontSize="xl" fontFamily="Barlow" fontWeight="semibold" color="gray.900" >
                  Londres
                </Text>
                <Text fontSize="md" fontFamily="Barlow" fontWeight="medium" color="gray.800" >
                  Reino Unido
                </Text>
              </Stack>
              <Image h="30px" w="30px" src="https://via.placeholder.com/30x30?text=1" borderRadius="50%" />
            </Flex>
          </Box>
          <Box w="fit-content" bg="white" borderRadius="4" borderWidth="1px" borderColor="rgba(255,186,8,0.5)">
            <Image w="256px" h="173px" src="https://via.placeholder.com/256x173" borderTopRadius="4" />
            <Flex align="center" justify="space-between" mt="5" mb="6" mx="6">
              <Stack spacing="3">
                <Text fontSize="xl" fontFamily="Barlow" fontWeight="semibold" color="gray.900" >
                  Londres
                </Text>
                <Text fontSize="md" fontFamily="Barlow" fontWeight="medium" color="gray.800" >
                  Reino Unido
                </Text>
              </Stack>
              <Image h="30px" w="30px" src="https://via.placeholder.com/30x30?text=1" borderRadius="50%" />
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}