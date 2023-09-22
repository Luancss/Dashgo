import { Input } from "../components/Form/Input";
import { Flex, Button, Stack, Heading } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("Digite seu e-mail").email("E-mail inválido"),
  password: yup.string().required("Digite sua senha"),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async values => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Flex w={"100vw"} h={"100vh"} align={"center"} justify={"center"}>
      <Flex
        as="form"
        w={"100%"}
        maxW={360}
        bg={"gray.900"}
        p={8}
        borderRadius={8}
        flexDirection={"column"}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4} align={"center"}>
          <Heading size={"lg"}>Bem vindo(a)!</Heading>
          <Input
            type="email"
            label={"E-mail"}
            {...register("email")}
          />
          <Input
            type="password"
            label={"Senha"}
        
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          mt={6}
          colorScheme={"teal"}
          size={"lg"}
          fontWeight={"medium"}
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}