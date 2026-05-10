# Job Offers Web App

Full-stack application for managing job offers, built with Spring Boot and React.

## Tech Stack

**Backend**
- Java 21
- Spring Boot
- Spring Data JPA
- PostgreSQL
- Lombok

**Frontend**
- React
- Fetch API

## Architecture
## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/jobs | Get all job offers |
| GET | /api/jobs/{id} | Get job offer by ID |
| POST | /api/jobs | Create new job offer |
| DELETE | /api/jobs/{id} | Delete job offer |

## Setup

### Backend

1. Create PostgreSQL database
2. Copy `application.properties.example` to `application.properties`
3. Fill in your database credentials
4. Run `JobApp2Application.java`

### Frontend

```bash
cd job-frontend
npm install
npm start
```
