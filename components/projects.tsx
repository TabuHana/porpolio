import Link from 'next/link';

import { Title } from '@/components/ui/title';
import { Container, ContainerLeft, ContainerRight } from '@/components/ui/container';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const myProjects = [
  {
    img: '/images/sorting-visualizer.png',
    title: 'Sorting Visualizer',
    href: '/projects/sorting-visualizer',
  },
  {
    img: '/images/sorting-visualizer.png',
    title: 'Sorting Visualizer',
    href: '/projects/demo',
  },
  {
    img: '/images/sorting-visualizer.png',
    title: 'Sorting Visualizer',
    href: '/projects/demo2',
  },
  {
    img: '/images/sorting-visualizer.png',
    title: 'Sorting Visualizer',
    href: '/projects/demo3',
  },
];

export const Projects = () => {
  return (
    <div id='projects'>
      <Container>
        <ContainerLeft>
          <Title className='py-2'>Projects</Title>
        </ContainerLeft>
        <ContainerRight>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-2'>
            {myProjects.map(project => (
              <Link
                key={project.href}
                href={project.href}
                className='h-[150px] w-[240px] group/item'
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  width={240}
                  height={100}
                />
                <Title className='pt-2 flex justify-between items-center '>
                  <p>{project.title}</p>
                  <p className='hidden group-hover/item:flex items-center text-foreground transition-all'>
                    View <ChevronRight className='size-3' />
                  </p>
                </Title>
              </Link>
            ))}
          </div>
          <a
            href='https://github.com/TabuHana'
            target='_blank'
            rel='noopener noreferrer'
            className='pt-2 flex justify-end items-center text-xs tracking-widest hover:underline'
          >
            View More <ChevronRight className='size-4' />
          </a>
        </ContainerRight>
      </Container>
    </div>
  );
};
