import React, {useState} from 'react'
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import SearchList from "./SearchList";


const Input: React.FunctionComponent = () => {
    const [term, setTerm] = useState('')
    const { searchRepoAction } = useActions();
    const {data, error, loading} = useTypedSelector((state) => state.packages)

    console.log(data)
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepoAction(term)
    }

    const onChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
        return setTerm(event.target.value)
    }
    return (
        <section className="py-7">
            <div className="container">
                <div className="row justify-space-between py-2">
                    <div className="col-lg-4 mx-auto">
                        <form onSubmit={onSubmit}>
                            <input className="form-control" value={term} onChange={onChange}/>
                        </form>
                    </div>
                </div>
            </div>
            <SearchList data={data} error={error} loading={loading}/>
            {/*{error && <h2>{error}</h2>}*/}
            {/*{loading && <h1>Loading...</h1>}*/}
            {/*{!error && !loading && data.map((name) => {*/}
            {/*    return <div key={name}>{name}</div>*/}
            {/*})}*/}
        </section>
    );
};

export default Input;
