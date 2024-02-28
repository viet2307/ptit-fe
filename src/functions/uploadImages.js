import axios from "axios";

export const uploadImages = async (formData, path, token) => {
  try {
    const { data } = await axios.post(
      `http://awseb--AWSEB-1sIj49oClAGQ-188508438.us-east-1.elb.amazonaws.com/api/uploadImages`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    return error?.response?.data.message;
  }
};
