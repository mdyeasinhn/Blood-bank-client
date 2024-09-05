import axios from "axios";

// Image upload function with error handling
export const imageUploadFn = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  try {
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API_KEY}`,
      formData
    );
    return data.data.display_url;
  } catch (error) {
    console.log(import.meta.env.VITE_IMAGE_API_KEY);
    console.error("Image upload failed:", error);
    throw new Error("Failed to upload image. Please try again.");
  }
};