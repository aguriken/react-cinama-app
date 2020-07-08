import React, { useState } from 'react';
import './MainContent.scss';
import Slideshow from '../slide-show/Slideshow';
import Paginate from '../paginate/Paginate';

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
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (type) => {
    if (type === 'prev' && currentPage > 1) {
      setCurrentPage((page) => page - 1);
    } else {
      setCurrentPage((page) => page + 1);
    }
  };
  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
        </div>
      </div>
      {/* display grid component */}
    </div>
  );
};

export default MainContent;
