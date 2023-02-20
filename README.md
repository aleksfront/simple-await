# simple-await
Execute async function with simple error handling. Returns object with data and error.

## Installation
```
yarn add simple-await
```

## Usage
```ts
import wait from 'simple-await';

function rejecter() {
    return Promise.reject(new Error("my new error"))
}

function solver(): Promise<{ name: string }> {
    return Promise.resolve({ name: "John" })
}

async function withFetch() {
    const { data, error } = await wait<object, string>(fetch('http://httpstat.us/503'));

    console.log(data, error) // undefined,  Failed to fetch 
}

async function solve() {
    const { data, error } = await wait<{ name: string }, string>(solver());

    console.log(data, error) // { name: "John" }, undefined
}

async function reject() {
    const { data: result, error: cause } = await wait(rejecter());

    console.log(result, cause) // undefined, my new error
}
```

## License
MIT