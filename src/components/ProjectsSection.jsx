import { useState } from "react";
import Modal from "react-modal";
import { ArrowRight, ExternalLink, Github, PlayCircle } from "lucide-react";
import morningNewsImg from "@/assets/morning-news.png";

// Important pour react-modal
Modal.setAppElement("#root"); // Si tu es dans un projet Next.js, mets "#__next"

const projects = [
  {
    id: 1,
    title: "Morning News",
    description:
      "Une application web qui va vous permettre d’afficher les news récentes du journal Tech Crunch. Vous pourrez également sauvegarder vos articles préférés et les retrouver en vous connectant à votre compte.",
    image: morningNewsImg,
    tags: [
      "JavaScript",
      "Next.js",
      "React",
      "Redux",
      "CSS Modules",
      "API REST",
    ],
    githubUrl: "https://github.com/KevinK693/morningnews-backend",
    videoUrl: "https://www.youtube.com/embed/8zAvRoDHgXA",
  },
  {
    id: 2,
    title: "Locapic",
    description:
      "Une application mobile permettant de géolocaliser un utilisateur en matérialisant ses déplacements sur une carte interactive et en offrant la possibilité d’y ajouter des points d'intérêt et de les retrouver simplement.",
    image: "/public/projects/IMG_1116.png",
    tags: ["JavaScript", "React Native", "Expo", "Redux", "API REST"],
    githubUrl: "https://github.com/KevinK693/locapic-backend",
    videoUrl: "https://www.youtube.com/embed/2iO3B0x_NT4",

  },
  {
    id: 3,
    title: "True Story",
    description:
      "Un jeu de création narratif collaboratif. Le but du jeu est de créer une histoire où chaque joueur peut proposer la suite des scènes générées par l'IA. Chaque joueur va voter pour sa proposition préférée et l'IA prend le relais pour générer la scène suivante.",
    image: "/public/projects/IMG_1426.PNG",
    tags: ["JavaScript", "React Native", "Expo", "Node.js", "IA"],
    githubUrl:
      "https://github.com/KevinK693/true-story-backend/tree/main/backend",
    videoUrl: "https://www.youtube.com/embed/fWbUeYnWmrU",
  },
];

export const ProjectsSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState(null);

  const openVideoModal = (url) => {
    setCurrentVideoUrl(url);
    setIsVideoOpen(true);
  };

  const closeVideoModal = () => {
    setCurrentVideoUrl(null);
    setIsVideoOpen(false);
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container text-foreground mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Mes <span className="text-primary"> Projets </span> récents
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Voici quelques-uns de mes premiers projets. Chaque réalisation m’a
          permis d’apprendre, de progresser et d’affiner ma manière de concevoir
          des interfaces modernes, fonctionnelles et centrées sur l’utilisateur.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group text-foreground bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full ${
                    project.id === 2 || project.id === 3
                      ? "object-contain bg-black"
                      : "object-cover"
                  } transition-transform duration-500`}
                />
              </div>

              {/* Contenu */}
              <div className="p-6 flex flex-col flex-1">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Boutons toujours en bas */}
                <div className="flex items-center space-x-3 mt-auto pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                  {project.videoUrl && (
                    <button
                      onClick={() => openVideoModal(project.videoUrl)}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      title="Voir la démo"
                    >
                      <PlayCircle size={20} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/KevinK693"
          >
            Consulter mon GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* MODAL VIDEO */}
      <Modal
        isOpen={isVideoOpen}
        onRequestClose={closeVideoModal}
        contentLabel="Demo vidéo"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            maxWidth: "90%",
            maxHeight: "90%",
            padding: 0,
            border: "none",
            background: "transparent",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 1000,
          },
        }}
      >
        <div className="relative">
          <iframe
            width="100%"
            height="500"
            src={currentVideoUrl}
            title="Demo vidéo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />

          <button
            onClick={closeVideoModal}
            className="absolute top-2 right-2 text-white bg-black bg-opacity-60 rounded px-2 py-1"
          >
            ✖
          </button>
        </div>
      </Modal>
    </section>
  );
};
