export type NivelCurso = "principiante" | "intermedio" | "avanzado";

export interface Curso {
  id: number;
  titulo: string;
  categoria: string;
  nivel: NivelCurso;
  duracionHoras: number;
  precio: number;
  disponible: boolean;
}

export interface ResumenCatalogo {
  cantidadCursos: number;
  duracionTotalHoras: number;
  precioPromedio: number;
}
