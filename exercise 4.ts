//1

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }
}



//2
class Person {
    name: string;
    age: number;
    private socialSecurityNumber: string;

    constructor(name: string, age: number, socialSecurityNumber: string) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = socialSecurityNumber;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    getSocialSecurityNumber(): string {
        return this.socialSecurityNumber;
    }
}




