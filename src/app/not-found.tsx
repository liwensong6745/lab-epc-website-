import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F7]">
      <div className="text-center px-8">
        <div className="text-9xl font-black text-black/2 leading-none">404</div>
        <h1 className="text-2xl font-bold text-[#1D1D1F] mt-8 mb-4 tracking-tight">页面未找到</h1>
        <p className="text-text-secondary font-light mb-12">您访问的页面不存在或已被移除</p>
        <Link href="/" className="inline-flex items-center px-10 py-4 bg-[#1D1D1F] text-white font-medium text-sm tracking-wider rounded-md btn-shadow hover:bg-[#007AFF] transition-all">
          返回首页
        </Link>
      </div>
    </div>
  );
}
