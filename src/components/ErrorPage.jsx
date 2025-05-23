function ErrorPage({ code, description, image }) {
  return (
    <div className="text-center mt-20">
      <img src={image} alt={`Error ${code}`} className="mx-auto w-300 mb-6" />
      <h1 className="text-5xl font-bold text-red-500 mb-4">Error {code}</h1>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  );
}

export default ErrorPage;
