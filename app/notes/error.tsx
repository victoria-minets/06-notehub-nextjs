'use client';

const ErrorNotes = (error: Error) => {
  console.error('error Log:', error);
  return <p>Could not fetch the list of notes. {error.message}</p>;
};

export default ErrorNotes;
