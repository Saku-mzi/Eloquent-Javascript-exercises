# JavaScript Homework: Eloquent JavaScript — Chapters 2–7

Due: **Sunday, October 4th, 2026, at 11:59 PM**

## Source

**Eloquent JavaScript, 4th Edition** by Marijn Haverbeke (2024)

This homework covers all exercises in **Chapters 2–7**, for a total of **20 exercises**.

---

## General Requirements

- Complete all exercises.
- Write your own JavaScript solutions.
- Test every exercise with the examples provided in the book and with additional test cases where appropriate.
- Do not use solutions copied from online sources.
- Your code should be readable and consistently formatted.
- Be prepared to explain how your solutions work.
- Where an exercise asks you to reflect on your solution, include a short written explanation.

### Recommended Environment

Use **Node.js 22 LTS (2024)** or a modern browser console.

---

# Chapter 2 — Program Structure

## 1. Looping a Triangle

Write a program that makes seven calls to `console.log` to output the following triangle:

```text
#
##
###
####
#####
######
#######
```

### Requirements

- Use a loop.
- The program must produce exactly seven lines.
- Each line should contain one additional `#` character.

---

## 2. FizzBuzz

Write a program that prints the numbers from **1 to 100**.

### Requirements

- For numbers divisible by 3, print `Fizz`.
- For numbers divisible by 5 but not by 3, print `Buzz`.
- For numbers divisible by both 3 and 5, print `FizzBuzz`.
- Print all other numbers normally.

Test that your program handles the special cases correctly.

---

## 3. Chessboard

Write a program that creates an 8×8 grid using spaces and `#` characters.

The output should resemble a chessboard, with each row separated by a newline.

### Requirements

- Use a string to build the complete grid.
- Use `console.log` to display the result.
- Define a variable called `size` and set it to `8`.
- Make the program work for arbitrary values of `size`.

Test your program with at least one other board size.

---

# Chapter 3 — Functions

## 4. Minimum

Write a function called:

```javascript
min(a, b);
```

### Requirements

- Return the smaller of the two arguments.
- Test the function with several pairs of numbers.
- Include cases where the values are equal.

---

## 5. Recursion

Define a recursive function called:

```javascript
isEven(n);
```

The function should determine whether a number is even.

Use these rules:

- `0` is even.
- `1` is odd.
- For any other positive number, its parity is the same as the parity of `n - 2`.

### Requirements

Test your function with:

```text
50
75
```

Then test it with:

```text
-1
```

### Reflection

The book's recursive approach has a problem with negative numbers.

- Identify what happens when you call `isEven(-1)`.
- Explain why this happens.
- Modify your function so that it handles negative numbers correctly.

---

## 6. Bean Counting

Write a function called:

```javascript
countBs(string);
```

that counts how many uppercase `B` characters occur in a string.

Then write a more general function:

```javascript
countChar(string, char);
```

that counts the number of times a particular character occurs.

### Requirements

- Implement `countChar`.
- Rewrite `countBs` so that it uses `countChar`.
- Test both functions with several strings and characters.

---

# Chapter 4 — Data Structures: Objects and Arrays

## 7. The Sum of a Range

Write a function:

```javascript
range(start, end);
```

that returns an array containing all numbers from `start` through `end`, inclusive.

Also write:

```javascript
sum(array);
```

that takes an array of numbers and returns their total.

### Examples

```javascript
range(1, 10);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

sum(range(1, 10));
// 55
```

### Bonus

Modify `range` to accept an optional third argument:

```javascript
step;
```

The step determines how the range increases or decreases.

Examples:

```javascript
range(1, 10, 2);
// [1, 3, 5, 7, 9]

range(5, 2, -1);
// [5, 4, 3, 2]
```

---

## 8. Reversing an Array

Write two functions for reversing arrays.

### Function 1

```javascript
reverseArray(array);
```

This function should return a **new array** containing the elements of the original array in reverse order.

### Function 2

```javascript
reverseArrayInPlace(array);
```

This function should modify the original array by reversing its elements.

### Requirements

- Do not use the built-in `.reverse()` method.
- Test both functions.
- Demonstrate that `reverseArray` does not modify the original array.
- Demonstrate that `reverseArrayInPlace` does modify the original array.

### Reflection

Explain the difference between:

- A function that creates and returns a new value.
- A function that changes an existing value.

