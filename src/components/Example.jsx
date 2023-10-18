import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

const API_KEY = "AIzaSyDKUPTwn_CPTCCnHqzZUemuuJvr9vA4yfg";

const calendars = [
  {
    calendarId: "09opmkrjova8h5k5k46fedmo88@group.calendar.google.com",
    color: "#B241D1",
  },
  { calendarId: "hkr1dj9k6v6pa79gvpv03eapeg@group.calendar.google.com" },
  {
    calendarId: "rg4m0k607609r2jmdr97sjvjus@group.calendar.google.com",
    color: "rgb(63, 191, 63)",
  },
];

const styles = {
  calendar: {
    borderWidth: "3px",
  },
  today: css`
    color: red;
    border: "1px solid red";
  `,
};

const language = "ES";

export default function Example() {
  return (
    <div className="w-[400px] ">
      <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} language={language} />
    </div>
  );
}
