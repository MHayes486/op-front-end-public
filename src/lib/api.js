//api.js struture created by Maximilian Schwarzmüller of Academind as part of React the complete guide on Udemy (https://www.udemy.com/course/react-the-complete-guide-incl-redux/).
//Code modifed from that source

const OP_DOMAIN = "https://dig33-apricot-backend.herokuapp.com";
//Location for local storage only
// const OP_DOMAIN = "http://localhost:8000/";

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

export async function getAllOrders() {
  const response = await fetch(`${OP_DOMAIN}/orders`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch merch.");
  }

  const transformedOrderData = [];

  for (const key in data) {
    const merchObj = {
      id: key,
      ...data[key],
    };
    transformedOrderData.push(merchObj);
  }
  return transformedOrderData;
}

export async function getAllActiveMerch() {
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

export async function getAllContacts() {
  const response = await fetch(`${OP_DOMAIN}/contacts`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch contacts.");
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

export async function addMailListMember(signUpData) {
  const response = await fetch(`${OP_DOMAIN}/contacts`, {
    method: "POST",
    body: JSON.stringify(signUpData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not sign up to mail list.");
  }

  return null;
}

// Update Merchandise
export async function deleteMerchandise(merchDeleteData) {
  const response = await fetch(`${OP_DOMAIN}/merchandise`, {
    method: "DELETE",
    body: JSON.stringify(merchDeleteData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not sign up to mail list.");
  }

  return null;
}

export async function addAEvent(eventData) {
  const response = await fetch(`${OP_DOMAIN}/events`, {
    method: "POST",
    body: JSON.stringify(eventData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add to events database.");
  }

  return null;
}

export async function addACider(ciderData) {
  const response = await fetch(`${OP_DOMAIN}/ciders`, {
    method: "POST",
    body: JSON.stringify(ciderData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add to events database.");
  }

  return null;
}

export async function addAMerch(merchData) {
  const response = await fetch(`${OP_DOMAIN}/merchandise`, {
    method: "POST",
    body: JSON.stringify(merchData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add to events database.");
  }

  return null;
}

export async function addAPairing(pairingData) {
  console.log(pairingData);
  console.log(JSON.stringify(pairingData));
  const response = await fetch(`${OP_DOMAIN}/pairings`, {
    method: "POST",
    body: JSON.stringify(pairingData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add to pairings database.");
  }

  return null;
}

export async function placeOrder(orderData) {
  const response = await fetch(`${OP_DOMAIN}/orders`, {
    method: "POST",
    body: JSON.stringify(orderData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add to pairings database.");
  }

  return null;
}
