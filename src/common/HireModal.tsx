import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

type Props = {
  onClose: () => void;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function HireModal({ onClose }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormData>();

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const onSubmit = async (data: FormData) => {
    const toastId = toast.loading("Sending message...");

    try {
      await emailjs.send(
        "service_7hc6uli",
        "template_fni6mgr",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          phone: data.phone,
        },
        "a8W05Bi3SM5Z8J3au",
      );

      toast.success("Message sent successfully 🚀", { id: toastId });
      reset();
      onClose();
    } catch (error) {
      toast.error("Failed to send message ❌", { id: toastId });
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full max-w-lg bg-white/70 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close form"
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center 
             rounded-full bg-white/60 backdrop-blur hover:bg-white/90 
             text-gray-600 hover:text-black shadow-sm transition"
        >
          <X size={18} strokeWidth={2} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-[#1E5470] mb-2">
          Let's Work Together 🚀
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          Tell me about your project — I'll reply quickly.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          <div>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Your Name"
              className={`w-full px-4 py-3 rounded-xl bg-white/80 border focus:outline-none focus:ring-2 focus:ring-[#2a7fa3] ${
                errors.name ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
              type="email"
              placeholder="Your Email"
              className={`w-full px-4 py-3 rounded-xl bg-white/80 border focus:outline-none focus:ring-2 focus:ring-[#2a7fa3] ${
                errors.email ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[+]?[\d\s-()]{7,}$/,
                  message: "Enter a valid phone number",
                },
              })}
              type="tel"
              placeholder="Your Phone Number"
              className={`w-full px-4 py-3 rounded-xl bg-white/80 border focus:outline-none focus:ring-2 focus:ring-[#2a7fa3] ${
                errors.phone ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              {...register("message", {
                required: "Please add a short message",
              })}
              rows={4}
              placeholder="Tell me about your project..."
              className={`w-full px-4 py-3 rounded-xl bg-white/80 border focus:outline-none focus:ring-2 focus:ring-[#2a7fa3] resize-none ${
                errors.message ? "border-red-400" : "border-gray-200"
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#1E5470] to-[#2a7fa3] text-white py-3 rounded-xl font-semibold hover:scale-[1.02] active:scale-[0.97] disabled:opacity-60 disabled:hover:scale-100 transition-all duration-200 shadow-md"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}
