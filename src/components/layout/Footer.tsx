import { useTranslation } from "react-i18next";
import footerLogoSrc from "../../../public/images/fullLogo.png";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import InstagramLogo from "../../assets/icons/InstagramLogo";
import LinkedinLogo from "../../assets/icons/LinkedinLogo";
import { useNavigate } from "react-router";
import LocationIcon from "../../assets/icons/LocationIcon";
import EmailIcon from "../../assets/icons/EmailIcon";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import PrimaryButton from "../shared/PrimaryButton";
export default function Footer() {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const navigate = useNavigate();

  return (
    <footer className="border-t-2 border-black border-opacity-50 mx-7 lg:mx-28 pt-10 pb-8 lg:pt-14 text-textSecondary">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
        <div className="flex justify-center w-16 lg:w-24 shrink-0 lg:mr-10">
          <img src={footerLogoSrc} alt="stellar-link" className="w-full" />
        </div>
        <div className="w-full flex flex-col items-start self-start">
          <h3 className="font-bold text-2xl">{t("headOffice")}</h3>
          <div className="text-textPrimary">
            <p className="flex gap-3 items-center">
              <LocationIcon /> {t("officeCity")}
            </p>
            <p>{t("officeAddress")}</p>
          </div>
        </div>
        <div className="w-full flex flex-col items-start self-start">
          <h3 className="font-bold text-2xl">{t("contactUs")}</h3>
          <p className="text-textPrimary flex gap-4 items-center">
            <EmailIcon /> <span>info@stellarlink.ge</span>
          </p>
          <p className="text-textPrimary flex gap-4 items-center">
            <PhoneIcon /> <span>+995 322 15 16 00</span>
          </p>
        </div>
        <div className="w-full flex flex-col items-start gap-2">
          <h3 className="font-bold text-2xl">{t("socials")}</h3>
          <a href="#" className="text-textPrimary flex items-center gap-4">
            <FacebookIcon /> <span className="">Facebook</span>
          </a>
          <a href="#" className="text-textPrimary flex items-center gap-4">
            <InstagramLogo />
            <span className="">Instagram</span>
          </a>
          <a href="#" className="text-textPrimary flex items-center gap-4">
            <LinkedinLogo /> <span className="">Linkedin</span>
          </a>
        </div>
        <PrimaryButton
          label={t("contact")}
          onClick={() => navigate("/contact")}
          className="w-[132px] lg:w-[170px] shrink-0 self-start lg:self-center text-black"
        />
      </div>
      <div className="flex justify-between mt-8">
        <span>© 2025 by STELLAR LINK</span>
        <button
          onClick={scrollToTop}
          className="underline hidden lg:inline-block"
        >
          Go Up
        </button>
      </div>
    </footer>
  );
}
