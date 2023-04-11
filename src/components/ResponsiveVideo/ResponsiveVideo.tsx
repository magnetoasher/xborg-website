export type ResponsiveVideoProps = {
  src: string;
};

export const ResponsiveVideo = ({ src }: ResponsiveVideoProps) => {
  return (
    <div className="responsive-video-container">
      <iframe
        src={src}
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        allowFullScreen
      ></iframe>
    </div>
  );
};
