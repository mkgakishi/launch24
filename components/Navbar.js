import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link as CLink,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Spacer,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { FaTelegramPlane, FaTwitter } from "react-icons/fa"
import ConnectWallet from "./popup/ConnectWallet";

const Links = [
  { title: 'Dashboard', link: "/" },
  { title: 'Projects', link: "/projects" },
  { title: 'Services', link: "/services" },
  { title: 'Earn', link: "/earn" },
  { title: "Help", link: "/help" }
];

const NavLink = ({ children, link, isActive, setActive }) => (
  <Link href={link} >
    <CLink
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        color: isActive === children || isActive === '' ? "white.500" : "teal.400",
      }}
      fontSize={18}
      fontWeight={500}
      fontFamily=""
      bg={isActive === children || isActive === '' ? "teal.500" : ""}
      color={isActive === children || isActive === '' ? "white.500" : "black.400"}
      onClick={() => setActive(children)}>
      {children}
    </CLink>
  </Link>
);


export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isActive, setActive] = useState("/");

  const { isCOpen, onCOpen, onCClose } = useDisclosure();

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />

          <Flex>
            <Box>Logo</Box>
          </Flex>
          <Spacer />
          <Flex>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map(({ title, link }) => (
                <NavLink key={title} link={link} isActive={isActive} setActive={setActive}>{title.toUpperCase()}</NavLink>
              ))}
              <CLink key="telegram" p={2} borderRadius={5}  bg="transparent" href="https://t.me/Launch24" target="_blank" _hover={{
                color: "white",
                bg: "rgb(29, 155, 240)",
                cursor: "pointer"
              }}>
                <FaTelegramPlane size={22} />
              </CLink>
              <CLink key="twitter"  p={2} borderRadius={5}  bg="transparent" href="https://twitter.com/Launch24" target="_blank" _hover={{
                color: "white",
                bg: "rgb(29, 155, 240)",
                cursor: "pointer"
              }}>
                <FaTwitter size={22} />
              </CLink>
            </HStack>
          </Flex>
          <Spacer />
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              mr={4}
              onClick={onCOpen}
              leftIcon={<AddIcon />}>
              Connect
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(({ title, link }) => (
                <NavLink key={title} link={link} isActive={isActive} setActive={setActive}>{title}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <ConnectWallet isOpen={isCOpen} onOpen={onCOpen} onClose={onCClose} />
    </>
  );
}