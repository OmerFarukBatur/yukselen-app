import React from 'react';
import Kapha from './kapha';
import Pitta from './pitta';
import Vata from './vata';

function FormTwoBase() {
    return (
        <>

            <div id="dvSubDoshaTest" className="row">
                <div className="span12">
                    <div className="content">
                        <div className="page-header">
                            <h1><a href="/#" title="Ayurvedik Bunyenizi Kesfedin"><i className="icon-tint"></i><span>VIKRUTI SUBDOSHA ANKETİ</span></a></h1>
                        </div>
                        <section id="table1">
                            <p>
                                FormText
                                <br />
                                <br />
                                Bu soruları geçtiğimiz bir kaç ay ve haftayı değerlendirerek yanıtlamanız fayda sağlayacaktır.
                            </p>

                            <Vata />

                            <hr className="bs-docs-separator" />

                            <Pitta />

                            <hr className="bs-docs-separator" />

                            <Kapha />

                            <hr className="bs-docs-separator" />
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{ backgroundColor: "aliceblue" }} >
                                            <h3>KİLO</h3>
                                        </th>
                                        <th colSpan="4">Her bir soru için şu andaki kilonuzu / yeme düzeninizi en iyi şekilde açıklayan yanıtı seçin</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td style={{ backgroundColor: "aliceblue" }} >
                                            <h3>1</h3>
                                        </td>
                                        <td id="kilo_1">ŞU ANDA</td>
                                        <td>ZAYIFIM</td>
                                        <td>
                                            <input id="rd2001" type="radio" className="checkbox" value="ZAYIFIM" name="f5_kilo_1" />

                                        </td>
                                        <td>İDEAL KİLOMDAYIM</td>

                                        <td>
                                            <input id="rd2002" type="radio" className="checkbox" value="İDEAL KİLOMDAYIM" name="f5_kilo_1" />

                                        </td>
                                        <td>KİLO FAZLAM VAR</td>
                                        <td>
                                            <input id="rd2003" type="radio" className="checkbox" value="KİLO FAZLAM VAR" name="f5_kilo_1" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style={{ backgroundColor: "aliceblue" }}>
                                            <h3>2</h3>
                                        </td>
                                        <td id="stres_1">STRES ALTINDA OLDUĞUMDA</td>
                                        <td>İŞTAHIM KAPANIYOR</td>
                                        <td>
                                            <input id="rd2101" type="radio" className="checkbox" value="İŞTAHİM KAPANIYOR" name="f5_kilo_2" />

                                        </td>
                                        <td>OBURLAŞIYORUM</td>
                                        <td>
                                            <input id="rd2102" type="radio" className="checkbox" value="OBURLAŞIYORUM" name="f5_kilo_2" />

                                        </td>
                                        <td>KENDİMİ AÇ HİSSETMEDİĞİM HALDE YEMEK YİYORUM</td>
                                        <td>
                                            <input id="rd2103" type="radio" className="checkbox" value="KENDİMİ AÇ HİSSETMEDİĞİM HALDE YEMEK YİYORUM" name="f5_kilo_2" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td style={{ backgroundColor: "aliceblue" }}>
                                            <h3>3</h3>
                                        </td>
                                        <td id="hedef_1">ŞUNU YAPMAK BENİM İÇİN KOLAY</td>
                                        <td>KİLO VERMEK</td>
                                        <td>
                                            <input id="rd2201" type="radio" className="checkbox" value="KİLO VERMEK" name="f5_kilo_3" />

                                        </td>
                                        <td>KİLOMU KORUMAK</td>
                                        <td>
                                            <input id="rd2202" type="radio" className="checkbox" value="KİLOMU KORUMAK" name="f5_kilo_3" />

                                        </td>
                                        <td>KİLO ALMAK</td>
                                        <td>
                                            <input id="rd2203" type="radio" className="checkbox" value="KİLO ALMAK" name="f5_kilo_3" />
                                        </td>
                                    </tr>



                                </tbody>

                            </table>

                        </section>


                    </div>

                </div>
                <div className="row-fluid">
                    <div className="span12">
                        <hr className="bs-docs-separator" />
                        <button id="btnSend" type="button" className="btn btn-info btn-large" style={{ visibility: "hidden" }}>GÖNDER</button>
                        <button id='btn1' className="btn btn-info btn-large">GÖNDER</button>
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormTwoBase
