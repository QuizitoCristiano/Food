export const SectionCarde = ({
    text,
    titulodapagina,
    nomedocards,
    data_aos,
}) => {
    return (<>
        <div className="container-cards-blue" data_aos={data_aos}>
            <h2 className="school-banner-text">{text}</h2>
            <p className="titulodapagina">{titulodapagina}
            </p>
            <p className="card_name">{nomedocards}</p>
        </div>
    </>)
}