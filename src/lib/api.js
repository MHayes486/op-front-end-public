//api.js struture created by Maximilian Schwarzmüller of Academind as part of React the complete guide on Udemy (https://www.udemy.com/course/react-the-complete-guide-incl-redux/).
//Code modifed from that source

const OP_DOMAIN = "https://dig33-apricot-backend.herokuapp.com";

export async function getAllMerch() {
  const response = await fetch(`${OP_DOMAIN}/merchandise`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch merch.");
  }

  const transformedMerchData = [];

  for (const key in data) {
    const merchObj = {
      id: key,
      ...data[key],
    };
    transformedMerchData.push(merchObj);
  }
  return transformedMerchData;
}

export async function getAllCiders() {
  const response = await fetch(`${OP_DOMAIN}/ciders`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch ciders.");
  }

  const transformedCiderData = [];

  for (const key in data) {
    const ciderObj = {
      id: key,
      ...data[key],
    };
    transformedCiderData.push(ciderObj);
  }
  return transformedCiderData;
}

export async function getAllPairings() {
  const response = await fetch(`${OP_DOMAIN}/pairings`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Could not fetch pairings.");
  }

  const transformedPairingsData = [];

  for (const key in data) {
    const pairingObj = {
      id: key,
      ...data[key],
    };
    transformedPairingsData.push(pairingObj);
  }
  return transformedPairingsData;
}

export async function getAllEvents() {
  const response = await fetch(`${OP_DOMAIN}/events`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch events.");
  }

  const transformedEventData = [];

  for (const key in data) {
    const eventObj = {
      id: key,
      ...data[key],
    };
    transformedEventData.push(eventObj);
  }
  return transformedEventData;
}

// export async function getSingleQuote(quoteId) {
//   const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Could not fetch quote.");
//   }

//   const loadedQuote = {
//     id: quoteId,
//     ...data,
//   };

//   return loadedQuote;
// }

// export async function addQuote(quoteData) {
//   const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
//     method: "POST",
//     body: JSON.stringify(quoteData),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Could not create quote.");
//   }

//   return null;
// }

// export async function addComment(requestData) {
//   const response = await fetch(
//     `${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`,
//     {
//       method: "POST",
//       body: JSON.stringify(requestData.commentData),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Could not add comment.");
//   }

//   return { commentId: data.name };
// }

// export async function getAllComments(quoteId) {
//   const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Could not get comments.");
//   }

//   const transformedComments = [];

//   for (const key in data) {
//     const commentObj = {
//       id: key,
//       ...data[key],
//     };

//     transformedComments.push(commentObj);
//   }

//   return transformedComments;
// };
