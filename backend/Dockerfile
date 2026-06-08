# Stage 1: Build the Spring Boot application
FROM eclipse-temurin:17-jdk AS builder

WORKDIR /app

# Copy Maven wrapper and pom.xml
COPY pom.xml .
COPY mvnw .
COPY .mvn .mvn

# Copy source code
COPY src src

# Make Maven wrapper executable
RUN chmod +x mvnw && ./mvnw clean package -DskipTests

# Stage 2: Runtime image
FROM eclipse-temurin:17-jre

WORKDIR /app

# Copy generated jar from builder stage
COPY --from=builder /src/employee_management_system-0.0.1-SNAPSHOT.jar app.jar

# Expose application port
EXPOSE 7070

# Start application
ENTRYPOINT ["java","-jar","app.jar"]
