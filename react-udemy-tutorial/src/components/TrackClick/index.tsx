import React from 'react';
import { TrackClickProps, TrackClickState } from './interface';

class TrackClick extends React.Component<TrackClickProps, TrackClickState> {
    constructor(props: TrackClickProps) {
        super(props);

        this.state = {
            click: 0,
        }
    }

    handleClick = () => {
        this.setState({
            click: this.state.click + 1
        });
    }

    render() {
        const {renderProps} = this.props;
        return (
            <div onClick={this.handleClick}>
                {renderProps(this.state.click)}
            </div>
        )
    }
}

export default TrackClick;