"use client";
import React from "react";

const Project_Ads = () => {
  const setAdsCookie = () => {
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    document.cookie = `AdsClosed=yes;expires=${expires.toUTCString()};path=/`;
  };
  const [toShowAds, setToShowAds] = useState(false);
  const imageListShuff = useMemo(() => {
    return [...imageListRaw].sort(() => Math.random() - 0.5);
  }, [imageListRaw]);
  return <></>;
};

export default Project_Ads;
