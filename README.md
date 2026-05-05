# FarmInput — Agricultural Cost Tracker & Group Buying Platform

> Empowering smallholder farmers across Nigeria to reduce agricultural input costs through collective buying, smart spending analytics, and transparent supplier management.

---

## The Problem We're Solving

Millions of smallholder farmers across Nigeria overpay for fertilizers, seeds, pesticides, and other agricultural inputs — not because prices are inherently high, but because they buy alone. Without price visibility, collective bargaining power, or reliable supplier data, small-scale farmers are left vulnerable to inflated costs that eat directly into their livelihoods.

**FarmInput** is a backend platform built to change that. By connecting farmers through group buying pools, surfacing spending patterns through analytics, and streamlining supplier verification, FarmInput gives farming communities the tools they need to make smarter, more affordable purchasing decisions together.

---

## Screenshot

![FarmInput Platform Preview](./screenshots/preview.png)

> _Screenshot or API demo coming soon._

---

## Features

**Group Buying**
Farmers can form or join group buying pools for specific agricultural inputs, enabling bulk purchasing at significantly reduced prices. The platform manages pool membership, contribution tracking, and order coordination across the group lifecycle.

**Spending Analytics**
Farmers and farm administrators gain visibility into historical spending across input categories, time periods, and farm entities. Analytics endpoints surface trends and cost breakdowns to help farmers plan budgets and identify savings opportunities.

**Supplier Management**
A dedicated supplier layer allows farmers to discover, compare, and transact with agricultural input suppliers. Supplier profiles include pricing data, product listings, and reputation signals derived from platform activity.

**Verification Workflows**
Trust is foundational on a platform serving rural farming communities. FarmInput includes structured verification workflows for farmer identity, farm registration, and supplier credentialing — ensuring all parties on the platform meet baseline authenticity standards.

**Multi-Entity API Design**
The platform is architected around clearly separated resource domains — farms, inputs, users, groups, suppliers, and plans — enabling flexible integrations and straightforward extensibility as the platform grows.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| API Style | REST |
| Auth | JWT-based Authentication |
| Architecture | Multi-entity REST API |

---

## API Overview

The FarmInput API is organized around the following resource groups:

**Authentication** `/api/auth`
Registration, login, token management, and session handling for farmers, administrators, and suppliers.

**Farms** `/api/farms`
Create and manage farm profiles, associate inputs with specific farm entities, and retrieve farm-level data.

**Inputs** `/api/inputs`
Manage agricultural inputs — seeds, fertilizers, pesticides, and equipment — including pricing, quantities, and categories.

**Spending Analytics** `/api/analytics`
Query spending data by farm, input category, date range, or group. Supports summary and detailed breakdown views.

**Group Buying** `/api/groups`
Create buying groups, manage membership, track contribution status, and coordinate group orders with suppliers.

**Suppliers** `/api/suppliers`
Register supplier profiles, manage product listings, and surface supplier data for farmer discovery and comparison.

**Planning** `/api/plans`
Build seasonal input plans tied to farm size, crop type, and budget constraints. Supports draft and published plan states.

**Verification** `/api/verification`
Initiate and track verification requests for farmers, farms, and suppliers. Manage document submission and approval workflows.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js v18 or higher
- npm or yarn
- A running instance of your preferred database (see `.env.example` for configuration)

### Installation

Clone the repository:

bash
git clone https://github.com/Caleb-Bako/farminput.git
cd farminput

Install dependencies:

bash
npm install

Configure your environment:

bash
cp .env.example .env

Open `.env` and fill in your database connection string, JWT secret, and any other required environment variables.

### Running the Server

Start in development mode:

bash
npm run dev

Start in production mode:

bash
npm start

The server will be running at `http://localhost:5000` by default. Update the `PORT` value in your `.env` file to change this.

### Running Tests

bash
npm test

---

## Project Structure

farminput/
├── src/
│   ├── controllers/       # Route handler logic
│   ├── middleware/        # Auth, validation, error handling
│   ├── models/            # Data models and schemas
│   ├── routes/            # Express route definitions
│   ├── services/          # Business logic layer
│   └── utils/             # Shared helpers and utilities
├── .env.example
├── package.json
└── README.md

---

## Contributing

Contributions, issues, and feature requests are welcome. If you'd like to contribute, please open an issue first to discuss what you'd like to change.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

_Built with purpose for Nigeria's farming communities._

**Caleb Bako** · [github.com/Caleb-Bako](https://github.com/Caleb-Bako) · [linkedin.com/in/caleb-bako](https://linkedin.com/in/caleb-bako)
