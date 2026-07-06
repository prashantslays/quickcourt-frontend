import { Link } from "react-router-dom";

function SignupForm() {
  return (
    <div className="bg-white w-full max-w-lg rounded-3xl shadow-xl p-10">

      <h1 className="text-4xl font-bold text-center">
        Create Account 🚀
      </h1>

      <p className="text-center text-gray-500 mt-3">
        Join QuickCourt and start booking sports venues
      </p>

      <form className="mt-8 space-y-5">

        <div>
          <label className="font-semibold">Full Name</label>

          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="font-semibold">Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="font-semibold">Phone Number</label>

          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="font-semibold">Password</label>

          <input
            type="password"
            placeholder="Create a password"
            className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="font-semibold">Confirm Password</label>

          <input
            type="password"
            placeholder="Confirm password"
            className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="font-semibold mb-2 block">
            Account Type
          </label>

          <div className="flex gap-6">

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value="user"
                defaultChecked
              />
              User
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value="owner"
              />
              Venue Owner
            </label>

          </div>
        </div>

        <label className="flex items-center gap-2">
          <input type="checkbox" />
          I agree to the Terms & Conditions
        </label>

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 text-white py-3 rounded-xl font-semibold"
        >
          Create Account
        </button>

      </form>

      <p className="text-center mt-8">

        Already have an account?

        <Link
          to="/login"
          className="text-blue-600 font-semibold ml-2"
        >
          Login
        </Link>

      </p>

    </div>
  );
}

export default SignupForm;