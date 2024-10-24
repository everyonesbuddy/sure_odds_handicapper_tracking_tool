import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Link,
} from "@mui/material";
// import axios from "axios";
import moment from "moment";
import Countdown from "react-countdown";

// Countdown renderer component
const CountdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span style={{ color: "red" }}>The tournament has ended!</span>;
  } else {
    return (
      <span style={{ color: "red" }}>
        {days} days {hours} hours {minutes} minutes {seconds} seconds
      </span>
    );
  }
};

const TournamentDetails = () => {
  // Calculate the end time of the tournament for week
  // const getTournamentEndTime = () => {
  //   const now = moment().utcOffset(-4); // EST is UTC-4
  //   const dayOfWeek = now.day();
  //   const daysUntilSunday = (7 - dayOfWeek) % 7; // Days until the next Sunday
  //   const nextSunday = now
  //     .clone()
  //     .add(daysUntilSunday, "days")
  //     .set({ hour: 23, minute: 59, second: 0, millisecond: 0 });
  //   return nextSunday.toDate();
  // };

  // Calculate the end time of the tournament for month
  const getTournamentEndTime = () => {
    const now = moment().utcOffset(-4); // EST is UTC-4
    const endOfMonth = now
      .clone()
      .endOf("month")
      .set({ hour: 23, minute: 59, second: 0, millisecond: 0 });
    return endOfMonth.toDate();
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: 2,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "background.paper",
          maxWidth: 600,
          margin: "auto",
          marginTop: 5,
        }}
      >
        <Typography align="center" gutterBottom>
          <List style={{ listStyleType: "none", padding: 0 }}>
            <ListItem>
              <ListItemText
                primary="About Us"
                secondary="Welcome to SureOdds, the world’s #1 destination for free-to-play sports pick'em contests. We bring together sports enthusiasts from every corner of the globe to predict game outcomes, compete with friends, and win incredible prizes – all without spending a cent.

              Our mission is simple: make sports more exciting by letting you test your knowledge and predictions against fans from around the world. Whether you’re a die-hard football fan, a cricket enthusiast, or a basketball buff, we’ve got contests for you. Play for free, win prizes, and enjoy the thrill of competition on a global scale.

              Join us today, make your picks, and see if you have what it takes to be a champion!"
              />
            </ListItem>
            {/* <ListItem>
              <ListItemText
                primary="Why We Do This"
                secondary="With so much noise in the betting world, it’s hard to know who’s actually winning. We’re here to change that. By using data and tracking performance, we help bettors find proven winners and give handicappers a platform to showcase their expertise based on facts, not hype."
              />
            </ListItem> */}
            <ListItem>
              <ListItemText
                primary="💵 Prizes"
                secondary={
                  <>
                    First Place: Win $100 cash prize and a free 2 months
                    subscription to{" "}
                    <Link
                      href="https://doinksports.com/?via=sureOdds"
                      target="_blank"
                      rel="noopener"
                    >
                      Doink Sports
                    </Link>
                    , the most complete betting research platform.
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Performance Tracking & Leaderboards"
                secondary="Each picks are tracked based on a simulated $100 wager per pick. Our rankings are built on ROI (return on investment) and accuracy over time. Good Luck!"
              />
            </ListItem>
            {/* <ListItem>
              <ListItemText
                primary="Supporting Handicappers"
                secondary="We don’t sell or give away handicappers’ picks. Instead, we focus on their performance data, showing past results to build credibility. Bettors can tip handicappers directly on our platform, and handicappers can pay for sponsored spots to boost visibility without disrupting their business. Our goal is to help handicappers grow while keeping their picks valuable."
              />
            </ListItem> */}
          </List>
        </Typography>
      </Box>

      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Typography variant="body2">
          Countdown to Current Monthly Tournament End:
        </Typography>
        <Countdown date={getTournamentEndTime()} renderer={CountdownRenderer} />
      </Box>
    </>
  );
};

export default TournamentDetails;
