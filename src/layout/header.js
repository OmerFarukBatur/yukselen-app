import React from 'react';
import logo1 from '../app-file/images/logos/logo_default.png';
import logo2 from '../app-file/images/logos/ycmotto.jpg';
import img1 from '../app-file/images/flags/tr.png';
import img2 from '../app-file/images/flags/gb.png';

function Header() {
    return (
        <header>
            <div className="top-bar">
                <div className="container">
                    <div className="row">
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="span2">
                            <div className="logo">
                                <a href="/Ana-Sayfa" title="Yukselen Cag Kurumsal Web Sitesi">
                                    <img id="logo" src={logo1} title="Daha mutlu, sağlıklı ve dengede bir hayat" alt="Yükselen Çağ" /></a>
                                <h2 className="hide-text">Yükselen Çağ</h2>
                            </div>
                        </div>
                        <div className="span3">
                            <div className="logo">
                                <a href="/Ana-Sayfa" rel="nofollow">
                                    <img id="Img1" src={logo2} title="Yükselen Çağda İyi Ol Mutlu Ol" alt="Ayurvedik Yaşam, Meditasyon, Nefes" /></a>
                                <h2 className="hide-text">Yükselen Çağ</h2>
                            </div>
                        </div>
                        <div className="span7">
                            <br className="hidden-phone" />
                            <div className="pull-right">
                                <h4 style={{ textAlign: 'center' }}>
                                    <a href="/#" rel="nofollow"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sosyal Medyada Biz</span></a><span> | </span>
                                    <a href="/#" rel="nofollow"><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></a></h4>
                                <div className="pull-right">
                                    <a href="/Ana-Sayfa" title="Yukselen Cag Turkce" className="current">
                                        <img src={img1} title="Türkçe" alt="Türkçe" /><span></span></a>
                                    <a href="/Home-Page" title="Yukselen Cag English" className="current">
                                        <img src={img2} title="English" alt="English" /><span></span></a>
                                </div>
                                <ul className="social-icons social-dark inline">
                                    <li><a href="https://www.facebook.com/yukselencagcom" data-toggle="tooltip" title="Yükselen Çağ Facebook" className="facebook"><i className="icon-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/yukselencag" data-toggle="tooltip" title="Yükselen Çağ Twitter" className="twitter"><i className="icon-twitter"></i></a></li>
                                    <li><a href="https://instagram.com/yukselencag" data-toggle="tooltip" title="Yükselen Çağ Instagram" className="instagram"><i className="icon-instagram"></i></a></li>

                                    <li><a href="https://plus.google.com/u/0/b/103358720050803213761/+Yukselencagcom/posts/p/pub" data-toggle="tooltip" title="Yükselen Çağ Google+" className="google-plus"><i className="icon-google-plus"></i></a></li>
                                    <li><a href="https://www.youtube.com/user/yukselencag" data-toggle="tooltip" title="Yükselen Çağ YouTube" className="youtube"><i className="icon-youtube"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/y%C3%BCkselen-%C3%A7a%C4%9F" data-toggle="tooltip" title="Yükselen Çağ LinkedIn" className="linkedin"><i className="icon-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav id="nav" className="navigation lwhite">
                <div className="container">
                    <div className="row">
                        <div className="span12">
                            <ul className="menu fading">
                                <li className="active"><a href="/Ana-Sayfa" title="Yukselen Cag Web Sitesi">Ana Sayfa</a></li>
                                <li><a href="/Hakkimizda/Ebru-Sinik-Kimdir" title="Ebru Sinik Hakkinda">Hakkımızda</a>
                                    <ul>
                                        <li><a href="/Hakkimizda/Ebru-Sinik-Kimdir" title="Ebru Sinik Hakkinda"><i className="icon-arrow-right"></i>Ebru Şinik Kimdir?</a></li>
                                        <li><a href="/Hakkimizda/Chopra-Center-Universitesi-Hakkinda" title="Chopra Center"><i className="icon-arrow-right"></i>Chopra Center Üni.</a></li>
                                        <li><a href="/Hakkimizda/Yukselen-Cag-Seminer-Egitim-Gorselleri" title="Meditasyon Nefes Ayurveda"><i className="icon-arrow-right"></i>Seminer Görselleri</a></li>
                                        <li><a href="/Hakkimizda/Yukselen-Cag-Medya-Yansimalari" title="Yukselen Cag Medya"><i className="icon-arrow-right"></i>Medya Yansımaları</a></li>
                                        <li><a href="/Yukselen-Cag-Sosyal-Sorumluluk-Projeleri" title="Yukselen Cag Sosyal Sorumluluk"><i className="icon-arrow-right"></i>Sosyal Sorumluluk</a></li>
                                        <li><a href="/Haberler" title="Yukselen Cag Haberler"><i className="icon-arrow-right"></i>Tüm Haberler</a></li>
                                        <li><a href="/Hakkimizda/Basin-Kiti" title="Basin Kiti"><i className="icon-arrow-right"></i>Basın Kiti</a></li>
                                        <li><a href="/Hakkimizda/Bize-Ulasin" title="Iletisim Formu Yukselen Cag"><i className="icon-arrow-right"></i>İletişim</a></li>
                                    </ul>
                                </li>
                                <li><a href="/Seminerlerimizin-Tamami" title="Yukselen Cag Seminer Takvimi">Seminerler</a>
                                    <div className="cols2">
                                        <div className="col2">
                                            <ol>
                                                <li><a href="/Meditasyon" title="Meditasyon"><i className="icon-arrow-right"></i>Meditasyon Seminerleri</a></li>
                                                <li><a href="/Nefes" title="Nefes"><i className="icon-arrow-right"></i>Kadim Nefes Teknikleri Seminerleri</a></li>
                                                <li><a href="/Ayurvedik-Yasam/Ayurvedik-Yasam-Seminerleri" title="Ayurveda"><i className="icon-arrow-right"></i>Ayurveda Seminerleri</a></li>
                                                <li><a href="/Seminerlerimizin-Tamami" title="Tüm Seminerler"><i className="icon-arrow-right"></i>Seminer Takvimi</a></li>
                                                <li><a href="/Seminerlerimiz/Yukselen-Cag-Seminer-Basvuru-Formlari" title="Seminer Basvuru Formlari"><i className="icon-arrow-right"></i>Seminer Başvuru Formları</a></li>
                                            </ol>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="/Kurumsal/Kurumsal-Egitimlerimiz" title="Yukselen Cag Kurumsal Egitimleri">Kurumlarda Wellbeing</a>
                                    <div className="cols2">
                                        <div className="col2">
                                            <ol>
                                                <li><a href="/Kurumsal/Is-Yasam-Dengesi-Programlari" title="Is Yasam Dengesi Atolyesi"><i className="icon-arrow-right"></i>İş & Yaşam Dengesi</a></li>
                                                <li><a href="/Kurumsal/Kurumsal-Egitimlerimiz" title="Yükselen Çağ Kurumsal Eğitimleri"><i className="icon-arrow-right"></i>Kurumsal Eğitim Paketlerimiz</a></li>
                                                <li><a href="/Wellbeing-Egitmenlerimiz" title="Yükselen Çağ Kurumsal Eğitmenler"><i className="icon-arrow-right"></i>Wellbeing Eğitmenlerimiz</a></li>
                                                <li><a href="/Meditasyon/Meditasyon-Egitimi-Alan-Uluslararasi-Sirketler" title="Meditasyon Egitimi Alan Uluslararasi Sirketler"><i className="icon-arrow-right"></i>Meditasyon Eğitimi Alan Uluslararası Şirketler</a></li>
                                                <li><a href="/Kurumsal/Yukselen-Cag-Referanslari" title="Meditasyon Nefes Ayurveda Referanslari"><i className="icon-arrow-right"></i>Referanslar</a></li>
                                                <li><a href="/Kurumsal/Yukselen-Cag-Kurumsal-Egitim-Basvuru-Formu" title="Kurumsal Egitim Basvuru Formu"><i className="icon-arrow-right"></i>Kurumsal Eğitim Başvuru Formu</a></li>
                                            </ol>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="/Ayurvedik-Yasam/Ayurveda-Nedir" title="Ayurveda Nedir">Ayurvedik Yaşam</a>
                                    <div className="cols4">
                                        <div className="col2">
                                            <h4>Ayurveda Hakkında</h4>
                                            <ol>
                                                <li><a href="/Ayurvedik-Yasam/Ayurveda-Nedir" title="Ayurveda"><i className="icon-arrow-right"></i>Ayurveda Nedir?</a></li>
                                                <li><a href="/Ebru-Sinik-ile-Ayurvedik-Yasama-Giris" title="Ayurveda"><i className="icon-arrow-right"></i>Ayurvedik Yaşama Giriş</a></li>
                                                <li><a href="/Ayurvedik-Yasam/Dosha-Fitrat-Nedir" title="Dosha"><i className="icon-arrow-right"></i>Dosha Nedir?</a></li>
                                                <li><a href="/Ayurvedik-Yasam/Ayurvedik-Bunye-Tipinizi-Kesfedin" title="Beden Tipleri"><i className="icon-arrow-right"></i>Ayurvedik Bünye Tipleri</a></li>
                                                <li><a href="/Ayurvedik-Yasam/Ayurvedik-Bunye-Tipinizi-Kesfedin-Anketi" title="Dosha Anketi"><i className="icon-arrow-right"></i>Ayurvedik Bünyenizi Keşfedin Anketi</a></li>
                                                <li><a href="/Ayurvedik-Yasam/Sahislara-Ozel-Ayurvedik-Beslenme-ve-Yasam-Tarzi-Danismanligi" title="Bireysel Danismanlik Hizmetleri"><i className="icon-arrow-right"></i>Şahsa Özel Ayurvedik Danışmanlık</a></li>
                                                <li><a href="/Ayurvedik-Beslenme" title="Ayurvedik Beslenme"><i className="icon-arrow-right"></i>Ayurvedik Beslenme</a></li>
                                                <li><a href="/Ayurvedik-Yasam/Ayurvedik-Yasam-Seminerleri" title="Ayurvedik Yasam Danismanligi"><i className="icon-arrow-right"></i>Ayurvedik Bünyenizi Keşfedin Seminerleri</a></li>
                                                <li><a href="/Ayurvedik-Yasam/Ayurvedik-Urunlerin-Hikayesi" title="Ayurvedik Bunye Dengeleyici Urunler"><i className="icon-arrow-right"></i>Ayurvedik Ürünlerimizin Hikayesi</a></li>
                                                <li><a href="http://store.yukselencag.com/" title="Ayurvedik Urunler"><i className="icon-arrow-right"></i>Ayurveda Mağazası</a></li>
                                                <li><a href="/Ayurvedik-Yasam/Ayurvedik-Lifestyle-Blog" title="Ayurvedik Yasam Destegi"><i className="icon-arrow-right"></i>Ayurvedik Lifestyle Blog</a></li>
                                                <li><a href="/Seminerlerimiz/Yukselen-Cag-Seminer-Basvuru-Formlari" title="Ayurveda Seminer Basvuru Formu"><i className="icon-arrow-right"></i>Ayurveda Semineri Başvuru Formu</a></li>
                                            </ol>
                                        </div>
                                        <div className="col2">
                                            <h4>Meditasyon Hakkında</h4>
                                            <ol>
                                                <li><a href="/Meditasyon" title="Meditasyon Hakkında"><i className="icon-arrow-right"></i>Meditasyon Seminerleri</a></li>
                                                <li><a href="/Meditasyon/Meditasyon-Nedir" title="Meditasyon Nedir"><i className="icon-arrow-right"></i>Meditasyon Nedir?</a></li>
                                                <li><a href="/Meditasyon/Meditasyon-Yapmayi-Ogrenin" title="Meditasyon Egitimi"><i className="icon-arrow-right"></i>Meditasyon Yapmayı Nasıl Öğrenebilirim?</a></li>
                                                <li><a href="/Meditasyon-Yapmanin-Genel-Faydalari" title="Meditasyon Yapmanın Genel Faydalari"><i className="icon-arrow-right"></i>Meditasyonun Faydaları</a></li>
                                                <li><a href="/Meditasyon/Meditasyon-Yapmanin-Sagliga-Faydalari" title="Meditasyonun Faydalari"><i className="icon-arrow-right"></i>Düzenli Meditasyonun Sağlığımıza Etkileri</a></li>
                                                <li><a href="/Meditasyon/Bilimsel-Meditasyon-Arastirmalari" title="Bilimsel Meditasyon Arastirmalari"><i className="icon-arrow-right"></i>Bilimsel Meditasyon Araştırmaları</a></li>
                                                <li><a href="/Meditasyon/Okullarda-Meditasyon" title="Okullarda Meditasyon Öğrenin"><i className="icon-arrow-right"></i>Okullarda Meditasyon</a></li>
                                                <li><a href="/Meditasyon/Is-Yerinde-Meditasyon" title="İş Yerinde Stres Yönetimi"><i className="icon-arrow-right"></i>İş Yerinde Meditasyon</a></li>
                                                <li><a href="/Meditasyon/Meditasyon-Egitimi-Alan-Uluslararasi-Sirketler" title="Meditasyon Egitimi Alan Uluslararasi Sirketler"><i className="icon-arrow-right"></i>Meditasyon Eğitimi Alan Uluslararası Şirketler</a></li>
                                                <li><a href="/Seminerlerimiz/Yukselen-Cag-Seminer-Basvuru-Formlari" title="Meditasyon Seminer Basvuru Formu"><i className="icon-arrow-right"></i>Meditasyon Semineri Başvuru Formu</a></li>
                                            </ol>
                                        </div>
                                        <div className="col2">
                                            <h4>Nefes Hakkında</h4>
                                            <ol>
                                                <li><a href="/Nefes" title="Nefes Teknikleri"><i className="icon-arrow-right"></i>Nefes Seminerleri</a></li>
                                                <li><a href="/Nefes/Kadim-Nefes-Teknikleri-Ne-ise-Yarar" title="Nefes Teknikleri"><i className="icon-arrow-right"></i>Nefes Teknikleri Ne İşe Yarar?</a></li>
                                                <li><a href="/Nefes/Dogru-Nefes-Aliyor-musunuz" title="Doğru Nefes Al"><i className="icon-arrow-right"></i>Doğru Nefes Al</a></li>
                                                <li><a href="/Nefes/Kadim-Nefes-Teknikleri-Okulu" title="Kadim Nefes Teknikleri Okulu"><i className="icon-arrow-right"></i>Kadim Nefes Teknikleri Okulu</a></li>
                                                <li><a href="/Seminerlerimiz/Yukselen-Cag-Seminer-Basvuru-Formlari" title="Kadim Nefes Semineri Basvuru Formu"><i className="icon-arrow-right"></i>Kadim Nefes Teknikleri Semineri Başvuru Formu</a></li>
                                            </ol>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="/#" title="Meditasyon ve Nefes Seminer Videoları"><i className="icon-facetime-video"></i> Video</a>
                                    <ul>
                                        <li><a href="/videolar/katilimci-gorusleri-izle" title="Katılımcı Görüşü"><i className="icon-arrow-right"></i>Katılımcı Görüşleri</a></li>
                                        <li><a href="/videolar/meditasyon-nasil-yapilir-izle" title="Meditasyon"><i className="icon-arrow-right"></i>Meditasyon Videoları</a></li>
                                        <li><a href="/videolar/nefes-teknikleri-nedir-izle" title="Nefes"><i className="icon-arrow-right"></i>Nefes Videoları</a></li>
                                        <li><a href="/videolar/ayurveda-nedir-izle" title="Ayurveda"><i className="icon-arrow-right"></i>Ayurveda Videoları</a></li>
                                        <li><a href="/videolar/yukselen-cag-kurumsal-izle" title="Kurumsal Seminer"><i className="icon-arrow-right"></i>Kurumsal Videolar</a></li>
                                        <li><a href="/videolar/yukselen-cag-tv-programlari-izle" title="TV Programları"><i className="icon-arrow-right"></i>TV Programları</a></li>
                                        <li><a href="/videolar/yukselen-cag-webinar-izle" title="Webinar"><i className="icon-arrow-right"></i>Webinar</a></li>
                                    </ul>
                                </li>
                                <li><a href="/Ayurvedik-Yasam/Ayurvedik-Bunye-Tipinizi-Kesfedin-Anketi" title="Bünye Testi Dosha Types"><i className="icon-leaf"></i> Bünye Testi</a></li>
                                <li><a href="http://store.yukselencag.com/" title="Ayurvedik Yaşam Ürünleri"><i className="icon-shopping-cart"></i> Ayurvedik Mağaza</a></li>


                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header
