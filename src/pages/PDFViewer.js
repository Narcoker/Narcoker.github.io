import { Component } from 'react';

class PDFViewer extends Component {
    render() {
        const pdf = `${process.env.PUBLIC_URL}/${this.props.match.params.type}/${this.props.match.params.folder}/${this.props.match.params.pdf}`;
        return (
            <div>
                <embed src={pdf} type="application/pdf" width={'100%'} height={'800px'} />
            </div>
        );
    }
}

export default PDFViewer;
