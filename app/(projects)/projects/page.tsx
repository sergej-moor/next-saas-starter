import CreateProjectForm from "./CreateProjectForm";
import { createProject } from "../actions";
import { getProjectsForUser, getUser } from "@/lib/db/queries";
import { redirect } from "next/navigation";
import Link from "next/link";
export default async function ProjectPage() {
  const user = await getUser();
  if (!user) {
    redirect("/login");
  }

  const projectData = await getProjectsForUser();

  const handleCreateProject = async (formData: FormData) => {
    "use server";
    await createProject(null, formData);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>

      <CreateProjectForm createProject={handleCreateProject} />

      <div>
        <h2 className="text-xl font-semibold mb-4">Existing Projects</h2>
        {/* ... rest of the projects list code ... */}

        {projectData.map((project) => (
          <Link
            href={`/editor/${project.id}`}
            key={project.id}
            className="block p-4 border rounded-md hover:bg-gray-50"
          >
            <h3 className="font-medium">{project.name}</h3>
            <pre className="text-sm text-gray-600 mt-2">
              {JSON.stringify(project.settings, null, 2)}
            </pre>
          </Link>
        ))}
      </div>
    </div>
  );
}
