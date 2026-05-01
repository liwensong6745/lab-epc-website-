"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <section className="pt-40 pb-24 bg-dark">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <p className="text-accent text-xs font-medium tracking-[0.25em] uppercase mb-6">Contact</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none mb-6">联系我们</h1>
          <p className="text-lg text-white/40 font-light max-w-xl">期待与您的合作</p>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <h2 className="text-2xl font-bold text-dark tracking-tight mb-12">发送消息</h2>
              {submitted ? (
                <div className="bg-subtle p-12 text-center">
                  <div className="w-14 h-14 bg-accent flex items-center justify-center mx-auto mb-8">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-4">消息已送达</h3>
                  <p className="text-text-secondary font-light">我们将在1个工作日内与您联系</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-medium text-dark tracking-wider uppercase mb-3">姓名 *</label>
                      <input type="text" required className="w-full px-0 py-4 bg-transparent border-b border-border focus:border-dark outline-none transition-colors text-dark font-light text-lg" placeholder="您的姓名" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-dark tracking-wider uppercase mb-3">电话 *</label>
                      <input type="tel" required className="w-full px-0 py-4 bg-transparent border-b border-border focus:border-dark outline-none transition-colors text-dark font-light text-lg" placeholder="您的联系电话" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-dark tracking-wider uppercase mb-3">邮箱</label>
                    <input type="email" className="w-full px-0 py-4 bg-transparent border-b border-border focus:border-dark outline-none transition-colors text-dark font-light text-lg" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-dark tracking-wider uppercase mb-3">项目类型</label>
                    <select className="w-full px-0 py-4 bg-transparent border-b border-border focus:border-dark outline-none transition-colors text-dark font-light text-lg">
                      <option value="">请选择项目类型</option>
                      <option>新建实验室</option>
                      <option>实验室改造升级</option>
                      <option>专项系统建设</option>
                      <option>咨询服务</option>
                      <option>其他</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-dark tracking-wider uppercase mb-3">项目需求描述 *</label>
                    <textarea required rows={4} className="w-full px-0 py-4 bg-transparent border-b border-border focus:border-dark outline-none transition-colors text-dark font-light text-lg resize-none" placeholder="请简要描述您的项目需求" />
                  </div>
                  <button type="submit" className="w-full py-5 bg-dark text-white font-medium text-sm tracking-wider uppercase hover:bg-accent transition-colors">
                    提交咨询
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark tracking-tight mb-12">联系方式</h2>
              <div className="space-y-10">
                {[
                  { title: "电话", value: "400-888-6666" },
                  { title: "邮箱", value: "ruihuizhuye@126.com" },
                  { title: "地址", value: "北京市昌平区国家信息产业基地13号1046" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-6">
                    <span className="text-accent text-xs font-medium tracking-wider w-8 shrink-0 mt-0.5">{item.title[0]}</span>
                    <div>
                      <h3 className="font-medium text-dark text-sm">{item.title}</h3>
                      <p className="text-text-secondary font-light mt-1">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 bg-subtle p-10">
                <h3 className="font-bold text-dark text-xs tracking-wider uppercase mb-8">工作时间</h3>
                <div className="text-sm text-text-secondary font-light space-y-3">
                  <p>周一至周五 9:00 – 18:00</p>
                  <p>周六 10:00 – 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
