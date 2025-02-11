import LoginForm from "@/components/LoginForm";
import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-4 ">

      <h1 className="text-3xl my-4">로그인</h1>
      
      <LoginForm />

    </div>
  );
}
