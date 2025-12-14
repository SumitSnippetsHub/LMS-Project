import { Navigate, useNavigate } from "react-router-dom";

export default function Denied() {
    const naviagte = useNavigate();
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">
                403
            </h1>
            <div className="bg-black text-white px-2 text-sm rotate-12 absolute">
                Access denied
            </div>
            <button className="mt-5"
                onClick={() => naviagte(-1)}>
                <span className="relative block px-8 py-3 bg-[#1A2238] border border-current cursor-pointer">Go back</span>
            </button>
        </main>
    );
}