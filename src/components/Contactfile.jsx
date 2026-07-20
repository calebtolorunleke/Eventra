import React, { useState } from "react";
import { Send } from "lucide-react";
import { contactInfo } from "../data/landinghero";

const Contactfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Submitted contact form:", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="bg-white py-10 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
         

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            Let’s create something memorable
          </h1>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Have a question, partnership idea, or event request? Send us a
            message and our team will respond as soon as possible.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl lg:grid-cols-[1.2fr_0.8fr]">
          <div className="p-6 sm:p-8 lg:p-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-950 sm:text-3xl">
                Send a message
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
                Fill out the form below and we’ll get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-800"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-700 focus:ring-4 focus:ring-green-700/10"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-800"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-700 focus:ring-4 focus:ring-green-700/10"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-gray-800"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows={6}
                  required
                  className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-700 focus:ring-4 focus:ring-green-700/10"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-900/20 sm:w-auto"
              >
                Send message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="flex flex-col ">
            {" "}
            {contactInfo.map((info) => {
              const Icon = info.icon;

              return (
                <div
                  key={info.id}
                  className="relative flex  items-center justify-center overflow-hidden p-4 text-center text-black sm:p-6"
                >
                  <div className="relative max-w-sm">
                    <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-2xl backdrop-blur-sm">
                      <Icon className="h-6 w-6 font-bold text-green-900" />
                    </div>

                    <h2 className="mt-3 text-xl font-bold">{info.title}</h2>

                    <p className="mt-3 leading-6 text-black/75">
                      {info.description}
                    </p>

                    <a
                      href="mailto:info@yourorg.com"
                      className="mt-2 inline-block text-lg font-semibold text-green-900 transition hover:text-amber-200"
                    >
                      {info.link}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactfile;
