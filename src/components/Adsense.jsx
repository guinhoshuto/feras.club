import React from 'react';

export default class Adsense extends React.Component {
    componentDidMount() {
      const installGoogleAds = () => {
        const elem = document.createElement("script");
        elem.src =
          "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        elem.async = true;
        elem.defer = true;
        document.body.insertBefore(elem, document.body.firstChild);
      };
      installGoogleAds();
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  
    render() {
      return (
        <ins className='adsbygoogle'
             style={{ display: 'block' }}
             data-ad-client='ca-pub-5577466732553898'
             data-ad-slot='7773986920'
             data-ad-format='auto' />
      );
    }
  }