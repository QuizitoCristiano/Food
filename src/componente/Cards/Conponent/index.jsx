export const Card = ({
    photo,
    title,
    description,
    data_aos,
}) => {
    return (<>
        <div className="gardestext">
            <div className="container-box" data-aos={data_aos}
                data-aos-anchor-placement="center-bottom">
                <div className="info-imagens">
                    <img src={photo} alt="" />
                </div>
                <div className="container-title">
                    <div className="wrapper-info-text">
                        <h2>{title}</h2>
                        <p>
                            {
                                description
                            }
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </>)
}