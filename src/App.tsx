/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useRef, useState } from 'react';
import './Styles/reset.scss';
import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form, { FormType } from './modules/FormType';

const customId = 'custom-id-yes';

const App = () => {
  const [form, setForm] = useState<FormType>(Form);
  const InputRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const toastRef = useRef(null);
  const notify = () => {
    // @ts-ignore
    if (!toast.isActive(toastRef.current)) {
      // @ts-ignore
      toastRef.current = toast('Ready to Sumbit', {
        toastId: customId,
      });
    }
  };
  useEffect(() => {
    // @ts-ignore
    InputRef.current.focus();
  }, []);
  return (
    <div className="container">
      <form action="" ref={formRef}>
        <input
          type="text"
          pattern="[A-Za-z\s\]{3}"
          placeholder="Fullname"
          required
          ref={InputRef}
          value={form?.FullName}
          onChange={(e) => setForm({ ...form, FullName: e.target.value })}
        />
        <input
          type="email"
          placeholder="E-mail"
          required
          value={form?.Email}
          onChange={(e) => setForm({ ...form, Email: e.target.value })}
        />
        <input
          type="tel"
          pattern="[0-9]{8}"
          placeholder="Phone Number"
          required
          value={form?.PhoneNumber}
          onChange={(e) => { if (e.target.value.length < 9) { (setForm({ ...form, PhoneNumber: e.target.value })); } }}
        />
        <div>
          <label htmlFor="male">
            <input
              type="radio"
              id="male"
              name="gender"
              required
              value="male"
              onChange={(e) => setForm({ ...form, Gender: e.target.value })}
            />
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              id="female"
              name="gender"
              required
              value="female"
              onChange={(e) => setForm({ ...form, Gender: e.target.value })}
            />
            Female
          </label>
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              required
              value="Is not a Robot"
              onChange={(e) => setForm({ ...form, humanOrRobot: e.target.value })}
            />
            I am not a robot
          </label>

        </div>
        <input type="submit" placeholder="Submit" id="submit" />

      </form>
      <div>
        {form?.FullName && (
        <span>
          { `Fullname: ${form?.FullName}`}
        </span>
        )}
        <br />
        {form.Email && (
        <span>
          { `Email: ${form?.Email}`}
        </span>
        )}
        <br />
        {form.PhoneNumber && (
        <span>
          {`Phone number: ${form?.PhoneNumber}`}
        </span>
        )}
        <br />
        {form.Gender && (
        <span>
          {`Gender: ${form?.Gender}`}
        </span>
        )}
        <br />

        <span>
          {form?.humanOrRobot}
        </span>
      </div>
      {formRef.current?.checkValidity() && notify()}
      <ToastContainer ref={toastRef} className="toast" />
    </div>
  );
};

export default App;
