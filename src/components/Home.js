import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import DownSvg from "./images/down.svg";
import Video from "./images/video/copypasta.mp4";


const Home = () => {
  return (
    <div>
      <div className="fixed inset-0 z-0">
        <ReactPlayer
          url=""
          playing
          loop
          muted
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>

      <div className="relative z-10">
        <div id="header" className="header pb-10 md:pb-60 h-full flex items-center justify-center">
          <div className="text-xl">
            <div className="fadeinslow"></div>
            <div className="fadein relative text-yellow-myyellow text-xl mt-10 font-bold sm:m-24 sm:text-2xl md:text-4xl md:m-32 lg:m-32 xl:mx-64 lg:text-4xl flex items-center text-center justify-center h-full">
              Hello! I am Owen.
            </div>
            <div className="fadein relative text-xl m-16 sm:m-24 sm:text-2xl md:text-4xl md:m-32 lg:m-32 xl:mx-64 lg:text-4xl flex items-center text-center justify-center h-full">
              Welcome to my portfolio. I am a recent college graduate, eager to embark on my professional journey in web development. With a strong desire to learn, grow, and contribute, I am excited to join a team where I can apply my skills and passion for web development in a collaborative and innovative environment.
            </div>
            <a className="downbutton w-5">
              <img className="downbutton w-16 slide-top-fast flex mx-auto hover:w-20 ease-in-out duration-300" src={DownSvg} alt="down button"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
