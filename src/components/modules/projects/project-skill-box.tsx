interface ProjectSkillBoxProps {
  skill: string;
}

export default function ProjectSkillBox({ skill }: ProjectSkillBoxProps) {
  return (
    <div className="bg-slate-700 rounded-md px-3 py-1.5">
      <p className="text-xs">{skill}</p>
    </div>
  );
}
