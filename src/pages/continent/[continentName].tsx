import { Box, Flex, Icon, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { GetStaticPaths, GetStaticProps } from "next";

interface CardPlaces {
  cityName: string;
  countryName: string;
  cityImage: string;
  cityCountryImage: string;
}

interface ContinentProps {
  continentName: string;
  description: string;
  image: string;
  cardPlaces: CardPlaces[];
}

export default function Continent({
  continentName,
  description,
  image,
  cardPlaces,
}: ContinentProps) {
  console.log(cardPlaces);

  return (
    <Flex direction="column" justify="center" align="center" mb={12}>
      <Header />

      <Flex
        bgImg={`url(${image})`}
        bgRepeat="no-repeat"
        padding="8"
        width="100%"
        bgSize="cover"
        height="lg"
        justifyContent="flex-start"
        align="flex-end"
      >
        <Text
          fontSize="5xl"
          color="gray.100"
          fontWeight="semibold"
          ml={36}
          mb={19}
        >
          {continentName}
        </Text>
      </Flex>

      <Flex
        pl={36}
        pr={36}
        mt="6rem"
        width="100%"
        justify="center"
        direction="column"
      >
        <Flex justify="space-between" align="center" wrap="wrap">
          <Box width={["90%", "90%", "90%", "45%"]}>
            <Text textAlign="justify" fontSize="2xl" lineHeight="4xl">
              {description}
            </Text>
          </Box>
          <Flex
            width={["90%", "90%", "90%", "45%"]}
            minW="md"
            maxW="2xl"
            justify="space-between"
            mt="2rem"
          >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Text fontSize="4xl" color="yellow.400" fontWeight="semibold">
                50
              </Text>
              <Text fontSize="2xl" fontWeight="semibold">
                Países
              </Text>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Text fontSize="4xl" color="yellow.400" fontWeight="semibold">
                60
              </Text>
              <Text fontSize="2xl" fontWeight="semibold">
                línguas
              </Text>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Text fontSize="4xl" color="yellow.400" fontWeight="semibold">
                27
              </Text>
              <Text fontSize="2xl" fontWeight="semibold">
                cidades +100{" "}
                <Icon as={InfoOutlineIcon} ml="0.2rem" color="gray.400" />
              </Text>
            </Box>
          </Flex>
        </Flex>

        <Flex mt="5rem" direction="column">
          <Box>
            <Text fontSize="4xl" fontWeight="medium">
              Cidades +100
            </Text>
          </Box>

          <Flex width="100%">
            <Wrap spacing="3rem" justify="center">
              {cardPlaces.map((card) => (
                <WrapItem
                  key={card.cityName}
                  display="flex"
                  justifyContent="center"
                >
                  <Flex
                    direction="column"
                    border="1px"
                    borderRadius="4px"
                    borderColor="rgba(255,186,8,0.5)"
                  >
                    <Image src={card.cityImage} w="256px" h="173px" />
                    <Flex
                      justifyContent="space-between"
                      alignItems="center"
                      height="6.625rem"
                      align="center"
                      p="1rem"
                    >
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        height="100%"
                      >
                        <Text fontSize="xl" fontWeight="semibold">
                          {card.cityName}
                        </Text>
                        <Text fontWeight="medium">{card.countryName}</Text>
                      </Box>
                      <Image
                        src={card.cityCountryImage}
                        width="30px"
                        height="30px"
                      />
                    </Flex>
                  </Flex>
                </WrapItem>
              ))}
            </Wrap>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continentName } = params;

  let props = {};

  switch (String(continentName).toLocaleLowerCase()) {
    case "europa": {
      props = {
        continentName: "Europa",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis beatae cum consectetur autem ut, commodi porro nam maxime blanditiis facilis et quidem quos, voluptates in fuga est ratione veritatis magni!",
        image: "/continents/europe/banner.png",
        cardPlaces: [
          {
            cityName: "Londres",
            countryName: "Reino Unido",
            cityImage: "/continents/europe/london.png",
            cityCountryImage: "/continents/europe/uk.png",
          },
          {
            cityName: "Paris",
            countryName: "França",
            cityImage: "/continents/europe/paris.png",
            cityCountryImage: "/continents/europe/france.png",
          },
          {
            cityName: "Roma",
            countryName: "Itália",
            cityImage: "/continents/europe/roma.png",
            cityCountryImage: "/continents/europe/italy.png",
          },
          {
            cityName: "Praga",
            countryName: "República Tcheca",
            cityImage: "/continents/europe/praga.png",
            cityCountryImage: "/continents/europe/czech.png",
          },
          {
            cityName: "Amsterdã",
            countryName: "Holanda",
            cityImage: "/continents/europe/amsterda.png",
            cityCountryImage: "/continents/europe/netherlands.png",
          },
        ],
      };
      break;
    }
    case "america": {
      props = {
        continentName: "America",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis beatae cum consectetur autem ut, commodi porro nam maxime blanditiis facilis et quidem quos, voluptates in fuga est ratione veritatis magni!",
        image: "/continents/america/banner.png",
        cardPlaces: [
          {
            cityName: "Rio",
            countryName: "Brazil",
            cityImage: "/continents/america/rio.png",
            cityCountryImage: "/continents/america/brazil.png",
          },
          {
            cityName: "Nova Iorque",
            countryName: "Estados Unidos",
            cityImage: "/continents/america/new-york.png",
            cityCountryImage: "/continents/america/eua.png",
          },
          {
            cityName: "Toronto",
            countryName: "Canadá",
            cityImage: "/continents/america/toronto.png",
            cityCountryImage: "/continents/america/canada.png",
          },
          {
            cityName: "Santiago",
            countryName: "Chile",
            cityImage: "/continents/america/santiago.png",
            cityCountryImage: "/continents/america/chile.png",
          },
          {
            cityName: "Buenos Aires",
            countryName: "Argentina",
            cityImage: "/continents/america/buenos-aires.png",
            cityCountryImage: "/continents/america/argentina.png",
          },
        ],
      };
      break;
    }
  }

  return {
    props,
    revalidate: 60 * 60 * 24,
  };
};
