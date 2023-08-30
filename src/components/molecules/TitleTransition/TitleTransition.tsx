import * as React from "react";

const texts = [
  "Restaurant Management System",
  "Waiter Management System",
  "Kitchen Management System",
];

export default function TitleTransition() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    // Adjusted the timing for change in text
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3500); // Adjusted to 3.5 seconds. 1.5s for typing and 2s for display.

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      key={texts[index]}
      className="text-[#F2634C] lg:w-full text-lg lg:text-[4rem] typed text-center py-10"
    >
      {texts[index]}
    </span>
  );
}
