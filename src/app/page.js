import Image from "next/image";
import logo from "../../public/images/header-fixed.png";
import userAgent from "../../public/images/u-user.svg";
import userAgentSecond from "../../public/images/u-users-alt.svg";
import phone from "../../public/images/u-phone-alt.svg";
import password from "../../public/images/u-padlock.svg";
import passwordconfirm from "../../public/images/u-padlock2.svg";
import email from "../../public/images/u-envelope.svg";
import country from '../../public/images/u-map-marker-alt.svg'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <Image src={logo} alt="logo" className="logo" width={190} height={48} />

        <div className="singUp-text">
          <button type="submit" className="singUp-button">
            Sign Up
          </button>{" "}
          and find the best place to rest while traveling
        </div>

        <div class="grid-container">
          <div className="container-input-button">
            <label className="button-list-icon"> First Name </label>
            <Image src={userAgent} alt="userAgent" className="button-icon" />

            <input type="text" className="button-list" autocomplete="off" />
          </div>
          <div className="container-input-button">
            <label className="button-list-icon"> Second Name </label>
            <Image
              src={userAgentSecond}
              alt="userAgent"
              className="button-icon"
            />

            <input type="text" className="button-list" autocomplete="off" />
          </div>

          <div class="dropdown ">
          <Image
              src={country}
              alt="userAgent"
              className="button-icon"
            />
            <input type="text" placeholder="Country" className="dropdown-input" />
            <div class="dropdown-content">
              <a href="#">Option 1</a>
              <a href="#">Option 2</a>
              <a href="#">Option 3</a>
            </div>
          </div>

          <div className="container-input-button">
            <label className="button-list-icon"> Phone </label>
            <Image src={phone} alt="userAgent" className="button-icon" />

            <input type="tel" className="button-list" autocomplete="off" />
          </div>
          <div className="container-input-button">
            <label className="button-list-icon"> Password </label>
            <Image src={password} alt="userAgent" className="button-icon" />

            <input type="password" className="button-list" autocomplete="off" />
          </div>
          <div className="container-input-button">
            <label className="button-list-icon"> Confirm password </label>
            <Image
              src={passwordconfirm}
              alt="userAgent"
              className="button-icon"
            />

            <input type="password" className="button-list" autocomplete="off" />
          </div>
          <div className="container-input-button">
            <label className="button-list-icon"> Email</label>
            <Image src={email} alt="userAgent" className="button-icon" />

            <input type="email" className="button-list" autocomplete="off" />
          </div>
          <div className="container-agree">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              className="checkAgree"
            />
            <label for="agree" className="customCheckbox"></label>
            <h3 className="agree">I agree to the</h3>
            <a type="submit" className="term">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
