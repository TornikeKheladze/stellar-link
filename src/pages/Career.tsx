import { useParams } from "react-router";
import { useCareersData } from "../helpers/useCareersData";
import { useTranslation } from "react-i18next";

const Career = () => {
  const { id } = useParams<{ id: string }>();
  const { career } = useCareersData(id);
  const { t } = useTranslation();

  if (!career) {
    return (
      <section className="p-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Career Not Found</h1>
        <p className="mt-2 text-gray-600">
          The career you are looking for does not exist.
        </p>
      </section>
    );
  }

  return (
    <section className="py-9">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800">{career.title}</h1>
        <p className="mt-2 text-gray-600">
          <span className="font-semibold">{t("location")}:</span>{" "}
          {career.location}
        </p>
        <p className="mt-2 text-gray-600">
          <span className="font-semibold">{t("careers.salary")}:</span>{" "}
          {career.salary}
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {t("careers.jobDescription")}
          </h2>
          <p className="mt-2 text-gray-600">{career.description}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {t("careers.responsibilities")}
          </h2>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            {career.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {t("careers.requirements")}
          </h2>
          <ul className="mt-2 list-disc list-inside text-gray-600">
            {career.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-gray-800">{t("careers.applyRules")}</p>

        {/* <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
        Apply Now
      </button> */}
      </div>
    </section>
  );
};

export default Career;
