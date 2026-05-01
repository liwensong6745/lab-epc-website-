"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-28 bg-[#F5F5F7]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <p className="text-[#007AFF]/40 text-[9px] tracking-[0.3em] font-medium mb-8 select-none">READY TO START</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-[#1D1D1F] tracking-tight leading-tight max-w-3xl select-none"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            告诉我们<span className="font-bold">需求</span>，<br />剩下的交给<span className="font-bold">我们</span>
          </h1>
          <p className="text-black/30 text-sm font-light mt-6 max-w-lg select-none leading-relaxed">
            专家团队将提供一对一的专业咨询
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-32 md:pb-40 bg-[#F5F5F7]">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            {/* Form card */}
            <div className="bg-white px-10 md:px-14 py-16 md:py-20 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_16px_rgba(0,0,0,0.04),0_24px_48px_rgba(0,0,0,0.06)]">
              <p className="text-[#007AFF]/40 text-[9px] tracking-[0.3em] font-medium mb-10 select-none">YOUR PROJECT</p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-12 h-12 rounded-full bg-[#1D1D1F] flex items-center justify-center mx-auto mb-8">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#1D1D1F] mb-4 select-none">消息已送达</h3>
                  <p className="text-black/25 text-sm font-light select-none">我们将在1个工作日内与您联系</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div>
                    <label className="block text-[9px] text-black/30 tracking-[0.2em] font-medium mb-4 uppercase select-none">姓名 *</label>
                    <input type="text" required className="w-full px-0 py-3 bg-transparent border-b border-black/8 focus:border-black/30 outline-none transition-colors text-[#1D1D1F] font-light text-base placeholder:text-black/12" placeholder="您的姓名" />
                  </div>
                  <div>
                    <label className="block text-[9px] text-black/30 tracking-[0.2em] font-medium mb-4 uppercase select-none">电话 *</label>
                    <input type="tel" required className="w-full px-0 py-3 bg-transparent border-b border-black/8 focus:border-black/30 outline-none transition-colors text-[#1D1D1F] font-light text-base placeholder:text-black/12" placeholder="您的联系电话" />
                  </div>
                  <div>
                    <label className="block text-[9px] text-black/30 tracking-[0.2em] font-medium mb-4 uppercase select-none">邮箱</label>
                    <input type="email" className="w-full px-0 py-3 bg-transparent border-b border-black/8 focus:border-black/30 outline-none transition-colors text-[#1D1D1F] font-light text-base placeholder:text-black/12" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-[9px] text-black/30 tracking-[0.2em] font-medium mb-4 uppercase select-none">项目类型</label>
                    <select className="w-full px-0 py-3 bg-transparent border-b border-black/8 focus:border-black/30 outline-none transition-colors text-[#1D1D1F] font-light text-base text-black/35">
                      <option value="" className="text-black/15">请选择项目类型</option>
                      <option>新建实验室</option>
                      <option>实验室改造升级</option>
                      <option>专项系统建设</option>
                      <option>咨询服务</option>
                      <option>其他</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[9px] text-black/30 tracking-[0.2em] font-medium mb-4 uppercase select-none">需求描述 *</label>
                    <textarea required rows={4} className="w-full px-0 py-3 bg-transparent border-b border-black/8 focus:border-black/30 outline-none transition-colors text-[#1D1D1F] font-light text-base resize-none placeholder:text-black/12" placeholder="请简要描述您的项目需求" />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-3 px-10 py-4 bg-[#1D1D1F] text-white text-sm tracking-[0.1em] font-medium hover:bg-[#007AFF] transition-all duration-500 select-none">
                    提交咨询
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Info card */}
            <div className="bg-white px-10 md:px-14 py-16 md:py-20 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_16px_rgba(0,0,0,0.04),0_24px_48px_rgba(0,0,0,0.06)]">
              <p className="text-[#007AFF]/40 text-[9px] tracking-[0.3em] font-medium mb-10 select-none">CONTACT</p>

              <div className="space-y-10">
                {[
                  { icon: "phone", label: "电话", value: "400-888-6666" },
                  { icon: "email", label: "邮箱", value: "ruihuizhuye@126.com" },
                  { icon: "location", label: "地址", value: "北京市昌平区国家信息产业基地13号1046" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full border border-black/8 flex items-center justify-center shrink-0 text-black/20">
                      {item.icon === "phone" && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      )}
                      {item.icon === "email" && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      )}
                      {item.icon === "location" && (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="text-[9px] text-black/25 tracking-[0.2em] font-medium mb-1 select-none">{item.label}</p>
                      <p className="text-sm text-black/40 font-light select-none">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 pt-12 border-t border-black/5">
                <p className="text-[9px] text-black/20 tracking-[0.2em] font-medium mb-4 uppercase select-none">工作时间</p>
                <p className="text-sm text-black/25 font-light select-none">周一至周五 9:00 – 18:00</p>
                <p className="text-sm text-black/20 font-light select-none mt-1">周六 10:00 – 16:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
