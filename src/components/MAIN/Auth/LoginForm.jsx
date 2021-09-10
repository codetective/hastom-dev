import {
  Button,
  FormControl,
  Heading,
  Input,
  Stack,
  Box,
  InputGroup,
  InputLeftElement,
  Icon,
  Text,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdLock } from 'react-icons/io';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../../apiServices/authServices';

export default function LoginForm() {

  const history = useHistory()

    const initialValues = {
      email: "",
      password: ""
    }

    const validationSchema = Yup.object({
      email: Yup.string().email("Invalid Email Format").required("Email is required"),
      password: Yup.string().required("Password is required"),
    })

    const onSubmit = async(value) => {
      // const cookieData = await cookie()
      try{
        const res = await login(value)
        if(res.status === 200){
          localStorage.setItem("token", res.data.token)
          history.push("/dashboard")
        }
      }
      catch(err){
        console.log(err)
      }
      // console.log(cookieData)
    }

  return (
    <Stack spacing={4} w={'80%'} maxW={'md'} height="100%" justify="center">
      <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
      >
      {({
        values,
        errors,
        touched,
        handleChange,
        isSubmitting,
        handleBlur,
        handleSubmit,
        
        /* and other goodies */
      }) => (
      <form onSubmit={handleSubmit}>
        <Stack spacing="25px">
          <Heading
            className="qfont"
            as="h2"
            fontSize={['24px', '28px']}
            fontWeight=" 500"
            letterSpacing="0"
            lineHeight="1.4"
            textAlign="center"
            p={0}
            textTransform="capitalize"
          >
            <Box as="span" class="span">
              Login
            </Box>
          </Heading>

          {/* email box */}
          <FormControl id="email">
            <InputGroup>
              <InputLeftElement
                pl="2"
                pointerEvents="none"
                children={
                  <Icon as={FaUserCircle} fontSize="24px" color="primary.100" />
                }
              />
              <Input
                type="email"
                placeholder="Email"
                py="4"
                pl="45px"
                rounded="full"
                bg="white"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </InputGroup>
          </FormControl>

          {/* password */}
          <FormControl id="password">
            <InputGroup>
              <InputLeftElement
                pl="2"
                pointerEvents="none"
                children={
                  <Icon as={IoMdLock} fontSize="24px" color="secondary.100" />
                }
              />
              <Input
                type="password"
                placeholder="Password"
                py="4"
                pl="45px"
                rounded="full"
                bg="white"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </InputGroup>
          </FormControl>
          <Button
            size="md"
            rounded="34px"
            type="submit"
            color="white"
            bg="primary.100"
            px={'40px'}
            _hover={{
              bg: ['secondary.100'],
            }}
          >
            Login
          </Button>
          <Text textAlign="center" color="black">
            Don't have an account?
            <Box
              pl="1"
              as={Link}
              to="/register"
              textDecoration="underline"
              color="secondary.100"
            >
              Register
            </Box>
          </Text>
        </Stack>
      </form>
      )}
      </Formik>
    </Stack>
  );
}
