import { Flex, Input, Box, Text } from "@chakra-ui/react";
import logo from "../public/images/logo.png";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            color="black"
            p={4}
            w="100%"
            h="67px"
            mx="auto"
            borderBottom="1px solid #f0f0f0" // Adiciona a borda na parte inferior
        >
            {/* Logo */}
            <Flex maxW={1475} align="center" justify="space-between" mx="auto">
                <Box mr="60px">
                    <Image
                        src={logo}
                        // width={110}
                        height={64}
                        alt="Picture of the author"
                    />
                </Box>

                {/* Barra de Pesquisa */}
                <Input
                    type="text"
                    placeholder="Encontre seu hackathon"
                    borderRadius="full"
                    px={4}
                    py={2}
                    w="820px"
                    mr="36px"
                />

                {/* Menu de Navegação */}
                <Flex align="center" fontWeight="">
                    <Text mx={4}>Criar hackathon</Text>
                    <Text mx={4}>Sou jurado</Text>
                    <Text mx={4}>Perfil</Text>
                    <Link href="/">
                        <Text mx={4}>Sair</Text>
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Navbar;
