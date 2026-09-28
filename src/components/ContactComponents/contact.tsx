// import React, { useState, ChangeEvent, FormEvent } from "react";
// import { Mail, MapPin, Phone } from "lucide-react";
// import emailjs from "@emailjs/browser";

// // 1. Create a free account at https://www.emailjs.com
// // 2. Add an Email Service (e.g. Gmail) -> copy the Service ID
// // 3. Create an Email Template -> copy the Template ID
// //    Reference these variables in your template body:
// //    {{from_name}}  {{from_email}}  {{project_type}}  {{message}}
// // 4. Account -> General -> copy your Public Key
// const EMAILJS_SERVICE_ID = "service_7hc6uli";
// const EMAILJS_TEMPLATE_ID = "template_fni6mgr";
// const EMAILJS_PUBLIC_KEY = "a8W05Bi3SM5Z8J3au";

// const CONTACT_EMAIL = "ahadm3016@gmail.com";

// // Opens Gmail's web compose window directly (in a new tab) instead of
// // falling back to the device's default mail client via mailto:.
// const buildGmailComposeUrl = ({
//   to,
//   subject,
//   body,
// }: {
//   to: string;
//   subject?: string;
//   body?: string;
// }) => {
//   const params = new URLSearchParams({
//     view: "cm",
//     fs: "1",
//     to,
//     ...(subject ? { su: subject } : {}),
//     ...(body ? { body } : {}),
//   });
//   return `https://mail.google.com/mail/?${params.toString()}`;
// };

// const GMAIL_COMPOSE_URL = buildGmailComposeUrl({
//   to: CONTACT_EMAIL,
//   subject: "Let's work together",
//   body: "Hi Ahad,\n\nI'd like to connect about...",
// });

// const PROJECT_TYPES = [
//   "Product design",
//   "Front-end build",
//   "Full project",
//   "Not sure yet",
// ] as const;

// type ProjectType = (typeof PROJECT_TYPES)[number] | "";

// interface ContactFormState {
//   name: string;
//   email: string;
//   type: ProjectType;
//   message: string;
// }

// type SubmitStatus = "idle" | "sending" | "sent" | "error";

// interface ContactRowProps {
//   icon: React.ElementType;
//   label: string;
//   value: string;
//   href?: string;
//   target?: string;
//   rel?: string;
// }

// function ContactRow({
//   icon: Icon,
//   label,
//   value,
//   href,
//   target,
//   rel,
// }: ContactRowProps) {
//   return (
//     <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-[#15919B] py-3 text-sm font-medium sm:text-base">
//       <span className="flex shrink-0 items-center gap-2.5 text-black">
//         <Icon
//           size={18}
//           strokeWidth={1.75}
//           className="text-[#094c51]"
//           aria-hidden="true"
//         />
//         {label}
//       </span>
//       {href ? (
//         <a
//           href={href}
//           target={target}
//           rel={rel}
//           className="min-w-0 break-all text-black hover:text-[#15919B] motion-safe:transition-colors"
//         >
//           {value}
//         </a>
//       ) : (
//         <span className="min-w-0 break-words text-black">{value}</span>
//       )}
//     </div>
//   );
// }

// const fieldClasses =
//   "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base sm:text-sm text-slate-900 " +
//   "placeholder:text-slate-400 outline-none motion-safe:transition-all " +
//   "shadow-[0_1px_0_rgba(255,255,255,0.9),inset_0_2px_4px_rgba(15,23,42,0.06)] " +
//   "focus:border-[#15919B] focus:shadow-[0_1px_0_rgba(255,255,255,0.9),inset_0_2px_4px_rgba(15,23,42,0.06),0_0_0_3px_rgba(21,145,155,0.15)] " +
//   "disabled:opacity-50";

// const Contact = () => {
//   const [form, setForm] = useState<ContactFormState>({
//     name: "",
//     email: "",
//     type: "",
//     message: "",
//   });
//   const [status, setStatus] = useState<SubmitStatus>("idle");
//   const [showOther, setShowOther] = useState(false);
//   const [otherText, setOtherText] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleChange =
//     (field: keyof ContactFormState) =>
//     (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
//       setForm((f) => ({ ...f, [field]: e.target.value }));

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!form.name || !form.email || !form.message) return;
//     if (showOther && !otherText.trim()) {
//       setErrorMsg("Please tell me what you need in the Others field.");
//       setStatus("error");
//       return;
//     }

