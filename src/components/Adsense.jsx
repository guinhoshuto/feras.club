import React from 'react';
import AdSense from 'react-adsense';

const Adsense = () => {
    return(
        <div>
            <AdSense.Google 
                client='ca-pub-5577466732553898'
                slot='7571910599'
                format='auto'
                responsive='true'
            />
        </div>
    )
}

export default Adsense;