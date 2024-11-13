import React from "react";
import Container from "./Container";

const DataProtection = () => {
  return (
    <div className="bg-white pt-16 pb-10 ">
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
            <div className=" flex-1 p-6 h-[500px] lg:h-[600px] bg-teal-50 rounded-md">
              <div className="gap-10 items-start flex flex-col text-gray-900">
                <div className="bg-white p-4 rounded-md">
                  <img src="/assets/stock.png" width={24} height={24} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-gray-600 font-medium text-[24px]">
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
              <div className=" lg:ml-8 mt-16">
                <div className="relative h-[full] w-[full]  overflow-hidden ">
                  <img
                    src="/assets/shipping.jpg"
                    className="object-cover h-full w-full rounded-lg"
                    alt="charts"
                  />
                  <img
                    src="/assets/chart.jpg"
                    className="h-full w-full hidden lg:block absolute top-16 lg:top-32 left-24 "
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
