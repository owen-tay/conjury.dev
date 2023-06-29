import React from 'react';
import { Link } from 'react-router-dom';
import DownSvg from "./images/down.svg";


const Home = () => {
  return (
      <div>
          <div class="header pb-10 md:pb-60 h-full flex items-center justify-center">
        <div class="text-xl">
            <div class="fadeinslow">
               
            </div>
            <div
                class="fadein relative   text-yellow-myyellow text-xl mt-10 font-bold sm:m-24 sm:text-2xl md:text-4xl md:m-32  lg:m-32 xl:mx-64 lg:text-4xl flex items-center text-center justify-center h-full">
                Hello! I am Owen. </div>
            <div
                class="fadein relative    text-xl m-16 sm:m-24 sm:text-2xl md:text-4xl md:m-32  lg:m-32 xl:mx-64 lg:text-4xl flex items-center text-center justify-center h-full">
                Welcome to my portfolio. I am a recent college graduate, eager to embark on my professional journey in
                web development. With a strong desire to learn, grow, and contribute, I am excited to join a team where
                I can apply my skills and passion for web development in a collaborative and innovative environment.
            </div>
            <a class="downbutton w-5"  onclick="scrollToHerobot();">
                <img class="downbutton w-16 slide-top-fast flex mx-auto hover:w-20 ease-in-out duration-300"
                    src={DownSvg} alt="down button"></img>
            </a>

        </div>
    </div>
    
    

      </div>
  );
}

export default Home;
