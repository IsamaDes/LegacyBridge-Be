FOLDER STRUCTURE
legacybridge-backend/
├── .github/workflows/ci.yml
├── docker-compose.yml (optional)
├── Dockerfile
├── package.json
├── tsconfig.json
├── jest.config.ts
├── src/
│ ├── index.ts
│ ├── server.ts
│ ├── config/
│ │ └── index.ts
│ ├── routes/
│ │ ├── v1/
│ │ │ └── customers.ts
│ │ └── v2/
│ │ └── customers.ts
│ ├── controllers/
│ │ └── customersController.ts
│ ├── services/
│ │ ├── legacyClient.ts
│ │ ├── transform.ts
│ │ └── retryHttp.ts
│ ├── cache/
│ │ ├── redisCache.ts
│ │ └── memoryCache.ts
│ ├── middlewares/
│ │ └── errorHandler.ts
│ ├── utils/
│ │ └── logger.ts
│ └── tests/
│ ├── transform.test.ts
│ └── legacyClient.test.ts
├── postman_collection.json
└── README.md
