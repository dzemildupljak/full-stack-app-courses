async function getMockData() {
  try {
    const response = await axios.get("http://localhost:3000/mock-data");

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
