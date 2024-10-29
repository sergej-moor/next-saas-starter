"use client";

const defaultSettings = {
  color: "#000000",
  scale: 1.0,
  rotation: { x: 0, y: 0, z: 0 },
};

export default function CreateProjectForm({
  createProject,
}: {
  createProject: (formData: FormData) => Promise<void>;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Create New Project</h2>
      <form action={createProject} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Project Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            defaultValue={"Test"}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <label htmlFor="settings" className="block text-sm font-medium mb-1">
            Project Settings (JSON)
          </label>
          <textarea
            id="settings"
            name="settings"
            required
            defaultValue={JSON.stringify(defaultSettings, null, 2)}
            rows={10}
            className="w-full px-3 py-2 border rounded-md font-mono text-sm"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Create Project
        </button>
      </form>
    </div>
  );
}
