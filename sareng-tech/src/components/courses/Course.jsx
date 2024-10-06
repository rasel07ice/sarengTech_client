import { Link } from "react-router-dom";

const Course = ({ course }) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50 overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-fill scale-110 transition-all duration-400 hover:scale-100"
          src={course?.img_url}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            Paid course
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
            {course?.title}
          </h1>
          <p className="leading-relaxed mb-3">
            {course?.details?.slice(0, 150)}
            {"......"}
          </p>
          <div className="flex items-center flex-wrap ">
            <Link
              to={`/courses/${course?.course_id}`}
              className="text-blue-600 underline rounded-md font-bold text-lg hover:bg-primary hover:text-white hover:no-underline px-3 py-2"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
