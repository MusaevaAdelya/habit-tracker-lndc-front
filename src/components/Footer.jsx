function Footer() {
  return (
    <footer class="bg-purple-400 font-sans dark:bg-gray-900">
      <div class="container px-6 py-12 mx-auto">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
          <div class="sm:col-span-2">
            <h1 class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
              Subscribe our newsletter to get an update.
            </h1>

            <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />

              <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-secondary rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="flex flex-1 gap-4 hover:cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
              width="130"
              height="110"
              alt=""
            />
          </div>

          <div class="flex gap-4 hover:cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
              width="30"
              height="30"
              alt="fb"
            />
            <img
              src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
              width="30"
              height="30"
              alt="tw"
            />
            <img
              src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
              width="30"
              height="30"
              alt="inst"
            />
            <img
              src="https://www.svgrepo.com/show/94698/github.svg"
              class=""
              width="30"
              height="30"
              alt="gt"
            />
            <img
              src="https://www.svgrepo.com/show/22037/path.svg"
              width="30"
              height="30"
              alt="pn"
            />
            <img
              src="https://www.svgrepo.com/show/28145/linkedin.svg"
              width="30"
              height="30"
              alt="in"
            />
            <img
              src="https://www.svgrepo.com/show/22048/dribbble.svg"
              class=""
              width="30"
              height="30"
              alt="db"
            />
          </div>
        </div>
        <p class="font-sans p-8 text-start md:text-center md:text-lg md:p-4">
          © 2024 Lange Nacht des Coding. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
