import { useTranslation } from "react-i18next";
export type Career = {
  id: number;
  title: string;
  location: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  image: string;
};

export const useCareersData = (
  id?: string
): {
  careers: Career[];
  career: Career | undefined;
} => {
  const { t } = useTranslation();

  const careers: Career[] = [
    {
      id: 1,
      title: t("careers.softwareEngineer"),
      location: t("careers.locationRemote"),
      salary: t("careers.salarySE"),
      description: t("careers.descriptionSE"),
      responsibilities: t("careers.responsibilitiesSE", {
        returnObjects: true,
      }) as string[],
      requirements: t("careers.requirementsSE", {
        returnObjects: true,
      }) as string[],
      image: "/images/careers/career1.webp",
    },
    {
      id: 2,
      title: t("careers.dataScientist"),
      location: t("careers.locationNY"),
      salary: t("careers.salaryDS"),
      description: t("careers.descriptionDS"),
      responsibilities: t("careers.responsibilitiesDS", {
        returnObjects: true,
      }) as string[],
      requirements: t("careers.requirementsDS", {
        returnObjects: true,
      }) as string[],
      image: "/images/careers/career1.webp",
    },
  ];

  return {
    careers,
    career: id ? careers.find((career) => career.id === +id) : undefined,
  };
};
