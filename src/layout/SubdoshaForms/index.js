import React from 'react';
import Footer from '../footer';
import Header from '../header';
import Index from './FormOne/index';
import FormTwoBase from './FormTwo';

function BaseForm() {
  return (
    <div className="wide">
      {/* <form id="form1" runat="server"> */}
      <div className="layout">
        <Header />
        <div className="main">

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
          <div id="dvResult1" className="container" style={{ display: "none" }} >
            <div className="row">
              <div className="span12">
                <div className="content">
                  <div className="page-header">
                    <h1>DOSHA (ZİHİN VE BEDEN YAPISI) TESTİ <small>Bünyenizi Keşfedin.</small></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="dvContainer" className="container">

            <Index />
            <FormTwoBase />

          </div>
          <a href="/#" className="scroll-top"><i className="icon-chevron-up"></i></a>
        </div>
        <Footer />
      </div>
      {/* </form>     */}

    </div>
  )
}

export default BaseForm
