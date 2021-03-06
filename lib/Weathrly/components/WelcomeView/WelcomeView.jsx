import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import './WelcomeView.css';

function WelcomeView({ data, locationHandler, trie }) {
  return (
    <section className="WelcomeView">
      <div className="cloud-container">
        <img alt="cloud" id="cloud1" className="clouds" src="lib/assets/clouds1.png" />
        <img alt="cloud" id="cloud2" className="clouds" src="lib/assets/clouds2.png" />
        <img alt="cloud" id="cloud3" className="clouds" src="lib/assets/clouds3.png" />
        <img alt="cloud" id="cloud1" className="cloudsL" src="lib/assets/clouds1.png" />
        <img alt="cloud" id="cloud2" className="cloudsL" src="lib/assets/clouds2.png" />
        <img alt="cloud" id="cloud3" className="cloudsL" src="lib/assets/clouds3.png" />
      </div>
      <h1 className="logo">WEATHRLY</h1>
      <span className="emoji">😄</span>
      <h1 className="welcome-msg">Welcome!</h1>
      <p className="welcome-sub-msg">Enter your location</p>
      <SearchInput
        trie={trie}
        errorClass={true}
        data={data}
        handler={locationHandler}
      />
    </section>
  );
}

export default WelcomeView;
