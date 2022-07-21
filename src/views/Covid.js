import {useState, useEffect} from "react";
import useFetch from "../customize/fetch";
import moment from "moment";


const Covid = () => {
    const today = new Date(new Date().setHours(0, 0, 0));
    const priorDate = moment().subtract(30, 'days');

    const {
        data: dataCovid,
        isLoading,
        isError
    } = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate.toISOString()}&to=${today.toISOString()}`)

    return (
        <>
            <h3>Covid tracking Viet Nam</h3>
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Active</th>
                    <th>Confirmed</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                </tr>
                </thead>
                <tbody>

                {isError === false && isLoading === false && dataCovid && dataCovid.length > 0 && dataCovid.map((item, index) => {
                    return (
                        <tr key={index}>
                            <th>{item.Date}</th>
                            <th>{item.Active}</th>
                            <th>{item.Confirmed}</th>
                            <th>{item.Deaths}</th>
                            <th>{item.Recovered}</th>
                        </tr>
                    )
                })}
                </tbody>
                {isLoading === true
                    && <tr>
                        <th colSpan={5} style={{textAlign: 'center'}}>
                            Loading....
                        </th>
                    </tr>
                }
                {isError === false &&
                    <tr>
                        <th colSpan={5} style={{textAlign: 'center'}}>
                            Something Wrong....
                        </th>
                    </tr>
                }
            </table>
        </>
    )
}
export default Covid