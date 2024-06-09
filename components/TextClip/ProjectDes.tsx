import React from 'react';

interface Project {
  title: string;
  description: string;
}

interface ProjectDesProps {
  data: Project[];
  selectedProject: number | null;
}

const crop = (string: string, maxLength: number) => string.substring(0, maxLength);

export default function ProjectDes({ data, selectedProject }: ProjectDesProps) {
  return (
    <div className="absolute top-[3px] h-full w-full z-[2] pointer-events-none">
      {data.map((project, i) => {
        const { title, description } = project;
        return (
          <div
            key={i}
            className="bg-[#ec4e39] flex justify-between items-center pl-[10%] pr-[10%] clipPath"
            style={{
              clipPath: selectedProject === i ? 'inset(0 0 0)' : 'inset(50% 0 50%',
            }}
          >
            <p className='text-[#010101] uppercase font-extrabold text-[5.5vw] leading-[5vw] m-0 z-[1]'>{crop(title, 9)}</p>
            <p className='w-[40%] text-[1vw] font-extrabold'>{description}</p>
          </div>
        );
      })}
    </div>
  );
}
