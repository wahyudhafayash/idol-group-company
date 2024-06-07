"use client";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleDetailClick = () => {
    const url = `/details/${1}`;
    router.push(url);
  };
  return (
    <main className="w-screen h-screen flex bg-slate-300 justify-center items-center">
      <button
        onClick={handleDetailClick}
        className="w-40 h-20 bg-cyan-500 hover:bg-cyan-600 rounded-md text-white"
      >
        GoToDetail
      </button>
    </main>
  );
};

export default Login;
