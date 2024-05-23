import { AboutMe } from '@/components/about-me';
import { Projects } from '@/components/projects';
import { Experience } from '@/components/experience';
import { Container, ContainerFull, ContainerLeft, ContainerRight } from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Title } from '@/components/ui/title';

const MainPage = () => {
  return (
    <main className='max-w-screen-md mx-auto px-6 md:px-0'>
      <AboutMe />
      <Projects />
      <Experience />
      <Container></Container>
    </main>
  );
};
export default MainPage;
