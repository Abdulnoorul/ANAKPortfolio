"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your message, please wait");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000,
          },
        },
      )
      .then(
        () => {
          toast.success(
            "I have received your message, I will get back to you ASAP!",
            {
              id: toastId,
            },
          );
          reset();
        },
        (error) => {
          toast.error(
            "There was an error sending your message, please try again later",
            {
              id: toastId,
            },
          );
        },
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Abdul Noorul Akhlaq Khan",
      from_name: data.Name,
      email: data.Email,
      message: data.Message,
    };

    sendEmail(templateParams);
  };

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input
          variants={item}
          type="text"
          placeholder="Name"
          {...register("Name", {
            required: "This Field is required!",
            minLength: { value: 3, message: "Please Provide your Full Name" },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 foucs:ring-accent/50 custom-bg"
        />

        {errors.Name && (
          <span className="inline-block self-start text-accent">
            {errors.Name.message}
          </span>
        )}

        <motion.input
          variants={item}
          type="email"
          placeholder="Email"
          {...register("Email", { required: "This Field is required!" })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 foucs:ring-accent/50 custom-bg"
        />

        {errors.Email && (
          <span className="inline-block self-start text-accent">
            {errors.Email.message}
          </span>
        )}

        <motion.textarea
          variants={item}
          type="text"
          placeholder="Enter your Message"
          {...register("Message", {
            required: "This Field is required!",
            maxLength: {
              value: 500,
              message: "Message should be less than 500 character's",
            },
            minLength: {
              value: 10,
              message: "Message shouldn't be less than 10 character's",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 foucs:ring-accent/50 custom-bg resize-none"
        />

        {errors.Message && (
          <span className="inline-block self-start text-accent">
            {errors.Message.message}
          </span>
        )}

        <motion.input
          variants={item}
          value="Cast your message!"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
          type="submit"
        />
      </motion.form>
    </>
  );
}
