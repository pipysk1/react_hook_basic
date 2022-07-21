import {useState, useEffect} from "react";
import axios from "axios";
import moment from "moment";

const Covid = () => {

    const [dataCovid, setDataCovid] = useState([]);
    useEffect(async () => {
        
        let res = await axios.get(`https://api.covid19api.com/country/vietnam?from=2022-03-01T00:00:00&to=2022-04-01T00:00:00`)
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0) {
            data.map(item => {
                item.Date = moment(item.Date).format('DD/MM/YYYY')
                return item
            })
        }
        setDataCovid(data)
    }, []);

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
                {dataCovid && dataCovid.length > 0 && dataCovid.map((item, index) => {
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
            </table>
        </>
    )
}
export default Covid