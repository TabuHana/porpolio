import { Title } from '@/components/ui/title';
import { Container, ContainerLeft, ContainerRight } from '@/components/ui/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const Experience = () => {
  return (
    <Container>
      <ContainerLeft>
        <Title className='py-2'>Education</Title>
        <Card>
          <CardHeader className='pl-0'>
            <CardTitle>Title</CardTitle>
          </CardHeader>
          <CardContent className='pl-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facere, possimus similique rem eligendi
            voluptatibus incidunt iusto.
          </CardContent>
        </Card>
      </ContainerLeft>
      <ContainerRight>
        <Title className='py-2 pl-6'>Experience</Title>
        <Card>
          <CardHeader>
            <CardTitle>Mentor for CodeWithAntonio Coding Group</CardTitle>
          </CardHeader>
          <CardContent>I help mentor new developers with react and nextjs projects.</CardContent>
        </Card>
      </ContainerRight>
    </Container>
  );
};
