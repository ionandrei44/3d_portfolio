import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useState, useRef } from "react";
import { Button } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          to_name: import.meta.env.VITE_TO_NAME,
          from_email: data.email,
          to_email: import.meta.env.VITE_TO_EMAIL,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.info("Email sent!");

          reset();
        },
        () => {
          setLoading(false);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 items-center xl:items-stretch overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="w-full sm:w-[75%] xl:w-[45%] blue-gradient p-8 rounded-2xl"
      >
        <p className="sm:text-[18px] text-[14px] uppercase tracking-wider text-primary font-semibold">
          Get in touch
        </p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium">Your Name</span>
            <input
              autoComplete="off"
              type="text"
              name="name"
              placeholder="What's your name?"
              className={`bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 ${
                errors.name?.type === "isRequired"
                  ? "border-red-500"
                  : "border-transparent"
              } font-medium mt-4 mb-1`}
              {...register("name", {
                validate: { isRequired: (value) => value.trim().length > 0 },
              })}
            />
            {errors.name?.type === "isRequired" && (
              <p className="text-md text-red-500 font-bold tracking-wide">
                Name is required
              </p>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium">Your email</span>
            <input
              autoComplete="off"
              type="email"
              name="email"
              placeholder="What's your email address?"
              className={`bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 ${
                errors.email?.type === "isRequired"
                  ? "border-red-500"
                  : "border-transparent"
              } font-medium mt-4 mb-1`}
              {...register("email", {
                validate: { isRequired: (value) => value.trim().length > 0 },
              })}
            />
            {errors.email?.type === "isRequired" && (
              <p className="text-md text-red-500 font-bold tracking-wide">
                Email is required
              </p>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium">Your Message</span>
            <textarea
              autoComplete="off"
              rows={7}
              name="message"
              placeholder="What's your message?"
              {...register("message", {
                validate: { isRequired: (value) => value.trim().length > 0 },
              })}
              className={`bg-[#151414] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 font-medium resize-none mt-4 mb-1 ${
                errors.message?.type === "isRequired"
                  ? "border-red-500"
                  : "border-transparent"
              }`}
            />
            {errors.message?.type === "isRequired" && (
              <p className="text-md text-red-500 font-bold tracking-wide">
                Message is required
              </p>
            )}
          </label>

          <Button
            type="submit"
            disabled={loading}
            variant="gradient"
            className="py-3 px-8 rounded-xl outline-none w-full xs:w-fit text-white font-bold"
          >
            {loading ? "Sending..." : "Send"}
          </Button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[400px] sm:h-[550px] xl:w-[55%] xl:h-auto w-full"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
