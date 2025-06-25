import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my my-10 mt-40 text-sm">
        {/* left section */}
        <div className="">
          <img className="mb-5 w-40" src={assets.new_logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            nam, itaque ullam excepturi quae facere quasi quis? Officia id
            voluptate atque praesentium delectus totam, impedit nesciunt quod
            fuga optio dolore.
          </p>
        </div>

        {/* Mid section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Contacts Us</li>
            <li>Privacv Policy</li>
          </ul>
        </div>

        {/* Right section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+94764713721</li>
            <li>sankagunarathna3@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        {/* CopyRight Text */}
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ Allmart All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
