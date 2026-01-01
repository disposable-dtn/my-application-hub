import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { LucideIcon } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    longDescription: string;
    image: string;
    tags: string[];
    icon: LucideIcon;
  };
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-gradient-primary text-primary-foreground">
              <project.icon className="w-5 h-5" />
            </div>
            <DialogTitle className="text-xl font-semibold text-foreground">
              {project.title}
            </DialogTitle>
          </div>
        </DialogHeader>

        {/* Project Image */}
        <div className="w-full aspect-video rounded-lg overflow-hidden bg-muted mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Description */}
        <DialogDescription className="text-muted-foreground leading-relaxed text-sm">
          {project.longDescription}
        </DialogDescription>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
