"use client";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

function GTMinitialiser() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-TN47HH7M",
    };

    TagManager.initialize(tagManagerArgs);
  }, []);
  return null;
}

export default GTMinitialiser;
