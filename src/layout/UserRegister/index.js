import React from 'react';
import img1 from '../../app-file/images/pages/anket_dosha.jpg';
import {  useFormik } from 'formik';
import validations from './valodation';
import { gettUser, postUser } from '../../api';

function Index() {

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phoneNumber: '',
            job: '',
            address: '',
            userLength: 150,
            kilo: 40,
            gender: 'KADIN',
            day: 1,
            month: 1,
            year: 1920
        },
        validationSchema: validations,

      /*   {
            fullName: values.fullName,
            email: values.email,
            phoneNumber: values.phoneNumber,
            job: values.job,
            address: values.address,
            userLength: values.userLength,
            kilo: values.kilo,
            gender: values.gender,
            day: values.day,
            month: values.month,
            year: values.year
        } */

        onSubmit: async (values, bag) => {

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json','accept': '*/*' },
                body: JSON.stringify(values.fullName )
            };
            fetch('https://localhost:7124/api/User/Register', requestOptions)
                .then(response => console.log(response.json()) )
                .then(data => console.log(data));

          /* try {
            const registerResponse = await postUser(values.fullName);
            //const registerResponse = await gettUser();
            console.log(registerResponse);
            //history.push('/profile');
          } catch (error) {
            bag.setErrors({general: error.response.data.message});
          } */
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
                                    style={{backgroundColor:formik.touched.fullName && formik.errors.fullName ? 'lightcoral' : 'white'}}
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
                                    style={{backgroundColor:formik.touched.email && formik.errors.email ? 'lightcoral' : 'white'}}
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
                                    style={{backgroundColor:formik.touched.phoneNumber && formik.errors.phoneNumber ? 'lightcoral' : 'white'}}
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
                                    style={{backgroundColor:formik.touched.job && formik.errors.job ? 'lightcoral' : 'white'}}
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
                                    style={{backgroundColor:formik.touched.address && formik.errors.address ? 'lightcoral' : 'white'}}
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
                                    style={{backgroundColor:formik.touched.userLength && formik.errors.userLength ? 'lightcoral' : 'white'}}
                                    maxLength="20"
                                    className="input-block-level"
                                    type="text"
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
                                    style={{backgroundColor:formik.touched.kilo && formik.errors.kilo ? 'lightcoral' : 'white'}}
                                    maxLength="20"
                                    className="input-block-level"
                                    type="text"
                                    placeholder="Kilo 000 Kg"
                                />
                            </div>
                        </div>

                        <div className="row-fluid">
                            <div className="span3">
                                Cinsiyet (*)
                            </div>
                            <div className="span3">
                                <select id="ddlGender" defaultValue={formik.values.gender} style={{ width: 280 }} name="gender" >
                                    <option value="KADIN">KADIN</option>
                                    <option value="ERKEK">ERKEK</option>
                                </select>
                            
                            </div>
                        </div>
                        <div className="row-fluid">
                            <div className="span3">
                                Doğum Tarihi (*)
                            </div>
                            <div className="span2">
                                <select id="ddlDay" defaultValue={formik.values.day} style={{ width: 80 }} name="day" >
                                    <option >Gün</option>
                                    {
                                        allDay.map((value, index) => {
                                            return <option value={value} key={index}>{value}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="span2">
                                <select id="ddlMonths" defaultValue={formik.values.month} style={{ width: 80 }} name="month" >
                                    <option >Ay</option>
                                    {
                                        allMonth.map((value, index) => {
                                            return <option value={value} key={index}>{value}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="span2">
                                <select id="ddlYears" defaultValue={formik.values.year} style={{ width: 80 }} name="year" >
                                    <option >Yıl</option>
                                    {
                                        years.map((value, index) => {
                                            return <option value={value} key={index}>{value}</option>
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
