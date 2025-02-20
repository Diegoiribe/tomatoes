const NavBar = () => {
  return (
    <nav className="flex justify-between px-5 pt-[72px] ">
      {/* Categories */}
      <div className="bg-[#F9F9F9] px-3 py-2 inline-flex rounded-full items-center justify-center gap-40">
        <p className="text-sm font-semibold text-[#B5B5B5]">Categories</p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="6"
            stroke="currentColor"
            className="size-3 text-[#565656]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      {/* New Product */}
      <div className="bg-[#F9F9F9] px-3 py-2 inline-flex rounded-full items-center justify-center gap-24">
        <p className="text-sm font-semibold text-[#B5B5B5]">New Product</p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="6"
            stroke="currentColor"
            className="size-3 text-[#565656]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      {/* Search */}
      <div className="bg-[#F9F9F9] px-3 py-2 inline-flex rounded-full items-center justify-center gap-64">
        <input
          type="text"
          placeholder="Search..."
          className="focus:outline-none text-sm font-semibold text-[#9e9e9e]"
        />
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="size-4 text-[#9e9e9e]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>

      <div className="inline-flex items-center justify-center px-3 py-1 border-2 rounded-full border-[#F9F9F9]">
        <p className="font-medium text-[#2f2f2f]">Men</p>
      </div>
      <div className="inline-flex items-center justify-center px-3 py-1 border-2 rounded-full border-[#F9F9F9]">
        <p className="font-medium text-[#2f2f2f]">Woman</p>
      </div>
      <div className="inline-flex items-center justify-center px-3 py-1 border-2 rounded-full border-[#F9F9F9]">
        <p className="font-medium text-[#2f2f2f]">Children</p>
      </div>
      <div className="inline-flex items-center justify-center px-3 py-1 border-2 rounded-full border-[#F9F9F9]">
        <p className="font-medium text-[#2f2f2f]">Dress</p>
      </div>
      <div className="inline-flex items-center justify-center px-3 py-1 border-2 rounded-full border-[#F9F9F9]">
        <p className="font-medium text-[#2f2f2f]">Offert</p>
      </div>

    </nav>
  )
}

export default NavBar
