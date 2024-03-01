function Footer ({goToPreviousPage, goToNextPage, currentPage}) {
    return (
        <div>
            <h1>Footer</h1>
            <div className="page-navigation">
                <div className="row">
                    <div className="col">
                        <button onClick={goToPreviousPage}>Previous</button>
                    </div>
                    <div className="col">
                        <p>{currentPage}</p>
                    </div>
                    <div className="col">
                        <button onClick={goToNextPage}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer