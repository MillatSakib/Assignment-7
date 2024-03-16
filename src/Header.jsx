const Header = () => {
  return (
    <div className="flex bg-white items-center justify-center">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>
          <a className="btn btn-ghost text-xl font-bold">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex gap-4 font-medium">
          <div></div>
          <div>
            <a href="#">Home</a>
          </div>
          <div>
            <a href="#">Recipes</a>
          </div>
          <div>
            <a href="#">About</a>
          </div>
          <div>
            <a href="#">Search</a>
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex gap-2">
            <div className="form-control relative">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto rounded-full px-10"
              />
              <span class="material-symbols-outlined absolute top-[14px] left-3 opacity-70">
                search
              </span>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://raw.githubusercontent.com/MillatSakib/img-src/main/avater.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
