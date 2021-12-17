import {Container, Col, Row, Spinner} from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {useState} from '@hookstate/core';
import store from '../../../store/store';
import { Button, Input } from '@chakra-ui/react';
import {editProfile} from '../../../apiServices/userServices'

const Settings = () => {
    const {alertNotification} = useState(store)
    const {alertType} = useState(store)
    const {alertMessage} = useState(store)

    const initialValues = {
        name: "",
        location: "",
        phone_number: ""

    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        location: Yup.string().required("Address is required"),
        phone_number: Yup.string().required("Phone Number is required")
    })

    const onSubmit = async(value) => {
      try{
        const res = await editProfile(value)
        if(res.status === 200){
          alertMessage.set("Profile Update Successful")
          alertType.set("success")
          alertNotification.set(true)
          setTimeout(() => {
            alertNotification.set(false)
            alertMessage.set("")
            alertType.set("")
          }, 1000);
        }
        else{
          alertMessage.set("Profile Update Failed")
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
          alertType.set("danger")
          alertNotification.set(true)
          setTimeout(() => {
            alertNotification.set(false)
            alertMessage.set("")
            alertType.set("")
          }, 1000);
      }
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h2>Edit Profile</h2>
                </Col>
            </Row>
            <Row>
                <Col>
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
                        <Input
                            type="text"
                            placeholder="Name"
                            py="4"
                            pl="45px"
                            rounded="full"
                            bg="white"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            className='mt-3 mb-3'
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
                            className='mt-3 mb-3'
                        />
                        <Input
                            type="text"
                            placeholder="Phone Number"
                            py="4"
                            pl="45px"
                            rounded="full"
                            bg="white"
                            name="phone_number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone_number}
                            className='mt-3 mb-3'
                        />
                        <Button
                            size="md"
                            rounded="34px"
                            type="submit"
                            color="white"
                            bg="primary.100"
                            className='mt-3 mb-3'
                            px={'40px'}
                            _hover={{
                                bg: ['secondary.100'],
                            }}
                        >
                            {isSubmitting ?
                            <Spinner animation="border"/>
                            :
                            "Submit"
                            }
                        </Button>
                        </form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    )
}

export default Settings
