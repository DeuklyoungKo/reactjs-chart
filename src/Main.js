import React, {Component} from 'react';
import ListChartLibaray from './chart/ListChartLibrary';

export default class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chartLibraryId: '',
            _content: ''
        }

        this.listOfChartLibrary = [
            { id: 'chartjs', text: 'chart.js', name: 'chartjs'},
            { id: 'test', text: 'chart.js1', name: 'test'}
        ]

        this.handleOnClickLink = this.handleOnClickLink.bind(this);

    }

    getContent() {

        let _content = null;

        switch(this.state.chartLibraryId) {
            case 'chartjs':
                _content = "todo:chartjs content"
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