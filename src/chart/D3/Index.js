import React, {Component} from 'react';
import * as d3 from "d3";
import './index.css';

export default class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {}

    }


    componentDidMount() {

        var data = [30, 86, 168, 281, 303, 365];

        d3.select(".chart")
            .selectAll("div")
            .data(data)
            .enter()
            .append("div")
            .style("width", function(d) { return d * 2 + "px"; })
            .text(function(d) { return '$ ' + d; });
    }



    render() {



        return (
            <div className="chart">

            </div>

        )

    }
}
