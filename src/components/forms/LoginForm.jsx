import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-10">

      <h1 className="text-4xl font-bold text-center">
        Welcome Back 👋
      </h1>

      <p className="text-center text-gray-500 mt-3">
        Login to continue booking sports venues
      </p>

      <form className="mt-8 space-y-5">

        <div>

          <label className="font-semibold">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        <div>

          <label className="font-semibold">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        <div className="flex justify-between text-sm">

          <label className="flex items-center gap-2">

            <input type="checkbox" />

            Remember Me

          </label>

          <a href="#" className="text-blue-600">
            Forgot Password?
          </a>

        </div>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Login
        </button>

      </form>

      <p className="text-center mt-8">

        Don't have an account?

        <Link
          to="/signup"
          className="text-blue-600 ml-2 font-semibold"
        >
          Sign Up
        </Link>

      </p>

    </div>
  );
}

export default LoginForm;