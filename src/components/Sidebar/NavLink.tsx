import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps{
  icon: ElementType;
  children: string
}

export function NavLink({icon, children, ...rest} : NavLinkProps) {
  return (
    <Link display="flex" alignContent="center" {...rest}>
    <Icon as={icon} fontSize="20" />
    <Text fontWeight="medium" ml="4">
      {children}
    </Text>
  </Link>
  )
}