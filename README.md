# Catálogo de cursos con TypeScript

Aplicación de consola pequeña y reproducible que modela un catálogo de cursos. El proyecto demuestra tipos estrictos, arreglos de objetos tipados, funciones de filtrado, cálculo y transformación, y módulos con importaciones y exportaciones.

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Instalación

Clona el repositorio y, desde su carpeta, instala la versión bloqueada de las dependencias:

```bash
npm ci
```

Si todavía no existe `package-lock.json`, utiliza `npm install` una vez para generarlo.

## Comandos disponibles

```bash
npm run typecheck
npm run build
npm start
```

- `typecheck`: comprueba los tipos sin crear archivos JavaScript.
- `build`: compila los archivos de `src` en `dist` y genera mapas de código fuente.
- `start`: ejecuta la aplicación compilada desde `dist/index.js`.

Se debe ejecutar `npm run build` antes de `npm start` cuando todavía no existe la carpeta `dist` o cuando cambia el código fuente.

## Estructura

```text
.
├── src/
│   ├── models.ts   # Tipos e interfaces del dominio
│   ├── catalog.ts  # Datos y funciones del catálogo
│   └── index.ts    # Punto de entrada y salida en consola
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Dominio y funciones

Cada curso tiene título, categoría, nivel, duración, precio y disponibilidad. `catalog.ts` contiene un arreglo `Curso[]` y funciones que:

1. filtran cursos disponibles por nivel;
2. calculan cantidad, duración total y precio promedio;
3. transforman cursos en etiquetas para la consola;
4. producen un catálogo nuevo con un descuento validado.

El proyecto usa `strict`, evita `any` y no emplea conversiones forzadas para ocultar errores.

## Evidencia sugerida para la entrega

En una terminal limpia ejecuta y captura el resultado de:

```bash
npm ci
npm run typecheck
npm run build
npm start
```

Incluye las capturas en el PDF junto con el enlace público de GitHub y el enlace de visualización del video en Google Drive.
