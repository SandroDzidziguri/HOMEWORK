/**
 * დასაწყისისთვის კოდის ამ ნაწილს არ მიაქციო ყურადღება.
 * მომავაში გაიგებ რისთვის გვჭირდება ის.
 *
 * ❌ თუმცა არ წაშალო! წინააღმდეგ შემთხვევაში დავალებებს ვერ შეასრულებ
 */
import { input, print } from './bitcamp/lib.js';

// დაიწყე კოდის წერა აქედან 👇

let name = input("what's your name?")
let [firstName, lastName]=name.split(" ")
print("hello ",firstName, "\nyour surname is ",lastName)