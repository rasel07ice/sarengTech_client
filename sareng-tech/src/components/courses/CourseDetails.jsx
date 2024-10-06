import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  console.log(course);
  return (
    <div className="py-8">
      <div>
        <div className="flex flex-row gap-3 items-center mt-2">
          <img
            className="size-96 rounded-lg shadow-sm"
            src={course?.img_url}
            alt=""
          />
          <div className="text-left">
            <h3 className="text-xl font-bold">
              <span className="font-semibold">Book Name: </span>
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
          </div>
        </div>

        <div className="text-left space-y-5">
          <p>
            <span>Reviews: </span>
            {course?.details}
          </p>
        </div>
        {/* <div className="flex flex-row gap-6 py-4">
          <button
            className="bg-primary px-3 py-2 border-none rounded-md"
            onClick={() => notify(book?.bookId, book?.bookName)}
          >
            Wish to Read
          </button>
          <button
            className="bg-backPrimay px-3 py-2 border-none rounded-md"
            onClick={() => AddToCart(book?.bookId, book?.bookName)}
          >
            Add to Cart
          </button>

        </div> */}
      </div>
    </div>
  );
};

export default CourseDetails;
