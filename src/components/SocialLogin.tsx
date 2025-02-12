"use client";


import React from "react";
import { doSocialLogin } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook, FaApple } from "react-icons/fa";
import { SiNaver, SiKakaotalk } from "react-icons/si";


const SocialLogin: React.FC = () => {

    
    return (

        <form action={doSocialLogin} className="space-y-2">
          {/* 구글 로그인 */}
          <Button
            type="submit"
            name="action"
            value="google"
            className="w-full flex items-center gap-2 bg-white text-black border border-gray-300 hover:bg-gray-100"
          >
            <FcGoogle className="text-xl" />
            구글 로그인
          </Button>

          {/* 깃허브 로그인 */}
          <Button
            type="submit"
            name="action"
            value="github"
            className="w-full flex items-center gap-2 bg-black text-white hover:bg-gray-800"
          >
            <FaGithub className="text-xl" />
            깃허브 로그인
          </Button>

          {/* 네이버 로그인 */}
          <Button
            type="submit"
            name="action"
            value="naver"
            className="w-full flex items-center gap-2 bg-[#03C75A] text-white hover:bg-[#029d4d]"
          >
            <SiNaver className="text-xl" />
            네이버 로그인
          </Button>

          {/* 카카오 로그인 */}
          <Button
            type="submit"
            name="action"
            value="kakao"
            className="w-full flex items-center gap-2 bg-[#FEE500] text-black hover:bg-[#ecd400]"
          >
            <SiKakaotalk className="text-xl" />
            카카오 로그인
          </Button>

          {/* 페이스북 로그인 */}
          <Button
            type="submit"
            name="action"
            value="facebook"
            className="w-full flex items-center gap-2 bg-[#1877F2] text-white hover:bg-[#1558b6]"
          >
            <FaFacebook className="text-xl" />
            페이스북 로그인
          </Button>

          {/* 애플 로그인 */}
          <Button
            type="submit"
            name="action"
            value="apple"
            className="w-full flex items-center gap-2 bg-black text-white hover:bg-gray-800"
          >
            <FaApple className="text-xl" />
            애플 로그인
          </Button>
        </form>
    );
};

export default SocialLogin;
