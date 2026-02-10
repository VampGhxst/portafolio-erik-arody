import React, { useState } from 'react';
import { 
  BookOpen, 
  Network, 
  Layout, 
  Share2, 
  Users, 
  ChevronRight, 
  Star,
  FileText,
  Search,
  Database,
  Server,
  Map as MapIcon,
  ArrowRight,
  Info,
  Github // <--- Importamos el icono de GitHub
} from 'lucide-react';

// --- CONFIGURACIÓN DEL EQUIPO ---
const TEAM = [
  { name: "Erik Emanuel Ramírez Arroyo", role: "Desarrollo & Arquitectura" },
  { name: "Arody Mata Salazar", role: "Análisis & Diseño" }
];

// --- DATOS DE LAS ACTIVIDADES (Narrativa de Reporte Académico) ---
const ACTIVITIES = [
  {
    id: 'act1',
    code: 'Fase 1',
    title: "Formulación de Proyecto",
    subtitle: "Definición y Justificación",
    icon: <Star className="text-yellow-400" />,
    color: "from-yellow-400 to-orange-500",
    description: "En esta primera actividad, definimos la identidad del proyecto a desarrollar. Analizamos la problemática actual del desperdicio de alimentos frente a la inseguridad alimentaria y establecimos cómo una aplicación web puede ayudar a mitigar esto alineándose con los ODS.",
    learning: "Aprendimos a justificar un proyecto tecnológico con base en necesidades sociales reales y a delimitar el alcance (qué incluye y qué no).",
    details: {
      problem: "Desperdicio en restaurantes vs Hambre en comunidades.",
      solution: "Plataforma web de redistribución en tiempo real.",
      ods: "ODS 2: Hambre Cero & Economía Circular."
    }
  },
  {
    id: 'act2',
    code: 'DWPA',
    title: "Investigación Web",
    subtitle: "Estructura y Elementos",
    icon: <Layout className="text-blue-400" />,
    color: "from-blue-400 to-cyan-500",
    description: "Esta actividad (DWPA) consistió en una investigación teórica profunda sobre la naturaleza de los sitios web. Desglosamos la anatomía fundamental de una página: el Encabezado (identidad y navegación), el Cuerpo (contenido principal) y el Pie de página (información legal y contacto), entendiendo la función crítica de cada uno.",
    learning: "Comprendimos que una estructura web sólida es indispensable para la usabilidad y la retención del usuario.",
    details: {
      header: "Identidad visual y navegación.",
      body: "Núcleo de contenido e interactividad.",
      footer: "Cierre visual, legal y contacto."
    }
  },
  {
    id: 'act3',
    code: 'Act 3',
    title: "Esquemas y Mapas",
    subtitle: "Arquitectura de Información",
    icon: <MapIcon className="text-emerald-400" />,
    color: "from-emerald-400 to-green-500",
    description: "Aquí diseñamos la lógica de navegación. Creamos el Mapa de Sitio para visualizar la jerarquía de las páginas y definimos los Esquemas de Búsqueda (Simple y Avanzada), determinando cómo los usuarios filtrarán la información dentro de la plataforma.",
    learning: "Entendimos la importancia de planear la experiencia de usuario (UX) antes de escribir código.",
    details: {
      sitemap: "Estructura de árbol: Inicio -> Mapa, Donar, Perfil.",
      search: "Filtros por: Distancia, Tipo de Alimento, Urgencia."
    }
  },
  {
    id: 'act4',
    code: 'UML',
    title: "Modelado de Software",
    subtitle: "Diagramas Técnicos",
    icon: <Share2 className="text-purple-400" />,
    color: "from-purple-400 to-pink-500",
    description: "En esta fase técnica, traducimos los requerimientos a diagramas estándar UML. Elaboramos el Diagrama de Casos de Uso para ver las interacciones de los actores y el Diagrama de Clases para estructurar la base de datos bajo el modelo MVC.",
    learning: "Aprendimos a abstraer la lógica del negocio en modelos visuales que guiarán el desarrollo del backend.",
    details: {
      actors: "Restaurante (Donante) y Beneficiario (Receptor).",
      classes: "Usuario, Donación, Restaurante."
    }
  }
];

