"use client";
import { useEffect, useState } from "react";

// to fix dehydration problem (loading problem that can affect the website if when refreshing you click to fast somewhere then you would get an error. but now with useeffect we wait the first render to set hasMounted on true)
interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  
  if (!hasMounted) {
    return null;
  }
  return <>{children}</>;
};

export default ClientOnly;
