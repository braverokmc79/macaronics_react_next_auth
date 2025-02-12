import LoginForm from "@/components/LoginForm";


export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center m-4 ">

      <h1 className="text-3xl my-4">로그인</h1>      
      <LoginForm />
    </div>
  );
}
