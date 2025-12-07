"use client";

import React, { useState } from "react";
import Image from "next/image";

// Navigation items with custom icons
const navItems = [
  { name: "Command Center", icon: "/Fraight-bot.png" },
  { name: "Load Board", icon: "/Fraight-bot.png" },
  { name: "Fleet", icon: "/Fraight-bot.png" },
  { name: "Driver Hub", icon: "/Fraight-bot.png" },
  { name: "Analytics", icon: "/Fraight-bot.png" },
  { name: "Reports", icon: "/Fraight-bot.png" }
];

export default function Page() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <main className="min-h-screen w-full px-4 py-6">

      {/* TOP NAVIGATION */}
      <div className="w-full flex flex-col items-center mb-8">
        
        {/* Large Logo */}
        <div className="w-full flex justify-center mb-4">
          <Image
            src="/Fraight-logo.png"
            width={260}
            height={80}
            alt="Fraight Logo"
            className="drop-shadow-[0_0_20px_rgba(35,243,197,0.35)]"
          />
        </div>

        {/* Scrollable Tesla-style Navigation Bar */}
        <div className="w-full overflow-x-auto flex whitespace-nowrap no-scrollbar px-1 py-3 bg-[#0B1119] rounded-xl border border-[#1A2633] shadow-inner">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center mx-6 cursor-pointer hover:opacity-70 transition"
            >
              <Image
                src={item.icon}
                alt=""
                width={36}
                height={36}
                className="mb-1"
              />
              <span className="text-xs text-gray-300">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* WEATHER WIDGET */}
      <div className="w-full flex justify-end mb-6 pr-2">
        <div className="flex items-center gap-2 bg-[#0F1622] px-4 py-2 rounded-lg border border-[#1F2C3A] shadow-md">
          <Image
            src="/Fraight-bot.png"
            alt="Weather Icon"
            width={26}
            height={26}
          />
          <div className="text-sm">
            <p className="font-semibold">Memphis, TN</p>
            <p className="text-[#23F3C5] font-bold">72° • Clear Skies</p>
          </div>
        </div>
      </div>

      {/* LIVE OPERATIONS MAP (Tesla/Apple style grid map) */}
      <div className="w-full bg-[#0B1119] border border-[#1A2633] rounded-2xl shadow-xl p-6">
        <h2 className="text-xl font-bold mb-2">Live Operations</h2>
        <p className="text-sm text-gray-400 mb-6">
          Real-time view of your fleet, loads, and route paths.
        </p>

        <div className="w-full h-[320px] relative rounded-xl overflow-hidden bg-gradient-to-b from-[#091017] to-[#05090F] border border-[#13202C]">

          {/* Tesla-style grid */}
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(#1f2c3a33 1px, transparent 1px), linear-gradient(90deg, #1f2c3a33 1px, transparent 1px)",
              backgroundSize: "32px 32px"
            }}
          />

          {/* Animated route lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="100%" height="100%" viewBox="0 0 600 300">
              <path
                d="M 30 200 C 160 80 240 260 380 140 C 480 60 540 240 590 150"
                stroke="#23F3C5"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                className="animate-pulse"
              />
            </svg>
          </div>

          {/* Moving glowing nodes */}
          <div className="absolute left-[20%] top-[40%] w-5 h-5 rounded-full bg-[#23F3C5] shadow-[0_0_15px_#23F3C5] animate-bounce" />
          <div className="absolute left-[55%] top-[55%] w-5 h-5 rounded-full bg-[#23F3C5] shadow-[0_0_15px_#23F3C5] animate-bounce" />
        </div>
      </div>

      {/* FLOATING CHAT BUTTON (Fraight-mascot) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button onClick={() => setChatOpen(!chatOpen)} className="active:scale-95 transition">
          <Image
            src="/Fraight-mascot.png"
            alt="Chat"
            width={100}
            height={100}
            className="drop-shadow-[0_0_20px_rgba(35,243,197,0.4)]"
          />
        </button>
      </div>

      {/* CHAT POPUP */}
      {chatOpen && (
        <div className="fixed bottom-32 right-6 w-80 bg-[#0F1622] border border-[#23F3C5] rounded-2xl p-4 shadow-2xl z-50">
          <h3 className="text-lg font-bold mb-2">Fraight Assistant</h3>
          <p className="text-sm mb-4 text-gray-300">
            What can I help you optimize today?
          </p>

          <button className="w-full py-2 rounded-lg bg-[#23F3C5] text-black font-semibold shadow hover:bg-[#1CD9AE] transition">
            Suggest best route
          </button>

          <button className="w-full py-2 rounded-lg bg-[#121A24] text-[#23F3C5] mt-2 border border-[#23F3C5] font-semibold hover:bg-[#0E151D] transition">
            Scan for highest RPM loads
          </button>
        </div>
      )}
    </main>
  );
}
