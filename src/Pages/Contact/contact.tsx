import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Mail, MapPin, Phone, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

// 1. Create a free account at https://www.emailjs.com
// 2. Add an Email Service (e.g. Gmail) -> copy the Service ID
// 3. Create an Email Template -> copy the Template ID
//    Reference these variables in your template body:
//    {{from_name}}  {{from_email}}  {{project_type}}  {{message}}
// 4. Account -> General -> copy your Public Key
const EMAILJS_SERVICE_ID = "service_7hc6uli";
const EMAILJS_TEMPLATE_ID = "template_fni6mgr";
const EMAILJS_PUBLIC_KEY = "a8W05Bi3SM5Z8J3au";

const CONTACT_EMAIL = "ahadm3016@gmail.com";

// Opens Gmail's web compose window directly (in a new tab) instead of
// falling back to the device's default mail client via mailto:.
const buildGmailComposeUrl = ({
  to,
  subject,
  body,
}: {
  to: string;
  subject?: string;
  body?: string;
}) => {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to,
    ...(subject ? { su: subject } : {}),
    ...(body ? { body } : {}),
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
};

const GMAIL_COMPOSE_URL = buildGmailComposeUrl({
  to: CONTACT_EMAIL,
  subject: "Let's work together",
  body: "Hi Ahad,\n\nI'd like to connect about...",
});

const PROJECT_TYPES = [
  "Product design",
  "Front-end build",
  "Full project",
  "Not sure yet",
] as const;

type ProjectType = (typeof PROJECT_TYPES)[number] | "";

interface ContactFormState {
  name: string;
  email: string;
  type: ProjectType;
  message: string;
}

type SubmitStatus = "idle" | "sending" | "sent" | "resetting" | "error";

interface ContactRowProps {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  target?: string;
  rel?: string;
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  target,
  rel,
}: ContactRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[#15919B] py-2 text-bold">
      <span className="flex items-center gap-2.5 text-black">
        <Icon
          size={18}
          strokeWidth={1.75}
          className="text-[#094c51]"
          aria-hidden="true"
        />
        {label}
      </span>
      {href ? (
        <a
          href={href}
          target={target}
          rel={rel}
          className="text-black hover:text-[#15919B] motion-safe:transition-colors text-bold"
        >
          {value}
        </a>
      ) : (
        <span className="text-black">{value}</span>
      )}
    </div>
  );
}

const fieldClasses =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 " +
  "placeholder:text-slate-400 outline-none motion-safe:transition-all " +
  "shadow-[0_1px_0_rgba(255,255,255,0.9),inset_0_2px_4px_rgba(15,23,42,0.06)] " +
  "focus:border-[#15919B] focus:shadow-[0_1px_0_rgba(255,255,255,0.9),inset_0_2px_4px_rgba(15,23,42,0.06),0_0_0_3px_rgba(21,145,155,0.15)] " +
  "disabled:opacity-50";

