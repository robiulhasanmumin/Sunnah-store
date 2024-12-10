const BannerImg = ({ src, alt }) => {
  return (
    <>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </>
  );
};

export default BannerImg;
