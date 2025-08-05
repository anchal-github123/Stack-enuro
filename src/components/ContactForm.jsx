import { useState } from "react";

export default function ContactForm() {
  const [isLoaded, setIsLoaded] = useState(false);
return (
    <div className="flex items-center">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <p className="text-gray-500 animate-pulse">Loading form...</p>
        </div>
      )}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfrd80ol4erFd4xmx_GQwwLo86DX-WGW81w2L2S96oIk-YTJA/viewform?usp=dialog"
        title="Google Form"
        className="w-screen h-screen border-0"
        onLoad={() => setIsLoaded(true)}
      >Loading…
      </iframe>
    </div>
  );
}

