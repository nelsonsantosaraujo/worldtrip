import { Flex, Heading, Text } from "@chakra-ui/react";

export function CarouselItem() {
  return (
    <Flex 
      direction="column" 
      align="center" 
      justify="center" 
      h={450}
      w="100%" 
      bg="url('https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1370&q=80')" 
      backgroundRepeat="no-repeat" 
      backgroundSize="cover" 
      backgroundPosition="center" 
      boxShadow="inset 0 0 0 450px rgba(28, 20, 1, 0.35)"
    >
      <Heading fontSize="5xl" color="gray.50">
        Europa
      </Heading>
      <Text fontSize="2xl" fontWeight="bold" color="gray.100" mt="4">
        O continente mais antigo.
      </Text>
    </Flex>
  );
}