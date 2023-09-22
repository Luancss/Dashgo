import { Sidebar } from "../../components/Sidebar";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Digite seu e-mail").email("E-mail inválido"),
  password: yup
    .string()
    .required("Digite sua senha")
    .min(6, "No mínimo 6 caracteres"),
  password_confirmation: yup.string().oneOf(
    [
      // null,
      yup.ref("password"),
    ],
    "As senhas precisam ser iguals"
  ),
});

export default function CreateUser() {
  const { register, handleSubmit, formState, errors } = useForm({
    resolver: yupResolver(CreateUserFormSchema),
  });


  
  return (
    <Box>
      <Header />

      <Flex w={"100%"} my={"6"} maxW={1480} mx={"auto"} px={"6"}>
        <Sidebar />

        <Box
          as="form"
          flex={"1"}
          borderRadius={8}
          bg={"gray.800"}
          p={["6", "8"]}
          onSubmit={handleSubmit((async (values) => {
              await new Promise(resolve => setTimeout(resolve, 2000));
            }))}
        >
          <Heading size={"lg"} fontWeight={"normal"}>
            Criar usuário
          </Heading>
          <Divider my={"6"} borderColor={"gray.700"} />

          <VStack spacing={"8"}>
            <SimpleGrid minChildWidth={240} spacing={["6", "8"]} width={"100%"}>
              <Input
             
                label={"Nome completo"}
                
                {...register("name")}
              />
              <Input
                type={"email"}
                label={"E-mail"}
               
                {...register("email")}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth={240} spacing={["6", "8"]} width={"100%"}>
              <Input
                type={"password"}
                label={"Senha"}
                
                {...register("password")}
              />
              <Input
                type={"password"}
                label={"Confirme a senha"}
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt={"8"}>
            <HStack
              spacing={"4"}
              width={"100%"}
              justify={["space-between", "flex-end"]}
            >
              <Button
                as={Link}
                href={"/users"}
                passHref
                minW={["45%", 100]}
                colorScheme="whiteAlpha" 
                fontWeight={"medium"}
                _hover={{
                  bg: "gray.700",
                }}
              >
                Cancelar
              </Button>

              <Button
                type={"submit"}
                colorScheme={"pink"}
                minW={["45%", 100]}
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
