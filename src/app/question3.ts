export function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {        
        // sum the first and last numbers in the array
        let sum = numbers[left] + numbers[right];

        // if the sum is same as target number provided
        if (sum === target) {
            // pass the array our left number and right number + 1
            return [left + 1, right + 1];
        } else if (sum < target) {
            // if target more than the sum, wee increment the left
            left++;
        } else {
            // otherwise, equal or less we reduce the right
            right--;
        }
    }
    
    return []; // it shall not return here!
}