import React from 'react';

import PageTemplate from '../components/templates/page-template';
import Navbar from '../components/organisms/navbar';
import Footer from '../components/organisms/footer';
import LearningOption from '../components/organisms/learning-option';

export default function HomePage() {
  return (
    <PageTemplate
      header={<Navbar />}
      content={<LearningOption />}
      footer={<Footer />}
    />
  );
}
