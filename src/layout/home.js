import React from 'react'
import Index from './UserRegister'

function Home() {
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="span12">
                        <ul className="breadcrumb hidden-phone">
                            <li className="active"><span className="divider"><a href="/Ana-Sayfa" title="Ana Sayfaya Dönün"><i className="icon-home"></i>Ana Sayfa |</a></span></li>
                            <li><span className="divider"><a href="/Hakkimizda/Ebru-Sinik-Kimdir" title="Ebru Sinik">Hakkımızda |</a></span></li>
                            <li><span>Zihin - Beden Yapısı Testi (Subdosha)</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="dvResult1" className="container" style={{display:"none"}}>
                <div className="row">
                    <div className="span12">
                        <div className="content">
                            <div className="page-header">
                                <h1>DOSHA (ZİHİN VE BEDEN YAPISI) TESTİ <small>Bünyenizi Keşfedin.</small></h1>
                            </div>
                            <section id="contact">
                                <div className="contact">
                                    <div className="row-fluid">
                                        <div className="span6">
                                            <h3>Teşekkürler, formunuz başarılı olarak alınmış olup, ilgililere iletilmiştir.</h3>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            <div id="dvContainer" className="container">
                <div className="row">
                    <div className="span12">
                        <div className="content">
                            <div className="page-header">
                                <h1>DOSHA (ZİHİN VE BEDEN YAPISI) TESTİ <small>Bünyenizi Keşfedin.</small></h1>
                            </div>
                            <section id="Section1">
                                <div className="contact">
                                    <Index />

                                </div>
                            </section>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Home
