"use client";

import { Footer as FlowbiteFooter } from "flowbite-react";
import { BsGithub } from "react-icons/bs";

export function Footer() {
  return (
    <FlowbiteFooter container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FlowbiteFooter.Brand
              href="/"
              src="/logo.png"
              alt="Diabetes Logo"
              name="Diabetes"
            />
          </div>
        </div>
        <FlowbiteFooter.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FlowbiteFooter.Copyright href="#" by="Diabetes™" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FlowbiteFooter.Icon
              href="https://github.com/paiva-matheus/diabetes_today"
              icon={BsGithub}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
}
