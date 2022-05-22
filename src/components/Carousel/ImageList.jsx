import React, { useEffect, useState } from 'react';

import styles from './carousel.module.scss';

const ImageList = ({ limit, data, activeImage, setActiveImage }) => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    if (!image.length) {
      setImage(data);
      return;
    }
  }, [data, activeImage, image.length]);

  const onPrevClickHandler = () => {
    const findPrev =
      data.findIndex((item) => Number(item.id) === Number(activeImage)) - 1;
    if (findPrev < 0) {
      setActiveImage(data[data.length - 1].id);
    } else {
      setActiveImage(data[findPrev].id);
    }
  };

  const onNextClickHandler = () => {
    const findNext =
      data.findIndex((item) => Number(item.id) === Number(activeImage)) + 1;
    if (findNext >= data.length) {
      setActiveImage(data[0].id);
    } else {
      setActiveImage(data[findNext].id);
    }
  };

  return (
    <div className={styles.ImageList}>
      <button disabled={activeImage === 0} onClick={onPrevClickHandler}>
        &#8678;
      </button>
      {image.map((item, index) => (
        <img
          onClick={(e) => setActiveImage(item.id)}
          style={
            Number(item.id) === Number(activeImage)
              ? { border: '2px solid red' }
              : {}
          }
          key={item.id}
          src={item.download_url}
          alt={item.name}
        />
      ))}
      <button
        onClick={onNextClickHandler}
        disabled={activeImage === data.length - 1}
      >
        &#8680;
      </button>
    </div>
  );
};

export default ImageList;
