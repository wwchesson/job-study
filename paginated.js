import axios from "axios";

async function getTopRatedFoodOutlets(city) {
  let page = 1;
  let pages = 1;
  const foodOutletsRatingObj = {};
  let highestRating = 0;
  let highestVotes = 0;

  while (page <= pages) {
    const apiResponse = await axios.get(
      `https://jsonmock.hackerrank.com/api/food_outlets?city=${city}&page=${page}`
    );

    const paginatedFoodOutlets = apiResponse.data;
    pages = paginatedFoodOutlets.total_pages;

    paginatedFoodOutlets.data.forEach((foodOutlet) => {
      const {
        user_rating: {
          average_rating: foodoutletAvgRating,
          votes: foodOutletVotes,
        },
        name: foodoutletName,
      } = foodOutlet;

      const foodOutletRating = foodOutletsRatingObj[foodoutletAvgRating];
      const foodOutletVoteCount = foodOutletsRatingObj[foodOutletVotes];

      if (!foodOutletRating) {
        foodOutletsRatingObj[foodoutletAvgRating] = [];
      }

      if (!foodOutletVoteCount) {
        {
          foodOutletsRatingObj[foodOutletVotes] = [];
        }
      }

      foodOutletsRatingObj[foodoutletAvgRating].push(foodoutletName);
      foodOutletsRatingObj[foodOutletVotes].push(foodoutletName);

      if (
        foodoutletAvgRating > highestRating &&
        foodOutletVotes > highestVotes
      ) {
        highestRating = foodoutletAvgRating;
        highestVotes = foodOutletVotes;
      }
    });
    page++;
  }
  return foodOutletsRatingObj[highestVotes];
}

const result = await getTopRatedFoodOutlets("Denver");
console.log(result);
