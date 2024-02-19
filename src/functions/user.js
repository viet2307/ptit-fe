import axios from "axios";
export const updateprofilePicture = async (url, token) => {
  try {
    const { data } = await axios.put(
      `http://ptit-be-env-1.eba-mc9righp.us-east-1.elasticbeanstalk.com/api/updateProfilePicture`,
      {
        url,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const updateCover = async (url, token) => {
  try {
    const { data } = await axios.put(
      `http://ptit-be-env-1.eba-mc9righp.us-east-1.elasticbeanstalk.com/api/updateCover`,
      {
        url,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const addFriend = async (id, token) => {
  try {
    const { data } = await axios.put(
      `http://ptit-be-env-1.eba-mc9righp.us-east-1.elasticbeanstalk.com/api/addFriend/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const cancelRequest = async (id, token) => {
  try {
    const { data } = await axios.put(
      `http://ptit-be-env-1.eba-mc9righp.us-east-1.elasticbeanstalk.com/api/cancelRequest/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const follow = async (id, token) => {
  try {
    const { data } = await axios.put(
      `http://ptit-be-env-1.eba-mc9righp.us-east-1.elasticbeanstalk.com/api/follow/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    console.log(error?.response?.data.message);
    return error?.response?.data.message;
  }
};
export const unfollow = async (id, token) => {
  try {
    const { data } = await axios.put(
      `http://ptit-be-env-1.eba-mc9righp.us-east-1.elasticbeanstalk.com/api/unfollow/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const acceptRequest = async (id, token) => {
  try {
    const { data } = await axios.put(
      `http://ptit-be-env-1.eba-mc9righp.us-east-1.elasticbeanstalk.com/api/acceptRequest/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const unfriend = async (id, token) => {
  try {
    const { data } = await axios.put(
      `http://ptit-be-env-1.eba-mc9righp.us-east-1.elasticbeanstalk.com/api/unfriend/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const deleteRequest = async (id, token) => {
  try {
    const { data } = await axios.put(
      `http://ptit-be-env-1.eba-mc9righp.us-east-1.elasticbeanstalk.com/api/deleteRequest/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const search = async (searchTerm, token) => {
  try {
    const { data } = await axios.post(
      `http://ptit-be-env-1.eba-mc9righp.us-east-1.elasticbeanstalk.com/api/search/${searchTerm}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const addToSearchHistory = async (searchUser, token) => {
  try {
    const { data } = await axios.put(
      `http://ptit-be-env-1.eba-mc9righp.us-east-1.elasticbeanstalk.com/api/addToSearchHistory`,
      { searchUser },

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const getSearchHistory = async (token) => {
  try {
    const { data } = await axios.get(
      `http://ptit-be-env-1.eba-mc9righp.us-east-1.elasticbeanstalk.com/api/getSearchHistory`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const removeFromSearch = async (searchUser, token) => {
  try {
    const { data } = await axios.put(
      `http://ptit-be-env-1.eba-mc9righp.us-east-1.elasticbeanstalk.com/api/removeFromSearch`,
      { searchUser },

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error?.response?.data.message;
  }
};
export const getFriendsPageInfos = async (token) => {
  try {
    const { data } = await axios.get(
      `http://ptit-be-env-1.eba-mc9righp.us-east-1.elasticbeanstalk.com/api/getFriendsPageInfos`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { status: "ok", data };
  } catch (error) {
    return error?.response?.data.message;
  }
};
