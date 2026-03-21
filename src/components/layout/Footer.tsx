function Footer() {
  const socialMediaInfo = [
    {
      name: "TheBossBoard",
      url: "https://codejoss.github.io/thebossboard/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_andreacazarin",
    },
  ];

  return (
    <footer className="bg-bossDarkz dark:bg-bossDark shadow-sm">
      <div className="mx-auto w-full max-w-7xl p-4 md:py-6">
        <div className="justify-between sm:flex sm:items-center sm:justify-between">
          <div className="mb-2 flex items-center justify-center sm:mb-0">
            <div className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              TheBossRoomVIP
            </div>
          </div>

          <ul className="mb-6 flex flex-wrap items-center justify-center text-sm font-medium text-gray-200 sm:mb-0 dark:text-gray-100">
            {/* URLs build */}
            {socialMediaInfo.map((element, index) => {
              return (
                <li key={index}>
                  <a
                    href={element.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-4 hover:underline md:me-6"
                  >
                    {element.name}
                  </a>
                </li>
              );
            })}
            {/* End URLs build */}
          </ul>
        </div>
        <hr className="my-3 border-gray-100 sm:mx-auto lg:my-3 dark:border-gray-200" />
        <a
          href="https://github.com/codejoss"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center text-sm font-bold text-white sm:text-center dark:text-white"
        >
          Coding with love 🤍
        </a>
      </div>
    </footer>
  );
}

export default Footer;
