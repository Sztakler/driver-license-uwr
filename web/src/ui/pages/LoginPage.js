import React from 'react';

import PageTemplate from '../components/templates/page-template';
import LoginContent from '../components/organisms/contents/Login';
import Navbar from '../components/organisms/navbar';
import Footer from '../components/organisms/footer';

export default function HomePage() {
  return (
    <PageTemplate
      header={<Navbar />}
      content={<LoginContent />}
      footer={<Footer />}
    />
  );
}
