import axios from "axios";

export const uplaodImages = async (formData, path, token) => {
  try {
    const { data } = await axios.post(
      `http://ptit-be-env-1.eba-mc9righp.us-east-1.elasticbeanstalk.com/api/uploadImages`,
      formData,
      {
        headers: {
          Auhorization: `Bearer ${token}`,
          "content-type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    return error?.response?.data.message;
  }
};