//     setErrorMsg("");
//     setStatus("sending");
//     try {
//       await emailjs.send(
//         EMAILJS_SERVICE_ID,
//         EMAILJS_TEMPLATE_ID,
//         {
//           from_name: form.name,
//           from_email: form.email,
//           project_type: showOther
//             ? otherText.trim()
//               ? `Others: ${otherText.trim()}`
//               : "Others"
//             : form.type || "Not specified",
//           message:
//             showOther && otherText.trim()
//               ? `${form.message}\n\n(Looking for: ${otherText.trim()})`
//               : form.message,
//           other_text: showOther ? otherText.trim() : "",
//         },
//         { publicKey: EMAILJS_PUBLIC_KEY },
//       );
//       setStatus("sent");
//     } catch (err) {
//       console.error("EmailJS send failed:", err);
//       const detail =
//         (err as { text?: string; message?: string })?.text ||
//         (err as { message?: string })?.message ||
//         "";
//       setErrorMsg(
//         `Something went wrong sending that${detail ? ` (${detail})` : ""}. Please try again, or email me directly at ${CONTACT_EMAIL}.`,
//       );
//       setStatus("error");
//     }
//   };

//   const sending = status === "sending";

//   const resetForm = () => {
//     setForm({ name: "", email: "", type: "", message: "" });
//     setShowOther(false);
//     setOtherText("");
//     setErrorMsg("");
//     setStatus("idle");
//   };

//   return (
//     <div className="mt-16 min-h-[calc(100vh-4rem)] w-full bg-[#FAFAFA] font-sans antialiased">
//       <div className="grid min-h-[inherit] w-full grid-cols-1 md:grid-cols-5">
//         {/* Left panel: intro + contact details */}
//         <div className="flex flex-col justify-between gap-10 border-b border-slate-200 px-5 py-8 sm:px-8 sm:py-10 md:col-span-2 md:gap-12 md:border-b-0 md:border-r md:px-10 md:py-14 lg:px-14 xl:px-[5vw]">
//           <div>
//             <h1
//               style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//               className="max-w-md text-4xl font-normal leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl xl:text-7xl"
//             >
//               Say <span className="text-[#15919B]">hello</span>.
//             </h1>
//             <p className="mt-4 max-w-sm text-base leading-relaxed text-[#565151e3] sm:mt-6 xl:max-w-md xl:text-lg">
//               I take on a handful of design and development projects each
//               quarter. Tell me what you're building and I'll get back to you
//               within two days.
//             </p>
//           </div>

//           <div className="w-full">
//             <ContactRow
//               icon={Mail}
//               label="Email"
//               value={CONTACT_EMAIL}
//               href={GMAIL_COMPOSE_URL}
//               target="_blank"
//               rel="noopener noreferrer"
//             />
//             <ContactRow
//               icon={MapPin}
//               label="Location"
//               value="Dhaka, Bangladesh"
//             />
//             <ContactRow
//               icon={Phone}
//               label="Phone"
//               value="+880 1322959861"
//               href="tel:+8801322959861"
//             />
//           </div>
//         </div>

//         {/* Right panel: form */}
//         <div className="flex items-center bg-[#FAFAFA] px-5 py-8 sm:px-8 sm:py-10 md:col-span-3 md:px-10 md:py-14 lg:px-14 xl:px-[5vw]">
//           {status !== "sent" ? (
//             <form onSubmit={handleSubmit} className="w-full max-w-xl">
//               <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="mb-2 block text-sm text-slate-500"
//                   >
//                     Your name
//                   </label>
//                   <input
//                     id="name"
//                     type="text"
//                     required
//                     disabled={sending}
//                     value={form.name}
//                     onChange={handleChange("name")}
//                     placeholder="Jordan Lee"
//                     className={fieldClasses}
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="mb-2 block text-sm text-slate-500"
//                   >
//                     Email
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     required
//                     disabled={sending}
//                     value={form.email}
//                     onChange={handleChange("email")}
//                     placeholder="jordan@studio.com"
//                     className={fieldClasses}
//                   />
//                 </div>
//               </div>

