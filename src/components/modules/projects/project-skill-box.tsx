interface ProjectSkillBoxProps {
  skill: string;
}

export default function ProjectSkillBox({ skill }: ProjectSkillBoxProps) {
  return (
    <div className="bg-slate-700 rounded-md px-2 py-1">
      <p className="text-xs">{skill}</p>
    </div>
  );
}
