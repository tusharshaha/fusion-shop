/* eslint-disable @typescript-eslint/no-explicit-any */
import { Products } from "@/types";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [data, setData] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch posts and photos concurrently
        const [postsResponse, photosResponse] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/posts"),
          fetch("https://jsonplaceholder.typicode.com/photos"),
        ]);

        // Parse the responses
        const posts = await postsResponse.json();
        const photos = await photosResponse.json();

        // Create a map for quick photo lookup
        const photoMap = Object.fromEntries(
          photos.map((photo) => [photo.id, photo.url]),
        );

        // Merge the posts with their corresponding image URLs
        const mergedData = posts.map((post: any) => ({
          ...post,
          imgUrl: photoMap[post.id] || null,
          price: 100,
        }));

        setData(mergedData); // Update state with the merged data
      } catch (err: any) {
        console.error("Error fetching data:", err);
        setError(err.message);
      } finally {
        setLoading(false); // Ensure loading state is updated
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useProducts;
