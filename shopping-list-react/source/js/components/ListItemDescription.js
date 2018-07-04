var React = require('react');

var ListItemDescription = function (props) {
    return (
      <div className="panel-body">
        {props.description}
        <br />
        <h6>Availability <span className="label label-success">{props.availability}</span></h6>
      </div>
    );
};

module.exports = ListItemDescription;