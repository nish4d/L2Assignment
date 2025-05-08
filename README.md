* 7+ Question and Answer *

# 1.What are some differences between interfaces and types in TypeScript?

Ans:

1. Interface can't create unions, but type can create and use unions.
2. Interface computed properties are not supported, but type fully support.
3. Interface can be merged, but type cannot be merged.
4. Type can define primitive types, but interface cannot.

# 2.What is the use of the keyof keyword in TypeScript? Provide an example.

Ans: The `keyof` keyword is used to get a union of all keys of a given type.

Example:

```typescript
type Person = { name: string; age: number };
type PersonKeys = keyof Person; // "name" | "age"
```

# 3.Explain the difference between any, unknown, and never types in TypeScript.

Ans:

1. `any`: Allows any type of value and disables type checking.
2. `unknown`: Similar to `any`, but requires type checking before usage.
3. `never`: Represents values that never occur, such as functions that throw errors or infinite loops.

# 4.What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

Ans: Enums are used to define a set of named constants.

Example:

```typescript
// Numeric Enum
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

// String Enum
enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
}
```

# 5.What is type inference in TypeScript? Why is it helpful?

Ans: Type inference allows TypeScript to automatically determine the type of a variable, reducing the need for explicit type annotations and improving code readability.

# 6.How does TypeScript help in improving code quality and project maintainability?

Ans: TypeScript provides static type checking, improves code readability, supports modern JavaScript features, enables better tooling, and facilitates confident refactoring.

# 7.Provide an example of using union and intersection types in TypeScript?

Ans: Union types allow a variable to hold multiple types, while intersection types combine multiple types into one.

Example:

```typescript
// Union Type
type A = string | number;

// Intersection Type
type B = { name: string } & { age: number };
```
