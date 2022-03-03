export const fileUpload = async (file) => {
  const cloudUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
  try {
    const response = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      const resData = await response.json();
      return resData.secure_url;
    }
  } catch (error) {
    console.error("Error uploading image: ", error);
  }
};
