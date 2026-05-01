import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const contentDir = path.join(process.cwd(), "content");

function mdToHtml(md: string): string {
  if (!md) return "";
  return marked.parse(md) as string;
}

function readMarkdownFiles<T>(dir: string): T[] {
  const fullPath = path.join(contentDir, dir);
  if (!fs.existsSync(fullPath)) return [];

  return fs
    .readdirSync(fullPath)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(fullPath, file), "utf-8");
      const { data, content } = matter(raw);
      // Convert markdown body and common markdown fields to HTML
      const result: any = { ...data, body: content, bodyHtml: mdToHtml(content) };
      if (data.challenge) result.challengeHtml = mdToHtml(data.challenge);
      if (data.solution) result.solutionHtml = mdToHtml(data.solution);
      return result as T;
    })
    .sort((a: any, b: any) => (a.order ?? 99) - (b.order ?? 99));
}

function readJsonFile<T>(filePath: string, defaultValue: T): T {
  const fullPath = path.join(contentDir, filePath);
  if (!fs.existsSync(fullPath)) return defaultValue;
  const raw = fs.readFileSync(fullPath, "utf-8");
  return JSON.parse(raw) as T;
}

import type {
  SiteSettings,
  Service,
  CaseStudy,
  Qualification,
  TeamMember,
} from "./types";

export function getSiteSettings(): SiteSettings {
  return readJsonFile<SiteSettings>("settings/site.json", {
    companyName: "实验室EPC公司",
    companyNameEn: "Lab EPC Company",
    logo: "/images/logo.svg",
    phone: "400-000-0000",
    email: "info@labepc.com",
    address: "北京市昌平区国家信息产业基地13号1046",
    wechatQr: "/images/wechat-qr.png",
    icpLicense: "京ICP备XXXXXXXX号",
    description: "专业实验室整体解决方案服务商",
  });
}

export function getServices(): Service[] {
  return readMarkdownFiles<Service>("services");
}

export function getCaseStudies(): CaseStudy[] {
  return readMarkdownFiles<CaseStudy>("cases");
}

export function getQualifications(): Qualification[] {
  return readJsonFile<Qualification[]>("settings/qualifications.json", []);
}

export function getTeamMembers(): TeamMember[] {
  return readJsonFile<TeamMember[]>("settings/team.json", []);
}

export function getCaseBySlug(slug: string): CaseStudy | null {
  const cases = getCaseStudies();
  return cases.find((c) => c.slug === slug) ?? null;
}

export function getServiceBySlug(slug: string): Service | null {
  const services = getServices();
  return services.find((s) => s.slug === slug) ?? null;
}
