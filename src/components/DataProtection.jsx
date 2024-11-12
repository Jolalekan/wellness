import React from "react";
import Container from "./Container";

const DataProtection = () => {
  return (
    <div className="bg-white pt-16 pb-10 ">
      {/* <div  className="relative left-1/2 -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f8f5f6] to-[#9089fc] opacity-30 sm:left-1/2 sm:w-[72.1875rem] aspect-[1155/678] w-[36.125rem]"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}/> */}
      <Container>
        <div className="p-4 lg:flex flex-col gap-6">
          <div className="lg:flex mb-6 gap-5">
            <div className="flex-1 mb-6 p-6 h-[400px] bg-teal-50 rounded-md">
              <div className="gap-4 items-start flex flex-col text-gray-900">
                <div className="bg-white p-2 rounded-md">
                  <img src="/assets/secure.png" width={24} height={24} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium text-[18px]">
                    Secure Data Protection
                  </h3>
                  <p className="text-[14px] text-gray-600">
                    Your data privacy is our priority
                  </p>
                  <p className="text-[14px] text-gray-600">
                    Benefit of Banking with high level security
                  </p>
                  <p className="text-[14px] text-gray-600">
                    Data Privacy for peace of mind
                  </p>
                </div>
              </div>
            </div>
            <div className=" flex-1 p-6 h-[600px] bg-teal-50 rounded-md">
              <div className="gap-10 items-start flex flex-col text-gray-900">
                <div className="bg-white p-2 rounded-md">
                  <img src="/assets/stock.png" width={24} height={24} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-gray7600 font-medium text-[24px]">
                    Goal Setting & Progress Tracking
                  </h3>
                  <p className="text-[14px] text-gray-600">
                    Your data privacy is our priority
                  </p>
                  <p className="text-[14px] text-gray-600">
                    Benefit of Banking with high level security
                  </p>
                  <p className="text-[14px] text-gray-600">
                    Data Privacy for peace of mind
                  </p>
                </div>
              </div>
              <div className="lg:ml-8 mt-16 ">
                <div className="relative w-[160px] lg:w-[300px] h-[300px]">
                  <img
                    src="/assets/shipping.jpg"
                    className="object-cover rounded-lg"
                    alt=""
                  />
                  <img
                    src="/assets/chart.jpg"
                    className="absolute top-16 lg:top-32 left-28 "
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex gap-6 ">
            <div className="mb-4 py-2 p-4 gap-6 items-center rounded-lg bg-green-50 flex flex-col">
              <div className=" p-2 rounded-md bg-white">
                <img src="/assets/grow.png" className="w-8 h-8" alt="" />
              </div>
              <h3 className="text-[18px] text-gray-700 font-medium">
                Grow Your Posibilities with flexible loans
              </h3>
              <p className="text-gray-400 text-[14px] text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit molestiae excepturi placeat alias aperiam
                blanditiis voluptas delectus sunt esse doloremque temporibus
                fugiat{" "}
              </p>
              <span className="font-medium text-gray-900">Learn More </span>
            </div>
            <div className="mb-4 p-4 gap-6 items-center rounded-lg bg-purple-50 flex flex-col">
              <div className=" p-2 rounded-md bg-white">
                <img src="/assets/grow.png" className="w-8 h-8" alt="" />
              </div>
              <h3 className="text-[18px] text-gray-700 font-medium">
                Grow Your Posibilities with flexible loans
              </h3>
              <p className="text-gray-400 text-[14px] text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit molestiae excepturi placeat alias aperiam
                blanditiis voluptas delectus sunt esse doloremque temporibus
                fugiat{" "}
              </p>
              <span className="font-medium text-gray-900">Learn More </span>
            </div>
            <div className="p-4 gap-6 items-center rounded-lg bg-green-50 flex flex-col">
              <div className=" p-2 rounded-md bg-white">
                <img src="/assets/grow.png" className="w-8 h-8" alt="" />
              </div>
              <h3 className="text-[18px] text-gray-700 font-medium">
                Grow Your Posibilities with flexible loans
              </h3>
              <p className="text-gray-400 text-[14px] text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit molestiae excepturi placeat alias aperiam
                blanditiis voluptas delectus sunt esse doloremque temporibus
                fugiat{" "}
              </p>
              <span className="font-medium text-gray-900">Learn More </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DataProtection;
