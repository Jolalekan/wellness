import gsap from 'gsap';
import React, { useRef, useState, useEffect } from 'react';

const Navbar = () => {
  const navRef = useRef(null); // Reference for the nav panel
  const logoRef = useRef(null); // Reference for the logo
  const navLinksRef = useRef(null); // Reference for the nav links
  const mobileMenuRef = useRef(null); // Reference for the mobile menu
  const mobileMenuContainerRef = useRef(null); // Reference for the parent container
  const mobileMenuLinksRef = useRef(null); // Reference for the mobile menu links
  const [open, setOpen] = useState(false); // State to manage menu open/close

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
                className="h-8 w-auto"
                src="/assets/logo.png"
                width={60}
                height={60}
                alt="Logo"
              />
            </a>
            <span className="font-medium text-gray-100">Wellness</span>
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
          <div ref={navLinksRef} className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-[18px] font-semibold text-gray-100">Home</a>
            <a href="#" className="text-[18px] font-semibold text-gray-100">Comparison</a>
            <a href="#" className="text-[18px] font-semibold text-gray-100">Resources</a>
            <a href="#" className="text-[18px] font-semibold text-gray-100">Promotion</a>
          </div>

          {/* Desktop user actions */}
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






// import gsap from 'gsap';
// import React, { useRef, useState, useEffect } from 'react';

// const Navbar = () => {
//   const navRef = useRef(null)
//    const logoRef= useRef(null)
//    const navLinksRef = useRef(null)
//   const [open, setOpen] = useState(false);

//   const mobileMenuRef = useRef(null);

//   useEffect(() => {
//     if (mobileMenuRef.current) {
//       if (open) {
//         gsap.to(mobileMenuRef.current, {
//           x: 0,
//           duration: 0.5,
//           ease: 'power3.out',
//         });
//       } else {
//         gsap.to(mobileMenuRef.current, {
//           x: '-100%',
//           duration: 0.5,
//           ease: 'power3.in',
//         });
//       }
//     }
//   }, [open]);


// useEffect(() => {
//   if (navRef.current) {
//     if (open) {
//       // Slide the menu in from the right
//       gsap.to(navRef.current, {
//         duration: 1,
//         x: 0,

//         ease: 'power3.out',
//       });
//     } else {
//       // Slide the menu out to the right
//       gsap.to(navRef.current, {
//         duration: 1,
//         x: '100%',
//         ease: 'power3.in',
//       });
//     }
//   }
// }, [open]);

// useEffect(()=>{
//   const tlLogo = gsap.timeline();
//   tlLogo.fromTo(
//     logoRef.current,
//     { y: -115, opacity: 0 },
//     { y: 0, opacity: 1, delay: 0.5, duration: 1 }
//   );
// }, []);

// useEffect(() => {
//   if (navLinksRef.current) {
//     const links = Array.from(navLinksRef.current.children); // Get all desktop menu links
//     if (links.length > 0) {
//       gsap.fromTo(
//         links,
//         { y: -50, opacity: 0 }, // Start above and invisible
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1.5,
//           stagger: 0.5, // Animate each link sequentially
//           ease: 'power3.out',
//         }
//       );
//     }
//   }
// }, []);


//   return (
//     <div className='bg-teal-950 border-b border-gray-50 top-0 z-10 fixed w-full py-4'>

//     <header className=" max-w-7xl mx-auto w-full inset-x-0 top-0 z-50">
//       <nav className="flex items-center justify-between p-6 lg:px-8">
//         <div ref={logoRef} className="flex items-center gap-3 lg:flex-1">
//           <a  href="#" className="-m-1.5 p-1.5">
//             <img
//               className="h-8 w-auto"
//               src="/assets/logo.png" width={60} height={60} 
//               alt="Logo"
//             />
//           </a>
//           <span className="font-medium">Wellness</span>
//         </div>

//         {/* Mobile menu button */}
//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
//             onClick={() => setOpen(!open)}
//           >
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Desktop links */}
//         <div ref={navLinksRef} className="hidden lg:flex lg:gap-x-12">
//           <a href="#" className="text-[18px] font-semibold text-gray-100">Home</a>
//           <a href="#" className="text-[18px] font-semibold text-gray-100">Comparison</a>
//           <a href="#" className="text-[18px] font-semibold text-gray-100">Resources</a>
//           <a href="#" className="text-[18px] font-semibold text-gray-100">Promotion</a>
//         </div>

//         <div className="hidden lg:flex gap-6 lg:flex-1 items-center lg:justify-end">
//           <div className="flex items-center gap-2">
//             <img src="/assets/world.png" width={20} height={20} alt="Language" />
//             <span className="text-[18px] font-semibold text-gray-100">English</span>
//           </div>
//           <a href="#" className="text-[18px] font-semibold text-gray-100">
//             Log in <span>&rarr;</span>
//           </a>
//           <button className="rounded-md bg-gray-50 py-2 px-4 text-gray-900 font-medium">
//             Start Compares
//           </button>
//         </div>
//       </nav>

//       {/* Mobile menu */}
//       {open && (
//         <div className="lg:hidden">
//           <div ref={mobileMenuRef}  className="fixed top-0 inset-0 z-50 bg-black bg-opacity-25"></div>
//           <div ref={navRef} className="bg-teal-900 fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//             <div className="flex items-center justify-between">
//               <a ref={logoRef} href="#" className="-m-1.5 p-1.5">
//                 <div className="flex items-center gap-3 lg:flex-1">
//                   <img
//                     className="h-8 w-auto"
//                     src="./assets/logo.png"
//                     alt="Company Logo"
//                   />
//                   <span>Wellness</span>
//                 </div>
//               </a>
//               <button
//                 onClick={() => setOpen(false)}
//                 className="-m-2.5 rounded-md p-2.5 text-gray-100"
//               >
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>

//             <div className="mt-6">
//               <div className="-my-6 divide-y divide-gray-500/10">
//                 <div className="space-y-2 py-6">
//                   <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-100 hover:bg-gray-300">Home</a>
//                   <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-100 hover:bg-gray-300">Comparisons</a>
//                   <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-100 hover:bg-gray-300">Resources</a>
//                   <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-100 hover:bg-gray-300">Promotions</a>
//                 </div>
//                 <div className="py-6">
//                 <a href="#" className="text-[18px] font-semibold text-gray-100">
//             Log in <span>&rarr;</span>
//           </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//     </div>
//   );
// };

// export default Navbar;
