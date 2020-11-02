import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../Button";

import { loadImages } from "../../actions";

import "./styles.css";
import Stats from "../Stats";

const ImageGrid = () => {
  const dispatch = useDispatch();

  const { images, isLoading, error, imageStats } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

  console.log(images);

  return (
    <div className="content">
      <section className="grid">
        {images.map((image) => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(image.height / image.width)}`}
          >
            <Stats stats={imageStats[image.id]} />
            <img src={image.urls.small} alt={image.user.username} />
          </div>
        ))}
      </section>
      {error && <div className="error">{JSON.stringify(error)}</div>}
      <Button loading={isLoading} onClick={() => dispatch(loadImages())}>
        Load More
      </Button>
    </div>
  );
};

export default ImageGrid;
