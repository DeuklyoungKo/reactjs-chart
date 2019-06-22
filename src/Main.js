import React, {Component} from 'react';
import ListChartLibaray from './chart/ListChartLibrary';
import ChartjsIndex from './chart/chartjs/ChartjsIndex';
import ReactVisIndex from './chart/ReactVis/Index';

export default class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chartLibraryId: 'ReactVis',
            _content: ''
        }

        this.listOfChartLibrary = [
            { id: 'ChartJs', text: 'Chart.js', name: 'chartjs', link: '#'},
            { id: 'ReactVis', text: 'React-Vis', name: 'React-Vis', link: '#'},
            { id: 'test', text: 'test', name: 'test', link: '/test.html'}
        ]

        this.handleOnClickLink = this.handleOnClickLink.bind(this);

    }

    getContent() {

        let _content = null;

        switch(this.state.chartLibraryId) {
            case 'ChartJs':
                _content = <ChartjsIndex />;
                break;

            case 'ReactVis':
                _content = <ReactVisIndex />;
                break;

            case 'test':
                _content = "todo:test content"
                break;

            default:
                _content = <p>select Chart Library, Please!</p>
        }

        return _content;
    }


    handleOnClickLink(e, chartId) {
        e.preventDefault();

        this.setState({
            chartLibraryId: chartId
        })
    }


    render() {

        const listOfChartLibrary = this.listOfChartLibrary;
        const handleOnClickLink = this.handleOnClickLink;

        console.log(listOfChartLibrary);

        return (
            <div>
                <ListChartLibaray
                    {...this.props}
                    {...this.state}
                    listOfChartLibrary={listOfChartLibrary}
                    handleOnClickLink={handleOnClickLink}
                />
                {this.getContent()}
            </div>
        )
    }
}