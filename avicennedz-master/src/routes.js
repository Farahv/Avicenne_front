
import Index from "./ScreensMedecin/Dashboard.js"
import Mess from "./ScreensMedecin/FormMedicalDoc.js"
import PatientsList from "./ScreensMedecin/ListePatients";
import MedicalDoc from './ScreensMedecin/DossierMedical';
import RendezVous from './ScreensMedecin/RendezVous';
import Programme from './ScreensMedecin/Programme';
import AjouterAssistant from "./ScreensMedecin/AjouterAssistant.js";



var routes = [
  {
    path: "/index",
    name: "Tableau de bord",
    icon: "Assets/Img/icons8-dashboard.png",
    component: <Index />,
    layout: "/medecin",
  },
  {
    path: "/message",
    name: "Rendez-vous",
    icon: "Assets/Img/schedule.png",
    component:<RendezVous />,
    layout: "/medecin",
  },
  {
    path: "/patientsList",
    name: "Dossiers Médicaux",
    icon:"Assets/Img/file.png",
    component:<PatientsList />,
    layout: "/medecin",
  },
  {
    path: "/medicalDoc",
    name: "Messagerie",
    icon: "Assets/Img/comments.png",
    component:<MedicalDoc />,
    layout: "/medecin",
  }
];

var routesSecondary = [
  {
    path: "/monProgramme",
    name: "Mon Programme",
    icon: "Assets/Img/icons8-calendrier.png",
    component:<Programme />,
    layout: "/medecin",
  },
  {
    path: "/ajouter-assistant",
    name: "Ajouter un assistant",
    icon: "Assets/Img/icons8-calendrier.png",
    component:<AjouterAssistant />,
    layout: "/medecin",
  },
  {
    path: "/index",
    name: "Paramètres",
    icon: "Assets/Img/reglage.png",
    component:<Index />,
    layout: "/medecin",
  }
];
export default routes;
export {routesSecondary};