//               <div className="mt-8">
//                 <span className="mb-3 block text-sm text-slate-500">
//                   What are you looking for
//                 </span>
//                 <div className="flex flex-wrap gap-2">
//                   {PROJECT_TYPES.map((t) => {
//                     const active = form.type === t;
//                     return (
//                       <button
//                         type="button"
//                         key={t}
//                         disabled={sending}
//                         aria-pressed={active}
//                         onClick={() => {
//                           setForm((f) => ({ ...f, type: t as ProjectType }));
//                           setShowOther(false);
//                         }}
//                         className={
//                           "rounded-full border px-3.5 py-2 text-sm motion-safe:transition-all disabled:opacity-50 " +
//                           (active && !showOther
//                             ? "border-[#15919B] bg-[#15919B]/10 text-[#0f6b72] shadow-[0_2px_6px_rgba(21,145,155,0.25)]"
//                             : "border-slate-200 bg-white text-slate-500 shadow-[0_1px_2px_rgba(15,23,42,0.06)] hover:border-slate-400 hover:text-slate-900")
//                         }
//                       >
//                         {t}
//                       </button>
//                     );
//                   })}

//                   {/* Others: reveals a hidden text input on click */}
//                   <button
//                     type="button"
//                     disabled={sending}
//                     aria-pressed={showOther}
//                     aria-expanded={showOther}
//                     aria-controls="other-type"
//                     onClick={() => {
//                       setShowOther((s) => !s);
//                       setForm((f) => ({ ...f, type: "" }));
//                     }}
//                     className={
//                       "rounded-full border px-3.5 py-2 text-sm motion-safe:transition-all disabled:opacity-50 " +
//                       (showOther
//                         ? "border-[#15919B] bg-[#15919B]/10 text-[#0f6b72] shadow-[0_2px_6px_rgba(21,145,155,0.25)]"
//                         : "border-slate-200 bg-white text-slate-500 shadow-[0_1px_2px_rgba(15,23,42,0.06)] hover:border-slate-400 hover:text-slate-900")
//                     }
//                   >
//                     Others
//                   </button>
//                 </div>

//                 {showOther && (
//                   <input
//                     id="other-type"
//                     type="text"
//                     autoFocus
//                     required
//                     disabled={sending}
//                     value={otherText}
//                     onChange={(e) => setOtherText(e.target.value)}
//                     placeholder="Tell me what you need"
//                     aria-label="Other project type"
//                     className={fieldClasses + " mt-3"}
//                   />
//                 )}
//               </div>

//               <div className="mt-8">
//                 <label
//                   htmlFor="message"
//                   className="mb-2 block text-sm text-slate-500"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={5}
//                   required
//                   disabled={sending}
//                   value={form.message}
//                   onChange={handleChange("message")}
//                   placeholder="What are you working on?"
//                   className={fieldClasses + " resize-none"}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={sending}
//                 className="group relative mt-8 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full
//     bg-gradient-to-r from-[#1E5470] to-[#2a7fa3] px-6 py-3 font-semibold text-white
//     shadow-lg shadow-[#2a7fa3]/20 sm:mt-10 sm:w-auto
//     hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#2a7fa3]/40
//     active:translate-y-0 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60
//     transition-all duration-300"
//               >
//                 <span
//                   className="absolute inset-0 -translate-x-full skew-x-12
//       bg-gradient-to-r from-transparent via-white/25 to-transparent
//       transition-transform duration-700 ease-out group-hover:translate-x-full"
//                 />
//                 <span className="relative">
//                   {sending ? "Sending..." : "Submit"}
//                 </span>
//               </button>

//               {status === "error" && (
//                 <p className="mt-4 text-sm text-red-600" role="alert">
//                   {errorMsg ||
//                     `Something went wrong sending that. Please try again, or email me directly at ${CONTACT_EMAIL}.`}
//                 </p>
//               )}
//             </form>
//           ) : (
//             <div className="max-w-sm" role="status">
//               <h2
//                 style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//                 className="mb-3 text-3xl font-normal text-slate-900"
//               >
//                 Message sent.
//               </h2>
//               <p className="break-words text-base leading-relaxed text-slate-500">
//                 Thanks, {form.name.split(" ")[0]}. I'll reply to {form.email}{" "}
//                 within two business days.
//               </p>
//               <button
//                 type="button"
//                 onClick={resetForm}
//                 className="mt-6 rounded-full border border-[#15919B] px-5 py-2.5 text-sm font-medium text-[#0f6b72] hover:bg-[#15919B]/10 motion-safe:transition-colors"
//               >
//                 Send another message
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
// =====================================================

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

