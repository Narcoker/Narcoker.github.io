import { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import styles from '../../styles.module.scss';

class Right extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: null,
            hasModal: false,
        };
    }

    controlModal = (index) => {
        this.setState({
            index: index,
            hasModal: !this.state.hasModal,
        });
    };

    render() {
        const content = this.props.content;
        const desc = content.desc.map((desc, index) => {
            if (desc.sub.length) {
                const subs = (
                    <ul>
                        {desc.sub.map((sub, index) => (
                            <li key={index}>{sub}</li>
                        ))}
                    </ul>
                );
                return (
                    <li key={index} className={styles.foldable}>
                        <details open>
                            <summary>{desc.main}</summary>
                            {subs}
                        </details>
                    </li>
                );
            }
            return <li key={index}>{desc.main}</li>;
        });
        const keywords = content.keywords.map((keyword, index) => <span key={index}>{keyword}</span>);
        const images = content.images.map((image, index) => (
            <img
                key={index}
                onClick={() => this.controlModal(index)}
                src={`${process.env.PUBLIC_URL}/${content.folder}/${image}`}
                alt="alt_image"
            />
        ));
        if (content.videos === undefined) console.log('content', content.title);
        const pdfs = content.pdfs.map((pdf, index) => {
            const thumbnail = (
                <img src={`${process.env.PUBLIC_URL}/${content.folder}/${pdf.thumbnail}`} alt="alt_pdf" />
            );
            if (window.location.hostname === 'localhost') {
                return (
                    <Link key={index} to={`pdfviewer/${content.folder}/${pdf.pdf}`} target="_blank">
                        {thumbnail}
                    </Link>
                );
            }
            return (
                <Link key={index} to={`*/pdfviewer/${content.folder}/${pdf.pdf}`} target="_blank">
                    {thumbnail}
                </Link>
            );
        });

        return (
            <div className={styles.Right} id={content.title}>
                <h4>{content.title}</h4>
                {content.subtitle.split('\n\n').map((line, index) => (
                    <h5 key={index}>
                        {line}
                        <br />
                    </h5>
                ))}
                <div className={styles.desc}>
                    <ul>{desc}</ul>
                </div>
                <div className={styles.keywords}>{keywords}</div>
                <div className={styles.images}>{images}</div>
                {content.images.length > 0 && (
                    <>
                        <span className={styles.icon}>🌐 </span>
                        <a
                            className={styles.link}
                            href={`https://narcoker.github.io`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            PDF로 보고 계신 경우, 위 이미지는 배포된 사이트에서 클릭하시면 확대할 수 있습니다.
                        </a>
                    </>
                )}
                <div className={styles.pdfs}>{pdfs}</div>
                {this.state.hasModal && (
                    <Modal
                        title={content.title}
                        folder={content.folder}
                        images={content.images}
                        index={this.state.index}
                        close={this.controlModal}
                    ></Modal>
                )}
            </div>
        );
    }
}

export default Right;
