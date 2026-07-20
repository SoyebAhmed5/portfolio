"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  MessageSquare,
  Send,
  Loader2,
} from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  contactSchema,
  ContactFormData,
} from "@/lib/contact";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      toast.success("🎉 Message sent successfully!");

      reset();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        shadow-[0_0_40px_rgba(139,92,246,0.08)]
        backdrop-blur-xl
      "
    >
      <h3 className="mb-2 text-3xl font-bold">
        Send a Message
      </h3>

      <p className="mb-8 text-zinc-400">
        Have a project in mind or just want to connect?
        I'd love to hear from you.
      </p>

      <div className="space-y-5">

          {/* Honeypot */}
  <input
    type="text"
    tabIndex={-1}
    autoComplete="off"
    className="hidden"
    {...register("website")}
  />

        {/* Name */}
        <div>
          <div className="relative">
            <User
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />


            <input
              {...register("name")}
              type="text"
              placeholder="Your Name"
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-black/20
                py-3
                pl-12
                pr-4
                text-white
                placeholder:text-zinc-500
                outline-none
                transition-all
                duration-300
                focus:border-violet-500
                focus:ring-2
                focus:ring-violet-500/20
              "
            />
          </div>

          {errors.name && (
            <p className="mt-2 text-sm text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
            />

            <input
              {...register("email")}
              type="email"
              placeholder="Your Email"
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-black/20
                py-3
                pl-12
                pr-4
                text-white
                placeholder:text-zinc-500
                outline-none
                transition-all
                duration-300
                focus:border-violet-500
                focus:ring-2
                focus:ring-violet-500/20
              "
            />
          </div>

          {errors.email && (
            <p className="mt-2 text-sm text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <div className="relative">
            <MessageSquare
              size={18}
              className="absolute left-4 top-5 text-zinc-500"
            />

            <textarea
              {...register("message")}
              rows={6}
              placeholder="Tell me about your project..."
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-white/10
                bg-black/20
                py-3
                pl-12
                pr-4
                text-white
                placeholder:text-zinc-500
                outline-none
                transition-all
                duration-300
                focus:border-violet-500
                focus:ring-2
                focus:ring-violet-500/20
              "
            />
          </div>

          {errors.message && (
            <p className="mt-2 text-sm text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{
            scale: loading ? 1 : 1.02,
            y: loading ? 0 : -2,
          }}
          whileTap={{
            scale: loading ? 1 : 0.96,
          }}
          disabled={loading}
          type="submit"
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-gradient-to-r
            from-violet-600
            to-purple-600
            py-3.5
            font-semibold
            text-white
            shadow-lg
            shadow-violet-500/20
            transition-all
            duration-300
            hover:shadow-violet-500/40
            disabled:cursor-not-allowed
            disabled:opacity-70
          "
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={18} />
              Send Message
            </>
          )}
        </motion.button>

        <p className="text-center text-sm text-zinc-500">
          🚀 I usually respond within{" "}
          <span className="font-medium text-zinc-300">
            24 hours
          </span>
          .
        </p>
      </div>
    </motion.form>
  );
}