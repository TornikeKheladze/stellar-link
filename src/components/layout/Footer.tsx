import { useTranslation } from "react-i18next";
import footerLogoSrc from "../../assets/footerLogo.avif";
import FacebookIcon from "../shared/FacebookIcon";
import InstagramLogo from "../shared/InstagramLogo";
import LinkedinLogo from "../shared/LinkedinLogo";
import PrimaryButton from "../shared/PrimaryButton";
import { useNavigate } from "react-router";
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
    <footer className="border-t-2 border-black border-opacity-50 mx-7 lg:mx-28 pt-10 pb-8 lg:pt-14">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0">
        <div className="flex justify-center w-16 lg:w-24 shrink-0 lg:mr-10">
          <img src={footerLogoSrc} alt="stellar-link" className="w-full" />
        </div>
        <div className="w-full flex flex-col items-start self-start">
          <h3 className="font-bold text-2xl">სათავო ოფისი</h3>
          <p>
            ლუბლიანას III ჩიხი, N9,
            <br /> თბილისი
          </p>
        </div>
        <div className="w-full flex flex-col items-start self-start">
          <h3 className="font-bold text-2xl">დაგვიკავშირდი</h3>
          <p>gurgena@gmail.com</p>
          <p>+995 598 21 51 53</p>
        </div>
        <div className="w-full flex flex-col items-start gap-2">
          <h3 className="font-bold text-2xl">{t("socials")}</h3>
          <a href="#" className="text-primary flex items-center gap-4">
            <FacebookIcon /> <span className="text-black">Facebook</span>
          </a>
          <a href="#" className="text-primary flex items-center gap-4">
            <InstagramLogo />
            <span className="text-black">Instagram</span>
          </a>
          <a href="#" className="text-primary flex items-center gap-4">
            <LinkedinLogo /> <span className="text-black">Linkedin</span>
          </a>
        </div>
        <PrimaryButton
          label={t("contact")}
          onClick={() => navigate("/contact")}
          className="w-[132px] lg:w-[170px] shrink-0 self-start lg:self-center"
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
