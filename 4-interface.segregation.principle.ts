/* 

#4 — Interface Segregation Principle

Clients should not be forced to implement interfaces that they do not wish
 to use/depend on methods that they do not use.

*/

/* 
To achieve this, having smaller interfaces with closely-related functions is 
important as opposed to large all-in-one-style interfaces.


For instance, in the following example, Animal interface includes both common and
different behaviours of Lion and Cow. Now, if Lion implements Animal
 interface, it has no meaningful way to handle graze() since it is a 
 behaviour of Cow only. The same happens when Cow handle hunt().


*/

{
    interface Animal {
        eat(): void;
    
        sleep(): void;
    
        hunt(): void;
    
        graze(): void;
    }
    
    class Lion implements Animal {
        eat(): void {
            // code...
        }
    
        sleep(): void {
            // code...
        }
    
        hunt(): void {
            // code...
        }
    
        graze(): void { // ===> ISP violation!
            throw new Error("Lion doesn't graze");
        }
    }
    
    class Cow implements Animal {
        eat(): void {
            // code...
        }
    
        sleep(): void {
            // code...
        }
    
        graze(): void {
            // code...
        }
    
        hunt(): void { // ===> ISP violation!
            throw new Error("Cow doesn't hunt");
        }
    }
}