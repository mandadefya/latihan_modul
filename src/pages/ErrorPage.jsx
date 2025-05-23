// src/pages/Error.jsx
import { useParams } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';

function Error() {
  const { code } = useParams();

  const errorData = {
    400: {
      description: 'Bad Request. Something is wrong with your request.',
      image: '/img/400.jpg',
    },
    401: {
      description: 'Unauthorized. Please login to access this page.',
      image: '/img/401.png',
    },
    403: {
      description: 'Forbidden. You don’t have permission to view this page.',
      image: '/img/403.jpg',
    },
  };

  const data = errorData[code] || {
    description: 'Unknown error occurred.',
    image: '/img/400.jpg',
  };

  return <ErrorPage code={code} description={data.description} image={data.image} />;
}

export default Error;
