/* 

#3 — Liskov Substitution Principle

Objects of a superclass should be able to be replaced with objects of a 
subclass without affecting the correctness of the program.

*/


/**
 *This means that every subclass/derived class should be substitutable for
  their base/parent class. In the following example, we have assumed that
   every Bird can fly — this works for Duck, but not for Ostrich — hence 
   it’s a violation of the Liskov Substitution Principle! 
 * 
 */
{


// ===== Bad Code =====

class Bird {
    public fly() {
    }
}

class Duck extends Bird {
}

class Ostrich extends Bird { // ===> LSP violation!
}
    

}



{
    // ===== Good Code =====

class Bird {
}
    

class FlyingBird extends Bird {
    public fly() {
    }
}
    

class Duck extends FlyingBird {
}
    

class Ostrich extends Bird {
}
    
    
}