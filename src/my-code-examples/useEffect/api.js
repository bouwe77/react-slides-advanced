/**
 * Simulates an expensive API call.
 */
export async function doExpensiveCalculation(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 10000 + 1);
      resolve(randomNumber);
    }, 3000);
  });
}
