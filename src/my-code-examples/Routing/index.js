import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

export default () => (
  <>
    <h2>Routing with the React Router library</h2>
  </>
);

const HomePage = () => (
  <>
    <h2>Welcome to my homepage! 🏠</h2>
    Here you can read all about me!
  </>
);

const AboutPage = () => (
  <>
    <h2>About me 🧔🏻</h2>Hi, I am Bouwe, 42 years old, software engineer @ New Nexus and I like
    drumming, running, hiking, sc Heerenveen and programming.
  </>
);

const ContactPage = () => (
  <>
    <h2>Contact me 💌</h2>You can contact me on Twitter via <a>@bouwe</a>, send an email to{" "}
    <a>bouwe@bouwe.nl</a> and my blog is on <a>bouwe.io</a>
  </>
);
