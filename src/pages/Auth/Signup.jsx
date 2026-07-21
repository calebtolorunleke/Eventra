import React from "react";
import { Link } from "react-router-dom";
import { Google } from "@mui/icons-material";
import signIn from "../../assets/images/partySpray.jpg";
import Logo from "@/components/common/Logo";

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleGoogleSignup = () => {
    console.log("Continue with Google");
  };

  return (
    <main className="grid min-h-screen bg-white lg:grid-cols-2">
      <section className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-10">
        <div className="w-full max-w-md">
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2"
            aria-label="Go to Eventra homepage"
          >
            <Logo />
          </Link>

          <div>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Create an Account
            </h1>

            <p className="mt-3 leading-7 text-gray-600">
              Create your account to explore events, grab tickets, and never
              miss out on the moments that matter.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="firstName"
                  className="text-sm font-semibold text-gray-900"
                >
                  First Name
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  autoComplete="given-name"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:italic placeholder:text-gray-400 focus:border-green-700 focus:ring-2 focus:ring-green-100"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="lastName"
                  className="text-sm font-semibold text-gray-900"
                >
                  Last Name
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  autoComplete="family-name"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:italic placeholder:text-gray-400 focus:border-green-700 focus:ring-2 focus:ring-green-100"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-900"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="usersemail@email.com"
                autoComplete="email"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:italic placeholder:text-gray-400 focus:border-green-700 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="phoneNumber"
                className="text-sm font-semibold text-gray-900"
              >
                Phone Number
              </label>

              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder="Enter your phone number"
                autoComplete="tel"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:italic placeholder:text-gray-400 focus:border-green-700 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="createPassword"
                className="text-sm font-semibold text-gray-900"
              >
                Create Password *
              </label>

              <input
                id="createPassword"
                name="createPassword"
                type="password"
                placeholder="Create a strong password"
                autoComplete="new-password"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:italic placeholder:text-gray-400 focus:border-green-700 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-semibold text-gray-900"
              >
                Confirm Password *
              </label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                autoComplete="new-password"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:italic placeholder:text-gray-400 focus:border-green-700 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 shrink-0 rounded border-gray-300 accent-green-800"
              />

              <label
                htmlFor="terms"
                className="cursor-pointer text-sm leading-6 text-gray-700"
              >
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="font-medium text-green-700 hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy-policy"
                  className="font-medium text-green-700 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-green-950 px-4 py-3 font-semibold text-white transition hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
            >
              Create Account
            </button>

            <div className="flex items-center gap-4">
              <hr className="flex-1 border-gray-300" />
              <span className="text-sm font-medium text-gray-500">Or</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            <button
              type="button"
              onClick={handleGoogleSignup}
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 px-4 py-3 font-semibold text-gray-800 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
            >
              <Google fontSize="small" />
              Continue with Google
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="font-semibold text-green-800 transition hover:text-green-700 hover:underline"
              >
                Log in
              </Link>
            </p>
          </form>
        </div>
      </section>

      <section className="relative hidden min-h-screen overflow-hidden lg:block">
        <img
          src={signIn}
          alt="People celebrating together at an event"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 max-w-xl p-12 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
            Eventra
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight">
            Discover experiences that bring people together.
          </h2>

          <p className="mt-4 leading-7 text-white/80">
            Create an account to explore events, manage bookings, and stay
            connected with unforgettable experiences.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Signup;