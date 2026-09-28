import React, { useState, ChangeEvent, FormEvent } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

// ============================================================
// EMAILJS CONFIG
// ============================================================

const EMAILJS_SERVICE_ID = "service_7hc6uli";
const EMAILJS_TEMPLATE_ID = "template_fni6mgr";
const EMAILJS_PUBLIC_KEY = "a8W05Bi3SM5Z8J3au";

const CONTACT_EMAIL = "ahadm3016@gmail.com";
const CONTACT_PHONE = "+880 1322959861";

// ============================================================
// GMAIL COMPOSE URL
// ============================================================

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

// ============================================================
// PROJECT TYPES
// ============================================================

const PROJECT_TYPES = [
  "Product design",
  "Front-end build",
  "Full project",
  "Not sure yet",
] as const;

type ProjectType = (typeof PROJECT_TYPES)[number] | "";

// ============================================================
// FORM TYPES
// ============================================================

interface ContactFormState {
  name: string;
  email: string;
  type: ProjectType;
  message: string;
}

type SubmitStatus = "idle" | "sending" | "sent" | "error";

// ============================================================
// CONTACT ROW
// ============================================================

interface ContactRowProps {
  icon: React.ElementType;
  label: string;
  value: string;
  description?: string;
  href?: string;
  target?: string;
  rel?: string;
}

function ContactRow({
  icon: Icon,
  label,
  value,
  description,
  href,
  target,
  rel,
}: ContactRowProps) {
  return (
    <div className=" group relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_8px_25px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-[#15919B]/30 hover:shadow-[0_18px_40px_rgba(15,23,42,0.09)] sm:rounded-[22px] sm:p-5 md:flex md:items-center md:gap-5 md:rounded-[26px] md:px-5 md:py-5 lg:gap-7 lg:rounded-[28px] lg:px-6 lg:py-6">
      {" "}
      {/* ICON */}{" "}
      <div className=" flex shrink-0 items-center justify-center h-11 w-11 rounded-xl bg-gradient-to-br from-[#eefafa] to-[#e8f8f8] transition-all group-hover:shadow-[0_10px_30px_rgba(13,148,136,0.10)] sm:h-6 sm:w-6 sm:rounded-[14px] md:h-8 md:w-8 md:rounded-[11px] lg:h-10 lg:w-10 lg:rounded-[12px] ">
        {" "}
        <Icon
          className=" h-4 w-4 text-[#078b8c] transition-transform duration-500 group-hover:scale-110 sm:h-5 sm:w-5 md:h-7 md:w-7 lg:h-8 lg:w-8"
          strokeWidth={1.6}
          aria-hidden="true"
        />
      </div>
      {/* DESKTOP ACCENT LINE */}
      <div className=" hidden shrink-0 h-8 w-[3px] rounded-full bg-gradient-to-b from-cyan-400 via-teal-400 to-cyan-500 md:block lg:h-12 xl:h-[80px] " />
      {/* CONTENT */}{" "}
      <div className=" min-w-0 flex-1 pt-4 md:pt-0 ">
        {" "}
        {/* LABEL */}{" "}
        <p className=" mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-xs sm:tracking-[0.22em] lg:text-sm lg:tracking-[0.26em] ">
          {" "}
          {label}{" "}
        </p>{" "}
        {/* VALUE */}{" "}
        {href ? (
          <a
            href={href}
            target={target}
            rel={rel}
            className=" block max-w-full break-words [overflow-wrap:anywhere] whitespace-normal text-base font-medium leading-snug tracking-[-0.015em] text-[#10243f] transition-colors duration-300 hover:text-[#078b8c] sm:text-lg md:text-xl lg:text-[18px] lg:leading-tight xl:text-[20px] "
          >
            {" "}
            {value}{" "}
          </a>
        ) : (
          <span className=" block max-w-full break-words [overflow-wrap:anywhere] whitespace-normal text-base font-medium leading-snug tracking-[-0.015em] text-[#10243f] sm:text-lg md:text-xl lg:text-[18px] lg:leading-tight xl:text-[20px] ">
            {" "}
            {value}{" "}
          </span>
        )}{" "}
        {/* DESCRIPTION */}{" "}
        {description && (
          <p className=" mt-2 max-w-2xl break-words text-xs leading-relaxed text-slate-400 sm:text-sm md:text-sm lg:mt-3 lg:text-base xl:text-[14px] ">
            {" "}
            {description}{" "}
          </p>
        )}{" "}
      </div>{" "}
    </div>
  );
}

