import React from "react";
import { Box, Grid, Typography, Stack, Paper } from "@mui/material";

const leftItems = [
  "Free copy of the Telegram signals from Lennard",
  "Everything possible from a cell phone with minimal time expenditure",
  "Also learn the strategies of a professional trader",
  "Am Tag reichen 10 Minuten Zeitaufwand zum kopieren",
  "10 minutes a day is enough time to copy",
];

const rightItems = [
  "Learn the basics on your own for at least 1 year",
  "Analyze and check the charts for at least 3 hours a day",
  "Finding a profitable strategy among all the garbage",
  "Very difficult to solve the other problems without a professional",
  "Dozens of thousands of euros in training fees",
];

const CheckIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      d="M20 6L9 17l-5-5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CancelIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
  >
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Item = ({ text, icon, bg, iconColor }) => (
  <div
    className="flex items-center gap-3 px-4 py-2 rounded-full"
    style={{ backgroundColor: bg }}
  >
    <span
      className="flex items-center justify-center"
      style={{ color: iconColor }}
    >
      {icon}
    </span>
    <span className="text-white text-sm">{text}</span>
  </div>
);

export function Side() {
  return (
    <div className="bg-[#06263B] rounded-2xl p-6 md:p-10 max-w-[1200px] mx-40px">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-white font-semibold text-xl mb-4">
            TRADING WITH{" "}
            <span className="text-[#00C176]">LENNARD</span>
          </h3>

          <div className="flex flex-col gap-3">
            {leftItems.map((item, i) => (
              <Item
                key={i}
                text={item}
                bg="rgba(255,255,255,0.08)"
                icon={<CheckIcon />}
                iconColor="#00C176"
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold text-xl mb-4">
            TRADE <span className="text-[#FF4D4D]">YOURSELF</span>
          </h3>

          <div className="flex flex-col gap-3">
            {rightItems.map((item, i) => (
              <Item
                key={i}
                text={item}
                bg="rgba(255,255,255,0.05)"
                icon={<CancelIcon />}
                iconColor="#FF4D4D"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Side;
