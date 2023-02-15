// import { Button, Flex, FormControl, Heading, Stack, VStack } from '@chakra-ui/react'
import {
  Button,
  Flex,
  VStack,
  FormControl,
  Heading,
  Stack,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { React, useState } from 'react';
import { authenticateUser, signOnService } from '../services/login';
import { useNavigate } from 'react-router-dom';
import AlertItem from '../components/Alert';

const initialUser = {
  email: '',
  name: '',
  password: '',
  isMember: true,
};

const LoginP = () => {
  // for user
  const navigate = useNavigate();
  const [user, setUser] = useState(initialUser);
  const handleUser = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  // toggle between login and user page
  const toggleMember = () => {
    setUser({ ...user, isMember: !user.isMember });
  };
  // checking if already logged in

  const userAlreadyLoggedIn = async () => {
    const { status } = await authenticateUser('/login');

    if (status === 200) {
      setAlert({
        showAlert: true,
        msg: 'Redirecting to Dashboard',
        heading: 'Authorized',
        type: 'success',
      });
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    }
  };
  useState(() => {
    userAlreadyLoggedIn();
  });
  // alert variable
  const [alert, setAlert] = useState({
    showAlert: false,
    msg: '',
    heading: '',
    type: '',
  });
  // const displayAlert = (newAlert) => {
  //   setAlert({...alert, newAlert})
  // }
  //submit
  const handleSubmit = async e => {
    e.preventDefault();
    const response = await signOnService(user);

    setAlert({
      showAlert: true,
      msg: response.data.msg ? response.data.msg : response.data.errors[0].msg,
      heading: response.data.heading
        ? response.data.heading
        : 'Invalid Credentials',
      type: response.status === 200 ? 'success' : 'error',
    });
    if (alert.msg === 'Invalid value')
      setAlert({ ...alert, msg: 'Enter valid email address' });
    if (response.status === 200) {
      console.log('user is successfully signed up');

      if (user.isMember) {
        setAlert({
          showAlert: true,
          msg: response.data.msg.msg,
          heading: response.data.msg.heading,
          type: 'success',
        });

        setTimeout(() => {
          navigate('/dashboard');
        }, 4000);
      } else {
      }
    } else {
      setTimeout(() => {
        setAlert({
          ...alert,
          showAlert: false,
        });
      }, 5000);
    }
  };
  // for passwords
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <Flex alignItems={'flexed-top'} marginTop="7%" justifyContent={'center'}>
      <VStack>
        <FormControl>
          {/* heading  */}
          <Heading textAlign={'center'}>
            {user.isMember ? 'Login' : 'Register'}
          </Heading>

          {/* alert */}
          {alert.showAlert && <AlertItem alert={alert} />}

          {/* name for registration */}
          <Stack marginTop={'2%'}>
            {!user.isMember && (
              <>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  type="text"
                  value={user.name}
                  onChange={handleUser}
                />
              </>
            )}
          </Stack>

          {/* email */}
          <Stack marginTop={'3%'}>
            <FormLabel>Email address</FormLabel>
            <Input
              name="email"
              type="email"
              value={user.email}
              onChange={handleUser}
            />
          </Stack>

          {/* password */}
          <Stack marginTop={'5%'}>
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
              <Input
                name="password"
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                value={user.password}
                onChange={handleUser}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShow}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>

          {/* Submit */}
          <Button colorScheme="orange" marginTop={'2%'} onClick={handleSubmit}>
            Submit
          </Button>

          {/* Toggle button */}
          <Button
            colorScheme={'teal'}
            variant="ghost"
            float={'right'}
            marginTop="2%"
            onClick={toggleMember}
          >
            {!user.isMember
              ? 'Already a member? Login Here'
              : 'Not a member yet? Register Here'}
          </Button>
        </FormControl>
      </VStack>
    </Flex>
  );
};

export default LoginP;
