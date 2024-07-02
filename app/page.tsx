import { AboutMe } from '@/components/about-me';
import { Projects } from '@/components/projects';
import { Education } from '@/components/education';
import { Container, ContainerFull, ContainerLeft, ContainerRight } from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Title } from '@/components/ui/title';
import { Test } from '@/components/test';

const MainPage = () => {
  return (
    <div className='pb-10'>
      <AboutMe />
      <Projects />
      <Education />
      <Container></Container>
      {/* <Test /> */}
    </div>
  );
};
export default MainPage;
