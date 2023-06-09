import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <main className='min-h-screen flex flex-col justify-center items-center gap-2 font-bold' id='error-page'>
      <h1 className='text-5xl '>Oops!</h1>
      <h2 className='text-3xl'>Something went wrong :(</h2>
      <p className='text-xl font-light italic '>
        Error: {error.statusText || error.message}
      </p>
    </main>
  );
}
