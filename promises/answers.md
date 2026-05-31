# Promises - Answers

## Q1

Output: 1, 4, 3, 2

First console.log(1) runs right away, then setTimeout puts its callback in the macrotask queue, then Promise.then puts its callback in the microtask queue, then console.log(4) runs. Now the call stack is empty so the event loop checks microtasks first - that prints 3. Then it goes to the macrotask queue and prints 2. So microtasks (promises) always run before macrotasks (setTimeout) even when the timeout is 0.

## Q2

Output: 2, 4, 1, 3

setTimeout(1) goes to macrotask queue. Promise.then goes to microtask queue. Stack is empty so we run microtasks - prints 2. Inside that microtask, setTimeout(3) gets queued as another macrotask, and the inner Promise.then(4) gets queued as a microtask. We're still draining microtasks so 4 prints next. Now microtask queue is empty, so we go to macrotasks - first one prints 1, second one prints 3. Basically microtasks that get created inside other microtasks still run before any macrotask gets a chance.

## Q3

Output: 4, 1, 5, 2, 3

console.log(4) runs first (synchronous). Then demo() is called - inside it console.log(1) runs synchronously. Then we hit await Promise.resolve() which pauses the function and gives control back to the caller. So console.log(5) runs next. Now the stack is empty, the continuation of demo runs as a microtask - prints 2. Hits another await, pauses again. Next microtask resumes demo and prints 3. The thing to understand is that await gives control back to whoever called the function, and the code after await becomes a microtask.

## Q4

Output: 6, 4, 1, 2, 3, 5, 7

level1 starts, prints 6, then awaits level2. level2 starts, prints 4, then awaits level3. level3 starts, prints 1, the Promise constructor runs synchronously so it prints 2 and calls resolve(). Then level3 hits await which pauses it. Stack empties, microtask resumes level3 which prints 3 and finishes. That resolves the await in level2 so it resumes and prints 5. That resolves the await in level1 so it prints 7. Because every level uses await, they form a chain - each one waits for the one below it to fully finish. Also the Promise executor (the function you pass to new Promise) runs synchronously, thats why 2 comes right after 1.

## Q5

Output: 6, 4, 1, 2, 7, 3, 5

This is almost the same as Q4 but level1 calls level2() WITHOUT await. So level1 prints 6, calls level2 (fire and forget), level2 prints 4, awaits level3, level3 prints 1, promise executor prints 2, level3 hits await and pauses. Since level2 is also paused (waiting for level3), control goes back to level1. But level1 didnt await level2 so it just continues and prints 7. Then microtasks run - level3 resumes and prints 3, which makes level2 resume and print 5. The difference from Q4 is that 7 comes before 3 and 5 because level1 doesnt wait for anything.
