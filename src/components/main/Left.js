import { Component } from 'react';
import styles from '../../styles.module.scss';
import { AiOutlineLink } from 'react-icons/ai';
class Left extends Component {
    render() {
        const content = this.props.content;
        console.log(content.link);
        return (
            <div className={styles.Left}>
                <h4>{content.period}</h4>
                {content.link.map((data, index) => (
                    <div>
                        <span className={styles.icon}>🌐 </span>
                        <a
                            className={styles.block}
                            key={index}
                            href={data.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {data.text}
                        </a>
                    </div>
                ))}
                <AiOutlineLink />
            </div>
        );
    }
}

export default Left;
