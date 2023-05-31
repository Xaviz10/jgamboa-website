import React, { useEffect, useState } from "react";

export function useHeader() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [viewHightPercentage, setViewHightPercentage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollOffset = window.pageYOffset;
      setScrollOffset(newScrollOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    screenHeight && setViewHightPercentage(scrollOffset / screenHeight);
  }, [screenHeight, scrollOffset]);
  return { viewHightPercentage };
}
