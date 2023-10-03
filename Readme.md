
** Requirements
Node v16

** How to run
Assuming that you have node v16 installed on your system, all you need to do to run the application is:

```sh
npm install
npm start
```

Open a web browser and type this url: `http://localhost:4000/graphql`
And use the following graphQL query.
`{
  types {
    name
    menus {
      name
      price
    }
  }
}`

Similarly, to run test:
Note: you need a node server running when running automation test scripts.
```sh
npm test
```