<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).

## Answers to questions:

## User story 1:

1.  i. To configure global app's settings, as well as the main entry point to start the server. It's crucial because it holds the server start and the global configurations such as guards or pipes.
    ii. The module file envelops everything that it's going to be used on the module, such as external modules and the entities within the module itself. The controller contains the access to the different http methods and their access (with guards or other decorators)

2.  i. To separate responsibilities and search easily for a certain feature involving an entity.
    ii. It helps to improve the maintenance and separate different concerns, easily test the different features, adding new modules or features without affecting the initial structure and makes easier to reuse previous code.
    iii. After the module archive is generated, it's important to generate the controller, service, entity and dtos(create and update). Primary, the controller contains the http methods to interact with the module it's in, in other words, the access to the different functionalities (related to authorization); while the service contains the business logic related to the module.

3.  i. If a decorator is used incorrectly in a controller, it could make an error appear when the endpoint is being used or when the application is being started. It restrains that endpoint to work as it should, whether it could be for the endpoint to not work at all or it could authorize access to a type of user it should not.
    ii. The dynamic routes allow to specify a unique identifier (the id of a register in the db table) and make petitions for a certain register, going in sync with thee restful api design. It allows to make db querying simpler to search based on an identifier or known field.

## User story 2:

1. i. It's important to separate responsibilities and not mix the business logic with the request handling. When separating business logic from request handling, it can be possible and easier to share business logic across controllers of different modules, as well as simplify the dependency injection, testing, and optimization.
   ii. The dependency injection detaches the creation of dependencies from their usage. Each module can be treated independently and tested easily.

2. i. Because entering data needs to be of a certain type. If I'm asking for the user's ID number and they enter a text or something not related to the requested data, it needs to be verified so the error can occur at the time it can be handled by the user, and not when they're receiving a bill.
   ii. It could end up in multiple db errors or when trying to handle the data, like unexpected behavior, incorrect route handling, failing when validating or transforming the data, data integrity issues, security vulnerabilities, etc.

3. i. It helps the client or tester to understand why the functionality is failing, and give some clues on how to fix it. If the error is not specified correctly it could make a hard time for the developers to even find out why it happens, when it could be related to something small.
   ii. It helps to have the responses consistent, improve security and register errors appropriately, and have better user experience in case the user is the cause of the error, when entering invalid data.
