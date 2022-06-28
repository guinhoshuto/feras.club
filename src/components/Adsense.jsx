import React from 'react';

export default class Adsense extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-5577466732553898'
          data-ad-slot='7571910599'
          data-ad-format='auto' />
    );
  }
}