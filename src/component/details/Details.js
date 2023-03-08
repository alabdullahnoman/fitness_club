import React from 'react';

const Details = () => {
    return (
        <div>
            <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      How does react work
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">React uses the key to match the virtual DOM node with the actual DOM node.React uses a diffing algorithm to find the changed element. The diffing algorithm is a clever way to figure out which element has changed.React updates the actual DOM by making changes to the DOM nodes and only updates the changed DOM nodes</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        State VS Props
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">props are passed via component properties, they're not reactive. State are variables that react will react , updating the UI when values changes.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Use of useeffect without data loading 
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Running on state change: validating input field <br/>
            Running on state change: live filtering <br />
            Running on state change: trigger animation on new array value <br />
            Running on props change: update paragraph list on fetched API data update <br />
            Running on props change: updating fetched API data to get BTC updated price</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;