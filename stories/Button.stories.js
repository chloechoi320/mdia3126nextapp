import React from 'react';
import Button from '../comps/Button';

export default {
  title: 'Button',
  component: Button
};

export const LogInButton = () => <Button borderRadius="5px" text="Login"/>;
export const SignInButton = () => <Button backgroundColor="#D79B9B" borderRadius="5px" text="SignUp"/>;
export const GoogleButton = () => <Button backgroundColor="#4285F4" borderRadius="0px" text="Login with Google"/>;