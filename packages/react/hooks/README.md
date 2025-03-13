# `react-hooks`

This package contains a set of useful tools you might need all the time.

## Hooks

- ### `useDebounce`

This is used to delay to update a value. You might see people use this approach for api calls. It takes two parameters:
`value` and `delay`.

```tsx
const [searchTerm, setSearchTerm] = useState("");
const debouncedSearchTerm = useDebounce(searchTerm, 500);
```