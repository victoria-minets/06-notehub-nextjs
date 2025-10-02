'use client';

const ErrorNotes = (error: Error) => {
  console.error('error Log:', error);
  return <p>Could not fetch note details. {error.message}</p>;
};

export default ErrorNotes;
