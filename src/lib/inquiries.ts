export type Inquiry = {
  id: string;
  name: string;
  phone: string;
  email: string;
  session: string;
  note: string;
  createdAt: string;
};

const KEY = "jmf-inquiries";

export function loadInquiries(): Inquiry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Inquiry[]) : [];
  } catch {
    return [];
  }
}

export function saveInquiry(data: Omit<Inquiry, "id" | "createdAt">): Inquiry {
  const inquiry: Inquiry = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const next = [inquiry, ...loadInquiries()].slice(0, 20);
  localStorage.setItem(KEY, JSON.stringify(next));
  return inquiry;
}
