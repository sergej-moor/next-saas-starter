import { getProject } from "@/lib/db/queries";
import { notFound } from "next/navigation";

export default async function EditorPage({
  params,
}: {
  params: { id: string };
}) {
  const project = await getProject(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{project.name}</h1>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Project Settings</h2>
        <pre className="p-4 bg-gray-50 rounded-md">
          {JSON.stringify(project.settings, null, 2)}
        </pre>
      </div>
    </div>
  );
}
