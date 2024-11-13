import gsap from 'gsap';
import React, { useRef, useState } from 'react';

const Navbar = () => {
  const navRef = useRef()
  const [open, setOpen] = useState(false);

  gsap.to(target, {
duration:2.5,
ease: CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1"),
y: -500
});

  return (
    <div className='bg-teal-950 border-b border-gray-50 top-0 z-10 fixed w-full py-4'>

    <header className=" max-w-7xl mx-auto w-full inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex items-center gap-3 lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img
              className="h-8 w-auto"
              src="/assets/logo.png" width={60} height={60} 
              alt="Logo"
            />
          </a>
          <span className="font-medium">Wellness</span>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-[18px] font-semibold text-gray-100">Home</a>
          <a href="#" className="text-[18px] font-semibold text-gray-100">Comparison</a>
          <a href="#" className="text-[18px] font-semibold text-gray-100">Resources</a>
          <a href="#" className="text-[18px] font-semibold text-gray-100">Promotion</a>
        </div>

        <div className="hidden lg:flex gap-6 lg:flex-1 items-center lg:justify-end">
          <div className="flex items-center gap-2">
            <img src="/assets/world.png" width={20} height={20} alt="Language" />
            <span className="text-[18px] font-semibold text-gray-100">English</span>
          </div>
          <a href="#" className="text-[18px] font-semibold text-gray-100">
            Log in <span>&rarr;</span>
          </a>
          <button className="rounded-md bg-gray-50 py-2 px-4 text-gray-900 font-medium">
            Start Compares
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          <div className="fixed top-0 inset-0 z-50 bg-black bg-opacity-25"></div>
          <div className="bg-teal-900 fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <div className="flex items-center gap-3 lg:flex-1">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Company Logo"
                  />
                  <span>Your Company</span>
                </div>
              </a>
              <button
                onClick={() => setOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-100"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-100 hover:bg-gray-300">Home</a>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-100 hover:bg-gray-300">Comparisons</a>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-100 hover:bg-gray-300">Resources</a>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-100 hover:bg-gray-300">Promotions</a>
                </div>
                <div className="py-6">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
    </div>
  );
};

export default Navbar;
