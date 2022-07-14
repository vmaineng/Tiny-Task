import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  VStack,
  Link,
  Button,
  Heading,
  useColorModeValue,
  Alert, AlertIcon, AlertDescription 
} from "@chakra-ui/react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      })
      .then(navigate("/home"));
  }

  return (
    <Flex
    // minH={'100vh'}
      align={"top"}
      // justify={"top"}
      py={-100}
      flex={1}
    >
      <Stack spacing={3} mx={"auto"} maxW={"md"} p={6} my={12}>
        <Stack align={"4"}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>Log in to your account</Heading>
        </Stack>
        <Box
          rounded={"sm"}
          bg={useColorModeValue("orange.50", "orange.400")}
          boxShadow={"lg"}
          p={4}
        >
          <Stack spacing={2} >
          <form onSubmit={handleSubmit}>
            <FormControl id="username" isRequired >
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired mt={4}>
              <FormLabel>Password</FormLabel>
              <Input 
              type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                type="submit"
              >
                Log in
              </Button>
              <Box my={4}>
                
              <Alert status="error" borderRadius={4}>
              <AlertIcon />
             <AlertDescription>{errors.map((err) => (
            <p>{err}</p>
          ))}</AlertDescription> 
          </Alert>
         
          </Box>
            </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    // </Flex>
  );
}

export default LoginForm;
