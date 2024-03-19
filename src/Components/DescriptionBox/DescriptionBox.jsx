import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="description-box">
      <div className="description-box-navigation">
        <div className="description-box-navbox">Description</div>
        <div className="description-box-navbox fade">Reviews(122)</div>
      </div>
      <div className="description-box-description">
        <p>
          Welcome to Game Hub, your one-stop destination for all things gaming!
          With a diverse selection of titles spanning across PC, PlayStation,
          and Xbox platforms, we offer an immersive experience tailored to every
          gamer's preference. From action-packed adventures to immersive RPGs,
          our curated collection ensures high-quality gaming experiences. Join
          our community and embark on a journey through the virtual realms of
          gaming delight.
        </p>
        <p>
          Game Hub stands out as a premier destination for gamers seeking an
          unparalleled shopping experience. With its extensive selection of
          titles spanning across multiple platforms including PC, PlayStation,
          and Xbox, it caters to a diverse range of gaming preferences. The
          website's intuitive interface and personalized recommendations ensure
          that users can easily discover new games tailored to their interests.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
