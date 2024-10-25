import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/background.svg"
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full scale-150 -z-10"
      />

      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="/images/logo.svg"
            className="w-auto h-20 mx-auto"
          />
          <h2 className="mt-10 text-5xl leading-9 tracking-tight text-center text-gray-900 font-primary">
            HabiBoo
          </h2>
        </div>

        <div className="px-6 py-12 mt-10 bg-white shadow-xl sm:mx-auto sm:w-full sm:max-w-sm rounded-2xl">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  required
                  autoComplete="username"
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="create-password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Create password
              </label>
              <div className="mt-2">
                <input
                  id="create-password"
                  name="create-password"
                  type="create-password"
                  required
                  autoComplete="current-password"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="repeat-password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Repeat password
              </label>
              <div className="mt-2">
                <input
                  id="repeat-password"
                  name="repeat-password"
                  type="repeat-password"
                  required
                  autoComplete="current-password"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary mb-3"
              >
                Sign up
              </button>
              <Link
                to="/sign-in"
                className="text-sm font-semibold leading-6 text-center"
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default SignUpPage;
