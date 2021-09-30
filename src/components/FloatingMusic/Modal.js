import React from 'react';
import { Helmet } from 'react-helmet';
import { bool, func } from 'prop-types';

import { styWrapperModal } from './styles';

function ModalMusic({ isShow }) {
  if (!isShow) {
    return (
      <Helmet>
        <body className=""></body>
      </Helmet>
    );
  }

  return (
    ''
  );
}

ModalMusic.propTypes = {
  isShow: bool.isRequired,
  // onClickAction: func.isRequired,
};

export default React.memo(ModalMusic);
