import React, { Fragment, useState } from 'react';
import IconMusic from '@assets/images/music-icon.png';
import IconEmail from '@assets/images/email-icon.png';
import logoBRI from '@assets/images/logo-bri.png';
import IconMusicStop from '@assets/images/music-stop-icon.png';
import MusicBacksound from '@assets/music/promise.mp3';
import { Helmet } from 'react-helmet';

import { styMusicFloating, styGiftFloating, styWrapperModal } from './styles';


function FloatingMusic() {
  const [play, setPlay] = useState(true);
  const [modal, setModal] = useState(true);
  const [loading, setLoading] = useState(false);

  const titleBankNumber = {
    fontSize: '30px',
  };

  // let modalHide = true;
  // this.state.modalHide = true;
  const toggleModal = () => {
    // this.state.modalHide = false;
    setModal(!modal);
  }

  const toggleMusic = () => {
    const myAudio = document.getElementById('myAudio');
    /**
     * This function built-in with html5 function
     * doc: https://www.w3schools.com/tags/ref_av_dom.asp
     */
    if (play) {
      myAudio.pause();
    } else {
      myAudio.play();
    }

    setPlay(!play);
  };

  return (
    <Fragment>
      <div css={styMusicFloating}>
        <audio id="myAudio" loop className="hide">
          <source src={MusicBacksound} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div onClick={toggleMusic}>
          <img
            src={play ? IconMusic : IconMusicStop}
            className="icon-music"
            alt="icon-music"
            title={`${play ? 'Matikan Musik' : 'Putar Musik'}`}
          />
        </div>
      </div>
      <div css={styGiftFloating}>
        <div onClick={toggleModal}>
          <img
            src={IconEmail}
            className="icon-music"
            alt="icon-music"
            title=''
          />
        </div>
      </div>
      
      <div css={styWrapperModal} className="modal-open" hidden={modal}>
        {/* <Helmet>
          <body className="body-hidden"></body>
        </Helmet> */}
        <div id="myModal" className="modal fade in" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <h2 className="title">Berikan Angpao & Kado Pernikahan</h2>
                <br />
                <h2 className="sub-title">Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.</h2>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <img src={logoBRI} className="img img-responsive img-small" />
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <br />
                    <h5 className="title" style={titleBankNumber}>320201028541536</h5>
                    <h2 className="sub-title">An. Isnanda Heni Arianti</h2>
                  </div>
                </div> 
                
              </div>
              <div className="modal-footer">
                <center>
                  <button onClick={toggleModal} type="button" className="btn btn-primary" data-dismiss="modal">
                    OK
                  </button>
                  <center></center>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default FloatingMusic;
