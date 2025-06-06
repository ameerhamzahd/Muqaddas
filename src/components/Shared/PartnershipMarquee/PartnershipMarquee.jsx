import React from 'react';
import Marquee from 'react-fast-marquee';
import aciLogo from '../../../assets/aci-logo.png';
import bkashLogo from '../../../assets/bkash-logo.png';
import bsrmLogo from '../../../assets/bsrm-logo.png';
import gpLogo from '../../../assets/gp-logo.png';
import phpLogo from '../../../assets/php-logo.png';

const PartnershipMarquee = () => {

    const logos = [aciLogo, bkashLogo, bsrmLogo, gpLogo, phpLogo];

    return (
        <div>
            <div className="bg-primary py-10 my-15">
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="flex items-center max-w-5xl mx-auto"
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="mx-12 flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`Partner Logo ${index + 1}`}
              className="h-20 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
        </div>
    );
};

export default PartnershipMarquee;