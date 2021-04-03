import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

import { ChevronLeftIcon } from "@chakra-ui/icons";

export function Header() {
  const router = useRouter();

  return (
    <Flex m="6" align="center" width="100%">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Image src="/logo.svg" />
        {router.asPath !== "/" && (
          <Link href="/">
            <Box
              display="flex"
              position="absolute"
              left="10vw"
              cursor="pointer"
            >
              <Icon as={ChevronLeftIcon} boxSize={8} />
            </Box>
          </Link>
        )}
      </Box>
    </Flex>
  );
}
