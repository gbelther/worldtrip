import {
  Box,
  Center,
  Flex,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { Header } from "../components/Header";
// import "./styles.css";

export default function Home() {
  return (
    <Flex direction="column" justify="center" align="center" mb={12}>
      <Header />

      <Flex width="100%">
        <Flex
          bgImg="url('/banner.svg')"
          bgRepeat="no-repeat"
          padding="8"
          justify="space-around"
          width="100%"
          bgSize="cover"
        >
          <Flex direction="column" justify="center" maxWidth="500">
            <Stack spacing="4">
              <Text fontSize="4xl" fontWeight="medium" color="gray.100">
                5 Continentes, infinitas possibilidades
              </Text>
              <Text fontSize="xl" fontWeight="regular" color="gray.300">
                Chegou a hora de tirar do papel a viagem que você sempre sonhou
              </Text>
            </Stack>
          </Flex>
          <Flex>
            <Image src="/images/airplane.svg" />
          </Flex>
        </Flex>
      </Flex>

      <Flex width="100%" justify="center" mt={40}>
        <Wrap spacing={40} display="flex" justify="center">
          <WrapItem>
            <Flex direction="column" align="center">
              <Image src="/images/cocktail.svg" width="85px" />
              <Text
                fontSize="2xl"
                fontWeight="semibold"
                lineHeight="4xl"
                pt={4}
              >
                vida noturna
              </Text>
            </Flex>
          </WrapItem>
          <WrapItem>
            <Flex direction="column" align="center">
              <Image src="/images/surf.svg" width="85px" />
              <Text
                fontSize="2xl"
                fontWeight="semibold"
                lineHeight="4xl"
                pt={4}
              >
                vida noturna
              </Text>
            </Flex>
          </WrapItem>
          <WrapItem>
            <Flex direction="column" align="center">
              <Image src="/images/building.svg" width="85px" />
              <Text
                fontSize="2xl"
                fontWeight="semibold"
                lineHeight="4xl"
                pt={4}
              >
                vida noturna
              </Text>
            </Flex>
          </WrapItem>
          <WrapItem>
            <Flex direction="column" align="center">
              <Image src="/images/museum.svg" width="85px" />
              <Text
                fontSize="2xl"
                fontWeight="semibold"
                lineHeight="4xl"
                pt={4}
              >
                vida noturna
              </Text>
            </Flex>
          </WrapItem>
          <WrapItem>
            <Flex direction="column" align="center">
              <Image src="/images/earth.svg" width="85px" />
              <Text
                fontSize="2xl"
                fontWeight="semibold"
                lineHeight="4xl"
                pt={4}
              >
                vida noturna
              </Text>
            </Flex>
          </WrapItem>
        </Wrap>
      </Flex>

      <Center
        width="3xs"
        borderBottom="2px"
        borderColor="gray.500"
        mt={24}
        mb={24}
      ></Center>

      <Flex direction="column" width="90%">
        <Flex direction="column" align="center" mb={10}>
          <Text fontSize="4xl" lineHeight="5xl">
            Vamos nessa?
          </Text>
          <Text fontSize="4xl">Então escolha seu continente</Text>
        </Flex>

        <Flex>
          <Swiper id="main">
            <SwiperSlide>
              <Image src="/continents/europe.png" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/continents/europe.png" width="100%" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/continents/europe.png" width="100%" />
            </SwiperSlide>
          </Swiper>
        </Flex>
      </Flex>
    </Flex>
  );
}