// ============================================================
// INPUT STYLES
// ============================================================

const fieldClasses = `
  w-full
  rounded-xl
  border
  border-slate-200
  bg-white
  px-4
  py-3

  text-sm
  text-slate-900

  placeholder:text-slate-400

  outline-none

  shadow-[0_1px_0_rgba(255,255,255,0.9),inset_0_2px_4px_rgba(15,23,42,0.06)]

  transition-all
  duration-300

  focus:border-[#15919B]

  focus:shadow-[0_1px_0_rgba(255,255,255,0.9),inset_0_2px_4px_rgba(15,23,42,0.06),0_0_0_3px_rgba(21,145,155,0.15)]

  disabled:cursor-not-allowed
  disabled:opacity-50

  sm:text-base
`;

// ============================================================
// CONTACT PAGE
// ============================================================

const Contact = ({ onBack }: { onBack?: () => void }) => {
  // ==========================================================
  // FORM STATE
  // ==========================================================

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

  // ==========================================================
  // INPUT HANDLER
  // ==========================================================

  const handleChange =
    (field: keyof ContactFormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({
        ...current,
        [field]: e.target.value,
      }));
    };

  // ==========================================================
  // SUBMIT
  // ==========================================================

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg("Please complete all required fields.");

      setStatus("error");

      return;
    }

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
            ? `Others: ${otherText.trim()}`
            : form.type || "Not specified",

          message:
            showOther && otherText.trim()
              ? `${form.message}\n\n(Looking for: ${otherText.trim()})`
              : form.message,

          other_text: showOther ? otherText.trim() : "",
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus("sent");
    } catch (error) {
      console.error("EmailJS send failed:", error);

      const detail =
        (
          error as {
            text?: string;
            message?: string;
          }
        )?.text ||
        (
          error as {
            message?: string;
          }
        )?.message ||
        "";

      setErrorMsg(
        `Something went wrong sending that${
          detail ? ` (${detail})` : ""
        }. Please try again, or email me directly at ${CONTACT_EMAIL}.`,
      );

      setStatus("error");
    }
  };

  // ==========================================================
  // RESET
  // ==========================================================

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      type: "",
      message: "",
    });

    setShowOther(false);
    setOtherText("");
    setErrorMsg("");
    setStatus("idle");
  };

  // ==========================================================
  // HOME
  // ==========================================================

  const goHome = () => {
    if (onBack) {
      onBack();
    } else {
      window.location.assign("/");
    }
  };

  const sending = status === "sending";

  // ==========================================================
  // PAGE
  // ==========================================================

  return (
    <main
      className="
        mt-16
        min-h-[calc(100vh-4rem)]
        w-full
        bg-[#FAFAFA]
        font-sans
        antialiased
      "
    >
      <div
        className="
          mx-auto
          grid
          min-h-[inherit]
          w-full
          max-w-7xl
          grid-cols-1

          md:grid-cols-5
        "
      >
        {/* ====================================================
            LEFT SIDE
        ==================================================== */}

        <section
          className="
            flex
            flex-col
            justify-between
            gap-10

            border-b
            border-slate-200

            px-4
            py-10

            sm:px-6
            sm:py-12

            md:col-span-2
            md:gap-12
            md:border-b-0
            md:border-r
            md:px-8
            md:py-14

            lg:px-10
          "
        >
          {/* INTRO */}
          <div>
            <h1
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
              }}
              className="max-w-md text-[28px]
                font-normal
                leading-tight
                tracking-tight
                text-black

                sm:text-[40px]

                lg:text-[55px]
              "
            >
              Say <span className="text-[#15919B]">hello</span>.
            </h1>

            <p
              className="
                mt-4
                max-w-sm
                text-sm
                leading-relaxed
                text-[#565151e3]

                sm:mt-5
                sm:text-base

                lg:mt-6
                lg:text-lg

                xl:max-w-md
              "
            >
              I take on a handful of design and development projects each
              quarter. Tell me what you're building and I'll get back to you
              within two days.
            </p>
          </div>

          {/* ==================================================
              CONTACT CARDS
          ================================================== */}

          <div
            className="
              flex
              w-full
              flex-col
              gap-4

              sm:gap-5

              lg:gap-7
            "
          >
            <ContactRow
              icon={Mail}
              label="Email"
              value={CONTACT_EMAIL}
              description="Feel free to drop me a message anytime."
              href={GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
            />

            <ContactRow
              icon={MapPin}
              label="Location"
              value="Dhaka, Bangladesh"
              description="Based in Dhaka, ready for new opportunities."
            />

            <ContactRow
              icon={Phone}
              label="Phone"
              value={CONTACT_PHONE}
              description="Call or WhatsApp me anytime."
              href="tel:+8801322959861"
            />
          </div>
        </section>

        {/* ====================================================
            RIGHT SIDE
        ==================================================== */}

        <section
          className="
            flex
            min-w-0
            items-center

            px-4
            py-10

            sm:px-6
            sm:py-12

            md:col-span-3
            md:px-8
            md:py-14

            lg:px-12
          "
        >
          {status !== "sent" ? (
            <form
              onSubmit={handleSubmit}
              className="
                w-full
                max-w-2xl
              "
            >
              {/* ==================================================
                  NAME + EMAIL
              ================================================== */}

              <div
                className="
                  grid
                  grid-cols-1
                  gap-5

                  sm:grid-cols-2
                  sm:gap-6
                "
              >
                {/* NAME */}
                <div className="min-w-0">
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-slate-500
                    "
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

                {/* EMAIL */}
                <div className="min-w-0">
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-sm
                      font-medium
                      text-slate-500
                    "
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

              {/* ==================================================
                  PROJECT TYPE
              ================================================== */}

              <div className="mt-7 sm:mt-8">
                <span
                  className="
                    mb-3
                    block
                    text-sm
                    font-medium
                    text-slate-500
                  "
                >
                  What are you looking for
                </span>

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {PROJECT_TYPES.map((type) => {
                    const active = form.type === type;

                    return (
                      <button
                        key={type}
                        type="button"
                        disabled={sending}
                        aria-pressed={active}
                        onClick={() => {
                          setForm((current) => ({
                            ...current,
                            type: type as ProjectType,
                          }));

                          setShowOther(false);
                          setOtherText("");
                        }}
                        className={`
                            rounded-full
                            border
                            px-3.5
                            py-2
                            text-xs
                            font-medium
                            transition-all
                            duration-300

                            sm:text-sm

                            disabled:cursor-not-allowed
                            disabled:opacity-50

                            ${
                              active && !showOther
                                ? "border-[#15919B] bg-[#15919B]/10 text-[#0f6b72] shadow-[0_2px_6px_rgba(21,145,155,0.25)]"
                                : "border-slate-200 bg-white text-slate-500 hover:border-slate-400 hover:text-slate-900"
                            }
                          `}
                      >
                        {type}
                      </button>
                    );
                  })}

                  {/* OTHERS */}
                  <button
                    type="button"
                    disabled={sending}
                    aria-pressed={showOther}
                    aria-expanded={showOther}
                    aria-controls="other-type"
                    onClick={() => {
                      setShowOther((current) => !current);

                      setForm((current) => ({
                        ...current,
                        type: "",
                      }));
                    }}
                    className={`
                      rounded-full
                      border
                      px-3.5
                      py-2
                      text-xs
                      font-medium
                      transition-all
                      duration-300

                      sm:text-sm

                      disabled:cursor-not-allowed
                      disabled:opacity-50

                      ${
                        showOther
                          ? "border-[#15919B] bg-[#15919B]/10 text-[#0f6b72] shadow-[0_2px_6px_rgba(21,145,155,0.25)]"
                          : "border-slate-200 bg-white text-slate-500 hover:border-slate-400 hover:text-slate-900"
                      }
                    `}
                  >
                    Others
                  </button>
                </div>

                {/* OTHER INPUT */}
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
                    className={`${fieldClasses} mt-3`}
                  />
                )}
              </div>

              {/* ==================================================
                  MESSAGE
              ================================================== */}

              <div className="mt-7 sm:mt-8">
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-slate-500
                  "
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
                  className={`
                    ${fieldClasses}
                    min-h-[140px]
                    resize-none
                  `}
                />
              </div>

              {/* ==================================================
                  ERROR
              ================================================== */}

              {status === "error" && (
                <p
                  className="
                    mt-4
                    break-words
                    text-sm
                    leading-relaxed
                    text-red-600
                  "
                  role="alert"
                >
                  {errorMsg}
                </p>
              )}

              {/* ==================================================
                  SUBMIT
              ================================================== */}

              <div
                className="
                  mt-7

                  sm:mt-9
                "
              >
                <button
                  type="submit"
                  disabled={sending}
                  className="
                    group
                    relative
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    overflow-hidden
                    rounded-full

                    bg-gradient-to-r
                    from-[#1E5470]
                    to-[#2a7fa3]

                    px-7
                    py-3.5

                    text-sm
                    font-semibold
                    text-white

                    shadow-lg
                    shadow-[#2a7fa3]/20

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:shadow-xl
                    hover:shadow-[#2a7fa3]/40

                    active:translate-y-0

                    disabled:cursor-not-allowed
                    disabled:opacity-60

                    sm:w-auto
                  "
                >
                  <span
                    className="
                      absolute
                      inset-0
                      -translate-x-full
                      skew-x-12
                      bg-gradient-to-r
                      from-transparent
                      via-white/25
                      to-transparent
                      transition-transform
                      duration-700
                      ease-out

                      group-hover:translate-x-full
                    "
                  />

                  <span className="relative">
                    {sending ? "Sending..." : "Submit"}
                  </span>
                </button>
              </div>
            </form>
          ) : (
            /* ====================================================
               SUCCESS STATE
            ==================================================== */

            <div
              className="
                w-full
                max-w-xl
              "
              role="status"
            >
              <h2
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
                className="
                  text-3xl
                  font-normal
                  text-slate-900sm:text-4xl
                "
              >
                Message sent.
              </h2>

              <p
                className="
                  mt-3
                  max-w-md
                  break-words
                  text-sm
                  leading-relaxed
                  text-slate-500

                  sm:text-base
                "
              >
                Thanks, {form.name.split(" ")[0]}. I'll reply to {form.email}{" "}
                within two business days.
              </p>

              <div
                className="
                  mt-6
                  flex
                  flex-col
                  gap-3

                  sm:flex-row
                  sm:items-center
                "
              >
                <button
                  type="button"
                  onClick={resetForm}
                  className="
                    w-full
                    rounded-full
                    border
                    border-[#15919B]
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-[#0f6b72]

                    transition-colors

                    hover:bg-[#15919B]/10

                    sm:w-auto
                  "
                >
                  Send another message
                </button>

                <button
                  type="button"
                  onClick={goHome}
                  className="
                    w-full
                    rounded-full
                    border
                    border-slate-300
                    bg-white
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-slate-600

                    transition-colors

                    hover:border-slate-400
                    hover:text-slate-900

                    sm:w-auto
                  "
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Contact;
