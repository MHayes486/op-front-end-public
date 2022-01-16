export const fetchMerchData = () => {
  return async (dispatch) => {
    const fetchMerchData = async () => {
      const response = await fetch(
        "https://dig33-apricot-backend.herokuapp.com/merchandise/"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      try {
        const merchData= await fetchMerchData();

      } catch (error) {
        setError(error.message);
      }
     
    };
  };
};
