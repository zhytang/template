import * as React from 'react';

import './index.less';

const iframeStyle: React.CSSProperties = {
  width: '100%',
  height: '4630px',
  border: 0,
  borderRadius: '4px',
  overflow: 'hidden',
};

const Home = () => (
  <div className="home-container">
    <iframe
      style={iframeStyle}
      allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
      className="home-container-iframe"
      src="https://www.cosmosource.com/"
      title="cosmosource"
    />
  </div>
);

export default Home;
