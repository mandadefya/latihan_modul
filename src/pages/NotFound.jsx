import ErrorPage from '../components/ErrorPage';

export default function NotFound() {
  return (
    <ErrorPage 
      code={404}
      description="The page you are looking for does not exist."
      image="/img/404.png"
    />
  );
}
