"use client";

import Script from "next/script";

export default function TopGeCounter() {
  return (
    <>
      <div id="top-ge-counter-container" data-site-id="118632"></div>
      <Script src="//counter.top.ge/counter.js" strategy="afterInteractive" />
    </>
  );
}
