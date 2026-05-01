import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "RayHo 瑞辉筑业 — 实验室整体解决方案",
  description:
    "北京瑞辉筑业实验室科技有限公司，专业实验室EPC服务商，提供实验室规划、设计、施工、设备采购、调试维护一站式服务",
  keywords: "实验室工程,实验室设计,实验室建设,EPC,洁净室,暖通空调,供气系统",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
