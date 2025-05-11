import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CountdownContainer = styled.div`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  color: white;
  padding: 3rem 0;
  text-align: center;
  margin: 2rem 0;
`;

const CountdownTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const CountdownGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const CountdownBox = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  min-width: 80px;
`;

const CountdownValue = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`;

const CountdownLabel = styled.div`
  font-size: 0.9rem;
  text-transform: uppercase;
  opacity: 0.8;
`;

const CountdownSection = () => {
  // Set the target date for Youth Week (May 19 of current year)
  const getYouthWeekDate = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    // May is month 4 (0-indexed)
    return new Date(currentYear, 4, 19, 19, 0, 0); // May 19 at 7:00 PM
  };

  const calculateTimeLeft = () => {
    const targetDate = getYouthWeekDate();
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      // If event has passed, show all zeros
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [eventName, setEventName] = useState("Youth Week 2024");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <CountdownContainer>
      <CountdownTitle>Countdown to {eventName}</CountdownTitle>
      <CountdownGrid>
        <CountdownBox>
          <CountdownValue>{timeLeft.days}</CountdownValue>
          <CountdownLabel>Days</CountdownLabel>
        </CountdownBox>
        <CountdownBox>
          <CountdownValue>{timeLeft.hours}</CountdownValue>
          <CountdownLabel>Hours</CountdownLabel>
        </CountdownBox>
        <CountdownBox>
          <CountdownValue>{timeLeft.minutes}</CountdownValue>
          <CountdownLabel>Minutes</CountdownLabel>
        </CountdownBox>
        <CountdownBox>
          <CountdownValue>{timeLeft.seconds}</CountdownValue>
          <CountdownLabel>Seconds</CountdownLabel>
        </CountdownBox>
      </CountdownGrid>
    </CountdownContainer>
  );
};

export default CountdownSection;
