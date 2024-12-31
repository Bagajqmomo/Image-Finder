import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./Context";

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`/api/getPhotos?query=${searchTerm}`);
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading....</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error</h4>
      </section>
    );
  }

  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No images found</h4>
      </section>
    );
  }

  return (
    <section className="image-container">
      {results.map((image) => {
        const { id, urls, alt_description } = image;
        return (
          <img
            src={urls.regular}
            alt={alt_description}
            className="img"
            key={id}
          />
        );
      })}
    </section>
  );
};

export default Gallery;
