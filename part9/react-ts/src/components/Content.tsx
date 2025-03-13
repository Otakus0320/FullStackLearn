import Part from "./Part.tsx";
import {CoursePart} from "../types.ts";

const Content = ({courseParts}: {courseParts: CoursePart[]}) => {
    return (
        <div>
            {courseParts.map((coursePart: CoursePart) => <Part coursePart={coursePart} />)}
        </div>
    );
};

export default Content;