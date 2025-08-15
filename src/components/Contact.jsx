import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("movlbpow");

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6 bg-[#0f0d20]/30 p-6 rounded-xl shadow-lg shadow-purple-900/50">
          <h2 className="text-3xl font-bold text-white mb-4">Find Me</h2>
          <div className="flex items-center space-x-4">
            <Github className="text-white" size={28} />
            <a
              href="https://github.com/HansujaB"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-pink-400 transition-colors"
            >
              github.com/HansujaB
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Linkedin className="text-white" size={28} />
            <a
              href="https://www.linkedin.com/in/hansuja-budhiraja-976a382a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-pink-400 transition-colors"
            >
              linkedin.com/in/Hansuja_Budhiraja
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Mail className="text-white" size={28} />
            <a
              href="mailto:hansujaigdtuwcseai@gmail.com"
              className="text-purple-300 hover:text-pink-400 transition-colors"
            >
              hansujaigdtuwcseai@gmail.com
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#0f0d20]/40 shadow-purple-900/50 shadow-lg p-6 rounded-xl ">
          <h2 className="text-3xl font-bold text-white mb-6">Contact Me</h2>

          {state.succeeded ? (
            <p className="text-green-400">Thanks for reaching out!</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <label htmlFor="name" className="text-white">Name</label>
              <input
                id="name"
                type="name"
                name="name"
                required
                className="p-3 rounded-md bg-white/90 text-black placeholder focus:outline-none focus:ring-2 focus:ring-white"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />

              <label htmlFor="email" className="text-white">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="p-3 rounded-md bg-white/90 text-black placeholder focus:outline-none focus:ring-2 focus:ring-white"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <label htmlFor="message" className="text-white">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="p-3 rounded-md bg-white/90 text-black placeholder focus:outline-none focus:ring-2 focus:ring-white"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button
                type="submit"
                disabled={state.submitting}
                className="bg-white p-3 rounded-md text-black font-medium hover:from-pink-400 hover:via-purple-400 hover:to-indigo-400 transition-colors duration-300 transition-all"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
