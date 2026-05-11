"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      {/* ═══════ Hero ═══════ */}
      <section className="pt-40 md:pt-52 pb-20 md:pb-28 bg-white">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <p className="text-[#007AFF]/35 text-[9px] tracking-[0.3em] font-medium mb-8 select-none">READY TO START</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-[#1D1D1F] tracking-tight leading-tight max-w-3xl select-none"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            告诉我们<span className="font-bold">需求</span>，<br />剩下的交给<span className="font-bold">我们</span>
          </h1>
          <p className="text-black/30 text-sm font-light mt-6 max-w-lg select-none leading-relaxed">
            专家团队将提供一对一的专业咨询
          </p>
        </div>
      </section>

      {/* ═══════ Contact + Form ═══════ */}
      <section className="pt-20 md:pt-32 pb-24 md:pb-32 bg-white">
        <div className="max-w-2xl mx-auto px-8 lg:px-16">
          {/* Contact Info */}
          <div className="mb-14">
            <div className="w-8 h-px bg-black/[0.12] mb-6" />
            <p className="text-black/50 text-2xl md:text-3xl font-light tracking-tight mb-3 select-none"
              style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
              联系我们
            </p>
            <p className="text-[#007AFF]/35 text-[9px] tracking-[0.3em] font-medium mb-10 select-none">CONTACT</p>
            <div className="space-y-4 mb-10 text-sm font-light select-none">
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-full bg-[#1D1D1F] flex items-center justify-center shrink-0 text-white/70">
                  <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                    <circle cx="12" cy="12" r="9" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                  </svg>
                </div>
                <span className="text-black/40">周一至周五 9:00 – 18:00</span>
                <span className="text-black/25">· 周六 10:00 – 16:00</span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-full bg-[#1D1D1F] flex items-center justify-center shrink-0 text-white/70">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-black/40">400-888-6666</span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-full bg-[#1D1D1F] flex items-center justify-center shrink-0 text-white/70">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-black/40">ruihuizhuye@126.com</span>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-full bg-[#1D1D1F] flex items-center justify-center shrink-0 text-white/70">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-black/40">北京市昌平区国家信息产业基地13号1046</span>
              </div>
            </div>
          </div>

          <div className="w-16 h-px bg-black/[0.08] mb-10" />
          <p className="text-black/50 text-2xl md:text-3xl font-light tracking-tight mb-3 select-none"
            style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 300 }}>
            留言
          </p>
          <p className="text-[#007AFF]/35 text-[9px] tracking-[0.3em] font-medium mb-8 select-none">MESSAGE</p>

          {submitted ? (
            <div className="py-8">
              <div className="w-10 h-10 rounded-full bg-[#1D1D1F] flex items-center justify-center mb-6">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1D1D1F] mb-3 select-none">消息已送达</h3>
              <p className="text-black/25 text-sm font-light select-none">我们将在1个工作日内与您联系</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label className="block text-sm text-black/60 font-light mb-2 select-none">姓名</label>
                <input type="text" required className="w-full py-2 bg-transparent border border-black/[0.15] focus:border-black/40 outline-none transition-colors text-[#1D1D1F] font-light text-sm placeholder:text-black/20 rounded-md px-4" placeholder="您的姓名" />
              </div>
              <div>
                <label className="block text-sm text-black/60 font-light mb-2 select-none">电话</label>
                <input type="tel" required className="w-full py-2 bg-transparent border border-black/[0.15] focus:border-black/40 outline-none transition-colors text-[#1D1D1F] font-light text-sm placeholder:text-black/20 rounded-md px-4" placeholder="您的联系电话" />
              </div>
              <div>
                <label className="block text-sm text-black/60 font-light mb-2 select-none">邮箱</label>
                <input type="email" className="w-full py-2 bg-transparent border border-black/[0.15] focus:border-black/40 outline-none transition-colors text-[#1D1D1F] font-light text-sm placeholder:text-black/20 rounded-md px-4" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm text-black/60 font-light mb-2 select-none">留言类型</label>
                <select className="w-full py-2 bg-transparent border border-black/[0.15] focus:border-black/40 outline-none transition-colors text-[#1D1D1F] font-light text-sm rounded-md px-4">
                  <option value="" className="text-black/15">请选择留言类型</option>
                  <option>项目咨询</option>
                  <option>加入我们</option>
                  <option>其他</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-black/60 font-light mb-2 select-none">描述</label>
                <textarea required rows={4} className="w-full py-2 bg-transparent border border-black/[0.15] focus:border-black/40 outline-none transition-colors text-[#1D1D1F] font-light text-sm resize-none placeholder:text-black/20 rounded-md px-4" placeholder="请简要描述您的项目需求" />
              </div>
              <button type="submit" className="inline-flex items-center gap-3 px-10 py-3.5 bg-[#1D1D1F] text-white text-sm tracking-[0.1em] font-medium rounded-full hover:bg-[#007AFF] transition-all duration-500 select-none">
                提交
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
