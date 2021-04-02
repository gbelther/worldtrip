import { Box, Flex, Icon, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { InfoOutlineIcon } from "@chakra-ui/icons";

export default function Continent() {
  return (
    <Flex direction="column" justify="center" align="center" mb={12}>
      <Header />

      <Flex
        bgImg="url('/continents/europe/banner.png')"
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
          Europa
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
        <Flex justify="space-between" align="center">
          <Box width="45%">
            <Text textAlign="justify" fontSize="2xl" lineHeight="4xl">
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>
          </Box>
          <Flex width="45%" justify="space-between">
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
            <Wrap spacing="3rem">
              <WrapItem>
                <Flex
                  direction="column"
                  border="1px"
                  borderRadius="4px"
                  borderColor="rgba(255,186,8,0.5)"
                >
                  <Image src="/continents/europe/london.png" />
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
                        Londres
                      </Text>
                      <Text fontWeight="medium">Reino Unido</Text>
                    </Box>
                    <Image
                      src="/continents/europe/uk.png"
                      width="30px"
                      height="30px"
                    />
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex
                  direction="column"
                  border="1px"
                  borderRadius="4px"
                  borderColor="rgba(255,186,8,0.5)"
                >
                  <Image src="/continents/europe/london.png" />
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
                        Londres
                      </Text>
                      <Text fontWeight="medium">Reino Unido</Text>
                    </Box>
                    <Image
                      src="/continents/europe/uk.png"
                      width="30px"
                      height="30px"
                    />
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex
                  direction="column"
                  border="1px"
                  borderRadius="4px"
                  borderColor="rgba(255,186,8,0.5)"
                >
                  <Image src="/continents/europe/london.png" />
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
                        Londres
                      </Text>
                      <Text fontWeight="medium">Reino Unido</Text>
                    </Box>
                    <Image
                      src="/continents/europe/uk.png"
                      width="30px"
                      height="30px"
                    />
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex
                  direction="column"
                  border="1px"
                  borderRadius="4px"
                  borderColor="rgba(255,186,8,0.5)"
                >
                  <Image src="/continents/europe/london.png" />
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
                        Londres
                      </Text>
                      <Text fontWeight="medium">Reino Unido</Text>
                    </Box>
                    <Image
                      src="/continents/europe/uk.png"
                      width="30px"
                      height="30px"
                    />
                  </Flex>
                </Flex>
              </WrapItem>
              <WrapItem>
                <Flex
                  direction="column"
                  border="1px"
                  borderRadius="4px"
                  borderColor="rgba(255,186,8,0.5)"
                >
                  <Image src="/continents/europe/london.png" />
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
                        Londres
                      </Text>
                      <Text fontWeight="medium">Reino Unido</Text>
                    </Box>
                    <Image
                      src="/continents/europe/uk.png"
                      width="30px"
                      height="30px"
                    />
                  </Flex>
                </Flex>
              </WrapItem>
            </Wrap>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
