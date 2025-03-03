import appointmentData from "../../pages/Doctors/tracksData"; // تأكد من استيراد البيانات الصحيحة
import hero_img from "../../assets/img_doctors/hero_doctors.png";
import Hero_about from "../../Components/About_com/Hero_about";

const Timetable = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="">
      <Hero_about
        title="ProHealth Timetable Organize Time Easily"
        description="Get to know the complete info of our doctors’ schedule"
        img={hero_img}
        reverseLayout={true}
      />
      <div className="container p-4">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-collapse border-gray-200 table-auto">
            <thead>
              <tr>
                <th className="p-2 border border-gray-300">Time</th>
                {days.map((day) => (
                  <th key={day} className="p-2 border border-gray-300">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* الساعات المعروضة */}
              {[
                "8:00 AM",
                "9:00 AM",
                "10:00 AM",
                "11:00 AM",
                "12:00 PM",
                "1:00 PM",
                "2:00 PM",
              ].map((time) => (
                <tr key={time}>
                  <td className="p-2 text-center border border-gray-300">
                    {time}
                  </td>
                  {days.map((day) => (
                    <td key={day} className="p-2 border border-gray-300">
                      {/* تصفية البيانات بناءً على اليوم والوقت */}
                      {appointmentData
                        .filter((doctor) =>
                          doctor.appointmentSchedules.some(
                            (schedule) =>
                              schedule.day === day &&
                              schedule.time.includes(time)
                          )
                        )
                        .map((doctor, index) => (
                          <div
                            key={index}
                            className="p-2 mb-2 bg-blue-100 rounded shadow-sm"
                          >
                            <p className="font-bold">{doctor.Department}</p>
                            <p>{doctor.title}</p>
                            <p>{doctor.contactInfo.phone}</p>
                          </div>
                        ))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Timetable;
