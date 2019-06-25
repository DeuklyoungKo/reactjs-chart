import React, {Component} from 'react';
import * as d3 from "d3";
import './index.css';

export default class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {}

    }


    init() {

        var width = 420,
            barHeight = 20;

        var x = d3.scaleLinear()
            .range([0, width]);

        var chart = d3.select(".chart")
            .attr("width", width);


        // d3.csv("./data.csv", type, function(error, data) {
        d3.csv("../data/data.csv").then(function (data) {

            data.forEach(function(d) {
                d.value = +d.value; // coerce to number
                return d;
            });

            console.log(data);

            x.domain([0, d3.max(data, function(d) { return d.value; })]);

            chart.attr("height", barHeight * data.length);

            var bar = chart.selectAll("g")
                .data(data)
                .enter().append("g")
                .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

            bar.append("rect")
                .attr("width", function(d) { return x(d.value); })
                .attr("height", barHeight - 1);

            bar.append("text")
                .attr("x", function(d) { return x(d.value) - 3; })
                .attr("y", barHeight / 2)
                .attr("dy", ".35em")
                .text(function(d) { return d.value; });
        });

        function type(d) {
            d.value = +d.value; // coerce to number
            return d;
        }

    }

        componentDidMount()
        {
            this.init();
        }


        render()
        {

            return (
                <div>
                    <svg className="chart"></svg>
                </div>
            )

        }
    }
