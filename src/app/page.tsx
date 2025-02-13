"use client"


import React from 'react'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import LoginForm from '@/components/LoginForm';
import SocialLogin from '@/components/SocialLogin';
//import { useState, useEffect } from "react";

const RootAppPage: React.FC = () => {
  // const [isClient, setIsClient] = useState(false);

  // //Text content does not match server-rendered HTML
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  // if (!isClient) return null;  
  return (
    <div className='h-screen flex items-center justify-center '>
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl">로그인</CardTitle>
          <CardDescription>Macaonics.net 계정에 로그인하세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />

          <SocialLogin />
        </CardContent>
        <CardFooter className="flex justify-between">
          <small> 계정이 없으신가요?</small>
          <Button asChild variant="outline" size="sm">
            <Link href="/sign-up">회원가입</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default RootAppPage;