import React, { useState, useEffect } from 'react';
import { model } from "../../table_models/log";
import * as api from "../../services/log";
import * as apiAccou from "../../services/account";
import { toast } from 'react-toastify';
import PaginationPage from "../../share/pagination";
import { filterObject, formatDateToStr, formatInputToDate } from '../../constants/common';
import { Filter } from "../../models/parameters";
import { showLoad, hideLoad } from "../../constants/loading";
import storage from '../../../uitls/storage';
export default function ADLogMain() {

    const [dataTable, setDataTable] = useState([]);
    const [totalTtems, setTotalTtems] = useState(0);
    const [filter, setFilter] = useState({ ...Filter });
    useEffect(() => {
        analysis();
    }, [])

    const handleChange = (e, field) => {
        let filterT = { ...filter };
        filterT[field] = e.target.value;
        setFilter(filterT);
    }
    const analysis = (filterT = filter) => {
        showLoad();
        const obj = { ...filterObject, ...filterT };
        if (obj.from_date)
            obj.from_date = formatInputToDate(obj.from_date);
        if (obj.to_date)
            obj.to_date = formatInputToDate(obj.to_date);
        api.analysis(obj).then(res => {
            hideLoad();
            if (res.data.status === 200) {
                setDataTable(res.data.result.items);
                setTotalTtems(res.data.result.total_items);
            } else
                toast.warning(res.data.message);
        }).catch((error) => {
            hideLoad();
            toast.warning("Tìm kiếm thất bại.");
        });
    }
    const pageChange = (e) => {
        if (filterObject.page_number !== e) {
            filterObject.page_number = e;
            analysis();
        }
    }

    const render_td = (cell, ci, row, ri) => {
        if (cell.field === 'date') {
            return <td key={ci}>{formatDateToStr(row[cell.field])} </td>
        }
        if (['timesInDate', 'timesInRushHour'].includes(cell.field)) {
            return <td key={ci} className="alignNum">{row[cell.field]}</td>
        }
        if (cell.field === 'rushHour') {
            return <td key={ci}>{row[cell.field] < 12 ? row[cell.field] + ' AM' : row[cell.field] + ' PM'} </td>
        }
        return cell.field ? <td key={ci}>{row[cell.field]}</td> : null;
    }

    const cancelAnalysis = () => {
        setFilter({ ...Filter });
        analysis({ ...Filter });
    }
    const exportDB = () => {
        showLoad();
        apiAccou.exportDB().then(res => {
            hideLoad();
            if (res.status === 200) {
                const date = new Date();
                const time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${date.getTime()}`;
                if (navigator.msSaveBlob) {
                    toast.success("Sao chép dữ liệu thành công.");
                    return navigator.msSaveBlob(res.data, `DataUSmall-${time}`);
                } else {
                    const link = document.createElement('a');
                    const blob = new Blob([res.data], {
                        type: 'application/zip'
                    });
                    link.href = window.URL.createObjectURL(blob);
                    link.download = 'DataUSmall-' + time;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(blob);
                    toast.success("Sao chép dữ liệu thành công.");
                }
            } else
                toast.warning(res.data.message);
        }).catch((error) => {
            hideLoad();
            toast.warning("Sao chép dữ liệu thất bại.");
        });
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 mb-3">
                    <input type="date" className="form-control" name="from_date" id="from_date"
                        value={filter.from_date} onChange={(e) => handleChange(e, 'from_date')} placeholder="dd-mm-yyyy" />
                </div>
                <div className="col-lg-3 mb-3">
                    <input type="date" className="form-control" name="to_date" id="to_date"
                        value={filter.to_date} onChange={(e) => handleChange(e, 'to_date')} placeholder="dd-mm-yyyy" />
                </div>
                <div className="col-lg-4 mb-3 d-flex justify-content-end mb-3">
                    <div className="btn-group btn-method" role="group" aria-label="Basic example">
                        <button className="btn btn-success " onClick={() => analysis()}><i className="fas fa-search"></i> Tìm</button>
                        <button className="btn btn-danger" onClick={cancelAnalysis}><i className="fas fa-window-close"></i> Hủy</button>
                        {
                            storage.isLoggednIn() && storage.getAccount().scope_access === 'ADMIN' &&
                            <button className="btn btn-warning" onClick={exportDB}><i className="fas fa-file-export"></i> Export Data</button>
                        }
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 table-responsive mb-4">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                {
                                    model.map((e, i) =>
                                        <th key={i}> {e.text} </th>
                                    )
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataTable.map((row, ri) =>
                                    <tr key={ri} >
                                        {model.map((cell, ci) =>
                                            ci === 0 ?
                                                <td key={ci}>{ri + 1 + (filterObject.page_number - 1) * filterObject.page_size}</td> :
                                                render_td(cell, ci, row, ri)
                                        )}
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <PaginationPage totalElement={totalTtems} changePage={(e) => pageChange(e)} />
            </div>
        </div>
    );
}

