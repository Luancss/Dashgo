import { Box, Flex, Heading, Divider, SimpleGrid } from '@chakra-ui/react'
import { VStack, HStack, Button } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'
import { useRouter } from 'next/router'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Input } from '../../components/Form/Input'
import { api } from '../../services/api'
import { queryClient } from '../../services/queryClient'

type CreateUserFormData = {
   name: string
   email: string
   password: string
   pasw_confirmation: string
 }
 
 const createUserSchema = yup.object().shape({
   name: yup.string().required("Nome obrigatório"),
   email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
   password: yup.string().required("Senha não informada").min(6, 'Digite ao menos 6 letras ou números'),
   psw_confirmation: yup.string().oneOf([null, yup.ref('password')], "As senhas diferem")
 })
 
export default function CreateUser() {
   const router = useRouter()
   
   const createUser = useMutation(async (user: CreateUserFormData) => {
      const response = await api.post('users', {
         user: {
            ...user,
            created_at: new Date(),
         }
      })

      return response.data.user
   }, {
      onSuccess: () => {
         queryClient.invalidateQueries('users')
      }
   })

   const { register, handleSubmit, formState } = useForm({
      resolver: yupResolver(createUserSchema)
    })
  
   const errors = formState.errors

   //const handleCreateUser: SubmitHandler<CreateUserFormData) = (values) => {
   async function handleCreateUser(values: CreateUserFormData) {
      await createUser.mutateAsync(values)

      router.push('/users') //volta para a listagem de usuários
   }

   return (
      <Box>
         <Header />

         <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar />        

            <Box 
               as="form"
               flex="1" 
               borderRadius={8} 
               bg="gray.800" 
               p={["4", "8"]}
               onSubmit={handleSubmit(handleCreateUser)}
            >
               <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
               <Divider my="6" borderColor="gray.700" />

               <VStack spacing="8">
                  <SimpleGrid minChildWidth="240px" spacing={["4", "8"]} w="100%">
                     <Input 
                        // name="name" 
                        label="Nome completo" 
                        error={ errors.name }
                        {...register('name')}
                     />
                     <Input 
                        // name="email" 
                        label="E-mail" 
                        error={ errors.email }
                        {...register('email')}
                     />
                  </SimpleGrid>

                  <SimpleGrid minChildWidth="240px" spacing={["4", "8"]} w="100%">
                     <Input 
                        // name="password" 
                        type="password" 
                        label="Senha" 
                        error={ errors.password }
                        {...register('password')}
                     />
                     <Input 
                        // name="psw_confirmation" 
                        type="password" 
                        label="Confirmação da senha" 
                        error={ errors.psw_confirmation }
                        {...register('psw_confirmation')}
                     />
                  </SimpleGrid>
               </VStack>

               <Flex mt="8" justify="flex-end">
                  <HStack spacing="4">
                     <Button as="a" 
                        colorScheme="whiteAlpha"
                        href="/users"
                     >
                        Cancelar
                     </Button>
                     <Button 
                        type="submit" 
                        isLoading={formState.isSubmitting}
                        colorScheme="pink"
                     >
                        Salvar
                     </Button>
                  </HStack>
               </Flex>
            </Box>               
         </Flex>
      </Box>
   )
}