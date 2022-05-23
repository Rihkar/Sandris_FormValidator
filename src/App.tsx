import { useEffect, useRef, useState } from 'react';
import './Styles/reset.scss';
import './App.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form, { FormType } from './modules/FormType';

const customId = 'custom-id-yes';

const App = () => {
  const [form, setForm] = useState<FormType>(Form);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const notify = () => {
    toast('Ready to Submit', {
      toastId: customId,
    });
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="container">
      <form action="" ref={formRef}>
        <input
          type="text"
          pattern="[A-Za-z\s\]{3}"
          placeholder="Fullname"
          required
          ref={inputRef}
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        />
        <input
          type="email"
          placeholder="E-mail"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="tel"
          pattern="[0-9]{8}"
          placeholder="Phone Number"
          required
          value={form.phoneNumber}
          onChange={(e) => {
            if (e.target.value.length < 9) {
              (setForm({ ...form, phoneNumber: e.target.value }));
            }
          }}
        />
        <div>
          <label htmlFor="male">
            <input
              type="radio"
              id="male"
              name="gender"
              required
              value="male"
              onChange={(e) => setForm({ ...form, gender: e.target.value })}
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
              onChange={(e) => setForm({ ...form, gender: e.target.value })}
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
        {form.fullName && (
        <span>
          { `Fullname: ${form.fullName}`}
        </span>
        )}
        <br />
        {form.email && (
        <span>
          { `Email: ${form.email}`}
        </span>
        )}
        <br />
        {form.phoneNumber && (
        <span>
          {`Phone number: ${form.phoneNumber}`}
        </span>
        )}
        <br />
        {form.gender && (
        <span>
          {`Gender: ${form.gender}`}
        </span>
        )}
        <br />
        <span>
          {form.humanOrRobot}
        </span>
      </div>
      {formRef.current && formRef.current.checkValidity() && notify()}
      <ToastContainer />
    </div>
  );
};

export default App;
