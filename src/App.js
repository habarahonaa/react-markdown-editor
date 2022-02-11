import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Playground } from "./components/SplitPane/Playground";
import { MobileModal } from "./components/MobileModal/MobileModal";
import styles from "./App.module.css";

const code = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:`;

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width,
      code: code,
      theme: "vs",
    };

    this.codeChange = this.codeChange.bind(this);
    this.themeChange = this.themeChange.bind(this);
  }

  codeChange(newValue, e) {
    console.log(newValue);
    this.setState({ code: newValue });
  }

  themeChange(e) {
    this.setState({ theme: e.target.value });
  }

  render() {
    let width = window.innerWidth;
    if (width > 768) {
      return (
        <div className={styles.wrapper}>
          <Navbar themeChange={this.themeChange} />
          <Playground
            handleChange={this.codeChange}
            code={this.state.code}
            theme={this.state.theme}
          />
          <Footer />
        </div>
      );
    } else {
      return (
        <div className={styles.wrapper}>
          <Navbar themeChange={this.themeChange} />
          <MobileModal />
        </div>
      );
    }
  }
}
