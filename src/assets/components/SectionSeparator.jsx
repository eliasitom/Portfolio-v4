import "../stylesheet/SectionSeparator.css";

function SectionSeparator({title}) {

    return (
        <div className="section-separator">
            <div className="section-separator-line"/>
            <h2>{title}</h2>
            <div className="section-separator-line"/>
        </div>
    );
}


export default SectionSeparator;