export default function App() {
  const [selectedActivity, setSelectedActivity] = useState(ACTIVITIES[0]);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-indigo-500 selection:text-white flex flex-col">
      
      {/* --- HEADER: PORTADA DE REPORTE --- */}
      <header className="bg-slate-900 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-600/20 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 py-10 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold text-indigo-400 uppercase tracking-wider mb-3">
                <BookOpen size={14} /> Desarrollo Web Profesional
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                Página Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Actividades del Mes</span>
              </h1>
              <p className="text-slate-400 max-w-xl text-lg mb-6">
                <span className="text-emerald-400 font-bold border-b border-emerald-500/30 pb-0.5 mr-2">Revaloración Parcial:</span> 
                Compendio de evidencias y aprendizajes generales desarrollados durante el curso.
              </p>
              
              {/* Botón visual de GitHub */}
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-600 hover:border-slate-500 transition-all shadow-lg shadow-black/20 group"
              >
                <Github size={20} className="text-white group-hover:scale-110 transition-transform"/>
                <span className="font-medium">Ver en GitHub</span>
              </a>
            </div>

            {/* Tarjeta de Alumnos */}
            <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 p-4 rounded-xl flex flex-col gap-3 min-w-[280px]">
              <div className="text-xs text-slate-500 uppercase font-bold border-b border-slate-700 pb-2">Alumnos</div>
              {TEAM.map((member, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-indigo-400 font-bold border border-slate-600 shadow-inner">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white leading-tight">{member.name}</div>
                    <div className="text-[10px] text-slate-400">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8 flex flex-col lg:flex-row gap-8">
        
        {/* MENÚ LATERAL: LISTA DE ACTIVIDADES */}
        <aside className="lg:w-1/3 space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="text-slate-400" size={20} />
            <h2 className="text-xl font-bold text-white">Índice de Actividades</h2>
          </div>
          
          <div className="space-y-3">
            {ACTIVITIES.map((act) => (
              <button
                key={act.id}
                onClick={() => setSelectedActivity(act)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 group relative overflow-hidden ${
                  selectedActivity.id === act.id 
                    ? 'bg-slate-800 border-indigo-500 shadow-lg shadow-indigo-900/20' 
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-800'
                }`}
              >
                {selectedActivity.id === act.id && (
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${act.color}`}></div>
                )}
                
                <div className="flex justify-between items-start mb-1 pl-3">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${selectedActivity.id === act.id ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-400'}`}>
                    {act.code}
                  </span>
                  <div className={`transition-transform duration-300 ${selectedActivity.id === act.id ? 'scale-110 text-white' : 'scale-100 text-slate-500'}`}>
                    {act.icon}
                  </div>
                </div>
                
                <div className="pl-3 mt-2">
                  <span className={`block font-bold text-lg ${selectedActivity.id === act.id ? 'text-white' : 'text-slate-300'}`}>
                    {act.title}
                  </span>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    {act.subtitle}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* ÁREA DE CONTENIDO: EXPLICACIÓN Y EVIDENCIA */}
        <section className="lg:w-2/3">
           <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl h-full flex flex-col overflow-hidden">
              
              {/* 1. SECCIÓN EXPLICATIVA (TEXTO) */}
              <div className="bg-slate-800/50 p-8 border-b border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${selectedActivity.color}`}>
                    Actividad {selectedActivity.code}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedActivity.title}</h2>
                </div>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300 text-lg leading-relaxed mb-4">
                    {selectedActivity.description}
                  </p>
                  <div className="bg-indigo-900/20 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                    <p className="text-indigo-200 text-sm italic m-0">
                      <strong>Aprendizaje clave:</strong> {selectedActivity.learning}
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. SECCIÓN VISUAL (DIAGRAMAS/EVIDENCIA) */}
              <div className="p-8 flex-1 bg-[#0b1121] relative">
                <div className="absolute top-4 right-6 text-xs text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
                  <Info size={14} /> Evidencia Visual
                </div>
                
                {selectedActivity.id === 'act1' && <EvidenceFormulation details={selectedActivity.details} />}
                {selectedActivity.id === 'act2' && <EvidenceStructure details={selectedActivity.details} />}
                {selectedActivity.id === 'act3' && <EvidenceUX details={selectedActivity.details} />}
                {selectedActivity.id === 'act4' && <EvidenceUML details={selectedActivity.details} />}
              </div>
           </div>
        </section>

      </main>
    </div>
  );
}

// --- COMPONENTES DE EVIDENCIA VISUAL ---

// ACTIVIDAD 1: FORMULACIÓN
const EvidenceFormulation = ({ details }) => (
  <div className="space-y-6 animate-fadeIn mt-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-slate-800 p-5 rounded-xl border-l-4 border-red-500 shadow-lg">
        <h3 className="text-red-400 font-bold mb-2 text-sm uppercase">La Problemática</h3>
        <p className="text-slate-300 text-sm leading-relaxed">{details.problem}</p>
      </div>
      <div className="bg-slate-800 p-5 rounded-xl border-l-4 border-emerald-500 shadow-lg">
        <h3 className="text-emerald-400 font-bold mb-2 text-sm uppercase">La Solución Propuesta</h3>
        <p className="text-slate-300 text-sm leading-relaxed">{details.solution}</p>
      </div>
    </div>

    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10"><Star size={100} /></div>
      <h3 className="text-yellow-400 font-bold mb-2 uppercase tracking-widest text-xs">Objetivo de Desarrollo Sostenible</h3>
      <div className="text-3xl font-extrabold text-white mb-2">ODS 2: Hambre Cero</div>
      <p className="text-slate-400 text-sm max-w-md mx-auto relative z-10">
        "Poner fin al hambre, lograr la seguridad alimentaria y la mejora de la nutrición y promover la agricultura sostenible."
      </p>
    </div>
  </div>
);

// ACTIVIDAD 2: ESTRUCTURA WEB (DWPA)
const EvidenceStructure = () => (
  <div className="flex flex-col items-center justify-center h-full animate-fadeIn mt-2">
    <p className="text-slate-400 text-sm mb-6 text-center italic">
      Desglose anatómico de una página web según la investigación realizada:
    </p>
    
    <div className="w-full max-w-lg bg-slate-900 border-2 border-slate-700 rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-105 duration-500">
      {/* Header */}
      <div className="bg-indigo-600 p-4 flex justify-between items-center relative group">
        <div className="absolute -left-32 group-hover:left-4 transition-all duration-300 bg-white text-indigo-900 text-xs font-bold px-3 py-1 rounded shadow-lg">
          ENCABEZADO: Identidad y Menú
        </div>
        <div className="flex gap-2 opacity-50">
           <div className="w-8 h-8 bg-white/30 rounded-full"></div>
        </div>
        <div className="flex gap-3 opacity-50">
           <div className="w-12 h-2 bg-white/30 rounded"></div>
           <div className="w-12 h-2 bg-white/30 rounded"></div>
        </div>
      </div>

      {/* Body */}
      <div className="bg-slate-800 p-10 relative group border-y border-slate-700 min-h-[160px] flex flex-col gap-4">
        <div className="absolute -left-32 group-hover:left-4 transition-all duration-300 bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded shadow-lg z-10">
          CUERPO: Contenido Principal
        </div>
        <div className="w-3/4 h-4 bg-slate-700 rounded opacity-50"></div>
        <div className="w-full h-32 bg-slate-700/50 rounded border-2 border-dashed border-slate-600 flex items-center justify-center">
          <span className="text-slate-600 text-xs uppercase font-bold">Área de Contenido</span>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 p-4 relative group flex justify-between items-end">
         <div className="absolute -left-32 group-hover:left-4 transition-all duration-300 bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded shadow-lg">
          PIE DE PÁGINA: Legal y Contacto
        </div>
        <div className="space-y-2 opacity-50">
          <div className="w-20 h-2 bg-slate-700 rounded"></div>
          <div className="w-16 h-2 bg-slate-700 rounded"></div>
        </div>
        <div className="w-6 h-6 bg-slate-700 rounded-full opacity-50"></div>
      </div>
    </div>
  </div>
);

// ACTIVIDAD 3: UX Y MAPAS
const EvidenceUX = () => (
  <div className="animate-fadeIn mt-4 h-full flex flex-col gap-6">
    {/* Sitemap Visual */}
    <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 flex-1 relative overflow-hidden">
      <div className="absolute top-2 right-3 text-[10px] text-emerald-500 font-bold uppercase border border-emerald-500/30 px-2 rounded">Mapa de Sitio</div>
      <div className="flex flex-col items-center justify-center h-full pt-4">
         <Node label="Inicio (Home)" root />
         <div className="h-6 w-px bg-slate-600"></div>
         <div className="w-48 h-px bg-slate-600 relative">
            <div className="absolute left-0 h-2 w-px bg-slate-600 top-0"></div>
            <div className="absolute right-0 h-2 w-px bg-slate-600 top-0"></div>
            <div className="absolute left-1/2 h-2 w-px bg-slate-600 top-0"></div>
         </div>
         <div className="flex justify-between w-64 pt-2">
           <Node label="Mapa" />
           <Node label="Donar" active />
           <Node label="Perfil" />
         </div>
      </div>
    </div>

    {/* Search Schema Visual */}
    <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 flex-1 relative">
      <div className="absolute top-2 right-3 text-[10px] text-emerald-500 font-bold uppercase border border-emerald-500/30 px-2 rounded">Búsqueda Avanzada</div>
      <div className="flex items-center gap-4 h-full">
         <div className="w-1/3 space-y-2 border-r border-slate-700 pr-4">
            <div className="text-xs text-slate-400 font-bold mb-2">Filtros Facetados</div>
            <div className="h-2 w-full bg-slate-700 rounded"></div>
            <div className="h-2 w-2/3 bg-slate-700 rounded"></div>
            <div className="h-2 w-1/2 bg-slate-700 rounded"></div>
         </div>
         <div className="w-2/3">
            <div className="text-xs text-slate-400 font-bold mb-2">Resultados</div>
            <div className="bg-slate-700/50 p-2 rounded border border-slate-600 mb-2 flex justify-between items-center">
               <span className="text-xs text-slate-300">Panadería...</span>
               <span className="text-[10px] bg-emerald-900 text-emerald-400 px-1 rounded">Ver</span>
            </div>
            <div className="bg-slate-700/50 p-2 rounded border border-slate-600 flex justify-between items-center">
               <span className="text-xs text-slate-300">Frutería...</span>
               <span className="text-[10px] bg-emerald-900 text-emerald-400 px-1 rounded">Ver</span>
            </div>
         </div>
      </div>
    </div>
  </div>
);

// ACTIVIDAD 4: UML
const EvidenceUML = () => (
  <div className="animate-fadeIn mt-4 space-y-6">
    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
      <h3 className="text-purple-400 font-bold mb-6 text-xs uppercase tracking-widest border-b border-purple-500/20 pb-2">
        Interacción de Actores (Casos de Uso)
      </h3>
      <div className="flex justify-between items-center px-4 md:px-12 relative">
         {/* Actor 1 */}
         <div className="flex flex-col items-center gap-2 z-10 group cursor-pointer">
           <div className="w-12 h-12 rounded-full bg-slate-700 border-2 border-purple-500 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.3)]">
             <Users size={20} />
           </div>
           <span className="text-xs font-bold text-purple-200 bg-purple-900/50 px-2 py-0.5 rounded">Restaurante</span>
         </div>

         {/* Líneas de conexión */}
         <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 via-slate-500/20 to-cyan-500/50 mx-4"></div>

         {/* Sistema */}
         <div className="absolute left-1/2 -translate-x-1/2 -top-2 flex flex-col gap-2">
            <div className="bg-slate-900 border border-slate-600 px-4 py-1.5 rounded-full text-xs text-slate-300 shadow-lg text-center w-32">Publicar</div>
            <div className="bg-slate-900 border border-slate-600 px-4 py-1.5 rounded-full text-xs text-slate-300 shadow-lg text-center w-32">Reservar</div>
         </div>

         {/* Actor 2 */}
         <div className="flex flex-col items-center gap-2 z-10 group cursor-pointer">
           <div className="w-12 h-12 rounded-full bg-slate-700 border-2 border-cyan-500 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.3)]">
             <Users size={20} />
           </div>
           <span className="text-xs font-bold text-cyan-200 bg-cyan-900/50 px-2 py-0.5 rounded">Beneficiario</span>
         </div>
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4">
       <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
          <div className="text-pink-400 font-bold text-xs uppercase mb-2">Clase Usuario</div>
          <div className="text-[10px] font-mono text-slate-400 space-y-1">
             <div>+ id: Int</div>
             <div>+ email: String</div>
             <div>+ password: String</div>
             <div className="text-emerald-400 mt-2">login()</div>
          </div>
       </div>
       <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
          <div className="text-pink-400 font-bold text-xs uppercase mb-2">Clase Donación</div>
          <div className="text-[10px] font-mono text-slate-400 space-y-1">
             <div>+ tipo: String</div>
             <div>+ cantidad: Float</div>
             <div>+ caducidad: Date</div>
             <div className="text-emerald-400 mt-2">reservar()</div>
          </div>
       </div>
    </div>
  </div>
);

const Node = ({ label, root, active }) => (
  <div className={`
    px-3 py-1.5 rounded text-[10px] font-bold shadow-md border
    ${root 
      ? 'bg-emerald-600 text-white border-emerald-400' 
      : active 
        ? 'bg-slate-700 text-white border-emerald-500 ring-1 ring-emerald-500/50' 
        : 'bg-slate-800 text-slate-400 border-slate-600'}
  `}>
    {label}
  </div>
);