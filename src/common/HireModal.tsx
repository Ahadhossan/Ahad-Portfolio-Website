import emailjs from "emailjs-com";
import { Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

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
    formState: { isSubmitting },
  } = useForm<FormData>();

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      {/* Modal Box */}
      <div className="w-full max-w-lg bg-white/70 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl p-8 relative animate-in fade-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-[#1E5470] mb-2">
          Let’s Work Together 🚀
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          Tell me about your project — I’ll reply quickly.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("name", { required: true })}
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2a7fa3]"
          />

          <input
            {...register("email", { required: true })}
            placeholder="Your Email"
            type="email"
            className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2a7fa3]"
          />
          <input
            {...register("phone", { required: true })}
            placeholder="Your Phone Number"
            type="tel"
            className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2a7fa3]"
          />

          <textarea
            {...register("message", { required: true })}
            placeholder="Tell me about your project..."
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2a7fa3]"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#1E5470] to-[#2a7fa3] text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition-all duration-300 shadow-md"
          >
            {isSubmitting ? "Sending..." : "Send Message ✉️"}
          </button>
        </form>
      </div>
    </div>
  );
}
