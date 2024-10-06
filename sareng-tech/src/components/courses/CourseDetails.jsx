import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  console.log(course);
  return (
    <div className="py-8">
      <div>
        <div className="flex flex-col md:flex-row gap-3 items-center mt-2">
          <img
            className="size-96 rounded-lg shadow-sm"
            src={course?.img_url}
            alt=""
          />
          <div className="text-left">
            <h3 className="text-xl font-bold">
              <span className="font-semibold">Course Name: </span>
              {course?.title}
            </h3>
            <p className="text-lg">
              <span className="font-semibold">Level: </span>
              {course?.level}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Student: </span>
              {course?.student}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Duration: </span>
              {course?.duration}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Price: </span>
              {course?.price}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Assesment: </span>
              {course?.assessments}
            </p>
            <div>
              <span>Rating:</span>
              {course?.ratings}
            </div>
            <div>
              <p className="text-lg font-semibold">Trainer:</p>
              <img
                className="size-16 rounded-full"
                src={course?.author_img_url}
                alt="Author"
              />
              <span className="font-semibold text-primary">
                {course?.author}
              </span>
            </div>
          </div>
        </div>

        <div className="text-left space-y-5">
          <p>
            <span>Description: </span>
            {course?.details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
