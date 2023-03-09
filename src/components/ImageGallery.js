const ImageGallery = ({ images }) => {
  return (
    <div>
      {images.map((image) => {
        return <img key={image} src={image} />;
      })}
    </div>
  );
};

export default ImageGallery;
