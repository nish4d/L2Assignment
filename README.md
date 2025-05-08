# Assignment Question Answer 

**What are some differences between interfaces and types in TypeScript?**

Ans:

* Interface can't create unions, but type can create and use unions.
* Interface computed properties are not supported, but type fully support.
* Interface can be merged, but type cannot be merged.

**What is the use of the keyof keyword in TypeScript? Provide an example.**

Ans: `keyof` keyword is used for get all union keys.

Example:

```typescript
type Person = { name: string; age: number };
type PersonKeys = keyof Person; // "name" | "age"
```


**Provide an example of using union and intersection types in TypeScript?**

Ans:

Example:

```typescript
// Union Type
type A = string | number;

// Intersection Type
type B = { name: string } & { age: number };
```
