import { useTranslation } from "react-i18next";
import { Catalogue } from "../../data/catalogue";
import TextTyping from "../shared/TextTyping";

const CatalogueDesc: React.FC<{ item: Catalogue }> = ({ item }) => {
  const { t, i18n } = useTranslation();
  const language = i18n.language as "en" | "ka";
  const isMobile = window.innerWidth < 1024;

  if (isMobile) {
    return (
      <div id={item.label} className="shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src={item.image}
            alt={item.label}
            className="w-full object-cover"
          />
          <div className="bg-primary bg-opacity-75 text-white lg:p-6 p-4 absolute bottom-0 w-full">
            <TextTyping
              className="lg:text-xl text-base font-bold"
              text={t(item.label)}
            />
          </div>
        </div>
        <div className="p-4">
          <TextTyping text={item.description[language]} />
          <ul className="flex gap-1 flex-col p-4 w-full list-disc text-gray-800">
            {item.features.map((feature, index) => (
              <li className="list-item" key={feature.en + index}>
                <strong>{feature[language].split(":")[0]}</strong>:
                <span>{feature[language].split(":")[1]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div
        id={item.label}
        className="shadow-lg rounded-lg overflow-hidden w-2/3"
      >
        <div className="relative">
          <img
            src={item.image}
            alt={item.label}
            className="w-full object-cover"
          />
          <ul className="bg-primary flex gap-4 flex-col bg-opacity-0 cursor-pointer hover:bg-opacity-60 animation duration-700 text-white p-6 absolute bottom-0 w-full list-disc">
            {item.features.map((feature, index) => (
              <li className="list-item" key={feature.en + index}>
                <strong>{feature[language].split(":")[0]}</strong>:
                <span>{feature[language].split(":")[1]}</span>
              </li>
            ))}
          </ul>
          <div className="absolute top-0 w-full">
            <div className="bg-primary bg-opacity-75 text-white lg:p-6 p-4 ">
              <TextTyping
                className="lg:text-xl text-base font-bold"
                text={t(item.label)}
              />
            </div>
            <div className="p-4 bg-primary bg-opacity-40 text-white lg:p-6 ">
              <TextTyping text={item.description[language]} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CatalogueDesc;
