import React, { Component }  from 'react';
import axios from 'axios';


const api=axios.create({
    baseURL: `http://localhost:56426/api/FeedBackCollection/`
});

class Home extends Component {

    state = {
        collections: [],
        table1: [
            {part: "comment 1", admin: "user 1", date: "01/02/2019"},
            {part: "comment 1", admin: "user 1", date: "01/02/2019"},
            {part: "comment 1", admin: "user 1", date: "01/02/2019"},
        ],
        table2: [
            {part: "comment 1", admin: "user 1", date: "01/02/2019"},
            {part: "comment 1", admin: "user 1", date: "01/02/2019"},
            {part: "comment 1", admin: "user 1", date: "01/02/2019"},
        ],
        table3: [
            {part: "comment 1", admin: "user 1", date: "01/02/2019"},
            {part: "comment 1", admin: "user 1", date: "01/02/2019"},
            {part: "comment 1", admin: "user 1", date: "01/02/2019"},
        ]
    };

    constructor() {
        super();
        this.getcollections();
    }

    getcollections = async ()=>{
        let data = await api.get('p').then(({data}) => data);
        this.setState({collections: data});
    }
    

    render() { 
        return (
            <div className="container m-5 px-5">
                
                <div className="row">
                    <div className="col-8"></div>
                    <div className="col-4">
                        <div className="form-group">
                            <input type="text" className="form-control" id="serach" placeholder="Search post"></input>
                        </div>
                    </div>
                </div>

                <div className="mt-5 mb-3">
                    <table className="table">
                        {this.state.collections.map((collection, index) =>
                            <>
                                <thead>
                                    <tr className="table-primary">
                                        <th scope="col" colSpan="2">{collection.post}</th>
                                        <th scope="col">{collection.userID}</th>
                                        <th scope="col">{collection.createDate}</th>
                                        <th scope="col">{collection.totalComment} Comments</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {collection.votList.map((comment, index2) => <tr>
                                            <th colSpan="2">{comment.comment}</th>
                                            <td>{comment.userID}</td>
                                            <td>{comment.commentDate}</td>
                                            <td className="row">
                                                <div className="col-6">
                                                    <td><i className="fa fa-arrow-up mx-2 text-success" aria-hidden="true"></i> {comment.aggreCount}</td>
                                                </div>
                                                <div className="col-6">
                                                    <td><i className="fa fa-arrow-down mx-2 text-danger" aria-hidden="true"></i> {comment.disAggreCount}</td>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                                </>
                        )}
                        
                    </table>
                </div>

                <div className="paginatiion mt-3 d-flex">
                    <nav aria-label="...">
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active" aria-current="page">
                            <a className="page-link" href="#">2</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="mt-2 mx-5">Total 100</div>
                </div>            
            </div>
        )
    }
}


export default Home;
