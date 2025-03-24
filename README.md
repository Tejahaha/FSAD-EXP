# Spring Boot Backend Project

This is a Spring Boot backend application built with Java 21 and Maven. It provides RESTful APIs with MySQL database integration and Thymeleaf templating support.

## Prerequisites

Before you begin, ensure you have the following installed:

- Java Development Kit (JDK) 21
- Maven 3.x
- MySQL Server
- Your favorite IDE (IntelliJ IDEA, Eclipse, or VS Code)

## Project Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd LAB-s21
```

### 2. Database Configuration

Create a MySQL database and configure the connection in `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

### 3. Build and Run

You can run the application using either Maven or your IDE:

#### Using Maven

```bash
# On Windows
.\mvnw spring-boot:run

# On Unix/Linux/MacOS
./mvnw spring-boot:run
```

#### Using IDE

Run the main class `LabS21Application.java` from your IDE.

## Project Structure

```
src/
├── main/
│   ├── java/
│   │   └── com/example/LAB_s21/
│   └── resources/
└── test/
    └── java/
```

## Features

- RESTful API endpoints
- MySQL database integration with JPA
- Thymeleaf templating engine
- JSON processing with Jackson
- Lombok for reducing boilerplate code

## Dependencies

- Spring Boot Starter Web
- Spring Boot Starter Data JPA
- MySQL Connector
- Spring Boot Starter Thymeleaf
- Jackson Databind
- Lombok
- Spring Boot Starter Test

## Testing

Run the tests using Maven:

```bash
# On Windows
.\mvnw test

# On Unix/Linux/MacOS
./mvnw test
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.
