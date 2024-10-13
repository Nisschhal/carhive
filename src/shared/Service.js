import axios from "axios";
const sendbirdAppId = import.meta.env.VITE_SENDBIRD_APP_ID;
const sendbirdApiKey = import.meta.env.VITE_SENDBRID_API_KEY;

const FormatResult = (res) => {
  let result = [];
  let finalResult = [];

  res.forEach((item) => {
    const listingId = item.carListing?.id;

    // create a new object to store carListing and images(empty initially), if there isn't any with fetched listingId

    if (!result[listingId]) {
      result[listingId] = {
        car: item.carListing,
        images: [],
      };
    }

    // add carImages if there is any
    if (item.carImages) {
      result[listingId].images.push(item.carImages);
    }
  });

  result.forEach((item) => {
    finalResult.push({
      ...item.car,

      images: item.images,
    });
  });
  return finalResult;
};

// For creating user id

const CreateSendBirdUser = (userId, nickName, profileUrl) => {
  return axios.post(
    `https://api-${sendbirdAppId}.sendbird.com/v3/users`,
    {
      user_id: userId,
      nickname: nickName,
      profile_url: profileUrl,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Api-Token": sendbirdApiKey,
      },
    }
  );
};

// For creating group channel
const CreateSendBirdGroupChannel = (users, title) => {
  return axios.post(
    `https://api-${sendbirdAppId}.sendbird.com/v3/group_channels`,
    { user_ids: users, name: title, is_distinct: true },
    {
      headers: {
        "Content-Type": "application/json",
        "Api-Token": sendbirdApiKey,
      },
    }
  );
};

export default { FormatResult, CreateSendBirdUser, CreateSendBirdGroupChannel };
