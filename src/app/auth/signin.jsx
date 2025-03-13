import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Got the data...', data);
  };

  const handleHidePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full mt-8 space-y-5"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} className="h-10 rounded" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <div className="flex items-center justify-between">
                  <FormControl>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      {...field}
                      className="h-10 rounded"
                    />
                  </FormControl>
                  <Button
                    type="button"
                    onClick={handleHidePassword}
                   
                  >
                    <Icon icon="eye" />
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-10"
            aria-label="Create a new Account"
          >
            Log In
          </Button>
        </form>
      </Form>
      <div className="flex items-center justify-center mt-6">
        <span className="text-sm ">
          Don't have an Account {/* TODO: replace with Link */}
          <a href="" className="text-primary hover:underline">
            Create an account
          </a>
        </span>
      </div>
    </>
  );
};

export default SignUp;
