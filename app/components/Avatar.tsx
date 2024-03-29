"use client";

import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <Image
      className="rounded-full"
      width="30"
      src="/images/placeholder.jpg"
      alt="Avatar"
      height="30"
    />
  );
};

export default Avatar;
