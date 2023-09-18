import { Avatar, Box, Flex, Text, } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
        {showProfileData && (
          <Box mr="4" textAlign="right">
          <Text>Luan Carlos</Text>
          <Text color="gray.300" fontSize="small">Luancss.contact@gmail.com</Text>
        </Box>
        )}
        <Avatar size="md" src="https://avatars.githubusercontent.com/u/104950187?s=400&u=e809a92eca757b1a4b13696524612e9fb4154505&v=4"/>
        </Flex>
  )
}