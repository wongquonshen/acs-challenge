'use client';

import Challenge1 from "./_components/calculator";
import Header from "./_components/shared/header";
import { twoSum } from "./question3";


export default function Home() {

  // log out question 3
  console.log('test 1: ', twoSum([2, 7, 11, 15], 9)); // Output: [1, 2]
  console.log('test 2: ', twoSum([4, 11, 17, 25], 21)); // Output: [1, 3]
  console.log('test 3: ', twoSum([0, 1, 2, 2, 3, 5], 4)); // Output: [2, 5]
  console.log('test 4: ', twoSum([-1, 0], -1)); // Output: [1, 2]
  console.log('test 5: ', twoSum([2, 3, 4], 6)); // Output: [1, 3]

  return (
    <>
      <Header/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h2 className="text-2xl font-semibold leading-7 text-gray-900">Challenge 1 - calculator</h2>
          
          <div className="mt-4">
            <Challenge1/>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold leading-7 text-gray-900">Challenge 2 - Navbar</h2>
            <p>Please refer to the Navbar above</p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold leading-7 text-gray-900">Challenge 3 - Two Sum II - Input Array Is Sorted</h2>
            <p>Please refer browser console terminal to see the result (F12- windows) (fn + F12 Mac)</p>
          </div>
        </div>
      </main>
    </>
  );
}
