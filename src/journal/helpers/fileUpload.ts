export const fileUpload = async (file: File) => {
  const cloudUrl = 'https://api.cloudinary.com/v1_1/dzrbi24oa/upload';

  const formData = new FormData();
  formData.append('upload_preset', 'react-journal');
  formData.append('file', file);

  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData,
    });

    if (!resp.ok) throw new Error('Image could not be uploaded');

    const cloudResp = await resp.json();

    return cloudResp.secure_url;
  } catch (error) {
    console.error(error);
    throw new Error('Error uploading file');
  }
};
