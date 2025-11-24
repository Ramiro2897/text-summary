# 📘 Text Summarizer (IA)

Aplicación full-stack que resume texto usando inteligencia artificial.
Incluye backend en Node.js + Express y frontend en React + Vite.
Ideal como proyecto para mostrar a reclutadores.

---

## 🚀 Tecnologías utilizadas

### **Backend**

* Node.js
* Express
* TypeScript
* API de IA (OpenAI)

### **Frontend**

* React
* TypeScript
* Vite
* CSS

---

## 📂 Estructura del proyecto

```
text-summarizer/
│── src/                 # Backend (Node + TS)
│   ├── index.ts
│   ├── routes.ts
│── summary-client/      # Frontend (React + Vite)
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── package.json
│── .env
│── package.json
│── tsconfig.json
```

---

## ⚙️ Configuración

### 1️⃣ Clonar el proyecto

```bash
git clone https://github.com/Ramiro2897/text-summary.git
cd text-summary
```

---

## 🧩 Backend (Node + Express)

### 📌 2️⃣ Instalar dependencias backend

```bash
npm install
```

### 📌 3️⃣ Crear archivo `.env`

En la raíz del proyecto:

```
AI_API_KEY=TU_API_KEY
```

### 📌 4️⃣ Ejecutar backend en modo desarrollo

```bash
npm run dev
```

El servidor iniciará en:

```
http://localhost:3001
```

---

## 🎨 Frontend (React + Vite)

### 📌 5️⃣ Instalar dependencias

Desde la carpeta `summary-client`:

```bash
cd summary-client
npm install
```

---

### 📌 6️⃣ Ejecutar frontend

```bash
npm run dev
```

Abrirá la app en:

```
http://localhost:5173
```

---

## 🧪 ¿Cómo funciona?

1. El usuario pega un texto en el frontend.
2. React envía la petición al backend.
3. El backend llama a la API de IA.
4. La IA genera un resumen.
5. React lo muestra en pantalla con una UI limpia y responsive.

---

## 👤 Autor

**Ramiro González**  
💼 Full Stack Developer  
📅 © 2025  


> Proyecto creado como demostración de integración IA + Node + React.

---
