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
      id: 3,
      title: t("careers.weakCurrentEngineer.title"),
      location: t("careers.weakCurrentEngineer.location"),
      salary: t("careers.weakCurrentEngineer.salary"),
      description: t("careers.weakCurrentEngineer.description"),
      responsibilities: t("careers.weakCurrentEngineer.responsibilities", {
        returnObjects: true,
      }) as string[],
      requirements: t("careers.weakCurrentEngineer.requirements", {
        returnObjects: true,
      }) as string[],
      image: "/images/careers/career1.webp",
    },
    {
      id: 4,
      title: t("careers.siteManager.title"),
      location: t("careers.siteManager.location"),
      salary: t("careers.siteManager.salary"),
      description: t("careers.siteManager.description"),
      responsibilities: t("careers.siteManager.responsibilities", {
        returnObjects: true,
      }) as string[],
      requirements: t("careers.siteManager.requirements", {
        returnObjects: true,
      }) as string[],
      image: "/images/careers/career1.webp",
    },
    {
      id: 5,
      title: t("careers.electricInstaller.title"),
      location: t("careers.electricInstaller.location"),
      salary: t("careers.electricInstaller.salary"),
      description: t("careers.electricInstaller.description"),
      responsibilities: t("careers.electricInstaller.responsibilities", {
        returnObjects: true,
      }) as string[],
      requirements: t("careers.electricInstaller.requirements", {
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
