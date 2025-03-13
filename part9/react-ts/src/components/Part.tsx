import {CoursePart} from "../types.ts";

const Part = ({coursePart}: {coursePart: CoursePart}) => {
    let content;
    switch (coursePart.kind) {
        case "basic":
            content = (
                <p>
                    <b>{coursePart.name} {coursePart.exerciseCount}</b><br/>
                    <em>{coursePart.description}</em>
                </p>
            )
            break;
        case "group":{
            content = (
                <p>
                    <b>{coursePart.name} {coursePart.exerciseCount}</b><br/>
                    project exercises {coursePart.groupProjectCount}
                </p>
            )
            break;
        }
        case "background":{
            content = (
                <p>
                    <b>{coursePart.name} {coursePart.exerciseCount}</b><br/>
                    <em>{coursePart.description}</em><br/>
                    submit to{coursePart.backgroundMaterial}
                </p>
            )
            break;
        }
        case "special":{
            content = (
                <p>
                    <b>{coursePart.name} {coursePart.exerciseCount}</b><br/>
                    <em>{coursePart.description}</em><br/>
                    required skills: {coursePart.requirements.join(", ")}
                </p>
            )
            break;
        }
        default:{
            content = null;
        }
    }
    return (
        <div>{content}</div>
    );
};

export default Part;