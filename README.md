
# RebootDash

A full-stack application with a Node.js backend and a React-based dashboard frontend to monitor and manage PM2 processes on your EC2 server.

---

## 📂 Project Structure

```
/RebootDash
├── pm2-admin/        # Node.js Backend (PM2 process manager)
├── react-dashboard/  # React Frontend (Dashboard UI)
```

- **Backend:** `pm2-admin/`
- **Frontend:** `react-dashboard/`

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- NPM or Yarn

---

### 1. Clone the repository

```bash
git clone https://github.com/Attu001/RebootDash.git
cd RebootDash
```

---

### 2. Install dependencies

**Backend:**

```bash
cd pm2-admin
npm install
```

**Frontend:**

```bash
cd ../react-dashboard
npm install
```

---

### 3. Running the app locally

In one terminal, start the backend:

```bash
cd pm2-admin
npm start
```

In another terminal, start the frontend:

```bash
cd react-dashboard
npm start
```

- Backend will typically run on [http://localhost:5000](http://localhost:5000)
- Frontend will run on [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Environment Variables

Create a `.env` file inside both `pm2-admin/` and `react-dashboard/` if needed.

**Example `.env` for backend (`pm2-admin/.env`):**

```env
PORT=5000
```

**Example `.env` for frontend (`react-dashboard/.env`):**

```env
REACT_APP_API_URL=http://localhost:5000
```

---

## 📦 Build Frontend for Production

```bash
cd react-dashboard
npm run build
```

This will create a production-ready build inside `react-dashboard/build/`.

You can serve the React build statically using your Node.js server (optional).

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express, PM2
- **Frontend:** React, Axios, Material-UI / Tailwind (if used)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Pull requests are welcome!  
For major changes, please open an issue first to discuss what you would like to change.

---

## 📞 Contact

- GitHub: [@Attu001](https://github.com/Attu001)
