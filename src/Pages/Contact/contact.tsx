import React, { useState, ChangeEvent, FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
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

type SubmitStatus = "idle" | "sending" | "sent" | "error";

interface ContactRowProps {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

function ContactRow({ icon: Icon, label, value, href }: ContactRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-t border-slate-800 py-2 text-sm">
      <span className="flex items-center gap-2.5 text-slate-400">
        <Icon
          size={16}
          strokeWidth={1.75}
          className="text-slate-500"
          aria-hidden="true"
        />
        {label}
      </span>
      {href ? (
        <a
          href={href}
          className="text-slate-50 hover:text-amber-500 motion-safe:transition-colors"
        >
          {value}
        </a>
      ) : (
        <span className="text-slate-50">{value}</span>
      )}
    </div>
  );
}

const fieldClasses =
  "w-full bg-transparent border-0 border-b border-slate-700 text-slate-50 text-base py-2.5 " +
  "placeholder-slate-600 outline-none focus:border-amber-500 motion-safe:transition-colors disabled:opacity-50";

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

  return (
    <div className="h-full mt-16 bg-slate-950 font-sans antialiased">
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,400&family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="grid grid-cols-1 md:grid-cols-5">
        {/* Left panel: intro + contact details */}
        <div className="flex flex-col justify-between border-b border-slate-800 p-8 md:col-span-2 md:border-b-0 md:border-r md:p-14">
          <div>
            <h1
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              className="max-w-md text-4xl font-normal leading-tight tracking-tight text-slate-50 sm:text-5xl md:text-6xl"
            >
              Say hello.
            </h1>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-slate-400">
              I take on a handful of design and development projects each
              quarter. Tell me what you're building and I'll get back to you
              within two days.
            </p>
          </div>

          <div className="mt-6 md:mt-8">
            <ContactRow
              icon={Mail}
              label="Email"
              value="ahadm3016@gmail.com"
              href="mailto:ahadm3016@gmail.com"
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
        <div className="flex items-center bg-slate-900 p-8 md:col-span-3 md:p-14">
          {status !== "sent" ? (
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-slate-400"
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
                  className="mb-2 block text-sm text-slate-400"
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
                <span className="mb-3 block text-sm text-slate-400">
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
                          "rounded-full border px-3.5 py-2 text-sm motion-safe:transition-colors disabled:opacity-50 " +
                          (active
                            ? "border-amber-500 bg-amber-500/10 text-amber-500"
                            : "border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-50")
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
                  className="mb-2 block text-sm text-slate-400"
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
                className="mt-10 rounded px-7 py-3.5 text-sm font-semibold text-slate-950 bg-amber-500 hover:bg-amber-400 motion-safe:transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send message"}
              </button>

              {status === "error" && (
                <p className="mt-4 text-sm text-red-400">
                  Something went wrong sending that. Please try again, or email
                  me directly at ahadm3016@gmail.com.
                </p>
              )}
            </form>
          ) : (
            <div className="max-w-sm">
              <h2
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                className="mb-3 text-3xl font-normal text-slate-50"
              >
                Message sent.
              </h2>
              <p className="text-base leading-relaxed text-slate-400">
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
