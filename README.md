<div> <p style="text-align:center"> <img align="center" src="./public/programador.png" alt="JuveYell" width="300px"> </p> </div> <h2 align="center" style="color:#CD5C5C">JLG'777' <img src="https://github.com/blackcater/blackcater/raw/main/images/Hi.gif" height="22" /></h2> <p align="center"> <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&duration=4000&pause=1000&multiline=true&random=false&width=435&lines=Un+proyecto+creado+por+J0RG1T0" alt="Typing SVG" /></a> </p> <hr>

## 📧 Conéctate conmigo:

[![GMAIL](https://img.shields.io/badge/Gmail-Gmail?style=white&logo=Gmail&logoColor=white&color=%23EA4335)](proyectojlg777@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-LinkedIn?style=white&logo=LinkedIn&logoColor=white&color=%230A66C2)](https://linkedin.com/in/)
[![Discord](https://img.shields.io/badge/Discord-Discord?style=white&logo=Discord&logoColor=white&color=%235865F2)](jorgeg777#9720)

## 📦 react-supabase-auth-crud

_Aplicación web construida con React, Supabase y TailwindCSS que implementa autenticación por correo y un sistema CRUD para administrar tareas e instrumentos musicales._

## 🚀 Tecnologías utilizadas

⚛️ React 19 + React Router DOM 7

💅 TailwindCSS 4

🔐 Supabase (auth + base de datos)

⚡ Vite

🧠 Context API para manejo de estado

📦 Eslint para buenas prácticas

## 🧩 Funcionalidades principales

✅ Login con OTP (correo electrónico) usando Supabase

✅ Redirección automática luego de autenticación

✅ CRUD de tareas por usuario autenticado

✅ Visualización de instrumentos desde Supabase

✅ Manejo de rutas con React Router DOM

✅ Diseño moderno y responsivo con Tailwind

## 🔤 Estructura de la app

```text
src/
│
├── components/         # Componentes como TaskForm, Instruments
├── context/            # TaskContext con lógica de tareas
├── db/                 # Cliente de conexión a Supabase
├── pages/              # Rutas: Home, Login, NotFound
├── App.jsx             # Configuración de rutas
├── main.jsx            # Punto de entrada
└── index.css           # Estilos con Tailwind
```

## 🔧 Configuración del entorno

#### Cloná el repo:

```bash
Copiar
git clone https://github.com/tu-usuario/react-supabase-auth-crud.git
cd react-supabase-auth-crud
```

#### Instalá las dependencias:

```bash
Copiar
npm install
```

#### Configurá las variables de entorno (creá un archivo .env):

```bash
Copiar
VITE_SUPABASEURL=https://<your-project>.supabase.co
VITE_SUPABASEKEY=your-supabase-anon-key
```

⚠️ Usá tu propia URL y clave del proyecto en Supabase.

#### Corré la app en modo desarrollo:

```bash
Copiar
npm run dev
```

## 🌐 Rutas disponibles

| Ruta         | Descripción                     |
| :----------- | :------------------------------ |
| /            | Página de inicio con navegación |
| /login       | Formulario de login con email   |
| /instruments | Lista de instrumentos (pública) |
| /tasks       | CRUD de tareas (requiere login) |
| \*           | Página 404 personalizada        |

## 📦 Supabase - Tablas esperadas

#### Tabla instruments

| Columna | Tipo    |
| :------ | :------ |
| id      | integer |
| name    | text    |

#### Tabla tareas

| Columna | Tipo    |
| :------ | :------ |
| id      | integer |
| name    | text    |
| isDone  | boolean |
| user_id | uuid    |

## 🥪 Linting

Para revisar errores de código:

```bash
npm run lint
```

## 💡 Notas

- El login se hace vía OTP (enlace enviado al correo).

- Las tareas están asociadas al user.id autenticado.

- El estado global de tareas se maneja con Context API.

🛠️ Construido con

**React 19** – Biblioteca para construir interfaces de usuario.<br>
**React Router DOM 7** – Manejo de rutas en aplicaciones SPA.<br>
**TailwindCSS 4** – Framework de estilos utility-first.<br>
**Supabase** – Plataforma backend (auth, base de datos, API REST).<br>
**Vite** – Empaquetador rápido para desarrollo moderno.<br>
**ESLint** – Herramienta de análisis estático para código JavaScript.<br>
**Context API** – Para manejar estado global sin Redux.

## ✒️ Autores

**Jorge Grandía** - _Trabajo Inicial_ - [JLG777](https://github.com/jlg777)
**Jorge Grandía** - _Documentación_ - [JLG777](#jlg777)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo LICENSE.md para detalles.

## 🎁 Expresiones de Gratitud

- Comenta a otros sobre este proyecto 📢
- Invita una cerveza 🍺 o un café ☕ a alguien del equipo.
- Da las gracias públicamente 🤓.
- Dona con cripto a esta dirección:
  - (btc) 16ApGFxMXfF8ktysSkmLBzLEJPHubtwKjp
  - (btc-SegWit) bc1q0v8fvv3gvga02h9xspcg7npghjfyny20lavc37
  - (Ethereum) 0x1ee2842c194c95bc54473c6b27d602fc0bfc81a9

---

⌨️ con ❤️ por JLG777 😊

_Copyright (c) [2025] [jlg777]_
