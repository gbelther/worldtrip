import { Center, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface SwiperItemProps {
  continentName: string;
  text: string;
  image: string;
}

export function SwiperItem({ continentName, text, image }: SwiperItemProps) {
  const router = useRouter();

  function handleClickToOtherRoute() {
    router.push(`continent/${continentName}`);
  }

  return (
    <Center
      w="90vw"
      h="md"
      bgImage={`url(${image})`}
      bgSize="cover"
      bgRepeat="no-repeat"
      align="center"
      onClick={handleClickToOtherRoute}
    >
      <Stack>
        <Text as="h2" fontSize="3rem" fontWeight="bold" color="gray.100">
          {continentName}
        </Text>
        <Text as="span" fontSize="1.5rem" fontWeight="bold" color="gray.300">
          {text}
        </Text>
      </Stack>
    </Center>
  );
}
