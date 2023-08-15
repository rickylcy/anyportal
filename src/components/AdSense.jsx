import React, { useEffect } from "react";

function AdSense() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-7608941511888561"
      data-ad-slot="2545052768"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}

export default AdSense;
