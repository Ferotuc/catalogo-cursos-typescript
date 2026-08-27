import type { Curso, NivelCurso, ResumenCatalogo } from "./models.js";

export const cursos: Curso[] = [
  {
    id: 1,
    titulo: "Fundamentos de TypeScript",
    categoria: "Programación",
    nivel: "principiante",
    duracionHoras: 12,
    precio: 40,
    disponible: true
  },
  {
    id: 2,
    titulo: "APIs con Node.js",
    categoria: "Programación",
    nivel: "intermedio",
    duracionHoras: 18,
    precio: 65,
    disponible: true
  },
  {
    id: 3,
    titulo: "Diseño de bases de datos",
    categoria: "Datos",
    nivel: "intermedio",
    duracionHoras: 16,
    precio: 55,
    disponible: false
  },
  {
    id: 4,
    titulo: "Arquitectura de software",
    categoria: "Programación",
    nivel: "avanzado",
    duracionHoras: 24,
    precio: 90,
    disponible: true
  },
  {
    id: 5,
    titulo: "Introducción al análisis de datos",
    categoria: "Datos",
    nivel: "principiante",
    duracionHoras: 10,
    precio: 35,
    disponible: true
  }
];

/** Filtra los cursos que pueden inscribirse y pertenecen al nivel indicado. */
export function filtrarDisponiblesPorNivel(
  catalogo: readonly Curso[],
  nivel: NivelCurso
): Curso[] {
  return catalogo.filter(
    (curso: Curso): boolean => curso.disponible && curso.nivel === nivel
  );
}

/** Calcula estadísticas generales sin modificar el catálogo recibido. */
export function calcularResumen(catalogo: readonly Curso[]): ResumenCatalogo {
  const duracionTotalHoras: number = catalogo.reduce(
    (total: number, curso: Curso): number => total + curso.duracionHoras,
    0
  );
  const precioTotal: number = catalogo.reduce(
    (total: number, curso: Curso): number => total + curso.precio,
    0
  );
  const precioPromedio: number =
    catalogo.length === 0 ? 0 : precioTotal / catalogo.length;

  return {
    cantidadCursos: catalogo.length,
    duracionTotalHoras,
    precioPromedio
  };
}

/** Transforma cursos en etiquetas breves aptas para mostrarse en consola. */
export function crearEtiquetas(catalogo: readonly Curso[]): string[] {
  return catalogo.map(
    (curso: Curso): string =>
      `${curso.titulo} | ${curso.nivel} | ${curso.duracionHoras} h | $${curso.precio.toFixed(2)}`
  );
}

/** Aplica un porcentaje de descuento y devuelve un catálogo nuevo. */
export function aplicarDescuento(
  catalogo: readonly Curso[],
  porcentaje: number
): Curso[] {
  if (porcentaje < 0 || porcentaje > 100) {
    throw new RangeError("El porcentaje debe estar entre 0 y 100.");
  }

  const factor: number = 1 - porcentaje / 100;
  return catalogo.map(
    (curso: Curso): Curso => ({
      ...curso,
      precio: Number((curso.precio * factor).toFixed(2))
    })
  );
}
