import React, { useState, useEffect, useRef } from "react";

function CalendarDays() {
  const [days, setDays] = useState([]);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const containerRef = useRef(null);
  const itemWidth = 60; // Set a fixed width for each calendar item in pixels

  useEffect(() => {
    // Generate a month's worth of days (1 to 30)
    const monthDays = Array.from({ length: 30 }, (_, i) => ({
      dayOfWeek: new Date(2024, 9, i + 1).toLocaleString("en-US", { weekday: "short" }),
      date: i + 1,
    }));

    // Find today's date (example set to 14 for testing)
    const today = 14; // Change this based on testing or use new Date().getDate();
    const todayIndex = monthDays.findIndex((day) => day.date === today);
    setCurrentDayIndex(todayIndex);

    // Calculate how many items fit in the container after the component is mounted
    const updateVisibleDays = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const itemsPerRow = Math.floor(containerWidth / itemWidth);

        // Center the current day if possible
        const startIndex = Math.max(0, todayIndex - Math.floor(itemsPerRow / 2));
        const visibleDays = monthDays.slice(startIndex, startIndex + itemsPerRow);

        setDays(visibleDays);
      }
    };

    // Call the function initially
    updateVisibleDays();

    // Update on window resize
    window.addEventListener("resize", updateVisibleDays);

    // Clean up the event listener
    return () => window.removeEventListener("resize", updateVisibleDays);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex space-x-3" ref={containerRef}>
        {days.map((day, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-3 shadow-md rounded-2xl font-semibold w-[60px] ${
              index === Math.floor(days.length / 2) ? "text-white bg-primary" : "text-primary bg-white"
            }`}
          >
            <span>{day.dayOfWeek}</span>
            <span>{day.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarDays;
