import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="text-center px-8">
        <div className="text-9xl font-black text-subtle leading-none">404</div>
        <h1 className="text-2xl font-bold text-dark mt-8 mb-4 tracking-tight">页面未找到</h1>
        <p className="text-text-secondary font-light mb-12">您访问的页面不存在或已被移除</p>
        <Link href="/" className="inline-flex items-center px-10 py-4 bg-dark text-white font-medium text-sm tracking-wider hover:bg-accent transition-colors">
          返回首页
        </Link>
      </div>
    </div>
  );
}
