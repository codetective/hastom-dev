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
  HStack,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FaUserCircle, FaPhoneAlt, FaFlag } from 'react-icons/fa';
import { IoMdLock } from 'react-icons/io';
import { MdContacts, MdLocationOn } from 'react-icons/md';
import { Link, useHistory } from 'react-router-dom';
import { register } from '../../../apiServices/authServices';
import {useState} from '@hookstate/core';
import store from '../../../store/store';
import {Spinner} from 'react-bootstrap'


export default function RegisterForm() {

    const history = useHistory()

    const {alertNotification} = useState(store)
    const {alertType} = useState(store)
    const {alertMessage} = useState(store)

    const initialValues = {
      name: "",
      email: "",
      password: "",
      location: "",
      password_confirmation: ""
    }

    const validationSchema = Yup.object({
      email: Yup.string().email("Invalid Email Format").required("Email is required"),
      name: Yup.string().required("Name is required"),
      location: Yup.string().required("Location is required"),
      password: Yup.string().required("Password is required"),
    })

    const onSubmit = async(value) => {
      // const cookieData = await cookie()
      try{
        const res = await register(value)
        if(res.status === 200){
          localStorage.setItem("token", res.data.token)
          alertMessage.set("Registeration Successful")
          alertType.set("success")
          alertNotification.set(true)
          setTimeout(() => {
            alertNotification.set(false)
            alertMessage.set("")
            alertType.set("")
          }, 1000);
          history.push("/dashboard")
        }
        else{
          alertMessage.set("Registeration Failed")
          alertType.set("danger")
          alertNotification.set(true)
          setTimeout(() => {
            alertNotification.set(false)
            alertMessage.set("")
            alertType.set("")
          }, 1000);
        }
      }
      catch(err){
        console.log(err)
        alertMessage.set(err.message)
          alertType.set("success")
          alertNotification.set(true)
          setTimeout(() => {
            alertNotification.set(false)
            alertMessage.set("")
            alertType.set("")
          }, 1000);
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
        <Stack spacing="23px">
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
              Register
            </Box>
            {console.log(errors)}
          </Heading>

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

          {/* namebox */}
          <FormControl id="name">
            <InputGroup>
              <InputLeftElement
                pl="2"
                pointerEvents="none"
                children={
                  <Icon as={MdContacts} fontSize="24px" color="primary.100" />
                }
              />
              <Input
                type="text"
                placeholder="Full Legal Name"
                py="4"
                pl="45px"
                rounded="full"
                bg="white" 
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
            </InputGroup>
          </FormControl>

          {/* phone number */}
          {/* <FormControl id="phone">
            <InputGroup>
              <InputLeftElement
                pl="2"
                pointerEvents="none"
                children={
                  <Icon as={FaPhoneAlt} fontSize="24px" color="primary.100" />
                }
              />
              <Input
                type="number"
                placeholder="Phone Number"
                py="4"
                pl="45px"
                rounded="full"
                bg="white"
              />
            </InputGroup>
          </FormControl> */}

          {/* <HStack> */}
            {/* state */}
            <FormControl id="state">
              <InputGroup>
                <InputLeftElement
                  pl="2"
                  pointerEvents="none"
                  children={
                    <Icon
                      as={MdLocationOn}
                      fontSize="24px"
                      color="primary.100"
                    />
                  }
                />
                <Input
                  type="text"
                  placeholder="Address"
                  py="4"
                  pl="45px"
                  rounded="full"
                  bg="white"
                  name="location"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.location}
                />
              </InputGroup>
            </FormControl>

            {/* Country */}
            {/* <FormControl id="country">
              <InputGroup>
                <InputLeftElement
                  pl="2"
                  pointerEvents="none"
                  children={
                    <Icon as={FaFlag} fontSize="24px" color="primary.100" />
                  }
                />
                <Input
                  type="text"
                  placeholder="Country"
                  py="4"
                  pl="45px"
                  rounded="full"
                  bg="white"
                  name="location"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.location}
                />
              </InputGroup>
            </FormControl>
          </HStack> */}

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
                placeholder="Confirm Password"
                py="4"
                pl="45px"
                rounded="full"
                bg="white"
                name="password_confirmation"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password_confirmation}
              />
            </InputGroup>
          </FormControl>

          {/* submit btn */}
          <Button
            size="md"
            rounded="34px"
            color="white"
            bg="primary.100"
            px={'40px'}
            _hover={{
              bg: ['secondary.100'],
            }}
            type="submit"
          >
            {isSubmitting ?
            <Spinner animation="border"/>
            :
            "Sign Up"
            }
          </Button>

          {/* helper text */}
          <Text textAlign="center" color="black">
            Already have an account?
            <Box
              pl="1"
              as={Link}
              to="/login"
              textDecoration="underline"
              color="secondary.100"
            >
              Sign in
            </Box>
          </Text>
        </Stack>
      </form>
      )}
      </Formik>
    </Stack>
  );
}
