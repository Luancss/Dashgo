import { Flex } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { NotificationsNav } from "./NotificationsNav";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";

export function Header() {
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

      <SearchBox/>

      <Flex align="center" marginLeft="auto">
          <NotificationsNav/>
          <Profile/>
      </Flex>
    </Flex>
  );
}
