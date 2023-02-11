"use client";

import React, { ReactNode, useState } from "react";
import { FaAngleRight } from "react-icons/fa";

interface AccordionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Accordion = ({ title, children, className }: AccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`my-0.5 bg-accent/5 ${className || ""}`}>
      <div
        className="p-3 hover:cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="flex items-center gap-5 font-bold">
          <div className="rounded-full bg-accent/10 p-2 text-lg text-accent">
            <FaAngleRight
              className={`transition-all ${isActive ? "rotate-90" : ""}`}
            />
          </div>
          <span className="text-lg">{title}</span>
        </div>
      </div>
      {isActive && <div className="p-3 font-medium">{children}</div>}
    </div>
  );
};

export default Accordion;
