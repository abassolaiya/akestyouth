import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CountdownSection from "./components/CountdownSection";
import About from "./components/About";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const theme = {
  primary: "#4a6fa5",
  secondary: "#ff6b6b",
  light: "#f8f9fa",
  dark: "#343a40",
  font: "'Poppins', sans-serif",
};

const App = () => {
  const eventDate = new Date("2024-06-15T19:00:00"); // Updated to a future date for demo

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <CountdownSection date={eventDate} />
      <About />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
