import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';

const IMAGE_URL = `https://thekusuma.com/static/slide-6-4715e29302dbaa2ba21494c6258298d4.jpg`;
const META_DESCRIPTION = `Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan keberkahan. - Nanda & Fandi`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Nanda ❤️ Fandi Wedding</title>

        {/* font and SEO tags */}
        <meta property="og:title" content="The Wedding of Nanda & Fandi" />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="og:site_name" content="The Wedding of Nanda & Fandi" />

        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
