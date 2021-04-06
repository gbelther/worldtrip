import {
  Center,
  Flex,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Wrap,
} from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/swiper-bundle.css";
import { Header } from "../components/Header";
import { SwiperItem } from "../components/SwiperItem";
import { CategoryItem } from "../components/CategoryItem";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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
                5 Continentes, <br />
                infinitas possibilidades
              </Text>
              <Text fontSize="xl" fontWeight="regular" color="gray.300">
                Chegou a hora de tirar do papel a viagem que você sempre sonhou
              </Text>
            </Stack>
          </Flex>
          {isWideVersion && (
            <Flex position="relative" bottom="-70px">
              <Image src="/images/airplane.svg" />
            </Flex>
          )}
        </Flex>
      </Flex>

      <Flex width="100%" justify="center" mt={40}>
        <Wrap spacing={40} display="flex" justify="center">
          <CategoryItem image={"/images/cocktail.svg"} text="vida noturna" />
          <CategoryItem image={"/images/surf.svg"} text="praia" />
          <CategoryItem image={"/images/building.svg"} text="moderno" />
          <CategoryItem image={"/images/museum.svg"} text="clássico" />
          <CategoryItem image={"/images/earth.svg"} text="e mais..." />
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

        <Flex w="100%" align="center" justify="center">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <SwiperItem
                continentName="Europa"
                text="O continente mais antigo."
                image="/continents/europe.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SwiperItem
                continentName="America"
                text="O continente com maiores diversidades"
                image="continents/america.png"
              />
            </SwiperSlide>
          </Swiper>
        </Flex>
      </Flex>
    </Flex>
  );
}
