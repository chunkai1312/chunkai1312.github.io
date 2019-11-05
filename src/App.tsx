import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import withRoot from './withRoot';
import { ResumeProvider } from './contexts/resume';

function App() {
  return (
    <ResumeProvider>
      <Header />
      <Content />
      <Footer />
    </ResumeProvider>
  );
}

export default withRoot(App);
