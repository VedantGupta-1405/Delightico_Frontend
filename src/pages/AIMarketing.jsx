import { useState } from "react";
import { generateAIPost } from "../services/ai";

export default function AIMarketing() {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
//form submission present|V|
  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await generateAIPost(image, description);
      setPosts(result);
    } catch (err) {
      console.error(err);
      alert("Failed to generate AI posts");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">AI Marketing Tool</h1>
      <form onSubmit={handleGenerate} className="space-y-3">
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        />
        <textarea
          placeholder="Product description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border px-3 py-2 rounded w-full"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Generating..." : "Generate Posts"}
        </button>
      </form>
{/*Displaying the results|V|  */}
      {posts && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Generated Content</h2>
          <div className="space-y-4">
            <div className="p-3 bg-gray-100 rounded">
              <h3 className="font-bold">Instagram</h3>
              <p>{posts.instagram}</p>
            </div>
            <div className="p-3 bg-gray-100 rounded">
              <h3 className="font-bold">Facebook</h3>
              <p>{posts.facebook}</p>
            </div>
            <div className="p-3 bg-gray-100 rounded">
              <h3 className="font-bold">WhatsApp</h3>
              <p>{posts.whatsapp}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
