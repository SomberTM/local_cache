# Local Cache
Local runtime caching for deno / typescript with ttl availability

# Usage
```typescript
import { Cache } from "https://deno.land/x/local_cache";

interface Person {
    firstName: string,
    lastName: string
}

// Create a new cache with a global ttl of 30 seconds
const cache: Cache<string, Person> = new Cache<string, Person>(30000);

// Listen for 'ttl' events
cache.on('ttl', (key: string, person: Person, ttl: number) => {
    console.log(`'${person.firstName} ${person.lastName}' with ID '${key}' expired after ${ttl / 1000} seconds`); 
});

// Listen for 'add' events
cache.on('add', (key: string, person: Person, ttl?: number) => {
    console.log(`Cached '${person.firstName} ${person.lastName}' with ID '${key}' [Expires after ${(ttl || 0) / 1000} seconds]`)
})

// add a new person with its own ttl of 5 seconds (overrides global ttl)
cache.add('someUniqueID', {
    firstName: 'John',
    lastName: 'Doe'
}, 5000);
```

# API
```typescript
<Cache<K, V>>.add(key: K, value: V) => void;
```
```typescript
<Cache<K, V>>.set(key: K, value: V) => void;
```
```typescript
<Cache<K, V>>.get(key: K) => V;
```
```typescript
<Cache<K, V>>.has(key: K) => boolean;
```
```typescript
<Cache<K, V>>.delete(key: K) => void;
```
```typescript
<Cache<K, V>>.clear() => void;
```
```typescript
<Cache<K, V>>.empty() => boolean;
```
```typescript 
<Cache<K, V>>.clone() => Cache<K, V>;
```
##### Other methods not stated here for space sake

# Events
```typescript 
<Cache<K, V>>.on('ttl', (key: K, value: V, ttl: number) => void);
```
```typescript 
<Cache<K, V>>.on('add', (key: K, value: V, ttl?: number) => void);
```
```typescript 
<Cache<K, V>>.on('set', (key: K, value: V, ttl?: number) => void);
```
```typescript 
<Cache<K, V>>.on('delete', (key: K, value: V) => void);
```
```typescript 
<Cache<K, V>>.on('claer', (map: Map<V>) => void);
```

# Maintainer
###### - Somber ([GitHub](https://github.com/SomberTM))

# License
###### Copyright (c) 2020 SomberTM ([MIT License](https://github.com/SomberTM/local_cache/blob/main/LICENSE))
