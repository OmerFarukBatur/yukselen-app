import React from 'react';
import img1 from '../../app-file/images/pages/anket_dosha.jpg';
import { useFormik } from 'formik';
import validations from './valodation';
import https from '../../api';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import BaseForm from '../SubdoshaForms';
import axios from 'axios';

function Index() {

    let navigate = useNavigate();
    const useLocationn = useLocation();

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phoneNumber: '',
            job: '',
            address: '',
            userLength: 0,
            kilo: 0,
            gender: '',
            day: 0 ,
            month: 0 ,
            year: 0 
        },
        validationSchema: validations,
        onSubmit: async(values, bag) => {
            await https.post(`${process.env.REACT_APP_API_URL}/api/User/Register`, values,{
                headers: {
                  Accept: "*/*",
                  "Content-Type": "application/json;charset=UTF-8",
                }
              }).then(()=> console.log("success")).catch(()=> console.log(bag)); 
        },       
    });


    const allDay = [];
    const allMonth = [];
    const years = [];
    for (let index = 1; index < 32; index++) {
        allDay.push(index);
        if (index < 13) {
            allMonth.push(index);
        }
    }

    for (let index = 1920; index < new Date().getFullYear(); index++) {
        years.push(index);

    }

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="row-fluid">
                    <div className="span6">
                        <h3>Kişisel Bilgiler</h3>
                        <div className="row-fluid">
                            <div className="span3">
                                Ad Soyad (*)
                            </div>
                            <div className="span6">
                                <input
                                    name="fullName"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    defaultValue={formik.values.fullName}
                                    style={{ backgroundColor: formik.touched.fullName && formik.errors.fullName ? 'lightcoral' : 'white' }}
                                    maxLength="50" className="input-block-level"
                                    type="text"
                                    placeholder="Ad ve Soyad"
                                />
                            </div>
                            {/* {
                                        touched.fullName && errors.fullName && (
                                            <a color="red.500">{errors.fullName}</a>
                                        )
                                        } */}
                        </div>
                        <div className="row-fluid">
                            <div className="span3">
                                E-posta (*)
                            </div>
                            <div className="span6">
                                <input
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    defaultValue={formik.values.email}
                                    style={{ backgroundColor: formik.touched.email && formik.errors.email ? 'lightcoral' : 'white' }}
                                    maxLength="50"
                                    className="input-block-level"
                                    type="text"
                                    placeholder="E-posta Adresiniz"
                                />
                            </div>
                        </div>
                        <div className="row-fluid">
                            <div className="span3">
                                Telefon No (*)
                            </div>
                            <div className="span6">
                                <input
                                    name="phoneNumber"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    defaultValue={formik.values.phoneNumber}
                                    style={{ backgroundColor: formik.touched.phoneNumber && formik.errors.phoneNumber ? 'lightcoral' : 'white' }}
                                    maxLength="20"
                                    className="input-block-level"
                                    type="text"
                                    placeholder="Telefon Numaranız"
                                />
                            </div>
                        </div>
                        <div className="row-fluid">
                            <div className="span3">
                                Meslek
                            </div>
                            <div className="span6">
                                <input
                                    name="job"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    defaultValue={formik.values.job}
                                    style={{ backgroundColor: formik.touched.job && formik.errors.job ? 'lightcoral' : 'white' }}
                                    maxLength="20"
                                    className="input-block-level"
                                    type="text"
                                    placeholder="Mesleğiniz"
                                />
                            </div>
                        </div>
                        <div className="row-fluid">
                            <div className="span3">
                                İrtibat Adresi
                            </div>
                            <div className="span6">
                                <textarea
                                    name="address"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    defaultValue={formik.values.address}
                                    style={{ backgroundColor: formik.touched.address && formik.errors.address ? 'lightcoral' : 'white' }}
                                    maxLength="250"
                                    className="input-block-level"
                                    rows="3"
                                    placeholder="Lütfen İrtibat Adresinizi Yazınız"
                                />
                            </div>
                        </div>
                        <div className="row-fluid">
                            <div className="span3">
                                Boy (*)
                            </div>
                            <div className="span6">
                                <input
                                    name="userLength"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    defaultValue={formik.values.userLength}
                                    style={{ backgroundColor: formik.touched.userLength && formik.errors.userLength ? 'lightcoral' : 'white' }}
                                    maxLength="20"
                                    className="input-block-level"
                                    type="number"
                                    placeholder="Boy 000 cm"
                                />
                            </div>
                        </div>
                        <div className="row-fluid">
                            <div className="span3">
                                Kilo (*)
                            </div>
                            <div className="span6">
                                <input
                                    name="kilo"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    defaultValue={formik.values.kilo}
                                    style={{ backgroundColor: formik.touched.kilo && formik.errors.kilo ? 'lightcoral' : 'white' }}
                                    maxLength="20"
                                    className="input-block-level"
                                    type="number"
                                    placeholder="Kilo 000 Kg"
                                />
                            </div>
                        </div>

                        <div className="row-fluid">
                            <div className="span3">
                                Cinsiyet (*)
                            </div>
                            <div className="span3">
                                <select id="ddlGender" defaultValue={formik.values.gender} onChange={formik.handleChange} style={{ width: 280 }} name="gender" >
                                    <option >Seçiniz..</option>
                                    <option onChange={formik.handleChange} value="KADIN">KADIN</option>
                                    <option onChange={formik.handleChange} value="ERKEK">ERKEK</option>
                                </select>

                            </div>
                        </div>
                        <div className="row-fluid">
                            <div className="span3">
                                Doğum Tarihi (*)
                            </div>
                            <div className="span2">
                                <select id="ddlDay" onChange={formik.handleChange} defaultValue={formik.values.day} style={{ width: 80 }} name="day" >
                                    <option >Gün</option>
                                    {
                                        allDay.map((value, index) => {
                                            return <option onChange={formik.handleChange} value={value} key={index}>{value}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="span2">
                                <select id="ddlMonths" onChange={formik.handleChange} defaultValue={formik.values.month} style={{ width: 80 }} name="month" >
                                    <option >Ay</option>
                                    {
                                        allMonth.map((value, index) => {
                                            return <option onChange={formik.handleChange} value={value} key={index}>{value}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="span2">
                                <select id="ddlYears" onChange={formik.handleChange} defaultValue={formik.values.year} style={{ width: 80 }} name="year" >
                                    <option >Yıl</option>
                                    {
                                        years.map((value, index) => {
                                            return <option onChange={formik.handleChange} value={value} key={index}>{value}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                    </div>

                    <div className="span6">
                        <figure>
                            <img src={img1} style={{ width: 570, height: 360 }} title="Bünyenize Uygun Ayurvedik Yaşam" alt="Ebru Sinik" />
                        </figure>
                    </div>
                </div>
                <div className="row-fluid">
                    <div className="span6" style={{ paddingTop: 20, textAlign: 'center' }} >
                        <button id="btnStart" type="submit" className="btn btn-info btn-large" >Ankete Başla</button>
                    </div>
                    <div className="span6">&nbsp;</div>
                </div>
                <div className="row-fluid">
                    <hr className="bs-docs-separator" />
                </div>
            </form>

        </>
    )
}

export default Index
