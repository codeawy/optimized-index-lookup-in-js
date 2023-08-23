interface IUser {
  id: number;
  username: string;
}

export function generateArrayOfObjects(length: number): IUser[] {
  const result: IUser[] = [];

  for (let i = 1; i <= length; i++) {
    const newObj: IUser = {
      id: i,
      username: `User No.${i}`,
    };

    result.push(newObj);
  }

  return result;
}

// ** O(n)
function slowAccessById(array: IUser[], id: number) {
  for (const item of array) {
    if (item.id === id) {
      return item;
    }
  }
}

export const slowerWay = (array: IUser[], id: number) => {
  const startTime = performance.now();

  slowAccessById(array, id);

  const endTime = performance.now();

  const timeTaken = endTime - startTime;

  console.log(`Time taken to access with ${id}: ${timeTaken} milliseconds`);
};

export const fasterWay = (array: unknown[], indexToAccess: number) => {
  const startTime = performance.now();

  array[indexToAccess];

  const endTime = performance.now();

  const timeTaken = endTime - startTime;

  console.log(`Time taken to access item at index ${indexToAccess}: ${timeTaken} milliseconds`);
};
