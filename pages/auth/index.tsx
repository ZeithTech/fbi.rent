"use client"

import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { NextPageContext } from 'next';
import { getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FaDiscord, FaGithub } from 'react-icons/fa';

import Input from '@/components/Input';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

const Auth = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
  }, []);

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    if (error) {
      // Set a timeout to clear the error message after 2 seconds
      const timeoutId = setTimeout(clearError, 5000); // 2000 milliseconds = 2 seconds

      // Clean up the timeout when the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [error]);

  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        username,
        password,
        redirect: false,
        callbackUrl: '/'
      });

      router.push('/dashboard');
    } catch (error:any) {
        console.log(error);
        setError('Check your information');
    }
  
  }, [username, password, error, router]);

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        username,
        password
      });

      login();
    } catch (error:any) {
          if(error.response.status === 422) {
            setError('Username already exists');
          } else {
            setError('Check your information');
          }
    }
  }, [ username, password, error, login]);

  return (
<div className="relative min-h-screen w-full bg-[url('https://cdn.discordapp.com/attachments/870233972611903528/1166266984296620052/canvass1.png?ex=6549ddc5&is=653768c5&hm=8d7d3853d0c54cdc8226f741540ee44bcc84e836790cf1bf833d437fd5c84151&')] bg-no-repeat bg-center bg-fixed bg-cover bg-size: cover">
  <div className="bg-black w-full min-h-screen lg:bg-opacity-30">
    <div className="flex justify-center">
      <div className="bg-black bg-opacity-50 px-16 py-16 self-center mt-24 lg:w-2/5 lg:max-w-md rounded-md w-full">
        <h2 className="text-white text-4xl mb-8 font-semibold">
          {variant === 'login' ? 'Sign in' : 'Register'}
        </h2>
        <div className="flex flex-col gap-4">
          <Input
            id="username"
            type="text"
            label="Username"
            value={username}
            onChange={(e: any) => setUsername(e.target.value)} 
          />
          <Input
            type="password" 
            id="password" 
            label="Password" 
            value={password}
            onChange={(e: any) => setPassword(e.target.value)} 
          />
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button onClick={variant === 'login' ? login : register} className="bg-zinc-900	 py-3 text-white rounded-md w-full mt-10 hover:bg-zinc-500 transition">
          {variant === 'login' ? 'Login' : 'Sign up'}
        </button>
        <div className="flex flex-row items-center gap-4 mt-8 justify-center">
          <div onClick={() => signIn('discord', { callbackUrl: '/profiles' })} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
            <FaDiscord size={32} />
          </div>
        </div>
        <p className="text-neutral-500 mt-12">
          {variant === 'login' ? 'First time haha?' : 'Already have an account?'}
          <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
            {variant === 'login' ? 'Create an account' : 'Login'}
          </span>
          .
        </p>
      </div>
    </div>
  </div>
</div>
  );
}

export default Auth;
