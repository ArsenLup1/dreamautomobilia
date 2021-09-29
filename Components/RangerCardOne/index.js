import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RangerCardOneStc from "./rangerCardOne.stc";
import { CardImg } from 'reactstrap';

const RangerCardImage = () => {

  return (
      <RangerCardOneStc>
          <div className="container-fluid">
<div className="row p-2">
    <div className="col px-2">
        <div className="card bg-secondary m-2 p-3 mt-5 w-75 h-80 maarif">
        <CardImg top width="100%" src="/img/2.png" alt="Card image cap" />
            <div className="card-body">
                <h4 className="card-title text-center">Title</h4>
                <p className="card-text m-3">Nullam id dolor id nibh ultricies vehicula ut id 
                                            elit.
                </p>
                <div className="text-center">
                    <button class="btn btn-primary" type="button">Button</button>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md">
        <div className="card bg-danger m-2 mt-5 p-3 w-75 h-80 saafir">
        <CardImg top width="100%" src="/img/3.jpg" alt="Card image cap" />
            <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <div className="text-center">
                    <button class="btn btn-info" type="button">Button</button>
                </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card bg-primary m-2 mt-5 p-3 w-75 h-80 bernosi">
        <CardImg top width="100%" src="/img/720.jpg" alt="Card image cap" />
            <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <div className="text-center">
                    <button class="btn btn-secondary" type="button">Button</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</RangerCardOneStc>
    );
};

export default RangerCardImage;