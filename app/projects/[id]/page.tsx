import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Container, ContainerFull, ContainerLeft, ContainerRight } from '@/components/ui/container';
import { Title } from '@/components/ui/title';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage({ params }: { params: { id: string } }) {
  const projTitle = params.id.split('-');
  return (
    <>
      <Container>
        <ContainerFull>
          <Link
            href='/'
            className='flex items-center text-xs tracking-widest hover:text-muted-foreground'
          >
            <ChevronLeft className='size-4' /> back
          </Link>
        </ContainerFull>
        <ContainerFull>
          <Title className='pb-3'>{projTitle}</Title>
          <div className='bg-gray-500 h-[250px] w-[450px] mx-auto md:hidden' />
        </ContainerFull>
        <ContainerRight variant='secondary' className='hidden md:block'>
          <div className='bg-gray-500 h-[350px] w-[500px]' />
        </ContainerRight>
        <ContainerLeft variant='secondary' className='hidden md:block'>
          <Card>
            <CardHeader className='pl-0'>
              <CardTitle>Visualize the Magic Behind Sorting Algorithms.</CardTitle>
            </CardHeader>
            <CardContent className='pl-0'>
              Unravel the secrets of a quicksort, mergesort, and bubble sort. SortingVisualizer makes
              learning classic algorithms digestable. Dive in and enhance your understanding through visualization!
            </CardContent>
            <CardFooter className='pl-0 flex justify-between gap-4'>
              <Button className='w-full'>
                Live Site <ChevronRight className='size-4' />
              </Button>
              <Button
                className='w-full'
                variant='outline'
              >
                Source Code <ChevronRight className='size-4' />
              </Button>
            </CardFooter>
          </Card>
        </ContainerLeft>
      </Container>
    </>
  );
}