Also consider whether there are performance differences between the two approaches.

---

## 9. A List

Build a list structure using nested objects.

Each list element should contain a `value` and a reference to the rest of the list.

Implement these functions:

```javascript
arrayToList(array);
listToArray(list);
prepend(element, list);
nth(list, number);
```

### Requirements

- `arrayToList` converts an array into a list.
- `listToArray` converts a list back into an array.
- `prepend` adds an element to the beginning of a list.
- `nth` returns the element at a given position.
- `nth` should return `undefined` when the requested element does not exist.

### Additional Requirement

Write a recursive version of `nth`.

Test your functions with lists of different lengths, including an empty list.

---

## 10. Deep Comparison

Write a function:

```javascript
deepEqual(a, b);
```

that compares two values.

The function should return `true` when:

- The values are the same value, or
- They are objects with the same properties whose values are themselves deeply equal.

### Requirements

Use:

```javascript
typeof
===
Object.keys
```

where appropriate.

Your function should work recursively for nested objects.

### Important Detail

Remember that:

```javascript
typeof null === "object";
```

Your implementation must account for this.

Test your function with:

- Primitive values.
- Objects with the same properties and values.
- Objects with different values.
- Nested objects.
- `null`.

---

# Chapter 5 — Higher-Order Functions

## 11. Flattening

Given an array containing arrays, use `reduce` and `concat` to flatten it into a single array.

### Example

```javascript
let arrays = [[1, 2, 3], [4, 5], [6]];

// Expected result:
// [1, 2, 3, 4, 5, 6]
```

### Requirements

- Use `reduce`.
- Use `concat`.
- Do not use a dedicated flattening method.

---

## 12. Your Own Loop

Write a higher-order function:

```javascript
loop(value, test, update, body);
```

that behaves similarly to a `for` loop.

### Requirements

For each iteration:

1. Test the current value using `test`.
2. Stop when the test returns `false`.
3. Call `body` with the current value.
4. Update the value using `update`.

### Example Structure

```javascript
loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log,
);
```

The function should be implemented using functions passed as arguments.

A regular loop may be used internally.

---

## 13. Everything

Implement a function:

```javascript
every(array, predicate);
```

that determines whether every element in an array satisfies a predicate.

Create **two versions**.

### Version 1

Implement `every` using a loop.

### Version 2

Implement `every` using the array method:

```javascript
some;
```

### Requirements

- Both versions should return the same result.
- Test them with several arrays and predicates.
- Include an empty array as a test case.

---

## 14. Dominant Writing Direction

Write a function that determines the dominant writing direction of a string.

The possible results are:

```text
ltr
rtl
ttb
```

These represent:

- Left-to-right
- Right-to-left
- Top-to-bottom

### Requirements

- Determine the scripts associated with the characters in the string.
- Count the writing directions represented.
- Return the direction with the highest number of characters.
- Ignore characters that do not have an associated script/direction where appropriate.

The functions `characterScript` and `countBy` from the chapter may be useful.

Test your function using strings containing different writing systems.

---

# Chapter 6 — The Secret Life of Objects

## 15. A Vector Type

Create a class:

```javascript
Vec;
```

that represents a vector in two-dimensional space.

The constructor should store:

```javascript
x;
y;
```

### Methods

Implement:

```javascript
plus(other);
minus(other);
```

Both methods should return a **new vector**.

### Getter

Add a getter:

```javascript
length;
```

that calculates the vector's distance from the origin.

### Requirements

Test:

- Adding two vectors.
- Subtracting two vectors.
- Calculating vector length.
- Confirming that `plus` and `minus` return new vectors.

---

## 16. Groups

Create a class:

```javascript
Group;
```

that behaves similarly to a `Set`.

Implement:

```javascript
add(value);
delete value;
has(value);
```

### Requirements

- A group should not contain duplicate values.
- `add` should add a value.
- `delete` should remove a value.
- `has` should determine whether a value exists.
- Values may be compared using `===` or an equivalent approach.

Also implement:

```javascript
Group.from(iterable);
```

as a static method that creates a group from an iterable value.

Test your group with several different values.

---

## 17. Iterable Groups

Modify the `Group` class so that it can be used in a `for...of` loop.

### Requirements

Implement the JavaScript iterator protocol.

The group should be iterable, for example:

