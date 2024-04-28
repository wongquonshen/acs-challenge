'use client';

import Header from "./_components/shared/header";
import { twoSum } from "./question3";


export default function Home() {

  // log out question 3
  // console.log('test 1: ', twoSum([2, 7, 11, 15], 9)); // Output: [1, 2]
  // console.log('test 2: ', twoSum([4, 11, 17, 25], 21)); // Output: [1, 2]
  // console.log('test 3: ', twoSum([0, 1, 2, 2, 3, 5], 4)); // Output: [2, 5]
  // console.log('test 4: ', twoSum([-1, 0], -1)); // Output: [1, 2]
  console.log('test 5: ', twoSum([2, 3, 4], 6)); // Output: [1, 3]

  return (
    <>
      <Header/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      </main>
    </>
  );
}
