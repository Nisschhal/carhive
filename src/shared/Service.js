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

export default FormatResult;
