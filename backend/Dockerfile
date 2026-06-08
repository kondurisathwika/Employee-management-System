# Build Stage
FROM eclipse-temurin:17-jdk AS builder

WORKDIR /app

# Copy all project files
COPY . .

# Give execute permission to Maven wrapper
RUN chmod +x mvnw

# Build Spring Boot application
RUN ./mvnw clean package -DskipTests

# Runtime Stage
FROM eclipse-temurin:17-jre

WORKDIR /app

# Copy the generated jar
COPY --from=builder /app/target/*.jar app.jar

# Expose application port
EXPOSE 7070

# Run application
ENTRYPOINT ["java","-jar","app.jar"]
