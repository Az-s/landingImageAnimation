import "./SaqtaBlock.css";
import phoneImg from "../assets/Group.png";
import imageTwo from "../assets/2.png";
import imageTwelve from "../assets/12.png";
import imageThirteen from "../assets/13.png";
import imageSeventeen from "../assets/17.png";
import SaqtaImg from "../assets/SaqtaLogo.png";

const SaotaBlock = () => {
  return (
    <div className="background">
      <div className="container">
        <div className="left">
          <img src={phoneImg} alt="Справа картинка" />
        </div>
        <div className="right">
          <img src={SaqtaImg} alt="Saqta" />
          <p>
            Отличная еда <span> <br /> по отличной цене</span>
          </p>
          <div className="bottom">
            <div className="text">
              <p>при этом приносить <br /> пользу планете</p>
            </div>
            <div className="image">
              <img src={imageTwo} alt="Картинка снизу" />
              <img src={imageTwelve} alt="Картинка снизу" />
              <img src={imageThirteen} alt="Картинка снизу" />
              <img src={imageSeventeen} alt="Картинка снизу" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaotaBlock;
