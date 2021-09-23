import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Lokasi Acara</h2>
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_LINK}
                  title="Click untuk melihat peta di Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>Rumah Nanda</strong>
                </a>{' '}
                <br />
                Dsn. Mejerat  RT. 01 RW. 06 Ds. Pungging <br /> Kec. Pungging Kab. Mojokerto
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.437191954748!2d112.57858331440308!3d-7.527200676371995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78752f7755b659%3A0x0!2zN8KwMzEnMzcuOSJTIDExMsKwMzQnNTAuOCJF!5e0!3m2!1sid!2sid!4v1632417069338!5m2!1sid!2sid"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Nanda & Fandi Wedding Party"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
