import AddButton from "./AddButton.jsx";

export default function Sidebar({
  addProjectHandler,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="px-8 py-16 w-1/3 rounded-r-xl bg-stone-900 text-stone-50 md:w-72">
      <h2 className="mb-8 font-bold uppercase md:text- xl text-stone-200 ">
        YOUR PROJECTS
      </h2>
      <div>
        <AddButton onClick={addProjectHandler}>+ Add Project</AddButton>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClass =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedProjectId) {
            cssClass += " bg-stone-800 text-stone-200";
          } else {
            cssClass += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClass}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
