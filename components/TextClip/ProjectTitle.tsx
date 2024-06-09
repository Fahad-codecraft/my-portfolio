import React, { useRef } from 'react'
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';
import Link from 'next/link';

interface Project {
  title: string;
  speed: number;
  i?: number;
}

interface TitleProps {
  data: Project[];
  setSelectedProject: (i: number | null) => void;
}


export default function ProjectTitle({ data, setSelectedProject }: TitleProps) {
  return (
    <div className="w-full border-t">
      {
        data.map((project, i) => {
          return <Title key={i} data={{ ...project, i }} setSelectedProject={setSelectedProject} />
        })
      }
    </div>
  )
}

function Title({ data, setSelectedProject }: { data: any, setSelectedProject: any }) {

  const { title, speed, i, url } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', `${25 / speed}vw end`]
  })

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div ref={container} className="border-b relative z-[2]">
      <div
        className="inline-block pl-[10%]"
        onMouseOver={() => { setSelectedProject(i) }}
        onMouseLeave={() => { setSelectedProject(null) }}
      >
        <Link href={url} target='_blank'>
          <motion.p style={{ clipPath: clip }}
            className='inline-block text-white uppercase font-extrabold text-[5.5vw] leading-[5vw] m-0 relative z-[2]'
          >
            {title}
          </motion.p>
        </Link>
      </div>
    </div>
  )
}