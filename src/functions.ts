import {SayHello} from "./types";

export function SayHelloWorld({ name, surename, age } : SayHello) {
    console.log(name, age, surename);
}