type SubmitStatus = "idle" | "sending" | "sent" | "error";

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
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-[#15919B] py-3 text-sm font-medium sm:text-base">
      <span className="flex shrink-0 items-center gap-2.5 text-black">
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
          className="min-w-0 break-all text-black hover:text-[#15919B] motion-safe:transition-colors"
        >
          {value}
        </a>
      ) : (
        <span className="min-w-0 break-words text-black">{value}</span>
      )}
    </div>
  );
}

const fieldClasses =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base sm:text-sm text-slate-900 " +
  "placeholder:text-slate-400 outline-none motion-safe:transition-all " +
  "shadow-[0_1px_0_rgba(255,255,255,0.9),inset_0_2px_4px_rgba(15,23,42,0.06)] " +
  "focus:border-[#15919B] focus:shadow-[0_1px_0_rgba(255,255,255,0.9),inset_0_2px_4px_rgba(15,23,42,0.06),0_0_0_3px_rgba(21,145,155,0.15)] " +
  "disabled:opacity-50";

const Contact = ({ onBack }: { onBack?: () => void }) => {
  // Pass onBack={() => navigate("/")} if you use react-router.
  // Without it, we fall back to a plain redirect to "/".
  const goHome = () => {
    if (onBack) onBack();
    else window.location.assign("/");
  };
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [showOther, setShowOther] = useState(false);
  const [otherText, setOtherText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange =
    (field: keyof ContactFormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    if (showOther && !otherText.trim()) {
      setErrorMsg("Please tell me what you need in the Others field.");
      setStatus("error");
      return;
    }

    setErrorMsg("");
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          project_type: showOther
            ? otherText.trim()
              ? `Others: ${otherText.trim()}`
              : "Others"
            : form.type || "Not specified",
          message:
            showOther && otherText.trim()
              ? `${form.message}\n\n(Looking for: ${otherText.trim()})`
              : form.message,
          other_text: showOther ? otherText.trim() : "",
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("sent");
    } catch (err) {
      console.error("EmailJS send failed:", err);
      const detail =
        (err as { text?: string; message?: string })?.text ||
        (err as { message?: string })?.message ||
        "";
      setErrorMsg(
        `Something went wrong sending that${detail ? ` (${detail})` : ""}. Please try again, or email me directly at ${CONTACT_EMAIL}.`,
      );
      setStatus("error");
    }
  };

  const sending = status === "sending";

  const resetForm = () => {
    setForm({ name: "", email: "", type: "", message: "" });
    setShowOther(false);
    setOtherText("");
    setErrorMsg("");
    setStatus("idle");
  };

  return (
    <div className="mt-16 min-h-[calc(100vh-4rem)] w-full bg-[#FAFAFA] font-sans antialiased">
      <div className="mx-auto grid min-h-[inherit] w-full max-w-7xl grid-cols-1 md:grid-cols-5">
        {/* Left panel: intro + contact details */}
        <div className="flex flex-col justify-between gap-10 border-b border-slate-200 px-5 py-10 sm:px-8 md:col-span-2 md:gap-12 md:border-b-0 md:border-r md:px-10 md:py-14 lg:px-14 xl:px-[4vw]">
          <div>
            <h1
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              className="max-w-md text-4xl font-normal leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Say <span className="text-[#15919B]">hello</span>.
            </h1>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-[#565151e3] sm:mt-6 xl:max-w-md xl:text-lg">
              I take on a handful of design and development projects each
              quarter. Tell me what you're building and I'll get back to you
              within two days.
            </p>
          </div>

          <div className="w-full">
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
        <div className="flex items-center px-5 py-10 sm:px-8 md:col-span-3 md:px-10 md:py-14 lg:px-14 xl:px-[4vw]">
          {status !== "sent" ? (
            <form onSubmit={handleSubmit} className="w-full max-w-xl">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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

                <div>
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
                        aria-pressed={active}
                        onClick={() => {
                          setForm((f) => ({ ...f, type: t as ProjectType }));
                          setShowOther(false);
                        }}
                        className={
                          "rounded-full border px-3.5 py-2 text-sm motion-safe:transition-all disabled:opacity-50 " +
                          (active && !showOther
                            ? "border-[#15919B] bg-[#15919B]/10 text-[#0f6b72] shadow-[0_2px_6px_rgba(21,145,155,0.25)]"
                            : "border-slate-200 bg-white text-slate-500 shadow-[0_1px_2px_rgba(15,23,42,0.06)] hover:border-slate-400 hover:text-slate-900")
                        }
                      >
                        {t}
                      </button>
                    );
                  })}

                  {/* Others: reveals a hidden text input on click */}
                  <button
                    type="button"
                    disabled={sending}
                    aria-pressed={showOther}
                    aria-expanded={showOther}
                    aria-controls="other-type"
                    onClick={() => {
                      setShowOther((s) => !s);
                      setForm((f) => ({ ...f, type: "" }));
                    }}
                    className={
                      "rounded-full border px-3.5 py-2 text-sm motion-safe:transition-all disabled:opacity-50 " +
                      (showOther
                        ? "border-[#15919B] bg-[#15919B]/10 text-[#0f6b72] shadow-[0_2px_6px_rgba(21,145,155,0.25)]"
                        : "border-slate-200 bg-white text-slate-500 shadow-[0_1px_2px_rgba(15,23,42,0.06)] hover:border-slate-400 hover:text-slate-900")
                    }
                  >
                    Others
                  </button>
                </div>

                {showOther && (
                  <input
                    id="other-type"
                    type="text"
                    autoFocus
                    required
                    disabled={sending}
                    value={otherText}
                    onChange={(e) => setOtherText(e.target.value)}
                    placeholder="Tell me what you need"
                    aria-label="Other project type"
                    className={fieldClasses + " mt-3"}
                  />
                )}
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
                  rows={5}
                  required
                  disabled={sending}
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="What are you working on?"
                  className={fieldClasses + " resize-none"}
                />
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={sending}
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full
    bg-gradient-to-r from-[#1E5470] to-[#2a7fa3] px-6 py-3 font-semibold text-white
    shadow-lg shadow-[#2a7fa3]/20 sm:w-auto
    hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#2a7fa3]/40
    active:translate-y-0 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60
    transition-all duration-300"
                >
                  <span
                    className="absolute inset-0 -translate-x-full skew-x-12
      bg-gradient-to-r from-transparent via-white/25 to-transparent
      transition-transform duration-700 ease-out group-hover:translate-x-full"
                  />
                  <span className="relative">
                    {sending ? "Sending..." : "Submit"}
                  </span>
                </button>
              </div>

              {status === "error" && (
                <p className="mt-4 text-sm text-red-600" role="alert">
                  {errorMsg ||
                    `Something went wrong sending that. Please try again, or email me directly at ${CONTACT_EMAIL}.`}
                </p>
              )}
            </form>
          ) : (
            <div className="max-w-sm" role="status">
              <h2
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                className="mb-3 text-3xl font-normal text-slate-900"
              >
                Message sent.
              </h2>
              <p className="break-words text-base leading-relaxed text-slate-500">
                Thanks, {form.name.split(" ")[0]}. I'll reply to {form.email}{" "}
                within two business days.
              </p>
              {/* <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-6 rounded-full border border-[#15919B] px-5 py-2.5 text-sm font-medium text-[#0f6b72] hover:bg-[#15919B]/10 motion-safe:transition-colors"
                >
                  Send another message
                </button>
                <button
                  type="button"
                  onClick={goHome}
                  disabled={sending}
                  className="w-full rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-600 hover:border-slate-400 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-60 motion-safe:transition-colors sm:w-auto"
                >
                  Cancel
                </button>
              </div> */}
              <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={resetForm}
                  className="w-full rounded-full border border-[#15919B] px-5 py-2.5 text-sm font-medium text-[#0f6b72] transition-colors hover:bg-[#15919B]/10 sm:w-auto"
                >
                  Send another message
                </button>

                <button
                  type="button"
                  onClick={goHome}
                  disabled={sending}
                  className="w-full rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
