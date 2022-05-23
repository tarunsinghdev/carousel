import React, { useRef, useState } from 'react';

import useFetch from '../../hooks/useFetch';
import { IMAGE_API } from '../../utils/apis/api';
import ImageList from './ImageList';
import styles from './carousel.module.scss';

const Carousel = () => {
  const { loading, data } = useFetch(IMAGE_API);
  const [activeImage, setActiveImage] = useState(0);
  const activeRef = useRef(0);
  const timerRef = useRef(null);

  const limit = 5;

  const onStartClick = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      onNextClickHandler();
    }, 1000);
  };

  const onStopClick = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const heroImage = () => {
    if (!data.length) return;
    const hero = data.find(
      (item, index) => Number(item.id) === Number(activeImage)
    );
    // const hero = data[activeImage];
    return <img src={hero.download_url} alt={hero.name} />;
  };

  const onNextClickHandler = () => {
    const findNext =
      data.findIndex((item) => Number(item.id) === Number(activeRef.current)) +
      1;
    if (findNext >= data.length) {
      activeRef.current = data[0].id;
      setActiveImage(activeRef.current);
    } else {
      activeRef.current = data[findNext].id;
      setActiveImage(activeRef.current);
    }
  };

  return (
    <div className={styles.Carousel}>
      {loading && <div className={styles.loading}>Loading...</div>}
      {!loading && heroImage()}
      <ImageList
        limit={limit}
        data={data}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
        onNextClickHandler={onNextClickHandler}
      />
      <button onClick={onStopClick}>Stop</button>
      <button onClick={onStartClick}>Start</button>
    </div>
  );
};

export default Carousel;
