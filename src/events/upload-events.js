export const uploadGifFn = async (uploadForm) => {
  const formData = new FormData(uploadForm);
  const file = formData.get("file");
  console.log(formData);

  // if (file) {
  //   const uploadUrl = `${apiUrl2}/?api_key=${apiKey2}`;
  //   const formDataWithApiKey = new FormData();
  //   formDataWithApiKey.append("file", file);
  //   formDataWithApiKey.append("api_key", apiKey2);
  //   await fetch(uploadUrl, {
  //     method: "POST",
  //     body: formDataWithApiKey,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Upload successful:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Upload error:", error);
  //     });
  // }
};
