import { User } from "./User";
import { UserBuilder } from "./UserBuilder";

export function show() : void {
 var u: User = new UserBuilder("Rajan")
    .setAge(26)
    .setPhone("0123456789")
    .setAddress("India")
    .build();
 console.log(u.Name + " " + u.Age + " " + u.Phone + " " + u.Address);
}

show();



/**
 * Builder
 * 
 * Purpose:
 * Builder Pattern is a separation of the construction of a complex object from its representation.
 * It allows you to enforce a step-by-step process to construct a complex object as a finished product
 * 
 */