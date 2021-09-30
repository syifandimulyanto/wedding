import React, { useState, useEffect, useCallback } from 'react';

import WishesItem from './WishesItem';
import { wishlist } from './wishlist-data';
import { styButtonWrapper } from './styles';
import ImgRing from '@assets/images/ring.png';

const INTERVAL_SLIDE = 35000;

function WishesContainer() {
  const [active, setActive] = useState(0);
  const [pauseSlide, setPauseSlide] = useState(false);
  const totalWishes = wishlist.length || 0;

  const customStyle = {
    padding: "10px"
  }

  const customStyleWhite = {
    backgroundColour: "#fff"
  }

  const handleSetActive = (isNext = true) => {
    if (isNext) {
      if (active === totalWishes - 1) {
        setActive(0);
      } else {
        setActive(active + 1);
      }
    } else {
      if (active === 0) {
        setActive(totalWishes - 1);
      } else {
        setActive(active - 1);
      }
    }

    setPauseSlide(true);

    setTimeout(() => {
      setPauseSlide(false);
    }, INTERVAL_SLIDE);
  };

  const handleSetNext = useCallback(() => {
    if (active === wishlist.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  }, [active]);

  const renderWishlist = () => {
    return wishlist.map((w, index) => <WishesItem key={index} {...w} isActive={index === active} />);
  };

  /** Side effect to autoscroll */
  useEffect(() => {
    const interval = setInterval(() => {
      if (!pauseSlide) {
        handleSetNext();
      } else {
        clearInterval(interval);
      }
    }, INTERVAL_SLIDE);

    return () => clearInterval(interval);
  }, [handleSetNext, pauseSlide]);

  return (
      <div className="container">
        <div className="row" style={customStyle}>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Isikan Nama"
            ></input>
          </div>
          <div class="form-group">
          <textarea className="form-control" rows="3" placeholder="Tuliskan Pesan dan Doa"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Kirim Ucapan
          </button>
        </div>
        <div className="row" style={customStyle}>
          <div className="col-md-12 col-md-offset-0">
            <ul className="timeline animate-box">
              <li>
                {ImgRing && <div className="timeline-badge" style={{ backgroundImage: `url(${ImgRing})` }} />}
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h3 className="timeline-title">Fandi</h3>
                  </div>
                  <div className="timeline-body">
                    <p>Semoga jodoh dunia akhirat, langgeng selamanya.. pernikahan yang membawa rezeki, happy terus </p>
                  </div>
                </div>
              </li>
            </ul>
        </div>
      </div>
      </div>
  );
}

export default React.memo(WishesContainer);
