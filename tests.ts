import { Cache } from "./mod.ts";

interface Person {  
    firstName: string,
    lastName: string
} 

const people = new Cache<string, Person>();

people.on('ttl', (key: string, person: Person, time: number) => {
    console.log(`Expired: '${key}' => ${JSON.stringify(person, null, 2)}`)
})

people.on('add', (key: string, person: Person) => {
    console.log(`Cached: '${key}' => ${JSON.stringify(person, null, 2)}`);
});

people.on('set', (key: string, person: Person) => {
    console.log(`Updated: '${key}' => ${JSON.stringify(person, null, 2)}`);
});

people.add('FooPerson', {
    firstName: 'Foo',
    lastName: 'Bar'
}, 2000);

people.add('BarPerson', {
    firstName: 'Hello',
    lastName: 'World'
});

people.set('BarPerson', {
    firstName: 'Bar',
    lastName: 'Foo'
});

