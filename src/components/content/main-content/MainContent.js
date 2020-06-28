import React from 'react';
import './MainContent.scss';
import Slideshow from '../slide-show/Slideshow';

const MainContent = () => {
  const images = [
    {
      url: 'https://gonintendo.com/system/file_uploads/uploads/000/013/780/original/Amano_Warrior_II.jpg'
    },
    {
      url: 'https://www.animationmagazine.net/wordpress/wp-content/uploads/Yoshitaka-Amano-Final-Fantasy-V-post.jpg'
    },
    {
      url: 'https://masamunes.com/wp/wp-content/uploads/2018/09/02-3.jpg'
    }
  ];
  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">Paginate</div>
      </div>
      {/* display grid component */}
    </div>
  );
};

export default MainContent;
