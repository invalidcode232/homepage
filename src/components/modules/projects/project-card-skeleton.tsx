"use client";

import { Skeleton } from "@/components/ui/skeleton";

interface ProjectSkeletonCardProps {
  index: number;
}

function ProjectSkeletonCard({ index }: ProjectSkeletonCardProps) {
  return (
    <div className="relative group" key={index}>
      {/* Main card skeleton */}
      <div className="relative bg-slate-800 border border-slate-700 rounded-lg p-6 overflow-hidden">
        {/* Content skeleton */}
        <div className="relative z-10">
          {/* Project icon skeleton */}
          <Skeleton className="w-10 h-10 rounded-lg mb-4 bg-slate-700" />

          {/* Project name skeleton */}
          <Skeleton className="h-6 w-3/4 mb-2 bg-slate-700" />

          {/* Project description skeleton */}
          <Skeleton className="h-4 w-full mb-2 bg-slate-700" />
          <Skeleton className="h-4 w-2/3 mb-4 bg-slate-700" />

          {/* Action indicator skeleton */}
          <div className="flex items-center">
            <Skeleton className="h-4 w-20 bg-slate-700" />
            <Skeleton className="w-4 h-4 ml-1 bg-slate-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectSkeleton() {
  // Create 8 skeleton cards (2 rows of 4)
  const skeletonCards = Array.from({ length: 6 }, (_, index) => (
    <ProjectSkeletonCard key={index} index={index} />
  ));

  return (
    <div>
      <div className="mb-2">
        {/* Title skeleton */}
        <Skeleton className="h-8 w-48 bg-slate-700 mb-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {skeletonCards}
      </div>
    </div>
  );
}
