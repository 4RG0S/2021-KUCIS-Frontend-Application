import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';

import BoardHome from './BoardHome';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Introduction from './pages/Introduction';
import TTP from './pages/TTP';
import Projects from './pages/Projects';

const sections = [
  { title: 'Introduction', url: '/introduction' },
  { title: 'TTPs', url: '/ttp' },
  { title: 'Projects', url: '/projects' },
];


export default function Board() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="KUCIS" sections={sections} />
        <main>
          <Router>
            <Switch>
              <Route path="/" exact component={BoardHome} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/introduction" component={Introduction} />
              <Route path="/ttp" component={TTP} />
              <Route path="/projects" component={Projects} />
            </Switch>
          </Router>
        </main>
      </Container>
      <Footer title="" description="This is 2021 ARGOS KUCIS Project" />
    </React.Fragment>
  );
}
