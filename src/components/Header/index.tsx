import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { NotificationsNav } from "./NotificationsNav";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      alignItems="center"
    >
      <Logo/>

     {isWideVersion && <SearchBox/>}

      <Flex align="center" marginLeft="auto">
          <NotificationsNav/>
          <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  );
}
