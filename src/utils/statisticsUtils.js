// Function to calculate the mean value of an array of numbers
export const calculateMean = (values) => {
    const sum = values.reduce((acc, curr) => acc + curr, 0);
    return sum / values.length;
  };
  
  // Function to calculate the median value of an array of numbers
  export const calculateMedian = (values) => {
    // Sort the values in ascending order
    const sortedValues = values.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedValues.length / 2);
  
    // If the array has an even number of elements, take the average of the two middle values
    if (sortedValues.length % 2 === 0) {
      return (sortedValues[middle - 1] + sortedValues[middle]) / 2;
    } else {
      // If the array has an odd number of elements, return the middle value
      return sortedValues[middle];
    }
  };
  
  // Function to calculate the mode value of an array of numbers
  export const calculateMode = (values) => {
    // Create an object to store the count of each unique value
    const counts = {};
    values.forEach((value) => {
      counts[value] = (counts[value] || 0) + 1;
    });
  
    // Find the value with the highest count
    const mode = Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b
    );
    
    // Parse the mode to ensure it's a number (if the values were strings)
    return parseFloat(mode);
  };
  
  // Function to calculate statistics for baseStat (mean, median, mode)
  export const calculateFlavonoidsStats = (className, baseStat, stat, data) => {
    // Filter data for the specified class and extract relevant values based on baseStat
    const values = data
      .filter((item) => item.Alcohol === className)
      .map((item) => (baseStat === "Gamma" ? item.Gamma : item.Flavanoids));
  
    let result = {};
  
    // Calculate the specified statistic and store it in the result object
    if (stat === "mean") {
      result.mean = calculateMean(values).toFixed(3);
    } else if (stat === "median") {
      result.median = calculateMedian(values).toFixed(3);
    } else if (stat === "mode") {
      result.mode = calculateMode(values).toFixed(3);
    }
  
    return result;
  };
  