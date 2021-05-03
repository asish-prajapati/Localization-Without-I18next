import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import getTranslate from "./Localization/Localize";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: "en",
      data: getTranslate(),
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }
  changeLang = () => {
    if (this.state.lang === "en") {
      this.setState({ lang: "de" });
    } else {
      this.setState({ lang: "en" });
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.lang !== this.state.lang) {
      this.setState({ data: getTranslate(this.state.lang) });
    }
  }
  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <Header
          data={this.state.data.header}
          lang={this.state.lang}
          changeLang={this.changeLang}
        />
        <About data={this.state.data.about} />
        <Resume data={this.state.data.resume} />
        <Contact data={this.state.data.contact} />
        <Footer data={this.state.data.footer} />
      </div>
    );
  }
}

export default App;
