import React, {Component} from 'react';
import ListChartLibaray from './chart/ListChartLibrary';
import ChartjsIndex from './chart/chartjs/ChartjsIndex';

export default class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chartLibraryId: '',
            _content: ''
        }

        this.listOfChartLibrary = [
            { id: 'chartjs', text: 'chart.js', name: 'chartjs', link: '/chartjs.html'},
            { id: 'test', text: 'chart.js1', name: 'test', link: '/chartjs.html'}
        ]

        this.handleOnClickLink = this.handleOnClickLink.bind(this);

    }

    getContent() {

        let _content = null;

        switch(this.state.chartLibraryId) {
            case 'chartjs':
                _content = <ChartjsIndex />;
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