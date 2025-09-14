# API Documentation Template

## Document Header
```yaml
title: "[API Name] Reference"
audience: "Developers"
complexity: "[Beginner/Intermediate/Advanced]"
last_updated: "[Date]"
version: "[API Version]"
```

## Overview
- Purpose and capabilities
- Authentication requirements
- Base URL and versioning
- Rate limiting

## Quick Start
- Setup steps
- Basic auth example
- Simple request/response

## Endpoints

### [Endpoint Name]
**`[METHOD] /endpoint/path`**

**Description**: [Endpoint purpose]

**Parameters**:
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| param1    | string | Yes | [Description] |

**Request Example**:
```http
[REQUEST_METHOD] /api/v1/endpoint
Authorization: Bearer [token]
Content-Type: application/json

{ "param1": "value1" }
```

**Response Example**:
```json
{ "status": "success", "data": {} }
```

**Error Responses**:
| Status Code | Description | Solution |
|-------------|-------------|----------|
| 400 | Bad Request | [Explanation] |
