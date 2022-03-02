import React, { Component } from "react";
import { Header, Main } from "components/atoms";
import {
  Navbar,
  SectionHeader,
  SectionJumbotron,
  SectionRenovation,
  SectionTurnKey,
  SectionAddress,
  SectionMaps,
  Footer,
} from "components/molecules";

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Behance | Simplā";
  }

  render() {
    return (
      <>
        <Header>
          <Navbar />
          <SectionHeader />
        </Header>
        <Main>
          <SectionJumbotron />
          <SectionRenovation />
          <SectionTurnKey />
          <SectionAddress />
          <SectionMaps />
        </Main>
        <Footer />
      </>
    );
  }
}

export default index;
