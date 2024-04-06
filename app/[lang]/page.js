import PhotoList from "../components/PhotoList";

export default async function Home() {
  const response = await fetch(`${process.env.BASE_API_URL}/photos`);
  const photos = await response.json();

  return (
    <div className="container my-4 lg:my-8">
      <PhotoList photos={photos} />
    </div>
  );
}
