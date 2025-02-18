import { useTranslation } from "react-i18next";

const catalogueItems = [
  {
    id: 1,
    image: "images/cctv.webp",
    title: "Product 1",
    description: "Description for Product 1.",
  },
  {
    id: 2,
    image: "images/fireAlarm.webp",
    title: "Product 2",
    description: "Description for Product 2.",
  },
  {
    id: 3,
    image: "images/pava.webp",
    title: "Product 3",
    description: "Description for Product 3.",
  },
  {
    id: 4,
    image: "images/cctv.webp",
    title: "Product 4",
    description: "Description for Product 4.",
  },
];

const Catalogue = () => {
  const { t } = useTranslation();

  return (
    <section className="py-9">
      <h1 className="bg-primary lg:w-1/3 w-full mx-auto text-white text-center py-3 text-3xl font-bold mb-5">
        {t("catalogue")}
      </h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6">
          {catalogueItems.map((item) => (
            <div key={item.id} className="shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover"
                />
                <div className="lg:text-xl text-base font-bold bg-primary bg-opacity-75 text-white lg:p-6 p-4 absolute bottom-0 w-full">
                  {item.title}
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
