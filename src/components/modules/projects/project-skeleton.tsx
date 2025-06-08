import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} className="h-4 w-full bg-slate-800" />
      ))}
    </div>
  );
}