```javascript
for (let value of group) {
  console.log(value);
}
```

If your group is backed by an array, do **not** simply return the array's iterator.

### Reflection

Experiment with what happens if the group is modified while it is being iterated.

The book notes that unusual behavior in this situation is acceptable.

---

# Chapter 7 — Project: A Robot

## 18. Measuring a Robot

Write a function:

```javascript
compareRobots(robot1, memory1, robot2, memory2);
```

that compares the performance of two robots.

### Requirements

- Generate 100 delivery tasks.
- Both robots must solve the same tasks.
- Start each robot with the specified starting memory.
- Count the number of steps each robot takes.
- Calculate the average number of steps per task for each robot.
- Output the average for each robot.

Use this to compare different robot strategies.

---

## 19. Robot Efficiency

Create a robot that can complete the delivery task in fewer steps than the `goalOrientedRobot`.

### Requirements

- Study how `goalOrientedRobot` behaves.
- Identify inefficient behavior in its strategy.
- Design and implement an improved robot.
- Test your robot on delivery tasks.
- Explain why your robot behaves differently.

You may use `compareRobots` to measure and compare the two strategies.

### Reflection

Include a short explanation of:

- What makes the original strategy inefficient.
- What changes you made.
- Why your changes reduce the number of steps.

---

## 20. Persistent Group

Create a class:

```javascript
PGroup;
```

that behaves similarly to `Group`, but is **persistent**.

Implement:

```javascript
add(value);
delete value;
has(value);
```

### Requirements

- `add` returns a new `PGroup`.
- `delete` returns a new `PGroup`.
- Existing groups must not be modified.
- The group should work with any value types.
- It does not need to be efficient for very large sets.
- The constructor is not part of the public interface.
- Provide a starting instance called:

```javascript
PGroup.empty;
```

### Important Concept

If the same empty group can be shared by all users, explain why this is safe.

### Testing

Demonstrate that:

1. You can create a group from `PGroup.empty`.
2. Adding a value creates a new group.
3. The original group remains unchanged.
4. Deleting a value creates another new group.
5. Previous versions of the group remain unchanged.

---

# Submission Checklist

Before submitting, make sure you have:

- [ ] Completed all 20 exercises.
- [ ] Tested every exercise.
- [ ] Included meaningful test cases.
- [ ] Included the required reflection/explanation sections.
- [ ] Avoided using prohibited built-in methods where the exercise specifically excludes them.
- [ ] Used clear variable and function names.
- [ ] Formatted your JavaScript consistently.
- [ ] Checked your programs for errors.
- [ ] Ensured that your files can be run independently.

---

# Suggested Folder Structure

```text
javascript-homework/
├── chapter-2/
│   ├── looping-triangle.js
│   ├── fizzbuzz.js
│   └── chessboard.js
├── chapter-3/
│   ├── minimum.js
│   ├── recursion.js
│   └── bean-counting.js
├── chapter-4/
│   ├── range.js
│   ├── reverse-array.js
│   ├── list.js
│   └── deep-equal.js
├── chapter-5/
│   ├── flattening.js
│   ├── own-loop.js
│   ├── everything.js
│   └── dominant-direction.js
├── chapter-6/
│   ├── vector.js
│   ├── groups.js
│   └── iterable-groups.js
├── chapter-7/
│   ├── measuring-robot.js
│   ├── robot-efficiency.js
│   └── persistent-group.js
└── README.md
```

---

# Assessment Focus

Your work will be considered across the following areas:

| Area                    | Focus                                                                                     |
| ----------------------- | ----------------------------------------------------------------------------------------- |
| Correctness             | Does the program produce the required results?                                            |
| Understanding           | Can you explain how your solution works?                                                  |
| Problem Solving         | How effectively did you break down and solve the problem?                                 |
| JavaScript Fundamentals | Appropriate use of variables, functions, arrays, objects, classes, and control structures |
| Testing                 | Evidence that the solutions have been tested with meaningful cases                        |
| Code Quality            | Readability, naming, structure, and consistency                                           |
| Debugging               | Ability to identify and fix errors                                                        |
| Reflection              | Quality of explanations where requested                                                   |

---

## Final Requirement

Be prepared to demonstrate and explain selected solutions from your submission.

You should be able to explain not only **what** your code does, but also **why** you chose your particular approach.
