// function to calculate the number of blocks from Scuber's headquarters to the pickup location
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42); // using Math.abs to ensure positive distance
  }
  
  // function to calculate the number of feet from Scuber's headquarters to the pickup location
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264; // 264 feet per block
  }
  
  // function to calculate the number of feet a passenger travels given a starting block and an ending block
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264; // using Math.abs to ensure positive distance
  }
  
  // function to calculate the fare for the customer based on distance traveled
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // first 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // price is 2 cents per foot beyond 400 feet
    } else if (distance > 2000 && distance < 2500) {
      return 25; // flat fare of $25 for distance over 2000 feet and under 2500 feet
    } else {
      return 'cannot travel that far'; // Scuber does not allow rides over 2500 feet
    }
  }
  