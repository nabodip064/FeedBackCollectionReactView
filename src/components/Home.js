import React from 'react';
import UpArrow from "./UpArrow";
import LowArray from "./LowArray";

export default function Home() {
    const table1 = [
        {part: "comment 1", admin: "user 1", date: "01/02/2019"},
        {part: "comment 1", admin: "user 1", date: "01/02/2019"},
        {part: "comment 1", admin: "user 1", date: "01/02/2019"},
    ];
    const table2 = [
        {part: "comment 1", admin: "user 1", date: "01/02/2019"},
        {part: "comment 1", admin: "user 1", date: "01/02/2019"},
        {part: "comment 1", admin: "user 1", date: "01/02/2019"},
    ];
    const table3 = [
        {part: "comment 1", admin: "user 1", date: "01/02/2019"},
        {part: "comment 1", admin: "user 1", date: "01/02/2019"},
        {part: "comment 1", admin: "user 1", date: "01/02/2019"},
    ];

    return (
        <div className="container m-5 px-5">
            <div className="row">
                <div className="col-8"></div>
                <div className="col-4">
                    <div class="form-group">
                        <input type="text" class="form-control" id="serach" placeholder="Search post"></input>
                    </div>
                </div>
            </div>

            <div className="mt-5 mb-3">
                <table class="table">
                    <thead>
                        <tr class="table-primary">
                            <th scope="col" colspan="2">Post1</th>
                            <th scope="col">Admin</th>
                            <th scope="col">01/02/2019</th>
                            <th scope="col">3 Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table1.map((table, key) => <tr>
                                <th colspan="2">{table.part}</th>
                                <td>{table.admin}</td>
                                <td>{table.date}</td>
                                <td className="row">
                                    <div className="col-6">
                                            <UpArrow></UpArrow>
                                    </div>
                                    <div className="col-6">
                                            <LowArray></LowArray>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <table class="table">
                    <thead>
                        <tr class="table-primary">
                            <th scope="col" colspan="2">Post1</th>
                            <th scope="col">Admin</th>
                            <th scope="col">01/02/2019</th>
                            <th scope="col" >3 Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table2.map((table, key) => <tr>
                                <th colspan="2">{table.part}</th>
                                <td>{table.admin}</td>
                                <td>{table.date}</td>
                                <td className="row">
                                    <div className="col-6">
                                            <UpArrow></UpArrow>
                                    </div>
                                    <div className="col-6">
                                            <LowArray></LowArray>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <table class="table">
                    <thead>
                        <tr class="table-primary">
                            <th scope="col" colspan="2">Post1</th>
                            <th scope="col">Admin</th>
                            <th scope="col">01/02/2019</th>
                            <th scope="col" >3 Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table3.map((table, key) => <tr>
                                <th colspan="2">{table.part}</th>
                                <td>{table.admin}</td>
                                <td>{table.date}</td>
                                <td className="row">
                                    <div className="col-6">
                                            <UpArrow></UpArrow>
                                    </div>
                                    <div className="col-6">
                                            <LowArray></LowArray>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="paginatiion mt-3 d-flex">
                <nav aria-label="...">
                    <ul class="pagination">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item active" aria-current="page">
                        <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
                <div className="mt-2 mx-5">Total 100</div>
            </div>
            
        </div>
    )
}
