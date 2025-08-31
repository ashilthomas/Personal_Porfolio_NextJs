"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contactSchema, IContactForm } from "@/lib/validation/contactSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendMessage } from "@/lib/helpers/sendMessage";

export default function ContactPage() {


  
  
  const [message, setMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = (data: IContactForm) => {
    sendMessage(data)
    
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-gray-100 px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-8"
      >
        <h1 className="text-4xl font-extrabold mb-6 text-center text-white">
          Contact Me
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <input
              {...register("name")}
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg p-3 bg-white/10 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-100 placeholder-gray-400"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg p-3 bg-white/10 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-100 placeholder-gray-400"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Your Message"
              className="w-full rounded-lg p-3 bg-white/10 border border-white/20 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-100 placeholder-gray-400"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-400">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 font-semibold shadow-lg transition"
          >
            Send Message
          </motion.button>
        </form>

        {/* Success message */}
        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-center text-green-400 font-medium"
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
