import noProjectImage from "../assets/no-projects.png";
import AddButton from "./AddButton.jsx";
export default function NoProjectView({ addProjectHandler }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="h-16 w-16 object-contain mx-auto"
        src={noProjectImage}
        alt="No-project"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4 ">
        Select a project or get start with a new one
      </p>
      <p className="mt-8">
        <AddButton onClick={addProjectHandler}>Create new Project</AddButton>
      </p>
    </div>
  );
}
