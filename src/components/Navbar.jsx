import gsap from 'gsap';
import React, { useRef, useState, useEffect } from 'react';

const Navbar = () => {
  const navRef = useRef(null); 
  const logoRef = useRef(null); 
  const navLinksRef = useRef(null); 
  const mobileMenuRef = useRef(null);
  const mobileMenuContainerRef = useRef(null); 
  const mobileMenuLinksRef = useRef(null); 
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        x: open ? 0 : '-100%',
        duration: 0.5,
        ease: open ? 'power3.out' : 'power3.in',
      });
    }
  }, [open]);

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        duration: 1,
        x: open ? 0 : '100%',
        ease: open ? 'power3.out' : 'power3.in',
      });
    }
  }, [open]);

  useEffect(() => {
    const tlLogo = gsap.timeline();
    tlLogo.fromTo(
      logoRef.current,
      { y: -115, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.5, duration: 1 }
    );
  }, []);

  useEffect(() => {
    if (navLinksRef.current) {
      const links = Array.from(navLinksRef.current.children); // Get all desktop menu links
      gsap.fromTo(
        links,
        { y: -50, opacity: 0 }, // Start above and invisible
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.5, // Animate each link sequentially
          ease: 'power3.out',
        }
      );
    }
  }, []);

  // Handle parent container and menu animation
  useEffect(() => {
    if (mobileMenuContainerRef.current) {
      gsap.to(mobileMenuContainerRef.current, {
        x: open ? 0 : '-100%',
        duration: 0.5,
        ease: open ? 'power3.out' : 'power3.in',
      });
    }
  }, [open]);

  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-teal-950 border-b border-gray-50 top-0 z-10 fixed w-full py-4">
      <header className="max-w-7xl mx-auto w-full inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          {/* Logo Section */}
          <div ref={logoRef} className="flex items-center gap-3 lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                className="h-16 w-auto"
                src="/assets/logo.png"
                width={60}
                height={60}
                alt="Logo"
              />
            </a>
            <span className="text-[26px] font-medium text-gray-100">Wellness</span>
          </div>

          {/* Mobile Menu Button */}
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
          <div ref={navLinksRef} className="navbar-links hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-[18px] font-semibold text-gray-100">Home</a>
            <a href="#" className="text-[18px] font-semibold text-gray-100">Comparison</a>
            <a href="#" className="text-[18px] font-semibold text-gray-100">Resources</a>
            <a href="#" className="text-[18px] font-semibold text-gray-100">Promotion</a>
          </div>

          {/* Desktop user actions */}
          <div className="login-link hidden lg:flex gap-6 lg:flex-1 items-center lg:justify-end">
            <div className="flex items-center gap-2">
              <img src="/assets/world.png" width={20} height={20} alt="Language" />
              <span className="text-[18px] font-semibold text-gray-100">English</span>
            </div>
            <a href="#" className="login-link text-[18px] font-semibold text-gray-100">
              Log in <span>&rarr;</span>
            </a>
            <button className="rounded-md bg-gray-50 py-2 px-4 text-gray-900 font-medium">
              Start Compares
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuContainerRef}
          className="fixed inset-y-0 left-0 z-50 bg-teal-900 w-full max-w-sm px-6 py-6 -translate-x-full"
        >
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-gray-100 p-2 rounded-md"
              onClick={handleMenuClose}
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

          {/* Mobile Menu Links */}
          <div className="mt-6">
            <div ref={mobileMenuLinksRef} className="space-y-4">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-100 hover:bg-gray-300"
                onClick={handleMenuClose}
              >
                Home
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-100 hover:bg-gray-300"
                onClick={handleMenuClose}
              >
                Comparisons
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-100 hover:bg-gray-300"
                onClick={handleMenuClose}
              >
                Resources
              </a>
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-100 hover:bg-gray-300"
                onClick={handleMenuClose}
              >
                Promotions
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;


