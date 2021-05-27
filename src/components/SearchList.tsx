import React from 'react';

interface SearchListProps {
    data?: {}
    error?: string | null
    loading?: boolean
}

const SearchList = ({data, error, loading}: SearchListProps) => {
    // @ts-ignore

    return (
        <section className="py-7 px-5">
            <div className="row">
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {/*@ts-ignore*/}
                {!error && !loading && data.map((repo) => {
                    return (
                        <div className="col-lg-4 mb-lg-0 mb-4 p-4" key={repo.name}>
                            <div className="card">
                                <div className="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                                    <a href="#" className="d-block blur-shadow-image">
                                        <img src="https://pbs.twimg.com/media/ETPwXGaXsAA2qTD.png" className="img-fluid border-radius-md"
                                             alt={repo.name}/>
                                    </a>
                                    {/*    <div className="colored-shadow"*/}
                                    {/*         style="background-image: url(&quot;../../assets/img/annie-spratt.jpg&quot;);"></div>*/}
                                </div>
                                <div className="card-body">
                                <span
                                    className="text-gradient text-warning text-uppercase text-xs font-weight-bold">{repo.scope}</span>
                                    <a href="#" className="text-darker card-title mt-3 h5 d-block">
                                        Homepage: {repo.homepage}
                                    </a>
                                    <p className="card-description mb-4">
                                        {repo.description}
                                    </p>
                                    <div className="author align-items-center">
                                        <img src=""
                                             alt={repo.publisher.username} className="avatar shadow"/>
                                        <div className="name ps-2">
                                            <span>{repo.publisher.email}</span>
                                            <div className="stats">
                                                <small>{repo.date}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </section>
    );
};

export default SearchList;