const Contact = () => {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange =
    (field: keyof ContactFormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          project_type: form.type || "Not specified",
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  };

  const sending = status === "sending";

  useEffect(() => {
    if (status !== "sent") return;
    const toResetting = setTimeout(() => setStatus("resetting"), 10000);
    return () => clearTimeout(toResetting);
  }, [status]);

  useEffect(() => {
    if (status !== "resetting") return;
    const toIdle = setTimeout(() => {
      setForm({ name: "", email: "", type: "", message: "" });
      setStatus("idle");
    }, 700);
    return () => clearTimeout(toIdle);
  }, [status]);

  return (
    <div className="h-full mt-16 bg-[#FAFAFA] font-sans antialiased">
      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Left panel: intro + contact details */}
        <div className="flex flex-col justify-between border-b border-slate-200 p-8 md:col-span-2 md:border-b-0 md:border-r md:p-14">
          <div>
            <h1
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              className="max-w-md text-4xl font-normal leading-tight tracking-tight text-black sm:text-5xl md:text-6xl"
            >
              Say <span className="text-[#15919B]">hello</span>.
            </h1>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-[#565151e3]">
              I take on a handful of design and development projects each
              quarter. Tell me what you're building and I'll get back to you
              within two days.
            </p>
          </div>

          <div className="mt-6 md:mt-8">
            <ContactRow
              icon={Mail}
              label="Email"
              value={CONTACT_EMAIL}
              href={GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
            />
            <ContactRow
              icon={MapPin}
              label="Location"
              value="Dhaka, Bangladesh"
            />
            <ContactRow
              icon={Phone}
              label="Phone"
              value="+880 1322959861"
              href="tel:+8801322959861"
            />
          </div>
        </div>

        {/* Right panel: form */}
        <div className="flex items-center bg-[#FAFAFA] p-8 md:col-span-3 md:p-14">
          {status === "resetting" ? (
            <div className="flex w-full max-w-md flex-col items-center gap-3 py-16 text-slate-400">
              <Loader2
                size={28}
                strokeWidth={2}
                className="animate-spin text-[#15919B]"
                aria-hidden="true"
              />
              <span className="text-sm">Loading form...</span>
            </div>
          ) : status !== "sent" ? (
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-slate-500"
                >
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  disabled={sending}
                  value={form.name}
                  onChange={handleChange("name")}
                  placeholder="Jordan Lee"
                  className={fieldClasses}
                />
              </div>

              <div className="mt-6">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-slate-500"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  disabled={sending}
                  value={form.email}
                  onChange={handleChange("email")}
                  placeholder="jordan@studio.com"
                  className={fieldClasses}
                />
              </div>

              <div className="mt-8">
                <span className="mb-3 block text-sm text-slate-500">
                  What are you looking for
                </span>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((t) => {
                    const active = form.type === t;
                    return (
                      <button
                        type="button"
                        key={t}
                        disabled={sending}
                        onClick={() =>
                          setForm((f) => ({ ...f, type: t as ProjectType }))
                        }
                        className={
                          "rounded-full border px-3.5 py-2 text-sm motion-safe:transition-all disabled:opacity-50 " +
                          (active
                            ? "border-[#15919B] bg-[#15919B]/10 text-[#0f6b72] shadow-[0_2px_6px_rgba(21,145,155,0.25)]"
                            : "border-slate-200 bg-white text-slate-500 shadow-[0_1px_2px_rgba(15,23,42,0.06)] hover:border-slate-400 hover:text-slate-900")
                        }
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-slate-500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  disabled={sending}
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="What are you working on?"
                  className={fieldClasses + " resize-none"}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="group relative mt-10 flex items-center justify-center gap-2 px-6 py-3
    rounded-full bg-gradient-to-r from-[#1E5470] to-[#2a7fa3] text-white
    font-semibold shadow-lg shadow-[#2a7fa3]/20 overflow-hidden
    hover:shadow-xl hover:shadow-[#2a7fa3]/40 hover:-translate-y-0.5
    active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:translate-y-0
    transition-all duration-300"
              >
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full
      bg-gradient-to-r from-transparent via-white/25 to-transparent
      transition-transform duration-700 ease-out skew-x-12"
                />
                <span className="relative">
                  {sending ? "Sending..." : "Submit"}
                </span>
              </button>

              {status === "error" && (
                <p className="mt-4 text-sm text-red-600">
                  Something went wrong sending that. Please try again, or email
                  me directly at {CONTACT_EMAIL}.
                </p>
              )}
            </form>
          ) : (
            <div className="max-w-sm">
              <h2
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                className="mb-3 text-3xl font-normal text-slate-900"
              >
                Message sent.
              </h2>
              <p className="text-base leading-relaxed text-slate-500">
                Thanks, {form.name.split(" ")[0]}. I'll reply to {form.email}{" "}
                within two business days.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
