import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactImage from '../../../static/assets/images/auth/login.jpg'


export default function () {
  return (
    <div className="content-page-wrapper">

      <div
        className="left-column"
        style={{
          background: `url(${contactImage}) no-repeat`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />


      <div className="right-column">
        <div className="contact-wrapper">

          <div className="bullet-point-group">
            <div className="icon"><FontAwesomeIcon icon="phone-square-alt" /></div>
            <div className="text">5579392983</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon"><FontAwesomeIcon icon="envelope" /></div>
            <div className="text">ankar_aguirre@live.com</div>
          </div>

          <div className="bullet-point-group">
            <div className="icon"><FontAwesomeIcon icon="map-marked-alt" /></div>
            <div className="text">Cuernavaca, Morelos.</div>
          </div>

        </div>

      </div>
    </div >
  )
}
