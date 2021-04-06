import { Flex, Image, Text, WrapItem } from "@chakra-ui/react";

interface CategoryItemProps {
  image: string;
  text: string;
}

export function CategoryItem({ image, text }: CategoryItemProps) {
  return (
    <WrapItem>
      <Flex direction="column" align="center">
        <Image src={image} width="85px" />
        <Text fontSize="2xl" fontWeight="semibold" lineHeight="4xl" pt={4}>
          {text}
        </Text>
      </Flex>
    </WrapItem>
  );
}
