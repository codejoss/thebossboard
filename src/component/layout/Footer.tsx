const Footer = () => {
  return (
    <footer className="bg-bossDark shadow-sm dark:bg-bossDark">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="justify-between sm:flex sm:items-center sm:justify-between">
          <a href="#" className="mb-4 flex items-center sm:mb-0">
            <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              TheBossRoomVIP
            </div>
          </a>

          <ul className="mb-6 flex flex-wrap items-center text-lg font-medium text-gray-200 sm:mb-0 dark:text-gray-100">
            <li>
              <a
                href="https://www.instagram.com/_andreacazarin"
                target="_blank"
                rel="noopener noreferrer"
                className="me-4 hover:underline md:me-6"
              >
                Instagram
              </a>
            </li>

            {/* <li>
              <a
                // contact by mail
                href="mailto:"
                className="me-4 hover:underline md:me-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contáctame
              </a>
            </li> */}
          </ul>
        </div>
        <hr className="my-6 border-gray-100 sm:mx-auto lg:my-8 dark:border-gray-200" />
        <span className="text-md flex justify-center font-bold text-white sm:text-center dark:text-white">
          Coding with love 🤍
        </span>
      </div>
    </footer>
  );
};

export default Footer;
