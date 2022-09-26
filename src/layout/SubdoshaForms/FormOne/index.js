import React from 'react'

function Index() {
    return (
        <>

            <div id="dvDoshaTest" className="row">
                <div className="span12">
                    <div className="content">
                        <div className="page-header">
                            <h1><a href="/#" title="Ayurvedik Bunyenizi Kesfedin"><i className="icon-tint"></i><span>PRAKRUTI DOSHA TESTİ</span></a></h1>
                        </div>

                        <section id="prakruti">
                            <div className="blog blog-page">
                                <div className="body">
                                    <div id="dvLine1" className="row-fluid">
                                        <div className="span12">
                                            <p>FormText</p>
                                            <div className="page-header">
                                                <h1><small>Puanlamayı Nasıl Yapacaksınız?</small></h1>
                                            </div>
                                            <p>Her bir özelliği 5, 3 veya 1 puan vererek değerlendirin. Her bir sayıyı, her bir satırda yalnızca bir defa kullanın. (Her satırın Toplamı 9'a eşit olmalıdır)</p>
                                            <ul className="nav nav-tabs nav-stacked">
                                                <li>5 = Beni oldukça doğru bir şekilde temsil ediyor</li>
                                                <li>3 = Beni ikinci dereceden temsil ediyor</li>
                                                <li>1 = Beni nadiren temsil ediyor</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div id="dvLine3" className="row-fluid">
                                        <div className="span12">
                                            <section id="tableprakruti">
                                                <div className="page-header">
                                                    <h2>Bünye Testi</h2>
                                                </div>
                                                <div className="bs-docs-seperator">
                                                    <table id="tableBunye" className="table table-bordered">
                                                        <thead>
                                                            <tr style={{ backgroundColor: "#337469" }}>
                                                                <th>BÜNYE ÖZELLİKLERİ</th>

                                                                <th>VATA</th>

                                                                <th>PITTA</th>

                                                                <th>KAPHA</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>


                                                            <tr>
                                                                <td style={{ backgroundColor: "#337469" }} >YAPI</td>

                                                                <td style={{ backgroundColor: "#00000" }}>
                                                                    soru-vata<br />
                                                                    <br />
                                                                    <input id="f1_@form1Vata[0].Id" maxLength="1" type="text" className="input-small" name="f1_vata" />
                                                                </td>
                                                                <td style={{ backgroundColor: "#00000" }}>

                                                                    soru-pitta<br />
                                                                    <br />
                                                                    <input id="f1_@form1Pitta[1].Id" maxLength="1" type="text" className="input-small" name="f1_pıtta" />
                                                                </td>
                                                                <td style={{ backgroundColor: "#00000" }}>

                                                                    soru-kapha<br />
                                                                    <br />
                                                                    <input id="f1_@form1Kapha[1].Id" maxLength="1" type="text" className="input-small" name="f1_kapha" />
                                                                </td>
                                                            </tr>


                                                            <tr>
                                                                <td style={{ backgroundColor: "#337469" }}>AĞIRLIK</td>

                                                                <td style={{ backgroundColor: "#00000" }}>
                                                                    soru-vata<br />
                                                                    <br />
                                                                    <input id="f1_@form1Vata[1].Id" maxLength="1" type="text" className="input-small" name="f1_vata" />
                                                                </td>
                                                                <td style={{ backgroundColor: "#00000" }}>

                                                                    soru-pitta<br />
                                                                    <br />
                                                                    <input id="f1_@form1Pitta[1].Id" maxLength="1" type="text" className="input-small" name="f1_pıtta" />
                                                                </td>
                                                                <td style={{ backgroundColor: "#00000" }}>

                                                                    soru-kapha<br />
                                                                    <br />
                                                                    <input id="f1_@form1Kapha[1].Id" maxLength="1" type="text" className="input-small" name="f1_kapha" />
                                                                </td>
                                                            </tr>


                                                            <tr>
                                                                <td style={{ backgroundColor: "#337469" }}>GÖZLER</td>
                                                                <td style={{ backgroundColor: "#00000" }}>
                                                                    soru-vata<br />
                                                                    <br />
                                                                    <input id="f1_@form1Vata[2].Id" maxLength="1" type="text" className="input-small" name="f1_vata" />
                                                                </td>
                                                                <td style={{ backgroundColor: "#00000" }}>

                                                                    soru-pitta<br />
                                                                    <br />
                                                                    <input id="f1_@form1Pitta[2].Id" maxLength="1" type="text" className="input-small" name="f1_pıtta" />
                                                                </td>
                                                                <td style={{ backgroundColor: "#00000" }}>

                                                                    soru-kapha<br />
                                                                    <br />
                                                                    <input id="f1_@form1Kapha[2].Id" maxLength="1" type="text" className="input-small" name="f1_kapha" />
                                                                </td>
                                                            </tr>


                                                            <tr>
                                                                <td style={{ backgroundColor: "#337469" }}>CİLT</td>
                                                                <td style={{ backgroundColor: "#00000" }}>
                                                                    soru-vata<br />
                                                                    <br />
                                                                    <input id="f1_@form1Vata[3].Id" maxLength="1" type="text" className="input-small" name="f1_vata" />
                                                                </td>
                                                                <td style={{ backgroundColor: "#00000" }}>

                                                                    soru-pitta <br />
                                                                    <br />
                                                                    <input id="f1_@form1Pitta[3].Id" maxLength="1" type="text" className="input-small" name="f1_pıtta" />
                                                                </td>
                                                                <td style={{ backgroundColor: "#00000" }}>

                                                                    soru-kapha<br />
                                                                    <br />
                                                                    <input id="f1_@form1Kapha[3].Id" maxLength="1" type="text" className="input-small" name="f1_kapha" />
                                                                </td>
                                                            </tr>


                                                            <tr>
                                                                <td style={{ backgroundColor: "#337469" }}>SAÇ</td>
                                                                <td style={{ backgroundColor: "#00000" }}>
                                                                    soru-vata
                                                                    <br />
                                                                    <br />
                                                                    <input id="f1_@form1Vata[4].Id" maxLength="1" type="text" className="input-small" name="f1_vata" />
                                                                </td>
                                                                <td style={{ backgroundColor: "#00000" }}>

                                                                    soru-pitta<br />
                                                                    <br />
                                                                    <input id="f1_@form1Pitta[4].Id" maxLength="1" type="text" className="input-small" name="f1_pıtta" />
                                                                </td>
                                                                <td style={{ backgroundColor: "#00000" }}>

                                                                    soru-kapha<br />
                                                                    <br />
                                                                    <input id="f1_@form1Kapha[4].Id" maxLength="1" type="text" className="input-small" name="f1_kapha" />
                                                                </td>
                                                            </tr>


                                                            <tr>
                                                                <td style={{ backgroundColor: "#337469" }}>EKLEMLER</td>
                                                                <td style={{ backgroundColor: "#00000" }}>
                                                                    soru-vata<br />
                                                                    <br />
                                                                    <input id="f1_@form1Vata[5].Id" maxLength="1" type="text" className="input-small" name="f1_vata" />
                                                                </td>
                                                                <td style={{ backgroundColor: "#00000" }}>

                                                                    soru-pitta<br />
                                                                    <br />
                                                                    <input id="f1_@form1Pitta[5].Id" maxLength="1" type="text" className="input-small" name="f1_pıtta" />
                                                                </td>
                                                                <td style={{ backgroundColor: "#00000" }}>

                                                                    soru-kapha<br />
                                                                    <br />
                                                                    <input id="f1_@form1Kapha[5].Id" maxLength="1" type="text" className="input-small" name="f1_kapha" />
                                                                </td>
                                                            </tr>


                                                            <tr>
                                                                <td style={{ backgroundColor: "#337469" }}>UYKU DÜZENİ</td>
                                                                <td style={{ backgroundColor: "#00000" }}>
                                                                    soru-vata<br />
                                                                    <br />
                                                                    <input id="f1_@form1Vata[6].Id" maxLength="1" type="text" className="input-small" name="f1_vata" />
                                                                </td>
                                                                <td style={{ backgroundColor: "#00000" }}>

                                                                    soru-pitta<br />
                                                                    <br />
                                                                    <input id="f1_@form1Pitta[6].Id" maxLength="1" type="text" className="input-small" name="f1_pıtta" />
                                                                </td>
                                                                <td style={{ backgroundColor: "#00000" }}>

                                                                    soru-kapha<br />
                                                                    <br />
                                                                    <input id="f1_@form1Kapha[6].Id" maxLength="1" type="text" className="input-small" name="f1_kapha" />
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td style={{ backgroundColor: "#337469" }}>VÜCUT SICAKLIĞI</td>
                                                                <td style={{ backgroundColor: "#00000" }}>

                                                                    soru-vata<br />
                                                                    <br />
                                                                    <input id="f1_@form1Vata[7].Id" maxLength="1" type="text" className="input-small" name="f1_vata" />
                                                                </td>
                                                                <td style={{ backgroundColor: "#00000" }}>

                                                                    soru-pitta<br />
                                                                    <br />
                                                                    <input id="f1_@form1Pitta[7].Id" maxLength="1" type="text" className="input-small" name="f1_pıtta" />
                                                                </td>
                                                                <td style={{ backgroundColor: "#00000" }}>

                                                                    soru-kapha<br />
                                                                    <br />
                                                                    <input id="f1_@form1Kapha[7].Id" maxLength="1" type="text" className="input-small" name="f1_kapha" />
                                                                </td>
                                                            </tr>


                                                            <tr>
                                                                <td style={{ backgroundColor: "#337469" }} >MİZAÇ</td>
                                                                <td style={{ backgroundColor: "#00000" }}>
                                                                    soru-vata<br />
                                                                    <br />
                                                                    <input id="f1_@form1Vata[8].Id" maxLength="1" type="text" className="input-small" name="f1_vata" />
                                                                </td>
                                                                <td style={{ backgroundColor: "#00000" }}>

                                                                    soru-pitta<br />
                                                                    <br />
                                                                    <input id="f1_@form1Pitta[8].Id" maxLength="1" type="text" className="input-small" name="f1_pıtta" />
                                                                </td>
                                                                <td style={{ backgroundColor: "#00000" }}>

                                                                    soru-kapha<br />
                                                                    <br />
                                                                    <input id="f1_@form1Kapha[8].Id" maxLength="1" type="text" className="input-small" name="f1_kapha" />
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td style={{ backgroundColor: "#337469" }}>STRES ALTINDA.</td>
                                                                <td style={{ backgroundColor: "#00000" }} >

                                                                    soru-vata<br />
                                                                    <br />
                                                                    <input id="f1_@form1Vata[9].Id" maxLength="1" type="text" className="input-small" name="f1_vata" />
                                                                </td>
                                                                <td style={{ backgroundColor: "#00000" }}>

                                                                    soru-pitta<br />
                                                                    <br />
                                                                    <input id="f1_@form1Pitta[9].Id" maxLength="1" type="text" className="input-small" name="f1_pıtta" />
                                                                </td>
                                                                <td style={{ backgroundColor: "#00000" }}>

                                                                    soru-kapha<br />
                                                                    <br />
                                                                    <input id="f1_@form1Kapha[9].Id" maxLength="1" type="text" className="input-small" name="f1_kapha" />
                                                                </td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Index
