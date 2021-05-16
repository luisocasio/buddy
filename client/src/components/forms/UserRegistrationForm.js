import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import mutations from '../../apolloClient/mutations';

const Form = styled.form`
  border: 1px solid red;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 25%;
`;

const UserRegistrationform = () => {
  const [input, setInput] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    password: '',
  });

  const [{ data }] = useMutation(mutations);
  console.log(data);

  const { register, handleSubmit } = useForm();

  const signup = () => {
    return;
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    signup(input);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <Input
        name="email"
        placeholder="Email"
        value={input.email}
        onChange={handleChange}
      />

      <label>First Name</label>
      <Input
        name="firstName"
        placeholder="First Name"
        value={input.first}
        onChange={handleChange}
      />

      <label>Last Name</label>
      <Input
        name="lastName"
        placeholder="Last Name"
        value={input.last}
        onChange={handleChange}
      />

      <label>Address</label>
      <Input
        name="address"
        placeholder="Address"
        value={input.address}
        onChange={handleChange}
      />

      <label>Password</label>
      <Input
        name="password"
        placeholder="Password"
        value={input.password}
        onChange={handleChange}
      />

      <button type="submit" onClick={onSubmit}>
        Submit
      </button>
    </Form>
  );
};

export default UserRegistrationform;
