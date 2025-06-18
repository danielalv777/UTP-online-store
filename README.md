# 🧩 Tienda Online App

Aplicación web creada con **React + TypeScript** que consume la [DummyJSON](https://dummyjson.com/docs/products#products-category) para mostrar una lista de Productos con imágenes, datos del detalle de cada producto, y navegación por páginas. Incluye un modal para mostrar el detalle del producto, mensajes de validacion con Swiftalert2, push notifications con React-Toastify, el uso de Zutand para el manejo de estados globales. La palicacion tambien esta adaptada para ser responsiva (escritorio y mobile).

### 🔗 Demo desplegada en Vercel:
👉 [https://utp-online-store.vercel.app/](https://utp-online-store.vercel.app/)

---

## 📺 Funcionalidades

- 📄 **Dashboard** con listado paginado de Productos.
- 📃 **Pantalla de detalle** para ver nombre, imagen, rating e informacion relevante del producto.
- 📱 Diseño **responsive** (Flex adaptable para dispositivos mobiles y de escritorio).
- 🌐 Despliegue automático en **Vercel**.

---

## ⚙️ Cómo ejecutar el proyecto localmente

1. Clonar el repositorio

```ts
git clone https://github.com/danielalv777/UTP-online-store.git
cd UTP-online-store

```
2. Instalar dependencias y Ejecutar el entorno de desarrollo

```ts
npm install
npm run dev
```

---

## 🧪 Tecnologías utilizadas

  - ⚛️ React + Vite
  - 💅 SCSS Modules
  - 🪝 React Hooks
  - 🧠 Zustand (manejo de estado global)
  - 📡 Fetch API
  - 🧪 TypeScript
  - 💅 SwiftAlert2
  - 💅 React-Toastify

## 📦 Estructura del proyecto

```ts
src/
├── app/               # Configuración global (zustand, rutas)
├── assets/            # Imágenes y recursos estáticos
├── features/          # Store (dashboard de productos), filtros, carrito
├── services/          # Llamadas a la API
├── shared/            # Contiene todos los componentes reutilizables del app
└── App.tsx            # Componente principal
```
---

## ✨ Autor

Desarrollado por Jahil Alvarez como proyecto "Tienda Online" de práctica con la API DummyJSON.