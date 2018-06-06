import React, { Component } from 'react';
import { connect } from 'react-redux';

class TextList extends Component {
    renderText(textData) {
        const fieldText = textData.text + Math.random().toString();  // generates unique key

        return (
            <tr key={fieldText}>
                <td>
                    {textData.text}
                </td>
                <td>
                    {textData.language}
                </td>
                <td>
                    {textData.confidence}
                </td>
                <td>
                    {textData.status}
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Text</th>
                    <th>Language</th>
                    <th>Confidence</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {this.props.text.map(this.renderText)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ text }) {
    return { text };
}

export default connect(mapStateToProps)(TextList);