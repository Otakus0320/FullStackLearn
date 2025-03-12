type Course = {
    name: string,
    exerciseCount: number
};

type CourseParts = Array<Course>;

const Content = ({courseParts}: {courseParts: CourseParts}) => {
    return (
        <div>
            {courseParts.map((course: Course) => <p>{course.name} {course.exerciseCount}</p>)}
        </div>
    );
};

export default Content;