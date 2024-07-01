function updateTimeAndDay() {
    const currentDayElement = document.getElementById("current-day");
    const currentHourElement = document.getElementById("current-hour");
    const currentMinuteElement = document.getElementById("current-minute");
    const currentSecondElement = document.getElementById("current-second");

    const now = new Date();
    const currentDay = now.toLocaleString("en-US", { weekday: "long" });
    const currentHour = now.getUTCHours().toString().padStart(2, "0");
    const currentMinute = now.getUTCMinutes().toString().padStart(2, "0");
    const currentSecond = now.getUTCSeconds().toString().padStart(2, "0");

    currentDayElement.textContent = `${currentDay}`;
    currentHourElement.textContent = `${currentHour}`;
    currentMinuteElement.textContent = `${currentMinute}`;
    currentSecondElement.textContent = `${currentSecond}`;
  }

  setInterval(updateTimeAndDay, 1000);
  updateTimeAndDay(); // Initial call to set the values immediately