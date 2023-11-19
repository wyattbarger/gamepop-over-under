// compare: async (_, { previousGameId }) => {
//     try {
//       // Fetch the previous game
//       const previousGameResponse = await axios.post(
//         "https://api.igdb.com/v4/games",
//         `fields name,total_rating; where id = ${previousGameId};`,
//         {
//           headers: {
//             Accept: "application/json",
//             "Client-ID": process.env.CLIENT_ID,
//             Authorization: process.env.ACCESS_TOKEN,
//           },
//         }
//       );

//       // Fetch a random game
//       const randomGameResponse = await axios.post(
//         "https://api.igdb.com/v4/games",
//         "fields name,total_rating; limit 1; offset random_offset;",
//         {
//           headers: {
//             Accept: "application/json",
//             "Client-ID": "Client ID",
//             Authorization: "Bearer access_token",
//           },
//         }
//       );

//       return {
//         previousGame: previousGameResponse.data[0].name,
//         previousGameRating: previousGameResponse.data[0].total_rating,
//         randomGame: randomGameResponse.data[0].name,
//         randomGameRating: randomGameResponse.data[0].total_rating,
//       };
//     } catch (error) {
//       console.error(error);
//     }
//   }