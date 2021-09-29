import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Badge } from "reactstrap";
import BoutonStc from "./Bouton.stc";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsChevronRight } from "react-icons/bs";

import { FaGraduationCap } from "react-icons/fa";

const Bouton = ({texte}) => {

  return (
    <BoutonStc className="">
      {texte}

      <FaGraduationCap />
    </BoutonStc>
  );
};

export default Bouton;