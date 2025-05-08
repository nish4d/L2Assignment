{
  // @ts-ignore

  function formatString(input: string, toUpper?: boolean = true): string {
    if (toUpper) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  }



  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter((item) => item.rating > 4.0);
  }







  function concatenateArrays<T>(...arrays: T[][]): T[] {
    const getArrayValue: T[] = [];

    for (let i = 0; i < arrays.length; i++) {
      const array = arrays[i];
      array.forEach((item) => {
        getArrayValue.push(item);
      });
    }
    return getArrayValue;
  }





  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }

    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }

    getModel(): string {
      return `Model: ${this.model}`;
    }
  }





  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    }
    return value * 2;
  }






  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }
    let valueProduct = products[0];
    for (let i = 1; i < products.length; i++) {
      if (products[i].price > valueProduct.price) {
        valueProduct = products[i];
      }
    }
    return valueProduct;
  }





  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }



  

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }

  // @ts-ignore
}
