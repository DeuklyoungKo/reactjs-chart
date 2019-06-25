import React, {Component} from 'react';
import * as d3 from "d3";
import './index.css';

export default class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {}

    }


    init() {

        var margin = {top: 20, right: 30, bottom: 30, left: 40},
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;


        var x = d3.scaleBand()
            .domain(["A", "B", "C", "D", "E", "F"])
            .rangeRound([0, width])
            .padding(0.1);

        var y = d3.scaleLinear()
            .range([height, 0]);

        var xAxis = d3.axisBottom(x);

        var yAxis = d3.axisLeft(y);

        var chart = d3.select(".chart")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // d3.csv("data.tsv", type, function(error, data) {
        d3.csv("../data/data.csv").then(function (data) {
            data.forEach(function (d) {
                d.value = +d.value; // coerce to number
                return d;
            });
            x.domain(data.map(function (d) {
                return d.name;
            }));
            y.domain([0, d3.max(data, function (d) {
                return d.value;
            })]);

            chart.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            chart.append("g")
                .attr("class", "y axis")
                .call(yAxis);

            chart.selectAll(".bar")
                .data(data)
                .enter().append("rect")
                .attr("class", "bar")
                .attr("x", function (d) {
                    return x(d.name);
                })
                .attr("y", function (d) {
                    return y(d.value);
                })
                .attr("height", function (d) {
                    return height - y(d.value);
                })
                .attr("width", x);

        })
    }

    componentDidMount() {
        this.init();
    }


    render() {

        return (
            <div>
                <svg className="chart"></svg>
            </div>
        )

    }
}
