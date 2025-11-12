/** @format */

import {
  Locate,
  Mail,
  Phone,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { useMemo, useState } from "react";
// optional, safe to remove if you didn't add it

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { ok: boolean, text: string } | null

  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);
  const minMsgLen = 10;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.phone || formData.phone.replace(/\D/g, "").length < 10)
      newErrors.phone = "Valid international phone number is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    else if (formData.message.trim().length < minMsgLen)
      newErrors.message = `Message must be at least ${minMsgLen} characters.`;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    setStatus(null);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatus(null);

    try {
      const formDataObj = new FormData();
      formDataObj.append("access_key", "5dfc4379-7b71-4b97-88e6-a674545f8b62"); // move to server/env in prod
      formDataObj.append("name", formData.name);
      formDataObj.append("email", formData.email);
      formDataObj.append("phone", formData.phone);
      formDataObj.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      const result = await response.json();

      if (result && result.success) {
        setStatus({ ok: true, text: "Message sent successfully!" });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(result?.message || "Failed to send message.");
      }
    } catch (err) {
      setStatus({
        ok: false,
        text: err?.message || "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#FAFAFA] to-white dark:from-[#0B0C10] dark:to-[#101115]">
      {/* Top Cards */}
      <section className="px-4 py-10 sm:px-6 lg:px-12 pt-28 sm:pt-32">
        <div className="grid max-w-6xl gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
          {/* Address */}
          <div
            className="group bg-white dark:bg-[#222831] rounded-2xl shadow-lg border-2 border-[#15919B] dark:border-[#59dce6] transition-all duration-300 flex flex-col items-center p-8
        hover:scale-105 hover:shadow-2xl hover:border-[#15919B] hover:ring-2 hover:ring-[#15919B]"
          >
            <div className="flex items-center gap-2 mb-4">
              <Locate className="w-8 h-8 text-[#15919B]" />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#2CC295]">
                Address
              </h2>
            </div>
            <p className="text-base font-semibold text-center text-gray-700 sm:text-lg lg:text-xl dark:text-gray-300">
              Dhaka, Bangladesh
            </p>
          </div>

          {/* Email */}
          <div
            className="group bg-white dark:bg-[#222831] rounded-2xl shadow-lg border-2 border-[#15919B] dark:border-[#59dce6] transition-all duration-300 flex flex-col items-center p-8
        hover:scale-105 hover:shadow-2xl hover:border-[#15919B] hover:ring-2 hover:ring-[#15919B]"
          >
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-8 h-8 text-[#15919B]" />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#2CC295]">
                Email
              </h2>
            </div>
            <a
              href="mailto:ahadm3016@gmail.com?subject=Hello%20Ahad"
              className="text-base font-semibold text-center text-gray-700 sm:text-lg lg:text-xl dark:text-gray-300 underline decoration-transparent hover:decoration-[#15919B] transition"
            >
              ahadm3016@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div
            className="group bg-white dark:bg-[#222831] rounded-2xl shadow-lg border-2 border-[#15919B] dark:border-[#59dce6] transition-all duration-300 flex flex-col items-center p-8
        hover:scale-105 hover:shadow-2xl hover:border-[#15919B] hover:ring-2 hover:ring-[#15919B]"
          >
            <div className="flex items-center gap-2 mb-4">
              <Phone className="w-7 h-7 text-[#15919B]" />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#2CC295]">
                Phone
              </h2>
            </div>
            <a
              href="tel:+8801322959861"
              className="text-base font-semibold text-center text-gray-700 sm:text-lg lg:text-xl dark:text-gray-300 underline decoration-transparent hover:decoration-[#15919B] transition"
            >
              +880 1322-959-861
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-4 py-10 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-extrabold tracking-tight sm:text-4xl dark:text-[#2CC295]">
              Contact Me
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Feel free to reach out with any questions or just to say hello!
            </p>
          </div>

          {/* Status Banners (aria-live) */}
          <div aria-live="polite" className="mb-4">
            {status && status.ok && (
              <div className="flex items-center gap-2 px-4 py-3 text-green-800 border border-green-300 rounded-xl bg-green-50 dark:bg-green-900/20 dark:text-green-300">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">{status.text}</span>
              </div>
            )}
            {status && !status.ok && (
              <div className="flex items-center gap-2 px-4 py-3 text-red-800 border border-red-300 rounded-xl bg-red-50 dark:bg-red-900/20 dark:text-red-300">
                <XCircle className="w-5 h-5" />
                <span className="font-medium">{status.text}</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 rounded-2xl shadow-2xl bg-white/90 dark:bg-[#1B1F24]/90 backdrop-blur border border-black/5 dark:border-white/5">
            <div className="p-6 sm:p-8">
              <form onSubmit={onSubmit} className="space-y-6">
                {/* name and email */}
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-1 font-medium text-gray-700 dark:text-gray-200"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`w-full px-4 py-3 text-black dark:text-white bg-white dark:bg-[#14171A] border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#15919B] transition ${
                        errors.name
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-700"
                      }`}
                      placeholder="Your full name"
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-1 font-medium text-gray-700 dark:text-gray-200"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      className={`w-full px-4 py-3 text-black dark:text-white bg-white dark:bg-[#14171A] border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#15919B] transition ${
                        errors.email
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-700"
                      }`}
                      placeholder="name@example.com"
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-1 font-medium text-gray-700 dark:text-gray-200"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    inputMode="tel"
                    autoComplete="tel"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={`w-full px-4 py-3 text-black dark:text-white bg-white dark:bg-[#14171A] border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#15919B] transition ${
                      errors.phone
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-700"
                    }`}
                    placeholder="+880 1XXXXXXXXX"
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-sm text-red-500">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 font-medium text-gray-700 dark:text-gray-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className={`w-full px-4 py-3 text-black dark:text-white bg-white dark:bg-[#14171A] border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#15919B] resize-none transition ${
                      errors.message
                        ? "border-red-500"
                        : "border-gray-300 dark:border-gray-700"
                    }`}
                    placeholder="Your message..."
                    rows={5}
                  />
                  <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
                    <span>Minimum {minMsgLen} characters</span>
                    <span>{formData.message.trim().length} chars</span>
                  </div>
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white bg-gradient-to-r from-[#15919B] to-[#2CC295] hover:opacity-95 active:scale-[0.99] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#15919B]/40 disabled:opacity-60 disabled:cursor-not-allowed transition"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>

                {/* Honeypot */}
                <input
                  type="text"
                  name="company"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
