import {
  aplicarDescuento,
  calcularResumen,
  crearEtiquetas,
  cursos,
  filtrarDisponiblesPorNivel
} from "./catalog.js";
import type { Curso, ResumenCatalogo } from "./models.js";

const cursosIntermedios: Curso[] = filtrarDisponiblesPorNivel(
  cursos,
  "intermedio"
);
const resumen: ResumenCatalogo = calcularResumen(cursos);
const catalogoConDescuento: Curso[] = aplicarDescuento(cursosIntermedios, 15);

console.log("=== Catálogo de cursos ===");
for (const etiqueta of crearEtiquetas(cursos)) {
  console.log(`- ${etiqueta}`);
}

console.log("\n=== Resumen ===");
console.log(`Cursos: ${resumen.cantidadCursos}`);
console.log(`Duración total: ${resumen.duracionTotalHoras} horas`);
console.log(`Precio promedio: $${resumen.precioPromedio.toFixed(2)}`);

console.log("\n=== Cursos intermedios disponibles con 15% de descuento ===");
for (const etiqueta of crearEtiquetas(catalogoConDescuento)) {
  console.log(`- ${etiqueta}`);
}
