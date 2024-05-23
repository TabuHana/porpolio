import Link from 'next/link';

import { Title } from '@/components/ui/title';
import { Container, ContainerLeft, ContainerRight } from '@/components/ui/container';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

const myProjects = [
  {
    img: '',
    title: '',
    href: '',
  }
]

export const Projects = () => {
  return (
    <Container>
      <ContainerLeft>
        <Title className='py-2'>Projects</Title>
      </ContainerLeft>
      <ContainerRight>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-2'>
          <div className='animate-pulse bg-gray-600 h-[150px] w-[240px]' />
          <div className='animate-pulse bg-gray-600 h-[150px] w-[240px]' />
          <div className='animate-pulse bg-gray-600 h-[150px] w-[240px]' />
          <div className='animate-pulse bg-gray-600 h-[150px] w-[240px]' />
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
  );
};
