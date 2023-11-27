import { Accordion } from "@/components/base/Accordion";
import { ContentManager } from "../cms/contentManager/contentManager";
import { ImageManager } from "../cms/imageManager/imageManager";
import { ProjectManager } from "../cms/projectManager/projectManager";
import "./adminPanel.css";

export const AdminPanel = (props) => {
  const panel = props?.panel;
  const isContent = panel === "content";
  const isProject = panel === "project";
  const isImage = panel === "image";

  return (
    <div className="admin-panel-container">
      <h1>Admin Panel</h1>
      <div>
        <Accordion
          isOpen={isContent}
          title="Content Management"
          href={isContent ? "admin" : "admin?panel=content"}
        >
          <ContentManager mode={props?.mode} />
        </Accordion>
        <Accordion
          isOpen={isProject}
          title="Project Management"
          href={isProject ? "admin" : "admin?panel=project"}
        >
          <ProjectManager mode={props?.mode} />
        </Accordion>
        <Accordion
          isOpen={isImage}
          title="Image Management"
          href={isImage ? "admin" : "admin?panel=image"}
        >
          <ImageManager mode={props?.mode} />
        </Accordion>
      </div>
    </div>
  );
};
