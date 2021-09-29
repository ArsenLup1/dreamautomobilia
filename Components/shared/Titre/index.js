import { TitreStc } from "./Titre.stc"

const Titre =(props) =>{
    const { texte, color, fontWeight } = props;
    return <TitreStc color={color} fontWeight={fontWeight}>{texte}</TitreStc>
};

export default Titre;