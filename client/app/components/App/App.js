import React, { Component } from 'react';

import Header from "../pages/Header";
import Footer from "../pages/Footer";
import Wrapper from "../pages/Wrapper";
import Title from "../pages/Title";
import NavTabs from "../pages/NavTabs";

const App = ({ children }) => (
  <>
    <NavTabs />
    <Header>
      <Title />
    </Header>
        <Wrapper>
          <main>
            {children}
          </main>
        </Wrapper>
   <Footer />
  </>
);

export default App;
