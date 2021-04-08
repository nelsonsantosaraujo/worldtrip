import { Flex, Heading, Image, FlexProps as ChakraFlexProps } from "@chakra-ui/react";

interface CardProps extends ChakraFlexProps {
  name: string;
  image: string;
}

export function Card({name, image, ...rest}: CardProps) {
  return (
    <Flex w="fit-content" direction="column" align="center" justify="center" {...rest}>
      <Image src={image} alt={name} width="85" height="85" />
      <Heading fontWeight="semibold" fontSize="2xl">
        {name}
      </Heading>
    </Flex>
  );
}