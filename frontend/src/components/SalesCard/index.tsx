import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <>
            <div className="dsmeta-card">
                <h2 className="dsmeta-sales-tittle">Vendas</h2>
                <div>
                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={new Date()}
                            onChange={(date: Date) => { }}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>

                    <div className="dsmeta-form-control-container">
                        <DatePicker
                            selected={new Date()}
                            onChange={(date: Date) => { }}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>

                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td className="show992">#251</td>
                                <td className="show576">05/06/2022</td>
                                <td>João</td>
                                <td className="show992">29</td>
                                <td className="show992">15</td>
                                <td>R$ 55.300,00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#252</td>
                                <td className="show576">22/06/2022</td>
                                <td>Marcos</td>
                                <td className="show992">23</td>
                                <td className="show992">11</td>
                                <td>R$ 47.200,00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#253</td>
                                <td className="show576">11/06/2022</td>
                                <td>Michelle</td>
                                <td className="show992">37</td>
                                <td className="show992">21</td>
                                <td>R$ 62.575,50</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#254</td>
                                <td className="show576">20/06/2022</td>
                                <td>Alexandre</td>
                                <td className="show992">32</td>
                                <td className="show992">18</td>
                                <td>R$ 57.825,00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#255</td>
                                <td className="show576">01/06/2022</td>
                                <td>Larissa</td>
                                <td className="show992">40</td>
                                <td className="show992">24</td>
                                <td>R$ 69.587,50</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#256</td>
                                <td className="show576">03/06/2022</td>
                                <td>Armando</td>
                                <td className="show992">28</td>
                                <td className="show992">15</td>
                                <td>R$ 39.574,75</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#257</td>
                                <td className="show576">19/06/2022</td>
                                <td>Emerson</td>
                                <td className="show992">46</td>
                                <td className="show992">29</td>
                                <td>R$ 81.255,00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#258</td>
                                <td className="show576">12/06/2022</td>
                                <td>Márcia</td>
                                <td className="show992">34</td>
                                <td className="show992">22</td>
                                <td>R$ 60.535,50</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#259</td>
                                <td className="show576">23/06/2022</td>
                                <td>Alice</td>
                                <td className="show992">29</td>
                                <td className="show992">16</td>
                                <td>R$ 31.789,00</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#260</td>
                                <td className="show576">07/06/2022</td>
                                <td>Leonardo</td>
                                <td className="show992">25</td>
                                <td className="show992">11</td>
                                <td>R$ 24.830,75</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default SalesCard
