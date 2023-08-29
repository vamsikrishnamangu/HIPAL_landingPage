import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";

const texts = [
  "Restaurant Management System",
  "Waiter Management System",
  "Kitchen Management System",
];

export default function FadeEffect() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      console.log("value", (index + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <Paper
        sx={{
          boxShadow: "none",
          backgroundColor: "inherit",
        }}
      >
        <span className="text-[#F2634C] lg:w-full">{texts[index]}</span>
      </Paper>
    </Slide>
  );
}
