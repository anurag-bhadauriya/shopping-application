
/**
 * This is a model class which has the attributes to keep User properties
 */

 export class LoginToken {
     token: string = "";
     userData: User = new User(); 
 }

export class User {
    //_id?:           string      =   "";
    uCart:          Cart[]      =   [];
    uCredentials:   Credentials =   new Credentials();
    uProfile:       Profile     =   new Profile();
    uAddress:       Address   =   new Address();
    message:        string      =   "";
}

export class Cart {
    p_Id: string;
    sEmail: string;
    pQuantity: number;
    message: string;
}

export class Credentials {
    uEmail: string;
    uPass: string;
}

export class Profile {
    uName: string;
    uDOB: string;
    uLastLogin: Date;
    uDateJoined: Date;
    uPhone: string;
    uIsSeller: boolean;
}

export class Address {
    line1: string;
    line2: string;
    line3: string;
}

