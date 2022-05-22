import React, { useState } from 'react';

import useFetch from '../../hooks/useFetch';
import { IMAGE_API } from '../../utils/apis/api';
import ImageList from './ImageList';
import styles from './carousel.module.scss';

const Carousel = () => {
  const { loading, data } = useFetch(IMAGE_API);
  const [activeImage, setActiveImage] = useState(0);

  const heroImage = () => {
    if (!data.length) return;
    const hero = data.find(
      (item, index) => Number(item.id) === Number(activeImage)
    );
    // const hero = data[activeImage];
    return <img src={hero.download_url} alt={hero.name} />;
  };

  const limit = 5;

  return (
    <div className={styles.Carousel}>
      {loading && <div className={styles.loading}>Loading...</div>}
      {!loading && heroImage()}
      {console.log(data)}
      <ImageList
        limit={limit}
        data={data}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
    </div>
  );
};

export default Carousel;
