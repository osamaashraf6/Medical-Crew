import Departments from "../../assets/img_home/Departments_2.png";
function Departments_2() {
  const Departmentss = [
    {
      title: "Malcolm Baldrige National Quality Award",
      description:
        "We understand that seeking medical care can be a stressful and emotional experience, and we strive to create a welcoming and supportive environment that puts our patients at ease.",
      image: Departments,
    },
    {
      title: "HIMSS Davies Award recognizes healthcare  ",
      description:
        "We are committed to providing excellent medical care and services to our patients. We continuously improve our skills, knowledge, and resources to deliver the highest quality care possible.",
      image: Departments,
    },
    {
      title: "Healthgrades Nationals Best Hospital",
      description:
        "We believe in practicing medicine with integrity and honesty. Transparency in communication and decision-making processes ensures that we always prioritize our patient's interests.",
      image: Departments,
    },
    {
      title: "Joint Commission Gold Seal of Approval",
      description:
        "We treat all individuals with respect and dignity, regardless of their background, beliefs, or circumstances. Every person deserves compassion and kindness.",
      image: Departments,
    },
  ];
  return (
    <div className="mb-[100px]">
      <section className="container ">
        <h2 className="pb-10 text-3xl font-bold text-text_color">
          Departments{" "}
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {Departmentss.map((item, index) => (
            <div
              key={index}
              className="p-6 transition-shadow bg-white rounded-lg shadow-[0px_0px_20px_1px_#307ac448] hover:shadow-[0px_0px_20px_10px_#307ac448]"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 p-2 border-2 rounded-md border-secondary bg-secondary"
                />
                <h3 className="font-bold text-[16px] text-text_color">
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Departments_2;
