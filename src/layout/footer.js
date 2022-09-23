import React from 'react';
import logo from '../app-file/images/logos/logo_footer_default.png';

function Footer() {
  return (
    <footer>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="span3">
                        <div className="logo">
                            <a href="/Ana-Sayfa" title="Yukselen Cag Web Sitesi">
                                <img id="logo-footer" src={logo } alt="Yükselen Çağ Logo" /></a>
                        </div>
                    </div>
                    <div className="span4">
                        <h3><i className="icon-arrow-right"></i> Kolay Erişim</h3>
                        <ul className="menu-footer unstyled register">
                            <li><a href="/Meditasyon" title="Meditasyon"><i className="icon-arrow-right"></i> Meditasyon Seminerleri</a></li>
                            <li><a href="/Nefes" title="Nefes"><i className="icon-arrow-right"></i> Nefes Teknikleri Seminerleri</a></li>
                            <li><a href="/Ayurvedik-Yasam/Ayurvedik-Yasam-Seminerleri" title="Ayurveda"><i className="icon-arrow-right"></i> Ayurveda Seminerleri</a></li>
                            <li><a href="/Ayurvedik-Yasam/Sahislara-Ozel-Ayurvedik-Beslenme-ve-Yasam-Tarzi-Danismanligi" title="Bireysel Danismanlik Hizmetleri"><i className="icon-arrow-right"></i> Şahsa Özel Ayurvedik Danışmanlık</a></li>
                            <li><a href="/Ayurvedik-Beslenme" title="Ayurvedik Beslenme"><i className="icon-arrow-right"></i>Ayurvedik Beslenme</a></li>                       
                            <li><a href="/Kurumsal/Kurumsal-Egitimlerimiz" title="Yukselen Cag Kurumsal Meditasyon Egitimleri"><i className="icon-arrow-right"></i> Kurumsal Eğitimler</a></li>
                            <li><a href="/Hakkimizda/Basin-Kiti" title="Yukselen Cag Basin Gorselleri"><i className="icon-arrow-right"></i> Basın Kiti</a></li>
                            <li><a href="/Hakkimizda/Bize-Ulasin" title="Yukselen Cag Iletisim Formu"><i className="icon-arrow-right"></i> İletişim</a></li>
                        </ul>
                    </div>
                    <div className="span5">
                        <h3><i className="icon-hand-right"></i> Sosyal Medya</h3>
                        <ul className="social-icons inline">
                            <li><a href="https://www.facebook.com/yukselencagcom" data-toggle="tooltip" title="Yükselen Çağ Facebook"  className="facebook"><i className="icon-facebook"></i></a></li>
                            <li><a href="https://twitter.com/yukselencag" data-toggle="tooltip" title="Yükselen Çağ Twitter"  className="twitter"><i className="icon-twitter"></i></a></li>
                            <li><a href="https://instagram.com/yukselencag" data-toggle="tooltip" title="Yükselen Çağ Instagram"  className="instagram"><i className="icon-instagram"></i></a></li>
                            
                            <li><a href="https://plus.google.com/u/0/b/103358720050803213761/+Yukselencagcom/posts/p/pub" data-toggle="tooltip" title="Yükselen Çağ Google+"  className="google-plus"><i className="icon-google-plus"></i></a></li>
                            <li><a href="https://www.youtube.com/user/yukselencag" data-toggle="tooltip" title="Yükselen Çağ YouTube"  className="youtube"><i className="icon-youtube"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/y%C3%BCkselen-%C3%A7a%C4%9F" data-toggle="tooltip" title="Yükselen Çağ LinkedIn"  className="linkedin"><i className="icon-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="container">
                <div className="row">
                    <div className="span6">
                        <p>
                            Copyright &copy; 2015 Yükselen Çağ - All Rights Reserved. <span className="author">Created by <a href="http://www.opusgo.com/" title="OpusGo Yazilim E-Ticaret Cozumleri" >OpusGo Software R&D </a>.</span>
                        </p>
                    </div>
                    <div className="span6">
                        <div className="hidden-phone">
                            <ul className="unstyled">
                                <li className="active"><a href="/Ana-Sayfa" title="Yukselen Cag Web Sitesi">Ana Sayfa</a></li>
                                <li><a href="/Hakkimizda/Ebru-Sinik-Kimdir" title="Yukselen Cag Kurucusu Ebru Sinik Kimdir">Hakkımızda</a></li>
                                <li><a href="/Seminerlerimizin-Tamami" title="Seminer Takvimi">Seminerler</a></li>
                                <li><a href="/Kurumsal/Kurumsal-Egitimlerimiz" title="Kurumsal Meditasyon Egitimi">Kurumsal Eğitimler</a></li>
                                <li><a href="/Hakkimizda/Bize-Ulasin" title="Yukselen Cag Iletisim Formu">İletişim</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
